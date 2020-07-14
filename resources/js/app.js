window.$ = window.jQuery = require('./files/jquery-3.4.0');

require('./files/jquery-ui-1.12.1');

require('./bootstrap');

require('./files/jquery.ui.touch-punch');

import Vue from 'vue';

/////////////////////////////////////////

/////////////////////////////////////////
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)

/////////////////////////////////////////
import money from 'v-money'

Vue.use(money)

/////////////////////////////////////////
import {ValidationProvider, ValidationObserver, configure, localize, extend} from 'vee-validate';


//+
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

//+
configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        // dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
        // ...
    }
})

//+
localize({
    en: {
        names: {
            price: 'قیمت',
        },
        messages: {
            required: 'ضروری',
            phone: 'شماره همراه ۱۱ رقمی را درست وارد نمایید',
            min: 'حداقل {length} کاراکتر',
            digits: 'عدد {length} رقمی وارد کنید',
            email: 'بصورت صحیح وارد نمایید',
            confirmed: 'هر دو رمز بایستی یکسان باشد',
            oneOf: 'جز لیست نیست',
            excluded: 'قبلا ثبت شده است!',
            currency_min: (field, {min}) => `حداقل ${field} ${new Intl.NumberFormat().format(min)} تومان است`,
            max: (_, {length}) => `this field must have no more than ${length} characters`,
        },
    }
});

//+
extend('phone', {
    validate(value) {
        value = value.replace(/\ - /g, '')
        return value.length === 11
    }
});

extend("currency_min", {
    params: ["min"],
    validate: (value, {min}) => {
        return Number(value) >= min
    },
});

//+
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

/////////////////////////////////////////
import draggable from 'vuedraggable'

Vue.use(draggable);

/////////////////////////////////////////
import Croppa from 'vue-croppa';

Vue.use(Croppa);
import 'vue-croppa/dist/vue-croppa.css';

/////////////////////////////////////////
import Scrollspy from 'vue2-scrollspy';

Vue.use(Scrollspy);

/////////////////////////////////////////
import PortalVue from 'portal-vue'

Vue.use(PortalVue)

/////////////////////////////////////////
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

/////////////////////////////////////////
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(InfiniteLoading, {
    props: {
        // spinner: 'waveDots',
    },
    slots: {
        noMore: '', // you can pass a string value
        noResults: '', // you can pass a string value
    },
});

/////////////////////////////////////////
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading, {
    // color: '#007bff',
    loader: 'bars',
    // backgroundColor: 'black',
}, {
    // slots
});

/////////////////////////////////////////
import vueTopprogress from 'vue-top-progress'

Vue.use(vueTopprogress)

/////////////////////////////////////////
Vue.component('v-footer', require('./components/Layout/footer').default);

import router from './files/router';

Vue.router = router;

Vue.mixin({
    components: {
        draggable,
        Loading,
    },
    data() {
        return {
            alert: {
                show: false,
                title: '',
                body: '',
            },
            form: {
                spinner: false,
                submitText: 'ارسال',
                secondaryButtonText: '',
            },
            price: '',
            money: {
                decimal: '.',
                thousands: ',',
                prefix: '',
                suffix: '',
                precision: 0,
                masked: false
            },
            component: {
                isLoading: true
            },
        }
    },
    beforeCreate() {

    },
    mounted() {
        let that = this;

        $(".modal").draggable({
            handle: ".modal-header"
        });

        $('.auto-focus').focus();

        $('.alert').find('button.close').click(function () {
            that.alert.show = '';
            that.alert.title = '';
            that.alert.body = '';
        });
    },
    updated() {
        $('.modal').on('shown.bs.modal', function (e) {
            $('.modal').find('.auto-focus').focus();
            $('.modal').find('.auto-focus').select();
        });

        $('.sortable').sortable({
            items: ">tr",
            appendTo: "parent",
            opacity: .7,
            // containment: "parent",
            containment: ".container",
            cursor: "move",
            axis: 'y',
        });
        $('.sortable').disableSelection();
    },
    methods: {
        updateCursor($event) {
            this.cursor = $event.target.selectionEnd
        },
        onDraw(ctx) {
            ctx.save()
            ctx.globalAlpha = 0.5
            ctx.drawImage(window.sticker, 50, 500, 75, 75)
            ctx.restore()
        },
        concatAll(arr) {
            let concated = [];
            arr.forEach(function (item) {
                concated = concated.concat(item);
            })
            return concated.map(x => x.code);
        },
        goBack() {
            router.back()
        },
        errorAndReload() {
            Swal.fire({
                type: 'error',
                title: 'خطا!',
                text: 'مشکلی در ارسال اطلاعات بوجود آمده',
                confirmButtonText: 'خب',
            }).then(() => {
                location.reload();
            })
        },
        scrollToHeader() {
            let headerHeight = $('header').css('height')
            $('html').animate({
                'scrollTop': headerHeight
            }, 400);
        },
        compare() {
            let index = 0
            while (index + 1 < arguments.length) {
                if (arguments[index] > arguments[index + 1])
                    return 1;
                if (arguments[index] < arguments[index + 1])
                    return -1;
                index += 2
            }
            return 0;
        },
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
    }
});

import store from './files/store'

new Vue({
    el: '#app',
    data: {
        componentKey: 1
    },
    store,
    router,
    created() {
        this.setUser()
    },
    mounted() {
    },
    methods: {
        setUser() {
            this.$store.dispatch('setUser')
        }
    }
});


///////////ME:

Vue.config.productionTip = false;

require('./files/sweetalert.min');
window.Swal = require('sweetalert2');

require('./files/dragscroll');

require('./files/me');

