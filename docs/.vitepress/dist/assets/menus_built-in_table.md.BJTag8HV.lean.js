import{d as o,u as d,p as h,c as k,a2 as u,j as a,a as i,G as t,w as g,k as l,B as m,o as E}from"./chunks/framework.DFElQYQe.js";import{G as b,T as y}from"./chunks/kaitify-vue.es.BnhJkQlk.js";const x={id:"disabled",tabindex:"-1"},f={id:"popoverprops",tabindex:"-1"},v={id:"maxrows",tabindex:"-1"},B={id:"maxcolumns",tabindex:"-1"},P={style:{"margin-bottom":"10px"}},A=JSON.parse('{"title":"table 表格","description":"","frontmatter":{"title":"table 表格"},"headers":[],"relativePath":"menus/built-in/table.md","filePath":"menus/built-in/table.md","lastUpdated":1733134317000}'),F={name:"menus/built-in/table.md"},V=o({...F,setup(D){const{isDark:p}=d(),n=h("<p>hello</p>");return(C,s)=>{const e=m("Badge");return E(),k("div",null,[s[13]||(s[13]=u(`<h1 id="table-表格" tabindex="-1">table 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;table 表格&quot;">​</a></h1><p>插入表格</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><ul><li>引入组件</li></ul><div class="language-ts vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { TableMenu } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;@kaitify/vue&#39;</span></span></code></pre></div><ul><li>在 <code>Wrapper</code> 包裹器插槽中使用</li></ul><div class="language-html vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">Wrapper</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;content&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> #before</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">TableMenu</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;--shiki-light:#B31D28;--shiki-light-font-style:italic;">Wrapper</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><h2 id="props-参数" tabindex="-1">Props 参数 <a class="header-anchor" href="#props-参数" aria-label="Permalink to &quot;Props 参数&quot;">​</a></h2>`,8)),a("h5",x,[s[1]||(s[1]=i("disabled ")),t(e,{type:"danger",text:"boolean"}),s[2]||(s[2]=i()),s[3]||(s[3]=a("a",{class:"header-anchor",href:"#disabled","aria-label":'Permalink to "disabled <Badge type="danger" text="boolean" />"'},"​",-1))]),s[14]||(s[14]=a("p",null,[i("是否禁用该菜单，默认为 "),a("code",null,"false")],-1)),a("h5",f,[s[4]||(s[4]=i("popoverProps ")),t(e,{type:"danger",text:"MenuPropsType['popoverProps']"}),s[5]||(s[5]=i()),s[6]||(s[6]=a("a",{class:"header-anchor",href:"#popoverprops","aria-label":`Permalink to "popoverProps <Badge type="danger" text="MenuPropsType['popoverProps']" />"`},"​",-1))]),s[15]||(s[15]=a("p",null,[i("浮层属性配置，同 "),a("code",null,"Menu"),i(" 的 "),a("code",null,"popoverProps"),i(" 属性")],-1)),a("h5",v,[s[7]||(s[7]=i("maxRows ")),t(e,{type:"danger",text:"number"}),s[8]||(s[8]=i()),s[9]||(s[9]=a("a",{class:"header-anchor",href:"#maxrows","aria-label":'Permalink to "maxRows <Badge type="danger" text="number" />"'},"​",-1))]),s[16]||(s[16]=a("p",null,"创建表格时的最大行数",-1)),a("h5",B,[s[10]||(s[10]=i("maxColumns ")),t(e,{type:"danger",text:"number"}),s[11]||(s[11]=i()),s[12]||(s[12]=a("a",{class:"header-anchor",href:"#maxcolumns","aria-label":'Permalink to "maxColumns <Badge type="danger" text="number" />"'},"​",-1))]),s[17]||(s[17]=a("p",null,"创建表格时的最大列数",-1)),s[18]||(s[18]=a("h2",{id:"代码示例",tabindex:"-1"},[i("代码示例 "),a("a",{class:"header-anchor",href:"#代码示例","aria-label":'Permalink to "代码示例"'},"​")],-1)),t(l(y),{dark:l(p),modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r),placeholder:"输入内容...",style:{width:"100%",height:"200px"}},{before:g(()=>[a("div",P,[t(l(b))])]),_:1},8,["dark","modelValue"])])}}});export{A as __pageData,V as default};
