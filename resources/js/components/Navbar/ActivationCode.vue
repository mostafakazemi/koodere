<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="modal-title" id="loginModalTitle">درخواست کد یکبار مصرف</h5>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="alert.show">
                        <strong>{{ alert.title }}</strong> {{ alert.body }}
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true" @click="alert.show=false">&times;</span>
                        </button>
                    </div>
                    <div class="mb-5">
                        <small class="text-muted">
                            کد ۴ رقمی یکبار مصرف به شماره همراه {{ user.mobile }} ارسال گردید. لطفا آن را در کادر پایین
                            وارد کنید.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="activationCode">کد ۴ رقمی</label>
                        <div class="input-group">
                            <ValidationProvider tag="div" class="input-group" name="activationCode" rules="required|digits:4"
                                                v-slot="{ classes, errors }">
                                <input type="tel" v-mask="['####','####']"
                                       v-model="user.activationCode" class="form-control auto-focus" :class="classes">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fal fa-sms fa-lg"></i></span>
                                </div>

                                <span class="v-invalid-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-block" :disabled="form.spinner">
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                          v-if="form.spinner"></span>
                        {{ form.submitText }}
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    

    export default {
        data() {
            return {
                user: {
                    activationCode: '',
                    mobile: `${this.$route.params.mobile}`
                }
            }
        },
        methods: {
            onSubmit() {
                this.form.submitText = 'در حال بررسی ...';
                this.form.spinner = true;
                axios.post('/login/checkActivationCode', this.user)
                    .then(response => {
                        if (response.data == "Invalid activationCode") {
                            console.log(response.data);
                        } else if (response.data == "Invalid Mobile") {
                            console.log(response.data);
                            this.alert.title = "اخطار!";
                            this.alert.body = "شماره همراه اشتباه است.";
                            this.alert.show = true;
                        } else if (response.data == "Incorrect activationCode") {
                            this.alert.title = "اخطار!";
                            this.alert.body = "کد تایید اشتباه است.";
                            this.alert.show = true;
                            console.log(response.data);
                        } else if (response.data == "Expired activationCode") {
                            console.log(response.data);
                            this.alert.title = "اخطار!";
                            this.alert.body = "زمان استفاده از این کد پایان یافته است. مجددا تلاش کنید.";
                            this.alert.show = true;
                        } else if (response.data.message == "True activationCode and Ask Password Set") {
                            this.$store.state.user = response.data.user;
                            this.$store.state.business = response.data.business;
                            this.$emit('hideloginmodal');
                            if (response.data.business)
                                this.$root.business = response.data.business;
                            const swalWithBootstrapButtons = Swal.mixin({
                                customClass: {
                                    confirmButton: 'btn btn-success mx-1',
                                    cancelButton: 'btn btn-secondary mx-1'
                                },
                                buttonsStyling: false,
                            })

                            swalWithBootstrapButtons.fire({
                                title: 'توجه!',
                                text: "مایلید رمز عبور تعیین کنید؟",
                                type: 'question',
                                showCancelButton: true,
                                confirmButtonText: 'بله',
                                cancelButtonText: 'خیر',
                                reverseButtons: false
                            }).then((result) => {
                                if (result.value) {
                                    this.$router.push('/password');
                                } else {
                                    this.$router.push('/');
                                }
                            })

                        } else if (response.data.message == "True activationCode") {
                            this.$store.state.user = response.data.user;
                            this.$store.state.business = response.data.business;
                            this.$emit('hideloginmodal');
                            this.$router.push('/');
                        }
                        this.form.submitText = 'ارسال';
                        this.form.spinner = false;
                    })
                    .catch(error => console.log(error));
            }
        }
    }
</script>
