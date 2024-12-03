import{d as h,u as e,p,c as k,a2 as E,G as t,w as r,k as i,o as d,j as o}from"./chunks/framework.DFElQYQe.js";import{e as g,T as y}from"./chunks/kaitify-vue.es.BnhJkQlk.js";const c={style:{"margin-bottom":"10px"}},B=JSON.parse('{"title":"简介","description":"","frontmatter":{"title":"简介"},"headers":[],"relativePath":"menus/introduction.md","filePath":"menus/introduction.md","lastUpdated":1733122116000}'),u={name:"menus/introduction.md"},v=h({...u,setup(m){const{isDark:n}=e(),a=p("<p>hello</p>");return(F,s)=>(d(),k("div",null,[s[1]||(s[1]=E(`<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><h2 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-label="Permalink to &quot;基本介绍&quot;">​</a></h2><p>内置菜单是 <code>kaitify-vue</code> 内部使用 <code>Menu</code> 组件封装的一系列具有实际操作功能的菜单组件，每一个内置菜单的操作都是已经实现完成的了</p><p>内置菜单已经定义好了菜单各种情况下的状态，无需我们去关心什么时候该禁用、什么时候该激活，你可以直接拿来使用</p><p>除此之外，这些菜单也会提供一些参数让你可以进行灵活配置</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p>以加粗菜单为例：</p><div class="language-vue vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-dark github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">Wrapper</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> v-model</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">content</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> #</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">before</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">BoldMenu</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">Wrapper</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> lang</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;ts&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { Wrapper, BoldMenu } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;@kaitify/vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> { ref } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> content</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&#39;&lt;p&gt;hello&lt;/p&gt;&#39;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#85E89D;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>示例：</p>`,9)),t(i(y),{dark:i(n),modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),placeholder:"输入内容...",style:{width:"100%",height:"200px"}},{before:r(()=>[o("div",c,[t(i(g))])]),_:1},8,["dark","modelValue"])]))}});export{B as __pageData,v as default};
