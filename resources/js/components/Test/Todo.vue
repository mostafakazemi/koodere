<template>
    <div>
        <h1>to do component</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$emit('lfunc')
        },
    }
</script>