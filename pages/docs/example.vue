<template lang="pug">
AppPage
  header.header(role="header" slot="header")
    div.index 05
    h1 티스토리 예제
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="템플릿 작성") 템플릿 작성
      p 티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 #[b 블로그의 제목과 메뉴]를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.
      p
        blockquote.blockquote-type-3
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Header
            │           ├── BlogTitle.pug
            │           └── BlogMenu.pug
            └── index.pug
      h3(id="index") index.pug
      p 현재 #[b views/Header] 파일이 포함되어 있습니다. 여기서 #[b views/Header] 템플릿은 #[b 부모 템플릿]이 됩니다.
      p
        pre(data-label="index.pug")
          code.lang-pug {{ index }}
      h3(id="header") views/header.pug
      p 이번에는 #[b Header/BlogTitle] 과 #[b Header/BlogMenu] 를 포함하고 있습니다. 각각 #[b 블로그 제목] 과 #[b 블로그 메뉴]입니다. 이 둘은 #[b 자식 템플릿]입니다.
      p
        pre(data-label="views/Header.pug")
          code.lang-pug {{ header }}
      h3(id="blogTitle") views/Header/blogTitle.pug
      p #[b 블로그 제목]의 #[b h1]태그 내부에는 #[b style] 태그가 쓰인 것을 알 수 있습니다. 여기서 #[b style] 태그는 빌드하면 #[b style.css] 파일로, #[b script] 태그를 사용하면 #[b images/script.js] 파일로 분리됩니다!
      p
        pre(data-label="views/Header/BlogTitle.pug")
          code.lang-pug {{ blogTitle }}
      h3(id="blogMenu") views/Header/blogMenu.pug
      p #[b 블로그 메뉴]의 #[b style, script] 태그에 #[b scoped] 옵션이 쓰인 것을 볼 수 있습니다. 이 옵션을 쓰면, 해당 태그에 각각 파일로 분리되지 않고 제자리에 남게됩니다.
      p
        pre(data-label="views/Header/BlogMenu.pug")
          code.lang-pug {{ blogMenu }}
    article.paragraph
      h2(id="프로덕션 코드") 프로덕션 코드
      p 우리가 만든 스킨을 이제 사용자에게 배포하기 위해 #[b 빌드]하면 다음과 같은 코드로 나뉘어집니다. #[b div#__tidory] 는 #[b layouts/default.pug] 에 정의되어 있습니다.
      h3(id="skin") skin.html
      p
        pre(data-label="skin.html")
          code.lang-html {{ skin }}
      h3(id="style") style.css
      p
        pre(data-label="style.css")
          code.lang-css {{ style }}
      h3(id="script") images/script.js
      p
        pre(data-label="images/script.js")
          code.lang-javascript {{ script }}
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: nuxt-link(to="/docs/template/") #[i.fas.fa-angle-left] 템플릿
      div.right: nuxt-link(to="/docs/framework/") 프레임워크 #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  mounted() {
    this.$store.commit('activeMenu', 4);
  },
  components: {
    AppPage
  },
  data() {
    return {
      index: `extends ./layouts/default

block TIDORY
  //- template
  include views/Header`,
      header: `header#header(role="header")
  //- Tistory Blog Title
  include Header/BlogTitle
  //- Tistory Blog Menu
  include Header/BlogMenu`,
      blogTitle: `h1
  style.
    h1 > a {
      color: orange;
      text-decoration: none;
    }
  //- skin.html
  a(href="[##_blog_link_##]") 
    img(src="./images/logo.png")
    | [##_title_##]
  //- script.js
  script.
    console.log("Hello, World!")`,
      blogMenu: `nav#nav(role="navigation)
  style.
    nav {
      font-size: 0.9em;
      color: green;
      font-weight: bold;
    }
  //- skin.html
  | [##_blog_menu_##]
  script(scoped).
    console.log("Hello, World!")`,
      skin: `<div id="__tidory">
  <header id="header" role="header">
    <h1>
      <a href="[##_blog_link_##]">
        <img src="./images/logo.png">
        [##_title_##]
      </a>
    </h1>
    <nav id="nav" role="navigation">
      <style>
        nav {
          font-size: .9em;
          color: green;
          font-weight: 700
        }
      </style>
      [##_blog_menu_##]
      \<script\>
        console.log("Hello, World!");
      \<\/script\>
    </nav>
  </header>
</div>`,
      style: `h1 > a {
  color: orange;
  text-decoration: none
}
nav {
  font-size: 0.9em;
  color: green;
  font-weight: bold;
}`,
      script: `"use strict";

console.log("Hello, World!");`
    }
  }
}
</script>
