<template>
    <div class="vld-parent">
        <loading :active.sync="component.isLoading" :is-full-page="false" loader="bars" :opacity="1"/>

        <div v-if="!business.active" class="alert alert-danger" role="alert">
            <b-icon icon="alert-octagon-fill" font-scale="2"/>
            صفحه وجود ندارد.
        </div>

        <div v-else-if="wares.length">
            <div class="mb-2">
                <h3>
                    <img :src="`../../${business.logo_url}`" alt="" width="80px" class="rounded-1" v-if="business.logo_url">
                    <img src="https://via.placeholder.com/80" alt="" class="rounded-1" v-else>
                    {{ business.name }}
                </h3>
            </div>

            <div class="top-selector bg-light">
                <div class="d-flex w-100">
                    <button class="btn btn-outline-light text-dark scroll-right"><i class="far fa-chevron-right"/>
                    </button>
                    <div class="top-selector-container flex-grow-1" v-scroll-spy-active v-scroll-spy-link>
                        <a v-for="category in business.categories" v-if="category.wares.length"
                           class="col-6 col-sm-4 col-md-4 col-lg-2 px-1 nav-link">{{ category.name }}
                        </a>
                    </div>
                    <button class="btn btn-outline-light text-dark scroll-left"><i class="far fa-chevron-left"/>
                    </button>
                </div>
            </div>

            <div class="my-5" v-scroll-spy>
                <fieldset v-for="category in business.categories" v-if="category.wares.length"
                          :id="'category'+category.id" class="my-5">
                    <legend class="d-flex-between-center">
                        <hr class="inline-hr">
                        <span>{{ category.name }}</span>
                        <hr class="inline-hr">
                    </legend>

                    <div class="card-wrap">
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="ware in category.wares">
                            <div class="card">
                                <div class="card-img-top position-relative">
                                    <img :src="'../'+ware.image_url" class="card-img-top" alt="thumbnail"
                                         v-if="ware.image_url!=null">

                                    <img src="https://via.placeholder.com/200" class="card-img-top" alt="thumbnail"
                                         v-if="ware.image_url==null">

                                    <div class="image-shadow"></div>
                                </div>

                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="text-truncate">{{ ware.name }}</div>
                                        <small class="text-muted">{{ ware.description }}</small>
                                    </div>
                                </div>

                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <span v-text="formatPrice(ware.price)+' تومان'"></span>
                                    <b-icon icon="plus" class="border border-secondary rounded clickable"
                                            font-scale="1.5" @click="addToCart(ware, business)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

        <div v-else>
            <div class="mb-2">
                <h3>
                    <img :src="`../../${business.logo_url}`" alt="" width="80px" class="rounded-1" v-if="business.logo_url">
                    <img src="https://via.placeholder.com/80" alt="" class="rounded-1" v-else>
                    {{ business.name }}
                </h3>
            </div>

            <div class="alert alert-warning" role="alert">
                <b-icon icon="alert-square" font-scale="2"/>
                کالایی در این فروشگاه موجود نیست.
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                id: parseInt(this.$route.params.business),
                business: {},
                wares: [],
            }
        },
        computed: {
            ...mapState(['carts'])
        },
        mounted() {
            axios({
                method: 'get',
                url: '../fetch-store/' + this.id
            })
                .then((response) => {
                    if (response.data.message === 'Store found') {
                        this.business = response.data.business
                        let arr = this.business.categories.map(category => category.wares)
                        arr.forEach((wares) => this.wares = this.wares.concat(wares))
                    }
                    this.component.isLoading = false
                })
        },
        methods: {
            addToCart(ware, business) {
                this.$store.dispatch({
                    type: 'addToCart',
                    ware, business
                })
            },
        },
    }
</script>
