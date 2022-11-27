<template>
    <!-- HeaderContents -->
    <div class="l-header">
        <header class="l-header_logo">
            <h1>
                <router-link to="/">
                    <div class="common_logo-svg">
                        <img src="/ogm-word.png" />
                    </div>
                </router-link>
            </h1>
        </header>
        <div class="l-nav-sp-btn"><a class="js-animation-trun-over-not-target" href="javascript:void(0)"></a></div>
        <!-- Nav -->
        <div class="l-nav">
            <!-- PC -->
            <div class="l-nav_pc">
                <nav>
                    <ul class="common-font-bold">
                        <li class="mega-navi">会社情報</li>
                        <li>
                            <router-link to="/employment">採用情報</router-link>
                        </li>
                        <li>
                            <router-link to="/education">教育</router-link>
                        </li>
                        <li>
                            <router-link to="/news">ニュース</router-link>
                        </li>
                        <li>
                            <router-link to="/inquiry">お問い合わせ</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- /PC -->
            <!-- SP -->
            <div class="l-nav_sp">
                <div class="l-nav_sp-header">
                    <router-link to="/">
                        <div class="common_logo-svg">
                            <img src="/ogm-word.png" />
                        </div>
                    </router-link>
                </div>
                <div class="l-nav_sp-inner" data-simplebar>
                    <nav>
                        <ul class="common-font-bold">
                            <li><span class="l-nav_sp-toggle-btn">会社情報</span>
                                <ul class="l-nav_sp-toggle common-font-normal">
                                    <li><router-link to="/representative">- 代表メッセージ</router-link></li>
                                    <li><router-link to="/management">- 経営方針</router-link></li>
                                    <li><router-link to="/company">- 会社概要</router-link></li>
                                    <li><router-link to="/history">- 沿革</router-link></li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/employment">採用情報</router-link>
                            </li>
                            <li>
                                <router-link to="/education">教育</router-link>
                            </li>
                            <li>
                                <router-link to="/news">ニュース</router-link>
                            </li>
                            <li>
                                <router-link to="/inquiry">お問い合わせ</router-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="l-nav_sp-sub1">
                    </div>
                    <div class="l-nav_sp-sub2">
                    </div>
                    <div class="l-nav_sp-sub3">
                        <ul>
                            <li><router-link to="/privacy">OGM個人情報保護方針</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /SP -->
        </div>
        <!-- /Nav -->
    </div>
    <div class="l-mega-navi_wrap">
        <div class="l-mega-navi_cover"></div>
        <div class="l-mega-navi common-font-bold">
            <div class="l-mega-navi_title"><span
                    class="l-mega-navi_title-border common-horizontal2 js-scrollaction-target"></span>Plan<span
                    class="small">会社情報</span></div>
            <ul class="l-mega-navi_nav col2">
                <li class="a-button"><router-link @click="handler" to="/representative"><span class="fig"><img src="/message.png"
                                alt="代表メッセージ"></span><span class="ttl-intro">OGM</span><span
                            class="ttl">代表メッセージ</span><span class="dtl common-font-normal"></span></router-link></li>
                <li class="a-button"><router-link @click="handler" to="/management"><span class="fig"><img src="/1d6dcc6.jpg"
                                alt="経営方針"></span><span class="ttl-intro">OGM</span><span class="ttl">経営方針</span><span
                            class="dtl common-font-normal"></span></router-link></li>
                <li class="a-button"><router-link @click="handler" to="/company"><span class="fig"><img src="/top_company.jpg"
                                alt="会社概要"></span><span class="ttl-intro">OGM</span><span class="ttl">会社概要</span><span
                            class="dtl common-font-normal"></span></router-link></li>
                <li class="a-button"><router-link @click="handler" to="/history"><span class="fig"><img src="/af48d23.jpg"
                                alt="沿革"></span><span class="ttl-intro">OGM</span><span class="ttl">沿革</span><span
                            class="dtl common-font-normal"></span></router-link></li>
            </ul>
        </div>
    </div>
    <!-- /HeaderContents -->
</template>
<script setup>
const handler=()=>{
    document.getElementsByClassName('l-mega-navi_wrap')[0].setAttribute('class','l-mega-navi_wrap')
    document.getElementsByClassName('l-header')[0].setAttribute('class','l-header')
}
</script>