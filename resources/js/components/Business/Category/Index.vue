<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit, reset }">
            <form @submit.prevent="handleSubmit(addCategory)" @reset.prevent="reset" @focusout="reset"
                  id="new_category_form">
                <div class="form-group">
                    <label>نام</label>
                    <ValidationProvider tag="div" name="new_category" :rules="new_category_rules"
                                        v-slot="{ classes, errors }">
                        <div class="form-inline">
                            <input type="text" v-model="new_category" :class="classes" class="form-control mb-2 ml-sm-2"
                                   placeholder="نام دسته جدید" autocomplete="off">

                            <button type="submit" class="btn btn-primary mb-2" :disabled="form.spinner">
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                  v-if="form.spinner"/>
                                ثبت
                            </button>
                        </div>
                        <span class="v-invalid-feedback">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
            </form>
        </ValidationObserver>

        <hr class="my-3">

        <transition name="fade">
            <div v-if="categories.length">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">نام دسته</th>
                            <th scope="col">عملیات</th>
                        </tr>
                        </thead>
                        <draggable v-model="categories" tag="tbody" v-bind="{animation:150, handle:'.handle'}"
                                   @change="sort">
                            <tr v-for="category in categories" :key="category.id">
                                <td>{{ category.name }}</td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-outline-info" title="ویرایش"
                                                data-toggle="modal" data-target="#category_rename_modal"
                                                @click="setNameCategory(category.id)">
                                            <b-icon icon="pencil" font-scale="1.4"/>
                                        </button>
                                        <button type="button" class="btn btn-outline-danger" title="حذف"
                                                data-toggle="modal"
                                                data-target="#category_delete_modal" v-if="showDeleteButton"
                                                @click="setNameCategory(category.id)">
                                            <b-icon icon="trash" font-scale="1.4"/>
                                        </button>
                                        <button type="button" class="btn btn-outline-info" title="صدرنشین"
                                                @click="pinCategory(category)">
                                            <b-iconstack font-scale="1.4">
                                                <b-icon stacked icon="arrow-up-short" scale="1"/>
                                                <b-icon stacked icon="circle-slash" scale="1.2"
                                                        v-if="!category.pinned"/>
                                            </b-iconstack>
                                        </button>
                                        <button type="button" class="btn btn-outline-info handle" title="جابجایی">
                                            <b-icon icon="arrow-up-down" font-scale="1.4"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </draggable>
                    </table>
                </div>
                <div class="modal fade" id="category_rename_modal" tabindex="-1" role="dialog"
                     aria-labelledby="category_rename_modalTitle"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <ValidationObserver v-slot="{ handleSubmit, reset }">
                                <form @submit.prevent="handleSubmit(renameCategory)" @reset.prevent="reset"
                                      id="rename_category_form">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h5 class="modal-title">تغییر نام دسته</h5>
                                    </div>
                                    <div class="modal-body">
                                        <ValidationProvider tag="div" name="new_name" :rules="rename_category_rules"
                                                            v-slot="{ classes, errors }" class="form-group">
                                            <input type="text" v-model="new_name" :class="classes"
                                                   placeholder="نام دسته"
                                                   class="form-control auto-focus">
                                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                                :disabled="form.spinner">
                                            انصراف
                                            <span class="spinner-grow spinner-grow-sm d-none" role="status"
                                                  aria-hidden="true"/>
                                        </button>
                                        <button type="submit" class="btn btn-primary" :disabled="form.spinner">
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                          v-if="form.spinner"/>
                                            ذخیره تغییرات
                                        </button>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="category_delete_modal" tabindex="-1" role="dialog"
                     aria-labelledby="category_delete_modalTitle"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(deleteCategory)">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h5 class="modal-title">حذف دسته</h5>
                                    </div>
                                    <div class="modal-body">
                                        دسته "{{ new_name }}" حذف شود؟
                                        <p class="alert alert-warning mt-3 form-inline">
                                            کالاهای عضو به کدام دسته انتقال یابند؟
                                            <select class="mx-2 custom-select" v-model="destination_category"
                                                    id="destination_category">
                                                <option v-if="showUncategorized" value="بدون دسته">بدون دسته
                                                </option>
                                                <option v-for="category in categoriesRename" :value="category">
                                                    {{ category }}
                                                </option>
                                            </select>
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                                :disabled="form.spinner">
                                            انصراف
                                        </button>
                                        <button type="submit" class="btn btn-danger auto-focus"
                                                :disabled="form.spinner">
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
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: this.$store.state.user.business.categories,
                new_category: '',
                new_name: '',
                index: '',
                destination_category: '',
            }
        },
        computed: {
            new_category_rules() {
                return 'required|excluded:' + this.categoriesName
            },
            rename_category_rules() {
                return 'required|excluded:' + this.categoriesRename
            },
            categoriesName() {
                return this.categories.map(x => x.name)
            },
            categoriesRename() {
                let names = this.categories.map(x => x.name);
                names.splice(this.index, 1);
                return names
            },
            showUncategorized() {
                return this.categories.findIndex(x => x.name === 'بدون دسته') === -1
            },
            showDeleteButton() {
                return !(this.categoriesName.length === 1 && this.categoriesName[0] === 'بدون دسته')

            }
        },
        methods: {
            addCategory: function () {
                if (window.cancel !== undefined)
                    window.cancel();

                this.form.spinner = true;
                axios({
                    method: "post",
                    url: '/business/category',
                    timeout: axios_time_out,
                    data: {
                        name: this.new_category,
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
                    .then(response => {
                        if (response.data.message === "New category stored") {
                            let category = response.data.category
                            category.wares = []
                            let index = this.categories.map(category => category.pinned).indexOf(0)
                            if (index < 0)
                                index = this.categories.length
                            this.categories.splice(index, 0, category)
                            this.new_category = ''
                            this.$root.componentKey++
                        }
                        this.form.spinner = false;
                    });
            },
            setNameCategory(id) {
                this.index = this.categories.findIndex(category => category.id === id);
                this.new_name = this.categories[this.index].name;
                if (this.showUncategorized || this.new_name !== 'بدون دسته')
                    this.destination_category = 'بدون دسته';
                else
                    this.destination_category = this.categoriesRename[0];
            },
            renameCategory: function () {
                if (window.cancel !== undefined)
                    window.cancel();

                if (this.new_name === this.categories[this.index].name)
                    $("#category_rename_modal").modal('hide');

                else {
                    this.form.spinner = true;
                    axios({
                        method: "post",
                        url: 'category/' + this.categories[this.index].id,
                        timeout: axios_time_out,
                        data: {
                            _method: "patch",
                            name: this.new_name,
                        },
                        cancelToken: new CancelToken(function executor(c) {
                            window.cancel = c;
                        })
                    })
                        .then(response => {
                            if (response.data === "Success") {
                                this.categories[this.index].name = this.new_name;
                                $("#category_rename_modal").modal('hide')
                            }
                            this.form.spinner = false;
                        })
                }
            },
            deleteCategory() {
                if (window.cancel !== undefined)
                    window.cancel();

                this.form.spinner = true;
                axios({
                    method: "delete",
                    url: '/business/category/' + this.categories[this.index].id,
                    timeout: axios_time_out,
                    data: {
                        destination_category: this.destination_category,
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
                    .then(response => {
                        if (response.data === "Change category's name to uncategorized")
                            this.categories[this.index].name = 'بدون دسته';

                        else if (response.data.message === 'Move to new destination category') {
                            let index = this.categories.map(category => category.name).indexOf(this.destination_category);
                            this.categories[index].wares = response.data.category.wares;
                            this.categories.splice(this.index, 1);
                        }

                        this.form.spinner = false;
                        $("#category_delete_modal").modal('hide');
                    })
                    .catch(error => console.log(error))
            },
            pinCategory(category) {
                category.pinned = !category.pinned
                this.categories.sort((a, b) => this.compare(b.pinned, a.pinned, a.priority, b.priority, b.created_at, a.created_at))

                if (window.cancel !== undefined)
                    window.cancel();
                axios({
                    method: "post",
                    url: 'category/pin',
                    timeout: axios_time_out,
                    data: {
                        id: category.id,
                        pinned: category.pinned,
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
            },
            sort(evt) {
                let category = evt.moved.element
                let newIndex = evt.moved.newIndex

                if ((category.pinned && newIndex > 0 && !this.categories[newIndex - 1].pinned) ||
                    (!category.pinned && newIndex + 1 < this.categories.length && this.categories[newIndex + 1].pinned))
                    category.pinned = !category.pinned;

                this.categories.forEach((category, index) => category.priority = index + 10)

                this.$store.state.user.business.categories = this.categories

                if (window.cancel !== undefined)
                    window.cancel();

                axios({
                    method: "post",
                    url: '/business/category/priority',
                    timeout: axios_time_out,
                    data: {
                        categories: {
                            id: this.categories.map(category => category.id),
                            priority: this.categories.map(category => category.priority),
                            pinned: this.categories.map(category => category.pinned),
                        },
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        window.cancel = c;
                    })
                })
            },
        },
    }
</script>
