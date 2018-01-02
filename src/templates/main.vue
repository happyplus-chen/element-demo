<template>
    <div>
        <h1>
            {{msg}}</h1>
            <div>{{$t("message.hello")}}</div>
        <!-- <test></test> -->
    </div>
</template>
<script>
// import l from 'testtpl-loader'
// import test from './test.tpl'
export default {
    // components: { test },
    data() {
        return {
            msg: 'hello'
        }
    },
    mounted(){
        debugger
        // console.log(l,111)
    }
}
</script>