<template>
    <div class="js-move2"></div>
    <!-- CommonCta -->
    <section class="m-cta common-move_half js-scrollaction-target">
        <div class="m-cta_image"><img class="js-lazyload" src="/image_02.jpg" alt=""></div>
        <div class="m-cta_inner">
            <h5 class="m-cta_title common-font-bold"><span
                    class="m-cta_title-border common-horizontal2 js-scrollaction-target"></span>さぁ、ご一緒に<br>はじめていきましょう。
            </h5>
            <p class="m-cta_detail"><br></p>
            <div class="m-cta_tel common-font-bold">
                <p class="m-cta_tel-text">お気軽にご連絡ください。</p>
                <p class="m-cta_tel-num"><a href="tel:0358438922">03-5843-8922</a></p>
                <p class="m-cta_tel-time">平日 09:00〜17:30</p>
            </div>
        </div>
    </section>
    <!-- /CommonCta -->
    <!-- FooterContents -->
    <div class="l-footer js-footer">
        <section class="l-footer_inner">
            <h6 class="l-footer_logo">
                <router-link to="/"><img src="/ogm-word.png" /></router-link>
            </h6>
            <div class="l-footer_nav common-font-bold">
                <ul>
                    <li>会社情報 <ul class="common-font-normal">
                            <li><router-link to="/representative">- 代表メッセージ</router-link></li>
                            <li><router-link to="/management">- 経営方針</router-link></li>
                            <li><router-link to="/company">- 会社概要</router-link></li>
                            <li><router-link to="/history">- 沿革</router-link></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                            <router-link to="/employment">採用情報</router-link>
                        </li>
                        <li>
                            <router-link to="/education">教育</router-link>
                        </li>
                        <li>
                            <router-link to="/news">ニュース</router-link>
                        </li>
                </ul>
                <div class="l-footer_nav-type1">
                    <ul>
                        <li><router-link to="/inquiry">お問い合わせ</router-link></li>
                    </ul>
                    <div class="l-footer_sub-nav common-font-normal">
                        <ul>
                            <li><router-link to="/privacy">OGM個人情報保護方針</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <footer><span class="footer-inner">Copyright © OGM, Inc. All rights reserved.</span></footer>
    </div>
    <!-- /FooterContents -->
</template>
<script setup>
</script>