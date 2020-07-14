<template>
    <div v-if="wares.length">
        <div class="top-selector bg-light">
            <div class="d-flex w-100">
                <button class="btn btn-outline-light text-dark scroll-right"><i class="far fa-chevron-right"/>
                </button>
                <div class="top-selector-container flex-grow-1" v-scroll-spy-active v-scroll-spy-link>
                    <a v-for="category in categories" v-if="category.wares.length"
                       class="col-6 col-sm-4 col-md-4 col-lg-2 px-1 nav-link">{{ category.name }}
                    </a>
                </div>
                <button class="btn btn-outline-light text-dark scroll-left"><i class="far fa-chevron-left"/></button>
            </div>
        </div>

        <div class="my-5" v-scroll-spy>
            <fieldset v-for="(category, categoryIndex) in categories" v-if="category.wares.length"
                      :id="'category'+category.id" class="my-5">
                <legend class="d-flex-between-center">
                    <hr class="inline-hr">
                    <span>{{ category.name }}</span>
                    <hr class="inline-hr">
                </legend>
                <draggable class="card-wrap row" v-model="category.wares" tag="div" @change="sort($event, category)"
                           v-bind="{animation:150, handle:'.handle'}">

                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="(ware, wareIndex) in category.wares"
                         :key="ware.id">
                        <div class="card">
                            <div class="position-relative">
                                <img :src="'../'+ware.image_url" class="card-img-top" alt="thumbnail"
                                     v-if="ware.image_url!=null">
                                <div class="card-img-top d-flex justify-content-center bg-light" v-else
                                     style="height: 252.6px">
                                    <i class="fal fa-camera-retro fa-4x text-secondary my-auto"/>
                                </div>
                                <p class="card-text card-text-floating-top">{{ ware.name }}</p>
                            </div>
                            <div class="card-footer btn-group btn-group-sm">
                                <router-link
                                    :to="'edit-ware/'+category.id+'&'+ware.id"
                                    tag="button" class="btn btn-outline-info" title="ویرایش">
                                    <b-icon icon="pencil" font-scale="1.4"/>
                                </router-link>
                                <button type="button" class="btn" title="پنهان کردن"
                                        @click="changeWareShow(ware)"
                                        :class="ware.show?'btn-outline-primary':'btn-outline-secondary'">
                                    <b-iconstack font-scale="1.4">
                                        <b-icon stacked icon="eye" scale="1"/>
                                        <b-icon stacked icon="circle-slash" scale="1.2" v-if="!ware.show"/>
                                    </b-iconstack>
                                </button>
                                <button type="button" class="btn btn-outline-danger" title="حذف"
                                        data-toggle="modal" data-target="#ware_delete_modal"
                                        @click="setWare(ware, wareIndex, categoryIndex)">
                                    <b-icon icon="trash" font-scale="1.4"/>
                                </button>
                                <button type="button" class="btn btn-outline-info" title="صدرنشین"
                                        @click="pinWare(ware)">
                                    <b-iconstack font-scale="1.4">
                                        <b-icon stacked icon="arrow-up-short" scale="1"/>
                                        <b-icon stacked icon="circle-slash" scale="1.2" v-if="!ware.pinned"/>
                                    </b-iconstack>
                                </button>
                                <button type="button" class="btn btn-outline-info handle" title="جابجایی">
                                    <b-icon icon="arrow-up-down" font-scale="1.4"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </draggable>
            </fieldset>
        </div>

        <div class="modal fade" id="ware_delete_modal" tabindex="-1" role="dialog"
             aria-labelledby="ware_delete_modalTitle"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form @submit.prevent="handleSubmit(deleteWare)">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h5 class="modal-title">حذف کالا</h5>
                            </div>
                            <div class="modal-body">
                                "{{ ware.name }}" حذف شود؟
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                        :disabled="form.spinner">
                                    انصراف
                                </button>
                                <button type="submit" class="btn btn-danger auto-focus" :disabled="form.spinner">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                          v-if="form.spinner"/>
                                    حذف
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>

    <div class="alert alert-warning" role="alert" v-else>
        <p>هیچ کالایی ثبت نکرده‌اید!</p>
        <hr>
        <p class="mb-0">
            <router-link to="new-ware" class="btn btn-lg btn-warning">ثبت کالا</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: this.$store.state.user.business.categories,
                ware: {
                    id: '',
                    categoryId: '',
                    name: '',
                    categoryIndex: '',
                    wareIndex: '',
                },
            }
        },
        computed: {
            wares() {
                let arr = this.categories.map(category => category.wares)
                let concated = [];
                arr.forEach((wares) => {
                    concated = concated.concat(wares);
                })
                return concated;
            },
        },
        methods: {
            changeWareShow(ware) {
                ware.show = !ware.show

                if (window.cancel !== undefined)
                    window.cancel();
                axios({
                    method: "post",
                    url: 'ware/show',
                    timeout: axios_time_out,
                    data: {
                        'ware_id': ware.id,
                        'category_id': ware.category_id,
                        show: ware.show,
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
            },
            setWare(ware, wareIndex, categoryIndex) {
                this.ware.id = ware.id
                this.ware.name = ware.name
                this.ware.categoryId = ware.category_id
                this.ware.categoryIndex = categoryIndex
                this.ware.wareIndex = wareIndex
            },
            deleteWare() {
                this.form.spinner = true
                axios({
                    method: "delete",
                    url: 'ware/' + this.ware.id,
                    timeout: axios_time_out,
                }).then(response => {
                    if (response.data === "Ware deleted") {
                        this.categories[this.ware.categoryIndex].wares.splice(this.ware.wareIndex, 1)
                    }
                    this.form.spinner = false
                    $("#ware_delete_modal").modal('hide')
                });
            },
            pinWare(ware) {
                ware.pinned = !ware.pinned
                let category = this.categories.filter(category => category.id === ware.category_id)[0]
                category.wares.sort((a, b) => this.compare(b.pinned, a.pinned, a.priority, b.priority, b.created_at, a.created_at))

                if (window.cancel !== undefined)
                    window.cancel();
                axios({
                    method: "post",
                    url: 'ware/pin',
                    timeout: axios_time_out,
                    data: {
                        'ware_id': ware.id,
                        'category_id': ware.category_id,
                        'pinned': ware.pinned,
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
            },
            sort(evt, category) {
                let ware = evt.moved.element
                let newIndex = evt.moved.newIndex

                if ((ware.pinned && newIndex > 0 && !category.wares[newIndex - 1].pinned) ||
                    (!ware.pinned && newIndex + 1 < category.wares.length && category.wares[newIndex + 1].pinned))
                    ware.pinned = !ware.pinned;

                category.wares.forEach((ware, index) => ware.priority = index + 10)

                if (window.cancel !== undefined)
                    window.cancel();

                axios({
                    method: "post",
                    url: '/business/ware/priority',
                    timeout: axios_time_out,
                    data: {
                        category_id: category.id,
                        wares: {
                            id: category.wares.map(ware => ware.id),
                            priority: category.wares.map(ware => ware.priority),
                            pinned: category.wares.map(ware => ware.pinned),
                        },
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
            },
        }
    }
</script>
