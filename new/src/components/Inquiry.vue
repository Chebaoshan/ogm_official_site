<template>
    <main>
        <section>
            <div class="s-plan_mainvisual">
                <div class="s-top-mainvisual_video">
                </div>
                <div class="s-plan_mainvisual-inner">
                    <div class="s-plan_mainvisual-ttl">
                        <h1 class="title common-font-bold"><span
                                class="common-vertical-white js-scrollaction-target"></span><span
                                class="s-plan_mainvisual-sbttl common-font-en-interval common-font-normal">About</span>
                            <span class="small">Inquiry</span>
                        </h1>
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
                                <h2 class="s-plan_ttl s-plan_ttl--left common-font-bold">Inquiry.<span
                                        class="s-plan_ttl-border common-horizontal2 js-scrollaction-target"></span></h2>
                            </div>
                            <div class="s-plan_data-dtlwrap">
                                <ul class="s-top-primary_strength1">
                                    <form @submit="sendMail">
                                        <div class="Form">
                                            <div class="Form-Item">
                                                <p class="Form-Item-Label"><span
                                                        class="Form-Item-Label-Required">必須</span>お名前</p>
                                                <input v-model.trim="theName" type="text" name="name"
                                                    class="Form-Item-Input" placeholder="例）オージーエム太郎"
                                                    required="required">
                                            </div>
                                            <div class="Form-Item">
                                                <p class="Form-Item-Label"><span
                                                        class="Form-Item-Label-Required">必須</span>電話番号</p>
                                                <input v-model="theTel" type="text" name="phone" class="Form-Item-Input"
                                                    placeholder="例）000-0000-0000" required="required">
                                            </div>
                                            <div class="Form-Item">
                                                <p class="Form-Item-Label"><span
                                                        class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                                                <input v-model="theMail" type="email" name="email"
                                                    class="Form-Item-Input" placeholder="例）example@gmail.com"
                                                    required="required">
                                            </div>
                                            <div class="Form-Item">
                                                <p class="Form-Item-Label isMsg"><span
                                                        class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                                                <textarea v-model="theText" name="message" class="Form-Item-Textarea"
                                                    required="required"></textarea>
                                            </div>
                                            <input type="checkbox" v-model="theTick" name="checkbox"
                                                required="required"><router-link
                                                to="/privacy">個人情報の取り扱いに同意する</router-link>
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
import router from '../routes/router'
import { reactive, toRefs } from 'vue';
const data = reactive({
    theName: null,
    theTel: null,
    theMail: null,
    theText: null,
    theTick: false
})
const { theName, theTel, theMail, theText, theTick } = toRefs(data);
const today = new Date(Date.now()).toLocaleDateString();
const sendMail = (e) => {
    e.preventDefault ();
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ogm.guzhichao@gmail.com",
        Password: "A0A09BBA8B5530F34946F765DCFE810B1294",
        To: '739517015@qq.com',
        From: "ogm.guzhichao@gmail.com",
        Subject: `${today}_网站咨询来稿`,
        Body: `<b>尊敬的宋社长，您好</b> 
               <br/>我是${theName.value}
               <br/>我的电话号码是:${theTel.value}
               <br/>我的邮箱是:${theMail.value}
               <br/>我想咨询的内容是:${theText.value}`
    }).then(
        message => {
            if (message === 'OK') {
                router.push({ path: "/success" })
            } else {
                alert('邮件发送失败！')
            }
        }
    );
}
</script>
