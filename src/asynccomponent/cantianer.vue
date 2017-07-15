<template>
    <div>
        <component :is="url">
        </component>
        <span>{{cc}}</span>
    </div>
</template>
<script>
import config from './config'
import Vue from 'vue'
const componentName = config.url
export default {
    data() {
        return {
            url: 'async'

        }
    },
    props: {
        cc: String
    },
    methods: {
        rendervue() {
            let vm = this
            Vue.component('async', function (resolve) {
                require([`${vm.cc}`], resolve)
            })
        }
    },
    watch: {
        cc(value) {
            if (value) {
                this.rendervue()
            }
        }
    },
    created() {
        this.rendervue()
    }
}
</script>
