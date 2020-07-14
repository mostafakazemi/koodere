<template @logout="logout">
    <div>
        <header class="w-100">
            <nav class="navbar navbar-expand navbar-dark bg-dark mx-auto" id="topNavbar">
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        class="navbar-toggler d-block" data-target="#navbarSupportedContent"
                        data-toggle="collapse2"
                        type="button">
                    <span class="navbar-toggler-icon"/>
                </button>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-if="user.type">
                            <div class="btn-group">
                                <button type="button"
                                        class="btn btn-sm btn-outline-light rounded-pill px-3 dropdown-toggle"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ $store.getters.username }}
                                </button>
                                <div class="dropdown-menu">
                                    <router-link class="dropdown-item" to="/business/panel"
                                                 v-if="user.type==='business'">
                                        <i class="fal fa-user-tie fa-lg"/>
                                        {{ user.business.name }}
                                    </router-link>
                                    <div class="dropdown-divider" v-if="user.type==='business'"></div>
                                    <router-link to="/profile" class="dropdown-item">
                                        <i class="fal fa-id-card fa-lg"/>
                                        ویرایش اطلاعات شخصی
                                    </router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link to="/password" class="dropdown-item">
                                        <i class="fal fa-key fa-lg"/>
                                        رمز عبور
                                    </router-link>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item cursor-pointer" @click="logout">
                                        <i class="fal fa-sign-out-alt fa-lg"/>
                                        خروج
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item" v-else>
                            <router-link to="/login" tag="button" data-toggle="modal" data-target="#loginModal"
                                         class="btn btn-sm btn-outline-light rounded-pill px-3">
                                <i class="fas fa-user"/> ورود
                            </router-link>
                        </li>

                        <li class="nav-item mx-3" v-show="cartsInfo.waresCount">
                            <router-link tag="button" to="/cart" class="btn btn-sm btn-outline-light rounded-pill">
                                <span class="badge badge-pill badge-danger">{{ cartsInfo.waresCount }}</span>
                                <i class="fal fa-shopping-basket fa-lg"/>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <router-link to="/" class="navbar-brand d-none d-sm-block" href="/">
                    کودیره
                    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30"
                         class="d-inline-block align-top" alt="">
                </router-link>
            </nav>
        </header>

        <!--Modal -->
        <div class="modal fade" id="loginModal" ref="loginModal" tabindex="-1" role="dialog"
             aria-labelledby="loginModalTitle" aria-hidden="true" data-target v-if="!user.type">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <transition name="fade" mode="out-in">
                        <router-view name="modal" @showloginmodal="showLoginModal" @hideloginmodal="hideLoginModal"/>
                    </transition>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            user() {
                return this.$store.state.user
            },
            ...mapGetters(['cartsInfo']),
            hasCart() {
                return this.carts.nfo
            }
        },
        mounted() {
            $(this.$refs.loginModal).on("hidden.bs.modal", () => {
                if (this.$router.currentRoute.path === '/login')
                    this.goBack()
            })

        },
        methods: {
            showLoginModal() {
                $("#loginModal").modal('show');
            },
            hideLoginModal() {
                $("#loginModal").modal('hide');
            },
            logout() {
                Swal.fire({
                    type: 'info',
                    html:
                        'در حال خروج از سایت ' +
                        '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/>',
                    showConfirmButton: false,
                });

                axios.get('/logout')
                    .then(() => {
                        this.$store.state.user = {};
                        axios.get('/refresh-csrf').then(response => this.$root.csrfToken = response.data);
                        if (window.location.pathname !== '/')
                            this.$router.push('/');
                        Swal.close()
                    });
            },
        },
    };
</script>
