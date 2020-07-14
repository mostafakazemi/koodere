<template>
    <div class="vld-parent d-flex">
        <loading :active.sync="component.isLoading" :is-full-page="false" loader="bars" :opacity="1"/>

        <div class="mx-auto col-xs-12 col-lg-8">
            <div v-if="carts.length===0" class="text-off text-center">
                <div class="my-1"><i class="fal fa-shopping-basket fa-4x"/></div>
                <div class="my-1">
                    <b-icon icon="alert-circle-fill" font-scale="1.5"/>
                    سبد خرید خالی است.
                </div>
            </div>

            <div v-else>
                <h5 class="my-3 text-center">
                    <i class="fal fa-shopping-basket fa-lg"/>
                    سبد خرید
                </h5>

                <hr>

                <div class="table-responsive">
                    <fieldset v-for="(cart, index) in carts" class="mb-5">
                        <legend class="d-flex-between-center">
                            <hr class="inline-hr">
                            <small>{{ cart.business.name }}</small>
                            <hr class="inline-hr">
                        </legend>
                        <table class="table table-striped">
                            <tbody>
                            <tr v-for="ware in cart.wares">
                                <td>
                                    <div class="d-flex-between-center">
                                        <small>{{ ware.name }}</small>
                                        <small v-text="formatPrice(ware.price)+' تومان'"></small>
                                    </div>
                                    <div>
                                        <small class="text-muted font-70 pr-2">{{ ware.description }}</small>
                                    </div>
                                    <div class="d-flex-between-center mt-1 text-center">
                                        <b-icon class="clickable" icon="trash"
                                                variant="danger" font-scale="1.5"
                                                @click="removeFromCart(ware, cart.business)"/>
                                        <div>
                                            <b-icon class="border border-info rounded clickable" icon="plus"
                                                    variant="info" font-scale="1.5"
                                                    @click="addToCart(ware, cart.business)"/>
                                            <small class="cart-ware-count">{{ ware.count }}</small>
                                            <b-icon class="border border-info rounded clickable" icon="dash"
                                                    variant="info" font-scale="1.5"
                                                    @click="decreaseFromCart(ware, cart.business)"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="alert alert-info">
                            <div class="d-flex-between-center">
                                <small>جمع کالاها</small>
                                <hr class="inline-hr"/>
                                <small v-text="formatPrice(cartsInfo.carts[index].totalPrice)+' تومان'"></small>
                            </div>
                            <div class="d-flex-between-center">
                                <small>هزینه ارسال</small>
                                <hr class="inline-hr"/>
                                <small v-text="formatPrice(4000)+' تومان'"></small>
                            </div>
                            <div class="d-flex-between-center">
                                <small>جمع کل</small>
                                <hr class="inline-hr"/>
                                <small v-text="formatPrice(cartsInfo.carts[index].totalPrice + 4000)+' تومان'"></small>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-sm btn-primary">بررسی نهایی</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState(['carts']),
            ...mapGetters(['cartsInfo'])
        },
        methods: {
            addToCart(ware, business) {
                this.$store.dispatch({
                    type: 'addToCart',
                    ware, business
                })
            },
            decreaseFromCart(ware, business) {
                this.$store.dispatch({
                    type: 'decreaseFromCart',
                    ware, business
                })
            },
            removeFromCart(ware, business) {
                this.$store.dispatch({
                    type: 'removeFromCart',
                    ware, business
                })
            },
        },
        mounted() {
            this.component.isLoading = false
        }
    }
</script>
