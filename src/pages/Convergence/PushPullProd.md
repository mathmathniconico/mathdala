---
path: "/Convergence/PushPullProd"
author: "mathmathniconico"
date: "2019-06-29"
title: "押し出し・引き戻し・直積"
---

前節では集合$X$を固定して、その上のfilterやprefilterについて考えた。ここでは写像$f\colon X\rightarrow Y$に対するこれらの振る舞いを調べよう。またその応用としてfilterの直積を紹介する。



## pushforwardとpullback

**命題** $X, Y$を集合とする。$\mathscr{A}\subset 2^{X}$を$X$のprefilterとする。写像$f\colon X\rightarrow Y$について

$$
f\mathscr{A}:=\lbrace f( V )\subset Y : V\in\mathscr{A} \rbrace\subset 2^{Y}
$$

は$Y$のprefilterとなる。

**定義** 特に$\mathscr{A}=\mathscr{F}$がfilterのとき

$$
f_{\ast}\mathscr{F}:=\langle f\mathscr{F} \rangle
$$

を$f$による$\mathscr{F}$のpushforwardと呼ぶ。

**命題** $X, Y$を集合とする。$\mathscr{B}\subset 2^{Y}$を$Y$のprefilterとする。写像$f\colon X\rightarrow Y$について、任意の$B\in\mathscr{B}$が$f^{-1}( B )\neq\emptyset$を満たすとする。このとき

$$
f^{-1}\mathscr{B}:=\lbrace f^{-1}( W )\subset X : W\in\mathscr{B} \rbrace\subset 2^{X}
$$

は$X$のprefilterとなる。

**定義** 特に$\mathscr{B}=\mathscr{G}$がfilterのとき

$$
f^{\ast}\mathscr{G}:=\langle f^{-1}\mathscr{G} \rangle
$$

を$f$による$\mathscr{G}$のpullbackと呼ぶ。

**注意** $f^{-1}\mathscr{B}$の方は、逆像が空でないという条件が必要である。

次に定義から従う素朴な性質を確認する。

**命題** pushforwardは生成と可換である。即ち写像$f\colon X\rightarrow Y$及びprefilter$\mathscr{A}\subset 2^{X}$に対して

$$
f_{\ast}\langle \mathscr{A} \rangle=\langle f\mathscr{A} \rangle
$$

が成り立つ。

（証明）$f_{\ast}\langle \mathscr{A} \rangle \supset f\langle \mathscr{A} \rangle \supset f\mathscr{A}$なので、生成の最小性より$f_{\ast}\langle \mathscr{A} \rangle\supset\langle f\mathscr{A} \rangle$が従う。よって逆を示せば良い。左辺から元を取り$F\in f_{\ast}\langle \mathscr{A} \rangle$とする。定義より$G\in\langle \mathscr{A} \rangle$が存在して$f( G )\subset F$と表せる。更に定義より$G$について$H\in\mathscr{A}$が存在して$H\subset G$と表せる。よって$f( H )\subset f( G )\subset F$だから$F\in\langle f\mathscr{A} \rangle$が分かる。$\square$

**命題** pushforwardは推移性を満たす。即ち写像$f\colon X\rightarrow Y, g\colon Y\rightarrow Z$の合成に対して

$$
( g\circ f )_{\ast}=g_{\ast}\circ f_{\ast}
$$

が成り立つ。

**命題** $f\colon X\rightarrow Y$を写像とする。$\mathscr{F}\subset 2^{X}, \mathscr{G}\subset 2^{Y}$をそれぞれ$X, Y$のfilterとする。以下が成り立つ。

- $f_{\ast}\mathscr{F}$のpullbackは常に定義できて$\mathscr{F}\subset f^{\ast}( f_{\ast}\mathscr{F} )$を満たす。
- 任意の$G\in\mathscr{G}$が$f^{-1}( G )\neq\emptyset$を満たすなら（$\mathscr{G}$のpullbackが定義できるなら）$\mathscr{G}\subset f_{\ast}( f^{\ast}\mathscr{G} )$が成り立つ。

興味があるのは上の包含が等式となる条件だろう。次の二つの補題の系として得られる。

