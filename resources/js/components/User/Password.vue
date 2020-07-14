<template>
    <div class="container">
        <div class="card my-5">
            <h5 class="card-header">تعیین رمز عبور</h5>
            <div class="card-body col-md-8 col-lg-6 mx-auto">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">رمز عبور</label>
                            <div class="col-sm-9">
                                <ValidationProvider tag="div" rules="required|min:8" v-slot="{ classes, errors }" vid="confirmation">
                                    <input type="password" v-model="user.password" class="form-control" :class="classes">
                                    <span class="v-invalid-feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">تکرار رمز عبور</label>
                            <div class="col-sm-9">
                                <ValidationProvider tag="div" rules="required|confirmed:confirmation" v-slot="{ classes, errors }">
                                    <input type="password" v-model="user.password_confirmation" class="form-control" :class="classes">
                                    <span class="v-invalid-feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-9 offset-sm-3">
                                <button type="submit" class="btn btn-primary" :disabled="form.spinner">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                      v-if="form.spinner"></span>
                                    {{ form.submitText }}
                                </button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    password: '',
                    password_confirmation: '',
                }
            }
        },
        methods: {
            onSubmit() {
                this.form.submitText = 'در حال بررسی ...';
                this.form.spinner = true;
                axios.post('/password/reset', this.user)
                    .then(response => {
                        if (response.data == "Password Changed") {
                            Swal.fire({
                                position: 'top-start',
                                type: 'success',
                                title: 'رمز عبور تغییر یافت',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            this.$router.push('/')
                        }
                        this.form.submitText = 'ورود';
                        this.form.spinner = false;
                    })
                    .catch(error => console.log(error));
            },
        }
    }
</script>