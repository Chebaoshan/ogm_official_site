import{r as F,t as I,g as f,o as g,c as q,a as e,j as l,v as u,u as o,k as n,l as x,h as y,w as k,e as w,b as a,m as T,_ as B}from"./index.7f73d7f9.js";const L=w('<div class="s-plan_mainvisual"><div class="s-top-mainvisual_video"></div><div class="s-plan_mainvisual-inner"><div class="s-plan_mainvisual-ttl"><h1 class="title common-font-bold"><span class="common-vertical-white js-scrollaction-target"></span><span class="s-plan_mainvisual-sbttl common-font-en-interval common-font-normal">About</span><span class="small">Inquiry</span></h1><p class="common-font-bold">\u304A\u554F\u3044\u5408\u308F\u305B</p></div><figure class="s-plan_mainvisual-bk"><img src="'+B+'" alt="About For Inquiry"></figure></div></div>',1),V={class:"s-plan_contents"},D={class:"l-left-wrapper"},M={class:"s-plan_contents-inner"},N=e("section",{class:"s-plan_intro"},null,-1),R={class:"s-plan_data s-top-primary_block s-top-primary_ui-block"},U=e("div",{class:"s-plan_data-ttlwrap"},[e("h2",{class:"s-plan_ttl s-plan_ttl--left common-font-bold"},[a("Inquiry."),e("span",{class:"s-plan_ttl-border common-horizontal2 js-scrollaction-target"})])],-1),j={class:"s-plan_data-dtlwrap"},A={class:"s-top-primary_strength1"},$={class:"Form"},C={class:"Form-Item"},S=e("p",{class:"Form-Item-Label"},[e("span",{class:"Form-Item-Label-Required"},"\u5FC5\u9808"),a("\u304A\u540D\u524D")],-1),z={class:"Form-Item"},E=e("p",{class:"Form-Item-Label"},[e("span",{class:"Form-Item-Label-Required"},"\u5FC5\u9808"),a("\u96FB\u8A71\u756A\u53F7")],-1),H={class:"Form-Item"},K=e("p",{class:"Form-Item-Label"},[e("span",{class:"Form-Item-Label-Required"},"\u5FC5\u9808"),a("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9")],-1),O={class:"Form-Item"},P=e("p",{class:"Form-Item-Label isMsg"},[e("span",{class:"Form-Item-Label-Required"},"\u5FC5\u9808"),a("\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9")],-1),G=e("input",{type:"submit",class:"Form-Btn",value:"\u9001\u4FE1\u3059\u308B"},null,-1),W={__name:"Inquiry",setup(J){const _=F({theName:null,theTel:null,theMail:null,theText:null,theTick:!1}),{theName:i,theTel:r,theMail:m,theText:c,theTick:d}=I(_),v=new Date(Date.now()).toLocaleDateString(),h=p=>{p.preventDefault(),Email.send({Host:"smtp.elasticemail.com",Username:"ogm.guzhichao@gmail.com",Password:"A0A09BBA8B5530F34946F765DCFE810B1294",To:"info@ogm-jp.com",From:"ogm.guzhichao@gmail.com",Subject:`${v}_\u7F51\u7AD9\u54A8\u8BE2\u6765\u7A3F`,Body:`<b>\u5C0A\u656C\u7684\u5B8B\u793E\u957F\uFF0C\u60A8\u597D</b> 
               <br/>\u6211\u662F${i.value}
               <br/>\u6211\u7684\u7535\u8BDD\u53F7\u7801\u662F:${r.value}
               <br/>\u6211\u7684\u90AE\u7BB1\u662F:${m.value}
               <br/>\u6211\u60F3\u54A8\u8BE2\u7684\u5185\u5BB9\u662F:${c.value}`}).then(s=>{s==="OK"?T.push({path:"/success"}):alert("\u90AE\u4EF6\u53D1\u9001\u5931\u8D25\uFF01")})};return(p,s)=>{const b=f("router-link");return g(),q("main",null,[e("section",null,[L,e("div",V,[e("div",D,[e("div",M,[N,e("section",R,[U,e("div",j,[e("ul",A,[e("form",{onSubmit:h},[e("div",$,[e("div",C,[S,l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>n(i)?i.value=t:null),type:"text",name:"name",class:"Form-Item-Input",placeholder:"\u4F8B\uFF09\u30AA\u30FC\u30B8\u30FC\u30A8\u30E0\u592A\u90CE",required:"required"},null,512),[[u,o(i),void 0,{trim:!0}]])]),e("div",z,[E,l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>n(r)?r.value=t:null),type:"text",name:"phone",class:"Form-Item-Input",placeholder:"\u4F8B\uFF09000-0000-0000",required:"required"},null,512),[[u,o(r)]])]),e("div",H,[K,l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>n(m)?m.value=t:null),type:"email",name:"email",class:"Form-Item-Input",placeholder:"\u4F8B\uFF09example@gmail.com",required:"required"},null,512),[[u,o(m)]])]),e("div",O,[P,l(e("textarea",{"onUpdate:modelValue":s[3]||(s[3]=t=>n(c)?c.value=t:null),name:"message",class:"Form-Item-Textarea",required:"required"},null,512),[[u,o(c)]])]),l(e("input",{type:"checkbox","onUpdate:modelValue":s[4]||(s[4]=t=>n(d)?d.value=t:null),name:"checkbox",required:"required"},null,512),[[x,o(d)]]),y(b,{to:"/privacy"},{default:k(()=>[a("\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u540C\u610F\u3059\u308B")]),_:1}),G])],32)])])])])])])])])}}};export{W as default};
