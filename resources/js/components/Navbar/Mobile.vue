<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="modal-title" id="loginModalTitle">ورود</h5>
                </div>
                <div class="modal-body">
                    <div class="mb-5">
                        <small class="text-muted">
                            برای ورود یا عضویت شماره همراه خود را وارد کنید.
                        </small>
                    </div>
                    <div class="form-group">
                        <label>شماره همراه</label>
                        <ValidationProvider tag="div" class="input-group" name="mobile" rules="required|phone"
                                            v-slot="{ classes, errors }">
                            <input type="tel" v-mask="['09## - ### - ####','09## - ### - ####']"
                                   v-model="user.mobile" class="form-control auto-focus" :class="classes">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="far fa-mobile-alt fa-lg"></i></span>
                            </div>

                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
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
                    mobile: ''
                },
                form: {
                    submitText: 'ورود'
                },
            }
        },
        mounted() {
            this.$emit('showloginmodal');
        },
        computed: {
            mobile() {
                return this.user.mobile.replace(/ - /g, '');
            }
        },
        methods: {
            onSubmit() {
                this.form.submitText = 'در حال ورود ...';
                this.form.spinner = true;
                axios.post('/login', this.user)
                    .then(response => {
                        if (response.data === "User Created" || response.data === "Has not Password")
                            this.$router.push(`/login/${this.mobile}`);

                        else if (response.data === "Has Password")
                            this.$router.push(`/password/${this.mobile}`);

                        else if (response.data === "Invalid Parameters")
                            console.log(response.data);

                        this.form.submitText = 'ورود';
                        this.form.spinner = false;
                    })
                    .catch(error => console.log(error))
            },
        },
    }
</script>
