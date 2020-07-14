<template>
    <div class="d-flex flex-column flex-md-row text-white">
        <div class="col-xs-12 col-md-3 bg-danger">
            <ul class="sticky-top">
                <li v-for="i in n">{{ i }}</li>
            </ul>
        </div>
        <div class="col-xs-12 col-md-9 bg-info">
            <ul>
                <li v-for="i in n">{{ i }}</li>
                <li v-for="i in n">{{ i }}</li>
                <li v-for="i in n">{{ i }}</li>
                <li v-for="i in n">{{ i }}</li>
                <li v-for="i in n">{{ i }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                n: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            };
        },
    }
</script>