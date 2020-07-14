<template>
    <div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>وضعیت شغل</label>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="business-state" v-model="business.active"
                           :disabled="form.spinner" @change="changeBusinessState">
                    <label class="custom-control-label" for="business-state">
                        {{ businessState }}
                        <span class="spinner-grow spinner-grow-sm text-primary" role="status"
                              v-if="form.spinner"/>
                    </label>
                </div>
            </div>
        </div>

        <hr>

        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">

                <div class="form-row">
                    <div class="form-group">
                        <div>
                            <croppa v-model="croppa"
                                    accept="image/*"
                                    placeholder="انتخاب لوگو"
                                    :placeholder-font-size="0"
                                    :width="200"
                                    :height="200"
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
                            <div class="btn-group btn-sm mx-auto" role="group">
                                <button type="button" class="btn btn-outline-info" @click="croppa.rotate()">
                                    <b-icon icon="arrow-clockwise" rotate="90" font-scale="1.2"/>
                                </button>
                                <button type="button" class="btn btn-outline-info" @click="croppa.rotate(-1)">
                                    <b-icon icon="arrow-counterclockwise" rotate="270" font-scale="1.2"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>نام تجاری</label>
                        <ValidationProvider tag="div" name="name" rules="required" v-slot="{ classes, errors }">
                            <input type="text" v-model="cmp.name" class="form-control" :class="classes">
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
                    <div class="form-group w-100 col-md-12 col-lg-10">
                        <label>تعیین آدرس روی نقشه</label>
                        <ValidationProvider tag="div" name="latitude" rules="required"
                                            v-slot="{ classes, errors }">
                            <input type="hidden" v-model="cmp.latitude" :class="classes">
                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider tag="div" name="longitude" rules="required"
                                            v-slot="{ classes, errors }">
                            <input type="hidden" v-model="cmp.longitude" :class="classes">
                            <span class="v-invalid-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <div id="map" class="cedarmap rounded-1 mx-3" style="height: 400px">
                            <div class="form-group">
                                <input type="search" id="streets" name="streets"
                                       class="form-control col-8 col-md-6"
                                       placeholder="جستجو">
                            </div>
                            <img src="http://api.cedarmaps.com/cedarmaps.js/v1.8.0/images/marker-icon.png"
                                 id="my-marker">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>توضیحات آدرس</label>
                        <textarea name="address" class="form-control" rows="3" v-model="cmp.address"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary" :disabled="form.spinner">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                      v-if="form.spinner"/>
                            {{ form.submitText }}
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
                business: this.$store.state.user.business,
                cmp: {
                    logo_url: '',
                    name: '',
                    description: '',
                    latitude: '',
                    longitude: '',
                    address: '',
                },
                croppa: {},
                hasImage: false,
                changeImage: false,
                form: {
                    submitText: 'ثبت'
                }
            }
        },
        computed: {
            businessState() {
                if (this.business.active)
                    return 'فعال';
                return 'غیرفعال';
            },
        },
        beforeMount() {
            Object.assign(this.cmp, this.business)
            delete this.cmp.categories
            if (this.business.logo_url != null) {
                this.hasImage = true
                this.cmp.initialImage = '../../' + this.business.logo_url
            }
        },
        mounted() {
            try {
                L.cedarmaps.accessToken = "35c40726423c3725fdc6a3df4aa77fbda9aaa7c3";
            } catch (err) {
                throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
                    'Send us an email to <info@cedar.ir>');
            }

// Setting up our DOM elements and global scope variables.
            var form = document.getElementById('form'),
                streetsInput = document.getElementById('streets'),
                loading = document.getElementById('loading'),
                globalSearchBoundingBox = {sw: [33.5947, 46.3508], ne: [33.6527, 46.4531]}, // Bounding box of Ilam
                marker,
                rectagle;

            var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=' + L.cedarmaps.accessToken,
                marker,
                syntaxHighlight;

// Initializing our map using some options
            var map = L.cedarmaps.map('map', tileJSONUrl, {
                scrollWheelZoom: true,
                maxZoom: 17,
                minZoom: 13,
            }).setView([this.business.latitude, this.business.longitude], 17);

// map.scrollWheelZoom.disable();

            L.control.locate({flyTo: true}).addTo(map);

            map.on('moveend', () => {
                this.cmp.latitude = map.getCenter().lat;
                this.cmp.longitude = map.getCenter().lng;
            });

