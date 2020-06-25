<!-- Project Name -->
# [ますだら](https://mathdala.netlify.app/)

<!-- Overview -->
個人的な数学サイト。命名は数学と曼荼羅から。だらだら学んだ数学についてちょっと語ります。

<!-- Description -->
## 仕組み

だいぶ前に作ったので忘れてるが以下のような記事を書いた。

- [GitHub+GitBook+VSCode+KaTeXによる数学文章作成について](https://arxiv.hatenablog.com/entry/2018/09/27/203000)
- [数学サイト「ますだら」を作ってみた](https://arxiv.hatenablog.com/entry/2019/03/23/233208)
- [GatsbyでMDXを試したけど案の定ド嵌りした](https://arxiv.hatenablog.com/entry/2019/07/16/201331)

1. **Visual Studio Code**

    記事を書く為に使うエディタ。様々なプラグインが提供されており、ハイライトはもちろんmarkdownのプレビューもできる。Markdown+Mathというプラグインを用いれば、次のKaTeXによる数式プレビューも可能。

1. **KaTeX**

    高速に数式を表示できる謎ライブラリ。

1. **GitHub**

    ここ。ファイルのバージョン管理とかできる。

1. **GatsbyJS**

    静的サイトジェネレータ。Reactが使えるので強い。

    ローカルでビルドする場合は    
    ```sh
    gatsby develop
    ```

    作られたサイトは`http://localhost:8000`で確認できる。

1. **Netlify**

    ホスティングサービス。GitHubのリンクを貼れば自動でビルドして公開してくれるので、わざわざローカルでビルドしてGitHubに挙げる必要が無くなる。

1. **MDX**

    Markdown内にReactコードを書くという謎技術が実現できる。


<!-- Contents -->
## ファイル構成

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.



### Gatsbyについて

1. [GatsbyJS](https://www.gatsbyjs.org/)

1. [ドキュメント](https://www.gatsbyjs.org/docs/)


<!-- Author -->
## 作者について

1. [arXiv探訪](https://arxiv.hatenablog.com/)

    作者のブログ

1. [マストドン](https://mathtod.online/@mathmathniconico)

    mathtod.onlineは数式の書けるマストドンのインスタンス