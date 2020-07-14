<template>
    <div>
        <div class="container">
            <div class="card-wrap">
                <div class="col-6 col-md-4 col-lg-3 col-xl-2" v-for="ware in wares">
                    <div class="card shadow-target">
                        <div class="card-img-top position-relative">
                            <img :src="'../'+ware.image_url" class="card-img-top" alt="thumbnail"
                                 v-if="ware.image_url!=null">

                            <img src="https://via.placeholder.com/200" class="card-img-top" alt="thumbnail"
                                 v-if="ware.image_url==null">

                            <div class="image-shadow"/>
                        </div>

                        <div class="card-body">
                            <div class="card-text d-flex justify-content-between align-items-center mb-3">
                                <small class="text-truncate ml-1">{{ ware.name }}</small>
                                <div class="price" v-text="formatPrice(ware.price)+' تومان'"></div>
                            </div>

                            <router-link :to="'store/'+ware.category.business.id" tag="button"
                                         class="btn btn-outline-secondary btn-sm btn-block">
                                {{ ware.category.business.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <infinite-loading @infinite="infiniteHandler"></infinite-loading>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                wares: [],
                page: 1,
            }
        },
        methods: {
            infiniteHandler($state) {
                axios.get('/fetch-fresh', {
                    params: {
                        page: this.page++,
                    },
                }).then(response => {
                    this.wares = this.wares.concat(response.data.data);
                    if (response.data.current_page === response.data.last_page)
                        $state.complete()
                    else
                        $state.loaded();
                });
            },
        },
    }
</script>
