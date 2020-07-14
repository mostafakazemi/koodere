<template>
    <div class="vld-parent d-flex">
        <loading :active.sync="component.isLoading" :is-full-page="false" loader="bars" :opacity="1"/>

        <div class="mx-lg-auto mx-5 col-xs-12 col-lg-8">
            <div id="map" class="cedarmap rounded-1 my-5" style="height: 400px"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stores: [],
            }
        },
        computed: {},
        methods: {
            myFunc() {
                console.log('this')
            }
        },
        mounted() {
            try {
                L.cedarmaps.accessToken = "35c40726423c3725fdc6a3df4aa77fbda9aaa7c3";
            } catch (err) {
                throw new Error('You need to get an access token to be able to use cedarmaps SDK. ' +
                    'Send us an email to <info@cedar.ir>');
            }

            var tileJSONUrl = 'https://api.cedarmaps.com/v1/tiles/cedarmaps.streets.json?access_token=' + L.cedarmaps.accessToken

            var map = L.cedarmaps.map('map', tileJSONUrl, {
                scrollWheelZoom: true,
                maxZoom: 17,
                minZoom: 13,
            }).setView([33.63493454210291, 46.40716195106507], 14);


            L.control.locate({flyTo: true}).addTo(map);

            var locationerror = function () {
                console.log('You either blocked browser from accessing your location OR there\'s something really wrong!');
            };

            map.on('locationerror ', locationerror);

            this.component.isLoading = false

            axios.get('/fetch-locations', {}).then(response => {
                this.stores = response.data

                let markers = L.markerClusterGroup();

                this.stores.forEach(business => {
                    let marker = L.marker(new L.LatLng(business.latitude, business.longitude), {title: business.name});
                    marker.bindPopup(`
                    <a
                    href="../store/${business.id}"
                    onclick="preventDefault(); Vue.router.push('../store/${business.id}')"
                    >${business.name}</a>
                    `);
                    markers.addLayer(marker);
                });

                map.addLayer(markers);
            });


        },
    }
</script>
