import{d as h,u as p,p as o,c as k,a2 as u,j as e,a,G as i,w as E,k as t,B as g,o as c}from"./chunks/framework.DFElQYQe.js";import{b as m,T as y}from"./chunks/kaitify-vue.es.BnhJkQlk.js";const b={id:"disabled",tabindex:"-1"},f={id:"shortcut",tabindex:"-1"},v={style:{"margin-bottom":"10px"}},q=JSON.parse('{"title":"decrease-indent 减少缩进","description":"","frontmatter":{"title":"decrease-indent 减少缩进"},"headers":[],"relativePath":"menus/built-in/decrease-indent.md","filePath":"menus/built-in/decrease-indent.md","lastUpdated":1733124470000}'),x={name:"menus/built-in/decrease-indent.md"},A=h({...x,setup(B){const{isDark:d}=p(),n=o('<p style="text-indent:5em;">hello</p>');return(D,s)=>{const l=g("Badge");return c(),k("div",null,[s[7]||(s[7]=u(`<h1 id="decrease-indent-减少缩进" tabindex="-1">decrease-indent 减少缩进 <a class="header-anchor" href="#decrease-indent-减少缩进" aria-label="Permalink to &quot;decrease-indent 减少缩进&quot;">​</a></h1><p>减少块节点的缩进</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><ul><li>引入组件</li></ul><div class="language-ts vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { DecreaseIndentMenu } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;@kaitify/vue&#39;</span></span></code></pre></div><ul><li>在 <code>Wrapper</code> 包裹器插槽中使用</li></ul><div class="language-html vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">Wrapper</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;content&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> #before</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">DecreaseIndentMenu</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">Wrapper</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><h2 id="props-参数" tabindex="-1">Props 参数 <a class="header-anchor" href="#props-参数" aria-label="Permalink to &quot;Props 参数&quot;">​</a></h2>`,8)),e("h5",b,[s[1]||(s[1]=a("disabled ")),i(l,{type:"danger",text:"boolean"}),s[2]||(s[2]=a()),s[3]||(s[3]=e("a",{class:"header-anchor",href:"#disabled","aria-label":'Permalink to "disabled <Badge type="danger" text="boolean" />"'},"​",-1))]),s[8]||(s[8]=e("p",null,[a("是否禁用该菜单，默认为 "),e("code",null,"false")],-1)),e("h5",f,[s[4]||(s[4]=a("shortcut ")),i(l,{type:"danger",text:"(e: KeyboardEvent) => boolean"}),s[5]||(s[5]=a()),s[6]||(s[6]=e("a",{class:"header-anchor",href:"#shortcut","aria-label":'Permalink to "shortcut <Badge type="danger" text="(e: KeyboardEvent) => boolean" />"'},"​",-1))]),s[9]||(s[9]=e("p",null,[a("菜单快捷键实现，继承自 "),e("code",null,"Menu"),a(" 组件的同名属性，具体使用可参考 "),e("a",{href:"/kaitify-vue/guide/menu.html#shortcut"},"Menu 组件的 shortcut")],-1)),s[10]||(s[10]=e("h2",{id:"代码示例",tabindex:"-1"},[a("代码示例 "),e("a",{class:"header-anchor",href:"#代码示例","aria-label":'Permalink to "代码示例"'},"​")],-1)),i(t(y),{dark:t(d),modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r),placeholder:"输入内容...",style:{width:"100%",height:"200px"}},{before:E(()=>[e("div",v,[i(t(m))])]),_:1},8,["dark","modelValue"])])}}});export{q as __pageData,A as default};
