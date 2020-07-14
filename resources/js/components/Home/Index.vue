<template>
    <div>
        <div id="topBannerDiv" class="mx-auto text-center w-100 position-relative" style='background-image: url("../img/banner.jpg");
        height: 650px; background-position: center; z-index: -2;'>
            <div class="w-100 h-100 radial-shadow" id="topBannerShadow" style="display: none"></div>
        </div>

        <div id="publicCard" class="card-deck mx-auto mx-lg-5 flex-column flex-md-row text-center">
            <div class="card mb-4 shadow">
                <i class="fal fa-mug-hot fa-6x my-3"></i>
                <div class="card-body d-flex flex-column">
                    <p class="card-text">جدیدترین محصولاتی که فروشندگان به لیست خود اضافه کرده‌اند</p>
                    <router-link to="/fresh" tag="a" class="btn btn-block btn-primary mt-auto">تازه‌ها</router-link>
                </div>
            </div>
            <div class="card mb-4 shadow">
                <i class="fal fa-store fa-6x my-3"></i>
                <div class="card-body d-flex flex-column">
                    <p class="card-text">لیست فروشندگانی که با ما قرارداد دارند</p>
                    <router-link to="/stores" tag="a" class="btn btn-block btn-primary mt-auto">فروشندگان</router-link>
                </div>
            </div>
            <div class="card mb-4 shadow">
                <i class="fal fa-map-marker-alt fa-6x my-3"></i>
                <div class="card-body d-flex flex-column">
                    <p class="card-text">نمایش مکان دقیق فروشندگان روی نقشه</p>
                    <router-link to="/map" tag="a" class="btn btn-block btn-primary mt-auto">نقشه</router-link>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="jumbotron my-6 bg-secondary text-white opacity-0" id="presentationJumbotron">
                <h1 class="display-4">کودیره؟</h1>
                <p class="lead">
                    سفارش اینترنتی و دریافت محصولات با:
                </p>
                <ul>
                    <li>هزینه کمتر</li>
                    <li>صرفه‌جویی در وقت</li>
                    <li>روشی ساده‌تر</li>
                </ul>
                <hr class="my-4">
                <p>
                    ...
                </p>
                <a class="btn btn-outline-light btn-lg" href="#" role="button">توضیحات بیشتر ...</a>
            </div>

            <div class="jumbotron my-6 bg-success text-white opacity-0"
                 v-if="$store.state.user && $store.state.user.type!='business'">
                <h1 class="display-4">فروشنده شو ..</h1>
                <hr class="my-4">
                <p>با ثبت فروشگاه یا رستوران خود امکان فروش اینترنتی فراهم می‌شود.</p>
                <p>ما هماهنگی لازم برای رسیدن سفارش به مشتری را انجام می‌دهیم.</p>
                <router-link to="/add-business" class="btn btn-outline-light btn-lg" role="button">ثبت فروشگاه
                </router-link>
            </div>

            <div class="accordion opacity-0 my-6" id="accordionExample">
                <div class="card">
                    <div class="card-header bg-info" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link text-white" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                کاربران چه کسانی هستند؟
                            </button>
                        </h2>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                         data-parent="#accordionExample">
                        <div class="card-body">
                            کلیه اشخاصی که در این وبسایت ثبت نام کرده‌اند، کاربر محسوب می‌شوند.
                            <br>
                            کاربران امکان بازدید از محصولات را دارند و می‌توانند آن‌ها را به سبد خرید خود اضافه کنند.
                            <br>
                            پس از آن با نهایی کردن عملیات، سبد خرید بسته می‌شود و کاربر به صفحه پرداخت از طریق کارت شتاب
                            بانکی هدایت ‌می‌شود.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header bg-info" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                فروشندگان چه کسانی هستند؟
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            کسانی که کالای خود را با قیمت مشخص به وبسایت اضافه می‌کنند تا شرایط خرید اینترنتی این کالا
                            برای
                            کاربر فراهم شود.
                            <br>
                            نام، توضیحات، قیمت، عکس و تمامی موارد مربوط به هر کالا توسط فروشنده انجام می‌گیرد.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header bg-info" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link text-white collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                مدیران چه کسانی هستند؟
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                         data-parent="#accordionExample">
                        <div class="card-body">
                            مدیران رابط کاربری جهت ارتباط کاربر و فروشنده را بوجود آورده و وظیفه نظارت و پشتیبانی آن را
                            دارند.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            $('.modal').modal('hide');
        },
        beforeDestroy() {
            $("#topNavbar").addClass("bg-dark");
        },
    }
</script>
