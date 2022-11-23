<template>
    <div id="loading">
        <div id="loading_bg">
            <div class="loader">Loading...</div>
        </div>
    </div>
    <div class="l-all-wrapper js-all-wrapper--top">
        <commonHeader></commonHeader>
        <div class="l-all-wrapper_inner s-top-noinfo">
            <router-view>
            </router-view>
        <commonFooter></commonFooter>
        </div>
    </div>
</template>
<script setup>
import commonHeader from './view/commonHeader.vue'
import commonFooter from './view/commonFooter.vue'
</script>
