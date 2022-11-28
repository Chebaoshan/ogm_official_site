<template>
    <div id="loading">
        <div id="loading_bg">
            <div class="loader">Loading...</div>
        </div>
    </div>
    <div class="l-all-wrapper js-all-wrapper--top">
        <commonHeader></commonHeader>
        <div class="l-all-wrapper_inner s-top-noinfo">
            <router-view v-slot="{ Component }">
                <transition name="slide-fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
                    <component :is="Component" />
                </transition>
            </router-view>
            <commonFooter></commonFooter>
        </div>
    </div>
</template>
<script setup>
import commonHeader from './view/commonHeader.vue'
import commonFooter from './view/commonFooter.vue'
</script>
<style la="less">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0.3;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  opacity: 1;
}
</style>
