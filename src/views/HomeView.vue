<template>
    <div>
        <h1>Home</h1>
    </div>
    <RouterView />
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
// router.beforeEach((to, from, next) => {
//     console.log("(before)  To")
//     console.log(to)
//     console.log("############################")
//     console.log("From")
//     console.log(from)
//     next()
// })
// router.afterEach((to, from) => {
//     console.log("(after)  To")
//     console.log(to)
//     console.log("############################")
//     console.log("From")
//     console.log(from)
//     })
</script>