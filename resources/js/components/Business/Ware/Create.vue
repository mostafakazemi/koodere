<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(addWare)">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>نام</label>
                        <ValidationProvider tag="div" name="name" rules="required"
                                            v-slot="{ classes, errors }">
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
                cmp: {
                    name: '',
                    description: '',
                    category: '',
                    code: '',
                    price: '',
                    image_url: '',
                },
                tmp: {},
                croppa: {},
                noSticker: false,
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
            wares() {
                let arr = this.categories.map(category => category.wares)
                let concated = [];
                arr.forEach(function (item) {
                    concated = concated.concat(item);
                })
                return concated;
            },
            codes() {
                return this.wares.filter(ware => ware.code != null).map(ware => ware.code)
            },
            codeRules() {
                return 'excluded:' + this.codes
            },
            categoryName() {
                return this.cmp.category === '' ? 'بدون دسته' : this.cmp.category
            }
        },
        methods: {
            addWare() {
                this.form.spinner = true;
                this.cmp.image_url = this.croppa.generateDataUrl('image/jpeg', 0.8);
                axios.post('ware', this.cmp)
                    .then(response => {
                        if (response.data.message === "New ware stored") {
                            let category = response.data.category
                            let ware = response.data.ware
                            let index = this.categories.map(category => category.name).indexOf(this.categoryName)
                            if (index > -1) {
                                let wareIndex = 0
                                wareIndex = this.categories[index].wares.map(ware => ware.pinned).indexOf(0)
                                this.categories[index].wares.splice(wareIndex, 0, ware)
                            } else {
                                category.wares = []
                                category.wares.unshift(ware)
                                let index = this.categories.map(category => category.pinned).indexOf(0)
                                if (index < 0)
                                    index = this.categories.length
                                this.categories.splice(index, 0, category)
                            }
                            Swal.fire({
                                position: 'top-start',
                                type: 'success',
                                title: 'کالای جدید ثبت شد',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            this.$root.componentKey++
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
