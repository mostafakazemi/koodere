<template>
    <div>
        <input type="text" id="job" ref="mytext" :name="this.inputName" :class="this.inputClass" dir="auto"
               v-validate="'required'" v-model="myvalue">
        <div class="invalid-feedback" v-if="errors.has(this.inputName)">
            {{ errors.first(this.inputName) }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['inputName', 'inputClass', 'inputSource'],
        data() {
            return {
                myvalue: '',
                myArray:['z','x','c']
            };
        },
        mounted() {
            // let self = this;
            // $(this.$el.children[0]).autocomplete({
            //     source: this.inputSource,
            //     minLength: 0,
            //     onSelect: function (item) {
            //         self.$emit('select-item', item);
            //     }
            // }).focus(function () {
            //     $(this).data("uiAutocomplete").search(this.myvalue)
            // });

            console.log(this.inputSource)
            $("#job").autocomplete({
                source: this.inputSource,
                minLength: 0,
                select(event, ui) {
                    console.log(ui.item.value);
                    this.business.job = ui.item.value;
                },
            }).focus(function () {
                $(this).data("uiAutocomplete").search($(this).val());
            });

        },
    }
</script>