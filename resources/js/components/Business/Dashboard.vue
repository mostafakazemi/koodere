<template>
    <div>
        <div>
            <img :src="`../../${business.logo_url}`" alt="" width="100px" class="rounded-1" v-if="business.logo_url">
            <img src="https://via.placeholder.com/100" alt="" class="rounded-1" v-else>
        </div>
        <h3 class="mt-4">{{ business.name }}</h3>

        <p v-if="business.description"><small class="text-muted">توضیحات تکمیلی: {{ business.description }}</small></p>

        <p v-if="business.address"><small class="text-muted">آدرس: {{ business.address }}</small></p>

        <p>
            وضعیت شغل:
            <span class="mx-3" v-if="business.active">فعال</span>
            <span class="mx-3" v-else>غیر فعال</span>
        </p>

        <p>
            تعداد کالای ثبت شده:
            <span class="mx-3">{{ wares.length }}</span>
        </p>

        <p>
            تعداد دسته ثبت شده:
            <span class="mx-3">{{ business.categories.length }}</span>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                business: this.$store.state.user.business,
            };
        },
        computed: {
            wares() {
                let arr = this.business.categories.map(category => category.wares)
                let concated = [];
                arr.forEach((wares) => {
                    concated = concated.concat(wares);
                })
                return concated;
            },
        },
        methods: {},
    }
</script>
