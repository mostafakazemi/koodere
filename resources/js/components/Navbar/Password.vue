<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="modal-title" id="loginModalTitle">درخواست رمز عبور</h5>
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
                            رمز عبور شماره همراه {{ user.mobile }} را وارد کنید.
                        </small>
                    </div>
                    <div class="form-group">
                        <label>رمز عبور</label>
                        <ValidationProvider tag="div" class="input-group" name="password" rules="required|min:8"
                                            v-slot="{ classes, errors }">
                            <input type="password" v-model="user.password" class="form-control auto-focus"
                                   :class="classes">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="far fa-key-skeleton fa-lg"/></span>
                            </div>

                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="flex-grow-1 mx-1">
                        <button type="submit" class="btn btn-primary btn-block" :disabled="form.spinner">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                              v-if="form.spinner"/>
                            {{ form.submitText }}
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary btn-block" :disabled="form.spinner"
                                @click="SendActivationCode">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                              v-if="form.spinner"/>
                            {{ form.secondaryButtonText }}
                        </button>
                    </div>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    secondaryButtonText: 'ورود با کد تایید',
                },
                user: {
                    password: '',
                    mobile: `${this.$route.params.mobile}`
                }
            }
        },
        methods: {
            onSubmit() {
                this.form.submitText = 'در حال بررسی ...';
                this.form.spinner = true;
                axios.post('/login/checkPassword', this.user)
                    .then(response => {
                        if (response.data === "Invalid password") {
                            console.log(response.data);
                        } else if (response.data === "Invalid Mobile") {
                            console.log(response.data);
                            this.alert.title = "اخطار!";
                            this.alert.body = "شماره همراه اشتباه است.";
                            this.alert.show = true;
                        } else if (response.data.message === "True password") {
                            this.$store.state.user = response.data.user;
                            this.$emit('hideloginmodal');
                            this.$router.push('/');
                        } else if (response.data === "Incorrect password") {
                            console.log(response.data);
                            this.alert.title = "اخطار!";
                            this.alert.body = "رمز عبور اشتباه است.";
                            this.alert.show = true;
                        }
                        this.form.submitText = 'ورود';
                        this.form.spinner = false;
                    })
                    .catch(error => console.log(error));
            },
            SendActivationCode() {
                this.secondaryButtonText = 'در حال انتقال ...';
                this.form.spinner = true;
                axios.post('/login/sendActivationCode', this.user)
                    .then(response => {
                        if (response.data === "Invalid Parameters") {
                            console.log(response.data);
                        } else if (response.data === "Invalid Mobile") {
                            console.log(response.data);
                        } else if (response.data === "activationCode Sent") {
                            console.log(response.data);
                            this.$router.push(`/login/${this.user.mobile}`);
                        }
                        this.secondaryButtonText = 'ورود با کد تایید';
                        this.form.spinner = false;
                    })
                    .catch(error => console.log(error));
            }
        }
    }
</script>
