<template>
    <div>
        <h2>head</h2>
        <div v-if="show">
            <slottest :one="one">
            </slottest>
        </div>
        <!--<slot name="slot1"></slot>-->
        <h2>foot</h2>
    </div>
</template>

<script>
import Vue from 'vue'
import slottest from 'src/components/slottest'
Vue.component('slottest', slottest)
export default {
    data() {
        return {
            msg: "hello vue",
            articles: []
        }
    },
    props: ['showbutton', "show", "one"],
    methods: {
        test() {
            console.log("in slot")
        }
    }
}
</script>