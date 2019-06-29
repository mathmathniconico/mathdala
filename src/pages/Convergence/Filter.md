---
path: "/Convergence/Filter"
author: "mathmathniconico"
date: "2019-06-29"
title: "フィルター"
---

この節では収束構造を語る上での基本的な構想であるfilterについて考える。filterは1937年にHenri Cartanが導入した集合代数の一種で、私が思うに「モノがそこに在る」という人間の認識を数学的に記述したものである。

> Leopold VietorisやGiuseppe Peanoが既に使用していたという話もある。



## filterとprefilter

**定義** $X$を集合とする。$\mathscr{F}\subset 2^{X}, \mathscr{F}\neq\emptyset$が以下の3条件を満たすとき、$\mathscr{F}$はfilterであるという。

- $\emptyset\notin\mathscr{F}$である。
- $G\subset X$について$F\in\mathscr{F}, F\subset G$なら$G\in\mathscr{F}$である。
- $F, G\in\mathscr{F}$なら$F\cap G\in\mathscr{F}$である。

例外的に$2^{X}$を退化したフィルター（degenerate filter）と呼ぶことがある。これはfilterの定義として上記の2番目と3番目のみを用いたものがあることに由来する。この場合は$\emptyset\in\mathscr{F}$と$\mathscr{F}=2^{X}$が同値であることから、空集合を含まないfilter（つまり本稿で述べるところのfilter）を真のフィルター（proper filter）と呼び区別する。

**定義** $X$を集合とする。$\mathscr{B}\subset 2^{X}, \mathscr{B}\neq\emptyset$が以下の2条件を満たすとき、$\mathscr{B}$はprefilterであるという。

- $\emptyset\notin\mathscr{B}$である。
- $A, B\in\mathscr{B}$なら、ある$C\in\mathscr{B}$が存在して$C\subset A\cap B$である。

普通はフィルター基（filter base）と呼ぶが、本稿ではprefilterと呼ぶ。

**命題** $\mathscr{B}\subset 2^{X}$をprefilterとする。このとき$\mathscr{B}$を含む最小のfilterが存在する。

（証明）$\mathscr{F}=\lbrace F : \exists B\in\mathscr{B}, B\subset F \rbrace$と置けばよい。つまり$B\in\mathscr{B}$より大きい集合を集めればよい。$\square$

**定義** 上記のfilterを$\mathscr{B}$が生成するfilterと呼ぶ。

- $A\subset X, A\neq\emptyset$について$\lbrace A \rbrace$はprefilterとなる。$\lbrace A \rbrace$が生成するfilterを単項フィルター（principal filter）という。
- $x\in X$について$A=\lbrace x \rbrace$とした単項フィルターを点フィルター（point filter）という。

**注意** 単項フィルターや点フィルターは、特に誤解が生じない限り$\langle A \rangle, \langle x \rangle$と略記する。



## filterの大小

filterの包含関係は次のように言い換えられる。

**命題** $\mathscr{F}, \mathscr{G}\subset 2^{X}$をfilterとする。TFAE

- $\mathscr{F}\subset\mathscr{G}$である。
- $F\in\mathscr{F}$に対して、ある$G\in\mathscr{G}$が存在して$G\subset F$である。

つまり大きいfilterは細かいfilterである。この言い換えに着想を得て、prefilterの大小を次のように定める。

**定義** $\mathscr{A}, \mathscr{B}\subset 2^{X}$をprefilterとする。関係$\mathscr{A}\dashv\mathscr{B}$を次で定める。

- 任意の$A\in\mathscr{A}$に対して、ある$B\in\mathscr{B}$が存在して$B\subset A$である。

このとき$\mathscr{A}$は$\mathscr{B}$より粗い（coarser）、または$\mathscr{B}$は$\mathscr{A}$より細かい（finer）という。

この定義は次の意味で整合的である。

**命題** $\mathscr{A}, \mathscr{B}\subset 2^{X}$をprefilterとする。TFAE