// We need to initialize our administrativeBoundaries and geocoding module.
            var locator = L.cedarmaps.administrativeBoundaries();
            var geocoder = L.cedarmaps.geocoder('cedarmaps.streets');


            var locationerror = function () {
                console.log('You either blocked browser from accessing your location OR there\'s something really wrong!');
            };

            map.on('locationerror ', locationerror);

            var selectLocality = function (selectedOption) {
                streetsInput.disabled = false;
                var value = selectedOption.value;

                if (!value) {
                    sw = citiesList.options[citiesList.selectedIndex].getAttribute('data-sw').split(','),
                        ne = citiesList.options[citiesList.selectedIndex].getAttribute('data-ne').split(',');
                    globalSearchBoundingBox = {sw: sw, ne: ne};
                    drawBoundary();
                    map.flyToBounds([sw, ne]);

                    return;
                }

                var sw = localitiesList.options[localitiesList.selectedIndex].getAttribute('data-sw').split(','),
                    ne = localitiesList.options[localitiesList.selectedIndex].getAttribute('data-ne').split(',');

                map.flyToBounds([sw, ne]);
                globalSearchBoundingBox = {sw: sw, ne: ne};
                drawBoundary();
            };

            var setMarker = function (latLng, zoom) {
                // Flying to the center point in zoom 17
                map.flyTo(latLng, 17);
            };

// Just a random third party autocomplete module. Nothing special about this. You can have your own autocomplete module
// https://goodies.pixabay.com/javascript/auto-complete/demo.html
            var autoCompelete = new autoComplete({
                selector: 'input[name="streets"]',
                minChars: 2,
                cache: 0,  // set to 1 if you need caching and making less requests
                source: function (term, response) {
                    // Since we wont have full control over ajax responses and caching problems may occure if we directly
                    // use geocoder.query, we build the request URL instead and then we use it our custom auto complete module.
                    // It's a workaround for not getting cached results in our list.
                    var queryURL = geocoder.queryURL({
                        query: term,
                        ne: globalSearchBoundingBox.ne,
                        sw: globalSearchBoundingBox.sw
                    });

                    // In this demo we use a tiny 3rd party library for AJAX requests as we don't use jQuery or other bulky libraries.
                    // So feel free to replace it with your preferred one. jQuery syntax for example would be like: $.ajax()
                    Tini.ajax({
                        url: queryURL,
                        type: 'GET',
                        success: function (res) {
                            var json = JSON.parse(res);
                            // if (window.console) console.log(json);
                            if (typeof json != 'undefined') {
                                if (json.results) response(json.results);
                                //no results
                                else {
                                }
                            }
                        }
                    });
                },
                renderItem: function (item, search) {
                    var img, label, addressParts = [];

                    switch (item.type) {
                        case 'street':
                            img = 'icon_street@2x.png'
                            label = 'خیابان'
                            break;
                        case 'boulevard':
                            img = 'icon_boulevard@2x.png'
                            label = 'بلوار'
                            break;
                        case 'roundabout':
                            img = 'icon_roundabout@2x.png'
                            label = 'میدان'
                            break;
                        case 'locality':
                            img = 'icon_locality@2x.png'
                            label = 'محله'
                            break;
                        case 'freeway':
                            img = 'icon_freeway@2x.png'
                            label = 'آزادراه'
                            break;
                        case 'expressway':
                            img = 'icon_freeway@2x.png'
                            label = 'اتوبان'
                            break;
                        case 'motorway':
                            label = 'اتوبان'
                            img = 'icon_motorway@2x.png'
                            break;
                        case 'place':
                            label = 'مکان'
                            img = 'icon_place@2x.png'
                            break;
                        case 'city':
                            label = 'شهر'
                            img = 'icon_place@2x.png'
                            break;
                    }

                    var altName = item.alt_name ? ' (' + item.alt_name + ')' : '';

                    return '<div class="autocomplete-suggestion" data-name="' + item.name + '" data-center="' + item.location.center + '">\
            <div class="address">' + item.name + altName + '<span>' + item.address + '</span></div>\
            <div class="street-type">\
                <img src="/dist/v1.8.0/images/' + img + '" alt="" width="20" height="20">\
                <span>' + label + '</span>\
            </div>\
        </div>';
                },
                onSelect: function (e, term, item) {
                    streetsInput.vlue = item.getAttribute('data-name');
                    setMarker(item.getAttribute('data-center').split(','));
                }
            });


        },
        methods: {
            handleImageRemove() {
                this.cmp.logo_url = null
            },
            onDraw(ctx) {
                this.$root.onDraw(ctx)

                if (!this.hasImage)
                    this.changeImage = true

                this.hasImage = false
            },
            changeBusinessState() {
                this.form.spinner = true;
                axios({
                    method: "post",
                    url: '/business/active',
                    timeout: axios_time_out,
                    data: {
                        state: this.business.active,
                    }
                })
                    .then(response => {
                        this.form.spinner = false;
                    })
            },
            onSubmit() {
                this.form.submitText = 'در حال بررسی ...';
                this.form.spinner = true;
                if (this.changeImage)
                    this.cmp.logo_url = this.croppa.generateDataUrl('image/jpeg', 0.8)
                axios({
                    url: '/business/settings',
                    method: 'post',
                    data: this.cmp
                })
                    .then(response => {
                        if (response.data.message === "Business updated") {
                            Object.assign(this.business, response.data.business)
                            Swal.fire({
                                position: 'top-start',
                                type: 'success',
                                title: 'اطلاعات شغل بروز شد',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            this.$router.push('panel')
                        }
                        this.form.submitText = 'ورود';
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
