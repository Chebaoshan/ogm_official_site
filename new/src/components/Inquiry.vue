<template>
     <main>
            <section>
                <div class="s-plan_mainvisual">
                    <div class="s-top-mainvisual_video">
                        <video id="video" playsinline muted autoplay loop>
                        </video>
                    </div>
                    <div class="s-plan_mainvisual-inner">
                        <div class="s-plan_mainvisual-ttl">
                            <h1 class="title common-font-bold"><span
                                    class="common-vertical-white js-scrollaction-target"></span><span class="s-plan_mainvisual-sbttl common-font-en-interval common-font-normal">About</span> <span class="small">Inquiry</span></h1>
                            <p class="common-font-bold">お問い合わせ</p>
                        </div>
                        <figure class="s-plan_mainvisual-bk"><img src="/1d6dcc6.jpg" alt="About For Inquiry"></figure>
                    </div>
                </div>
                <div class="s-plan_contents">
                    <div class="l-left-wrapper">
                        <div class="s-plan_contents-inner">
                            <section class="s-plan_intro">
                            </section>
                            <section class="s-plan_data s-top-primary_block s-top-primary_ui-block">
                                <div class="s-plan_data-ttlwrap">
                                    <h2 class="s-plan_ttl s-plan_ttl--left common-font-bold">Inquiry.<span class="s-plan_ttl-border common-horizontal2 js-scrollaction-target"></span></h2>
                                </div>
                                <div class="s-plan_data-dtlwrap">
                                    <ul class="s-top-primary_strength1">
                                        <form action="https://api.staticforms.xyz/submit" method="post">
                                            <input type="text" name="honeypot" style="display:none">
                                            <input type="hidden" name="accessKey" value="da0a1e84-8d50-4a0b-9975-50d2419fa733">
                                            <input type="hidden" name="subject" value="お問い合わせ">
                                            <input type="hidden" name="replyTo" value="@">
                                            <input type="hidden" name="redirectTo" value="success.html">
                                            <div class="Form">
                                                <div class="Form-Item">
                                                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>お名前</p>
                                                    <input type="text" name="name" class="Form-Item-Input" placeholder="例）オージーエム太郎" required="required">
                                                </div>
                                                <div class="Form-Item">
                                                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</p>
                                                    <input type="text" name="phone" class="Form-Item-Input" placeholder="例）000-0000-0000" required="required">
                                                </div>
                                                <div class="Form-Item">
                                                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                                                    <input type="email" name="email" class="Form-Item-Input" placeholder="例）example@gmail.com" required="required">
                                                </div>
                                                <div class="Form-Item">
                                                    <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                                                    <textarea name="message" class="Form-Item-Textarea" required="required"></textarea>
                                                </div>
                                                <input type="checkbox" name="checkbox" required="required"><a href="privacy_policy.html">個人情報の取り扱いに同意する</a>

                                                <input type="submit" class="Form-Btn" value="送信する">
                                            </div>
                                        </form>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
</template>
<script setup>
</script>
