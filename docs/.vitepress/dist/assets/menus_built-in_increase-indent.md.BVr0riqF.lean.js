import{d as h,u as p,p as o,c as k,a2 as u,j as i,a,G as e,w as E,k as t,B as g,o as c}from"./chunks/framework.DFElQYQe.js";import{c as m,T as y}from"./chunks/kaitify-vue.es.BnhJkQlk.js";const b={id:"disabled",tabindex:"-1"},f={id:"shortcut",tabindex:"-1"},v={style:{"margin-bottom":"10px"}},q=JSON.parse('{"title":"increase-indent 增加缩进","description":"","frontmatter":{"title":"increase-indent 增加缩进"},"headers":[],"relativePath":"menus/built-in/increase-indent.md","filePath":"menus/built-in/increase-indent.md","lastUpdated":1733134317000}'),x={name:"menus/built-in/increase-indent.md"},A=h({...x,setup(B){const{isDark:r}=p(),n=o("<p>hello</p>");return(F,s)=>{const l=g("Badge");return c(),k("div",null,[s[7]||(s[7]=u(`<h1 id="increase-indent-增加缩进" tabindex="-1">increase-indent 增加缩进 <a class="header-anchor" href="#increase-indent-增加缩进" aria-label="Permalink to &quot;increase-indent 增加缩进&quot;">​</a></h1><p>增加块节点的缩进</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><ul><li>引入组件</li></ul><div class="language-ts vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { IncreaseIndentMenu } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;@kaitify/vue&#39;</span></span></code></pre></div><ul><li>在 <code>Wrapper</code> 包裹器插槽中使用</li></ul><div class="language-html vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">Wrapper</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;content&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> #before</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">IncreaseIndentMenu</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">Wrapper</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><h2 id="props-参数" tabindex="-1">Props 参数 <a class="header-anchor" href="#props-参数" aria-label="Permalink to &quot;Props 参数&quot;">​</a></h2>`,8)),i("h5",b,[s[1]||(s[1]=a("disabled ")),e(l,{type:"danger",text:"boolean"}),s[2]||(s[2]=a()),s[3]||(s[3]=i("a",{class:"header-anchor",href:"#disabled","aria-label":'Permalink to "disabled <Badge type="danger" text="boolean" />"'},"​",-1))]),s[8]||(s[8]=i("p",null,[a("是否禁用该菜单，默认为 "),i("code",null,"false")],-1)),i("h5",f,[s[4]||(s[4]=a("shortcut ")),e(l,{type:"danger",text:"(e: KeyboardEvent) => boolean"}),s[5]||(s[5]=a()),s[6]||(s[6]=i("a",{class:"header-anchor",href:"#shortcut","aria-label":'Permalink to "shortcut <Badge type="danger" text="(e: KeyboardEvent) => boolean" />"'},"​",-1))]),s[9]||(s[9]=i("p",null,[a("菜单快捷键实现，继承自 "),i("code",null,"Menu"),a(" 组件的同名属性，具体使用可参考 "),i("a",{href:"/kaitify-vue/guide/menu.html#shortcut"},"Menu 组件的 shortcut")],-1)),s[10]||(s[10]=i("h2",{id:"代码示例",tabindex:"-1"},[a("代码示例 "),i("a",{class:"header-anchor",href:"#代码示例","aria-label":'Permalink to "代码示例"'},"​")],-1)),e(t(y),{dark:t(r),modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=d=>n.value=d),placeholder:"输入内容...",style:{width:"100%",height:"200px"}},{before:E(()=>[i("div",v,[e(t(m))])]),_:1},8,["dark","modelValue"])])}}});export{q as __pageData,A as default};
