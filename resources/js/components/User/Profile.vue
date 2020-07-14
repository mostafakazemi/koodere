<template>
    <div class="container" v-if="user">
        <div class="card my-5">
            <h5 class="card-header">ویرایش اطلاعات شخصی</h5>
            <div class="card-body col-md-8 col-lg-6 mx-auto">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(onSubmit)">
                        <div class="form-group row">
                            <label for="name" class="col-sm-3 col-form-label">نام</label>
                            <div class="col-sm-9">
                                <input name="name" type="text" dir="auto" id="name" class="form-control"
                                       v-model="name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">ایمیل</label>
                            <div class="col-sm-9">
                                <ValidationProvider tag="div" name="email" rules="email" v-slot="{ classes, errors }">
                                    <input type="email" v-model="email" class="form-control" :class="classes">
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
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                name: '',
                email: '',
            }
        },
        computed: {
            ...mapState([
                'user',
            ]),
        },
        mounted() {
            this.name = this.user.name;
            this.email = this.user.email

        },
        methods: {
            onSubmit() {
                this.form.submitText = 'در حال بررسی ...';
                this.form.spinner = true;
                axios({
                    url: '/profile',
                    method: 'post',
                    data: {
                        name: this.name,
                        email: this.email,
                    }
                })
                    .then(response => {
                        if (response.data === "Profile updated") {
                            this.user.name = this.name;
                            this.user.email = this.email;
                            Swal.fire({
                                position: 'top-start',
                                type: 'success',
                                title: 'اطلاعات شخصی بروز شد',
                                showConfirmButton: false,
                                timer: 2000
                            });
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