**補題** 写像が全射ならpushforwardはfilterの像と一致する。つまり全射$f\colon X\rightarrow Y$及びfilter$\mathscr{F}\subset 2^{X}$に対して

$$
f_{\ast}\mathscr{F}=f\mathscr{F}
$$

が成り立つ。

（証明）$G\in f_{\ast}\mathscr{F}$とする。ある$F\in\mathscr{F}$が存在して$f( F )\subset G$が成り立つ。$F\subset f^{-1}( f( F ) )\subset f^{-1}( G )$より$f^{-1}( G )\in\mathscr{F}$である。$f$は全射なので$G=f( f^{-1}( G ) )\in f\mathscr{F}$を得る。$\square$

写像が全射のときはpullbackは常に定義できる。

**補題** 写像が全単射ならpullbackはfilterの逆像と一致する。つまり全単射$f\colon X\rightarrow Y$及びfilter$\mathscr{G}\subset 2^{Y}$に対して

$$
f^{\ast}\mathscr{G}=f^{-1}\mathscr{G}
$$

が成り立つ。特に$f^{-1}\mathscr{G}$はfilterである。

**系** $f\colon X\rightarrow Y$を全単射とする。$\varphi X, \varphi Y$を$X, Y$のfilter全体の集合とする。このとき

$$
\begin{aligned} f^{\ast}\circ f_{\ast}&=\mathrm{id}_{\varphi X}, & f_{\ast}\circ f^{\ast}&=\mathrm{id}_{\varphi Y} \end{aligned}
$$

が成り立つ。



## filterの直積

**命題** $X, Y$を集合とする。$\mathscr{A}\subset 2^{X}, \mathscr{B}\subset 2^{Y}$をそれぞれのprefilterとする。

$$
\mathscr{A}\times\mathscr{B}=\lbrace A\times B : A\in\mathscr{A}, B\in\mathscr{B} \rbrace\subset 2^{X\times Y}
$$

は$X\times Y$のprefilterとなる。

**定義** 特に$\mathscr{A}=\mathscr{F}, \mathscr{B}=\mathscr{G}$がfilterのとき

$$
\mathscr{F}\prod\mathscr{G}:=\langle \mathscr{F}\times\mathscr{G} \rangle
$$

を$\mathscr{F}$と$\mathscr{G}$の直積フィルター（product filter）と呼ぶ。

射影は全射なので、filterのpushforwardはその像と一致する。例えば射影$\pi_{X}\colon X\times Y\rightarrow X$と$X\times Y$のfilter $\mathscr{F}\subset 2^{X\times Y}$について$\pi_{X}\mathscr{F}\subset 2^{X}$は$X$のfilterである。

**注意** 有限直積に対しても同様に定義できて、本質的に同じfilterを定める。ただし一般の添え字集合について直積は考えない。prefilterの積がprefilterになるとは限らないためである。

以下は基本的な操作である。

- prefilter $\mathscr{A}\subset 2^{X}, \mathscr{B}\subset 2^{Y}$について$\mathscr{A}=\pi_{X}( \mathscr{A}\times\mathscr{B} ), \mathscr{B}=\pi_{Y}( \mathscr{A}\times\mathscr{B} )$が成り立つ。
- filter $\mathscr{F}\subset 2^{X}, \mathscr{G}\subset 2^{Y}$について$\mathscr{F}\subset\pi_{X}( \mathscr{F}\prod\mathscr{G} ), \mathscr{G}\subset\pi_{Y}( \mathscr{F}\prod\mathscr{G} )$が成り立つ。

**命題** $\mathscr{A}\subset 2^{X\times Y}$をprefilterとする。$\pi_{X}, \pi_{Y}$を射影とする。このとき

$$
\pi_{X}\mathscr{A}\times\pi_{Y}\mathscr{A}\dashv\mathscr{A}
$$

が成り立つ。特に$\mathscr{A}=\mathscr{F}$がfilterのとき

$$
\pi_{X}\mathscr{F}\prod\pi_{Y}\mathscr{F}\subset\mathscr{F}
$$

が成り立つ。

（証明）$A, B\in\mathscr{A}$とする。ある$C\in\mathscr{A}$が存在して$C\subset A\cap B$を満たす。$A\cap B\subset\pi_{X}( A )\times\pi_{Y}( B )$より従う。$\square$



