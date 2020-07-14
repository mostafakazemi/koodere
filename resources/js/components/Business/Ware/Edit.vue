<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(updateWare)">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>نام</label>
                        <ValidationProvider tag="div" name="name" rules="required" v-slot="{ classes, errors }">
                            <input type="text" class="form-control auto-focus" dir="auto" :class="classes"
                                   placeholder="نام کالا"
                                   v-model="cmp.name" id="name">
                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>توضیحات تکمیلی</label>
                        <textarea name="description" class="form-control" rows="2" v-model="cmp.description"/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="category">دسته</label>
                        <ValidationProvider tag="div" name="category" v-slot="{ classes, errors }">
                            <input type="text" id="category" ref="category" class="form-control" dir="auto"
                                   :class="classes" placeholder="دسته کالا را انتخاب و یا وارد کنید"
                                   v-model="cmp.category">
                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>قیمت (تومان)</label>
                        <ValidationProvider tag="div" name="price" rules="required|currency_min:500"
                                            v-slot="{ classes, errors }">
                            <money v-model="cmp.price" v-bind="money" class="form-control" :class="classes"
                                   autocomplete="off" maxlength="11"/>
                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>کد</label>
                        <ValidationProvider tag="div" name="code" :rules="codeRules" v-slot="{ classes, errors }">
                            <input type="text" class="form-control" dir="auto" :class="classes" placeholder="کد کالا"
                                   v-model="cmp.code">
                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <div>
                            <croppa v-model="croppa"
                                    accept="image/*"
                                    placeholder="انتخاب عکس"
                                    :placeholder-font-size="0"
                                    :width="300"
                                    :height="300"
                                    :show-loading="true"
                                    :loading-size="100"
                                    :loading-color="`#606060`"
                                    :prevent-white-space="true"
                                    :zoom-speed="12"
                                    initial-size="contain"
                                    @draw="onDraw"
                                    :input-attrs="{capture: true, class: 'file-input'}"
                                    :initial-image="cmp.initialImage"
                                    @image-remove="handleImageRemove"
                            >
                            </croppa>
                        </div>

                        <div class="d-flex">
                            <div class="btn-group mx-auto" role="group">
                                <button type="button" class="btn btn-outline-info" @click="croppa.rotate()">
                                    <b-icon icon="arrow-clockwise" rotate="90" font-scale="1.5"/>
                                </button>
                                <button type="button" class="btn btn-outline-info" @click="croppa.rotate(-1)">
                                    <b-icon icon="arrow-counterclockwise" rotate="270" font-scale="1.5"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <input type="hidden" name="photo" v-model="cmp.image_url">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary" :disabled="form.spinner">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                              v-if="form.spinner"/>
                            ثبت
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
                categories: this.$store.state.user.business.categories,
                categoryId: parseInt(this.$route.params.category),
                wareId: parseInt(this.$route.params.ware),

                cmp: {
                    name: '',
                    description: '',
                    category: '',
                    code: '',
                    price: '',
                    image_url: '',
                },
                croppa: {},
                noSticker: false,
                hasImage: false,
                changeImage: false
            }
        },
        beforeMount() {
            this.cmp = Object.assign({}, this.ware)
            this.cmp.category = this.category.name
            if (this.ware.image_url != null) {
                this.hasImage = true
                this.cmp.initialImage = '../../' + this.ware.image_url.replace('thumbnails/thumbnail_', '')
            }
        },
        mounted() {
            $("#category").autocomplete({
                source: this.categories.map(category => category.name),
                minLength: 0
            }).focus(function () {
                $(this).data("uiAutocomplete").search($(this).val());
            });

            $(this.$refs.category).on("autocompleteselect", (event, ui) => {
                this.cmp.category = ui.item.value;
            });
        },
        computed: {
            categoryIndex() {
                return this.categories.findIndex(category => category.id === this.categoryId)
            },
            category() {
                return this.categories[this.categoryIndex]
            },
            ware() {
                return this.categories[this.categoryIndex].wares.find(ware => ware.id === this.wareId)
            },
            wares() {
                let arr = this.categories.map(category => category.wares)
                let concated = [];
                arr.forEach(function (item) {
                    concated = concated.concat(item);
                })
                return concated;
            },
            codes() {
                return this.wares.filter(ware => ware.code != null && ware.code !== this.ware.code).map(ware => ware.code)
            },
            codeRules() {
                return 'excluded:' + this.codes
            },
            categoryName() {
                return this.cmp.category === '' ? 'بدون دسته' : this.cmp.category
            },
        },
        methods: {
            handleImageRemove() {
                this.cmp.image_url = null
            },
            onDraw(ctx) {
                this.$root.onDraw(ctx)

                if (!this.hasImage)
                    this.changeImage = true

                this.hasImage = false
            },
            updateWare() {
                this.form.spinner = true;
                if (this.changeImage)
                    this.cmp.image_url = this.croppa.generateDataUrl('image/jpeg', 0.8)
                axios({
                    method: "post",
                    url: '../ware/' + this.wareId,
                    timeout: axios_time_out,
                    data: {
                        _method: "patch",
                        cmp: this.cmp,
                    },
                })
                    .then(response => {
                        if (response.data.message === "Ware updated") {
                            let category = response.data.category
                            let index = this.categories.map(category => category.id).indexOf(category.id)
                            if (index > -1) {
                                this.categories[index].wares = category.wares
                            } else {
                                let index = this.categories.map(category => category.pinned).indexOf(0)
                                if (index < 0)
                                    index = this.categories.length
                                this.categories.splice(index, 0, category)
                            }

                            if (category.id !== this.categoryId) {
                                let wareIndex = this.category.wares.findIndex(ware => ware.id === this.wareId);
                                this.categories[this.categoryIndex].wares.splice(wareIndex, 1);
                            }
                            Swal.fire({
                                position: 'top-start',
                                type: 'success',
                                title: 'کالا بروز شد',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            this.$router.push({name: 'wares'})
                        } else
                            Swal.fire({
                                type: 'error',
                                title: 'خطا!',
                                text: 'مشکلی در ارسال اطلاعات بوجود آمده',
                                confirmButtonTex: 'خب',
                                footer: '<span>مقادیر ورودی را کنترل کنید.</span>',
                            })
                        this.form.submitText = 'ثبت';
                        this.form.spinner = false;
                    })
                    .catch(error => {
                        Swal.fire({
                            type: 'error',
                            title: 'خطا!',
                            text: 'مشکلی در ارسال اطلاعات بوجود آمده',
                            confirmButtonTex: 'خب',
                            footer: '<span>مقادیر ورودی را کنترل کنید.</span>',
                        })
                        this.form.submitText = 'ثبت';
                        this.form.spinner = false;
                    });
            },
        },
    }
</script>