- $\mathscr{A}\dashv\mathscr{B}$である。
- $\langle \mathscr{A} \rangle\subset\langle \mathscr{B} \rangle$である。

関係$\dashv$は反射的（$\mathscr{A}\dashv\mathscr{A}$）かつ推移的（$\mathscr{A}\dashv\mathscr{B}, \mathscr{B}\dashv\mathscr{C}$なら$\mathscr{A}\dashv\mathscr{C}$）である。（このような関係は一般的に前順序（preorder）と呼ばれる。）従って$\mathscr{A}\sim\mathscr{B}$を$\mathscr{A}\dashv\mathscr{B}$かつ$\mathscr{B}\dashv\mathscr{A}$で定めると、関係$\sim$は同値関係となる。命題より$\mathscr{A}\sim\mathscr{B}$は$\langle \mathscr{A} \rangle=\langle \mathscr{B} \rangle$と同値であるから、同値類は生成するfilterで特徴付けられる。

$\mathscr{A}\subset 2^{X}$をprefilterとする。$S\subset X$は$S\notin\mathscr{A}$を満たすとする。このとき

$$
\lbrace A\backslash S : A\in\mathscr{A} \rbrace
$$

は$\mathscr{A}$より細かいprefilterとなる。特にこれが生成するfilterを

$$
\mathscr{A}_{\neg S}:=\langle \lbrace A\backslash S : A\in\mathscr{A} \rbrace \rangle=\lbrace V : \exists A\in\mathscr{A}, A\backslash S\subset V \rbrace
$$

と表す。



## wedge積とvel積

**定義** $\mathscr{F}, \mathscr{G}\subset 2^{X}$をfilterとする。$\mathscr{F}$と$\mathscr{G}$のwedge積を

$$
\mathscr{F}\wedge\mathscr{G}:=\mathscr{F}\cap\mathscr{G}
$$

で定める。またfilterの族$\lbrace \mathscr{F}_{\lambda} : \lambda\in\Lambda \rbrace$について、そのwedge積を

$$
\bigwedge_{\lambda\in\Lambda}\mathscr{F}_{\lambda}:=\bigcap_{\lambda\in\Lambda}\mathscr{F}_{\lambda}
$$

で定める。

- 上記のwedge積はfilterとなる。更に包含関係に関するfilterの下限を与える。

つまり$\mathscr{F}, \mathscr{G}$に含まれるfilterは必ず$\mathscr{F}\wedge\mathscr{G}$に含まれる。

> prefilter同士のwedge積は考えない。

**定義** 一般に$\mathscr{A}, \mathscr{B}\subset 2^{X}$は空でない集合族とする。任意の$A\in\mathscr{A}, B\in\mathscr{B}$について$A\cap B\neq\emptyset$であるとき、組$( \mathscr{A}, \mathscr{B} )$をmeshと呼ぶ。

**定義** $\mathscr{A}, \mathscr{B}\subset 2^{X}$をprefilterとする。$( \mathscr{A}, \mathscr{B} )$はmeshとする。$\mathscr{A}$と$\mathscr{B}$のvel積を

$$
\mathscr{A}\vee\mathscr{B}:=\lbrace A\cap B : A\in\mathscr{A}, B\in\mathscr{B} \rbrace
$$

で定める。

- 上記のvel積はprefilterとなる。更に関係$\dashv$に関するprefilterの上限を与える。
- filter同士のvel積はfilterとなる。

**注意** prefilter同士のvel積は包含関係に関するprefilterの上限を与えるとは限らない。filter同士の場合はfilterの上限を与える。

**命題** $\mathscr{A}, \mathscr{B}\subset 2^{X}$をprefilterとする。$( \mathscr{A}, \mathscr{B} )$はmeshとする。vel積は生成と可換である。つまり

$$
\langle \mathscr{A} \rangle\vee\langle \mathscr{B} \rangle=\langle \mathscr{A}\vee\mathscr{B} \rangle
$$

が成り立つ。

