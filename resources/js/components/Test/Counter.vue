<template>
    <div class="w-100 text-center">
        <div class="my-6">
            <button @click="setCounter(5)" class="btn btn-large btn-primary mx-3">set 5</button>
            <button @click="addCounter" class="btn btn-large btn-primary">add</button>
        </div>
        <h3>counter: {{ counter }}</h3>
        <h3>stateCounter: {{ stateCounter }}</h3>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                stateCounter: this.$store.state.counter
            };
        },
        computed: {
            ...mapState(['counter'])
        },
        methods: {
            ...mapActions(['addCounter', 'setCounter'])
        }
    }
</script>
