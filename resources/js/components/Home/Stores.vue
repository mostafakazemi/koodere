<template>
    <div>
        <div class="container">
            <div class="card-wrap">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 p-2" v-for="store in stores">
                    <router-link tag="div" :to="'../store/'+store.id" class="store media border shadow-target rounded-1">
                        <div class="position-relative">
                            <img :src="`../${store.logo_url}`" alt="" v-if="store.logo_url" class="store-logo">
                            <img src="https://via.placeholder.com/100" alt="" v-else class="store-logo">
                            <div class="image-shadow"/>
                        </div>
                        <div class="media-body mx-2">
                            <div class="part1">
                                <div class="my-1 overflow-hidden">{{ store.name }}</div>
                                <small class="text-muted overflow-hidden">{{ store.description }}</small>
                            </div>
                            <div class="d-flex py-1 border-top">
                                <span class="badge badge-secondary mr-auto">{{ store.job.name }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <infinite-loading @infinite="infiniteHandler"/>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                stores: [],
                page: 1,
            }
        },
        methods: {
            infiniteHandler($state) {
                axios.get('/fetch-stores', {
                    params: {
                        page: this.page++,
                    },
                }).then(response => {
                    this.stores = this.stores.concat(response.data.data);
                    if (response.data.current_page === response.data.last_page)
                        $state.complete()
                    else
                        $state.loaded();
                });
            },
        },
    }
</script>
