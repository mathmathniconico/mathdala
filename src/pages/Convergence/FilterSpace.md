---
path: "/Convergence/FilterSpace"
author: "mathmathniconico"
date: "2019-06-29"
title: "フィルター空間"
---

フィルター空間は最も基本的な収束構造の一つであり、最も基本的な形で写像の連続性を定義することができる。フィルター空間を集めたものは連続写像を射とする圏を成す。この圏はcartesian閉である。つまり終対象・直積対象・冪対象を持つ。




## フィルター空間

**定義** $X$を集合とする。任意の$x\in X$に対して$X$のfilterからなる集合$\lambda( x )$が与えられており、以下の2条件を満たすとする。

- $\langle x \rangle\in\lambda( x )$である。
- filter $\mathscr{F}, \mathscr{G}\subset 2^{X}$について、$\mathscr{F}\subset\mathscr{G}$かつ$\mathscr{F}\in\lambda( x )$なら$\mathscr{G}\in\lambda( x )$が成り立つ。

このとき$( X, \lambda )$で表される組をフィルター空間（filter space）、あるいはフィルター場と呼ぶ。

$\lambda$をフィルターと点の関係とみなして$\mathscr{F}\in\lambda( x )$を$\mathscr{F}\rightarrow x$と表すと便利である。この記法の下でフィルター空間を単に$X$などと表す。$x$を$\mathscr{F}$の極限点（limit point）と呼ぶこともある。

**定義** $X, Y$をフィルター空間、$x\in X$とする。写像$f\colon X\rightarrow Y$は以下を満たすとする。

- 任意のfilter $\mathscr{F}\subset 2^{X}$に対して、$\mathscr{F}\rightarrow x$なら$f_{\ast}\mathscr{F}\rightarrow f( x )$が成り立つ。

このとき$f$は$x$で連続（continuous）であるという。任意の$x\in X$で連続のとき$f$は連続であるという。

- $\mathrm{id}_{X}$は連続である。
- $f\colon X\rightarrow Y, g\colon Y\rightarrow X$が連続なら$g\circ f\colon X\rightarrow Z$も連続である。

**注意** 圏論的な意味での終対象は、一点集合とその生成する点フィルターからなるフィルター空間$( \lbrace \ast \rbrace, \lambda( \ast )=\langle \ast \rangle )$である。




## フィルター空間の直積

**命題** $X, Y$をフィルター空間とする。$( x, y )\in X\times Y$及びfilter $\mathscr{F}\subset 2^{X\times Y}$に対して、$\mathscr{F}\rightarrow ( x, y )$を以下で定める。

- 射影$\pi_{X}, \pi_{Y}$について$\pi_{X}\mathscr{F}\rightarrow x$かつ$\pi_{Y}\mathscr{F}\rightarrow y$が成り立つ。

このとき$X\times Y$はフィルター空間となる。

（証明）まず$\mathscr{F}:=\langle ( x, y ) \rangle\rightarrow ( x, y )$を示す。$x\in A\subset X, y\in B\subset Y$に対して$( x, y )\in A\times B$より$A\times B\in\mathscr{F}$である。よって$A\in\pi_{X}\mathscr{F}, B\in\pi_{Y}\mathscr{F}$が分かる。つまり$\langle x \rangle\subset\pi_{X}\mathscr{F}, \langle y \rangle\subset\pi_{Y}\mathscr{F}$であり、フィルター空間の定義より$\pi_{X}\mathscr{F}\rightarrow x, \pi_{Y}\mathscr{F}\rightarrow y$を得る。

filter $\mathscr{F}, \mathscr{G}\subset 2^{X\times Y}$及び$( x, y )\in X$について$\mathscr{F}\rightarrow ( x, y ), \mathscr{F}\subset\mathscr{G}$とする。$\mathscr{G}\rightarrow ( x, y )$であることは、$\pi_{X}\mathscr{F}\subset\pi_{X}\mathscr{G}$及び$\pi_{Y}\mathscr{F}\subset\pi_{Y}\mathscr{G}$より直ちに分かる。$\square$

**定義** 上記のフィルター空間を$X, Y$の直積空間という。

**命題** $X, Y$をフィルター空間とする。$X$において$\mathscr{F}\rightarrow x$、$Y$において$\mathscr{G}\rightarrow y$なら$X\times Y$において$\mathscr{F}\prod\mathscr{G}\rightarrow( x, y )$が成り立つ。

（証明）射影を$\pi_{X}, \pi_{Y}$とする。$\mathscr{F}\subset\pi_{X}( \mathscr{F}\prod\mathscr{G} ), \mathscr{G}\subset( \mathscr{F}\prod\mathscr{G} )$より$\pi_{X}( \mathscr{F}\prod\mathscr{G} )\rightarrow x, \pi_{Y}( \mathscr{F}\prod\mathscr{G} )\rightarrow y$が成り立つ。定義より$\mathscr{F}\prod\mathscr{G}\rightarrow( x, y )$である。$\square$

さて、この直積空間が圏論的な意味で直積対象となっていることを示そう。射影が連続なことは定義より明らかなので、次の普遍性を示せば良い。

**定理** $X, Y, Z$をフィルター空間とする。連続写像$f\colon Z\rightarrow X, g\colon Z\rightarrow Y$について、ある連続写像$h\colon Z\rightarrow X\times Y$が一意的に存在して$f=\pi_{X}\circ h, g=\pi_{Y}\circ h$を満たす。

（証明）$h( z ):=( f( z ), g( z ) )$と置く。$h$が連続であることを示せば良い。$Z$において$\mathscr{F}\rightarrow z$とする。$f, g$は連続なので$f_{\ast}\mathscr{F}\rightarrow f( z )$かつ$g_{\ast}\mathscr{F}\rightarrow g( z )$が成り立つ。$f_{\ast}\mathscr{F}=\pi_{X}( h_{\ast}\mathscr{F} ), g_{\ast}\mathscr{F}=\pi_{Y}( h_{\ast}\mathscr{F} )$より、$h_{\ast}\mathscr{F}\rightarrow ( f( z ), g( z ) )$を得る。一意性は定義より明らかである。$\square$

つまり直積空間の収束構造は射影を連続とする最大のものである。




## 連続写像の空間

**定義** $X, Y$をフィルター空間とする。$X$から$Y$への連続写像全体を$C( X, Y )$で表す。

以下に示すように、この$C( X, Y )$に収束構造を入れることができる。これは例えば一般の位相空間などでは不可能なことが知られている。この意味でフィルター空間の圏は位相空間の圏より閉じており扱いやすい。

$\mathscr{F}$は$C( X, Y )$のfilterとする。$\mathscr{A}$は$X$のfilterとする。$F\in\mathscr{F}, A\in\mathscr{A}$について

$$
F\cdot A:=\lbrace f( a ) : f\in F, a\in A \rbrace\subset Y
$$

と定める。このとき

$$
\lbrace F\cdot A : F\in\mathscr{F}, A\in\mathscr{A} \rbrace\subset 2^{Y}
$$

は$Y$のprefilterとなる。この生成する$Y$のfilterを$\mathscr{F}\cdot\mathscr{A}$で表す。

**命題** $X, Y$をフィルター空間とする。$C( X, Y )$のfilter $\mathscr{F}$及び連続写像$f\colon X\rightarrow Y$について、$\mathscr{F}\rightarrow f$を以下で定める。

- $X$において$\mathscr{A}\rightarrow x$なら、$Y$において$\mathscr{F}\cdot\mathscr{A}\rightarrow f( x )$である。

このとき$C( X, Y )$はフィルター空間となる。

（証明）まず$\langle f \rangle\rightarrow f$を示そう。$X$において$\mathscr{A}\rightarrow x$とする。$\langle f \rangle\cdot\mathscr{A}\rightarrow f( x )$を示したい。$f$は連続なので$f_{\ast}\mathscr{A}\rightarrow f( x )$である。よってprefilterとしての大小

$$
f\mathscr{A}\dashv\lbrace F\cdot A : F\in\langle f \rangle, A\in\mathscr{A} \rbrace
$$

を示せば良い。しかしこれは$A\in\mathscr{A}$について

$$
f( A )=\lbrace f( a ) : a\in A \rbrace\subset\lbrace g( a ) : g\in F, a\in A \rbrace=F\cdot A
$$

より分かる。

次に$\mathscr{F}\rightarrow f, \mathscr{F}\subset\mathscr{G}$として$\mathscr{G}\rightarrow f$を示そう。$X$において$\mathscr{A}\rightarrow x$とする。$\mathscr{G}\cdot\mathscr{A}\rightarrow f( x )$を示したい。同様にprefilterとしての大小

$$
\lbrace F\cdot A : F\in\mathscr{F}, A\in\mathscr{A} \rbrace\dashv\lbrace G\cdot A : G\in\mathscr{G}, A\in\mathscr{A} \rbrace
$$

を示せばよいが、$\mathscr{F}\subset\mathscr{G}$より包含関係になる。$\mathscr{G}\cdot\mathscr{A}\supset\mathscr{F}\cdot\mathscr{A}\rightarrow f( x )$より$\mathscr{G}\cdot\mathscr{A}\rightarrow f( x )$である。$\square$

**定義** 上記のフィルター空間を$X$から$Y$への連続写像空間と呼ぶ。

この連続写像空間が圏論的な意味で冪対象となっていることを示そう。そのためにはまず、連続写像空間における収束を、評価写像を用いて書き下しておくと便利である。

評価写像$\mathrm{eval}\colon C( X, Y )\times X\rightarrow Y$とは、$f\in C( X, Y ), x\in X$について$\mathrm{eval}( f, x )=f( x )$で定まる写像である。

**補題** $X, Y$をフィルター空間とする。$\mathrm{eval}$を評価写像とする。TFAE

- $C( X, Y )$において$\mathscr{F}\rightarrow f$である。
- $X$において$\mathscr{A}\rightarrow x$なら、$Y$において$\mathrm{eval}_{\ast}( \mathscr{F}\prod\mathscr{A} )\rightarrow f( x )$である。

特に評価写像は連続である。

（証明）$\mathscr{F}\rightarrow f, \mathscr{A}\rightarrow x$とする。

$$
\begin{aligned}
\mathrm{eval}_{\ast}( \mathscr{F}\prod\mathscr{A} )&=\mathrm{eval}_{\ast}\langle \mathscr{F}\times\mathscr{A} \rangle \\
&=\langle \mathrm{eval}( \mathscr{F}\times\mathscr{A} ) \rangle \\
&=\langle \lbrace \mathrm{eval}( F\times A ) : F\in\mathscr{F}, A\in\mathscr{A} \rbrace \rangle \\
&=\langle \lbrace F\cdot A : F\in\mathscr{F}, A\in\mathscr{A} \rbrace \rangle \\
&=\mathscr{F}\cdot\mathscr{A}
\end{aligned}
$$

より$\mathrm{eval}_{\ast}( \mathscr{F}\prod\mathscr{A} )\rightarrow f( x )$が分かる。逆も上の等式より明らかである。

$C( X, Y )\times X$において$\mathscr{H}\rightarrow ( f, x )$とする。射影を$\pi_{1}, \pi_{2}$とすると$\pi_{1}\mathscr{H}\rightarrow f, \pi_{2}\mathscr{H}\rightarrow x$である。よって$\mathrm{eval}_{\ast}( \pi_{1}\mathscr{H}\prod\pi_{2}\mathscr{H} )\rightarrow f( x )$が成り立つ。$\pi_{1}\mathscr{H}\prod\pi_{2}\mathscr{H}\subset\mathscr{H}$より$\mathrm{eval}_{\ast}\mathscr{H}\rightarrow f( x )$を得る。故に$\mathrm{eval}$は連続である。$\square$

次の普遍性を示せば良い。

**命題** $X, Y, Z$をフィルター空間とする。連続写像$f\colon Z\times X\rightarrow Y$について、連続写像$\lambda f\colon Z\rightarrow C( X, Y )$が一意的に存在して$f=\mathrm{eval}\circ ( \lambda f\times\mathrm{id}_{X} )$を満たす。

（証明）$z\in Z$とする。写像$f_{z}\colon X\rightarrow Y$を$x\in X$に対して$f_{z}( x ):=f( z, x )$で定める。このとき$f_{z}$は連続写像である。実際、$X$において$\mathscr{F}\rightarrow x$とすると、$\langle z \rangle\rightarrow z$より$\mathscr{G}:=\langle z \rangle\prod\mathscr{F}\rightarrow( z, x )$が成り立つ。$f$は連続なので$f_{\ast}\mathscr{G}\rightarrow f( z, x )$となる。$F\in f_{\ast}\mathscr{G}$を取ると、ある$G\in\mathscr{G}$が存在して$f( G )\subset F$が成り立つ。$G\in\mathscr{G}$より、ある$A\in\langle z \rangle, B\in\mathscr{F}$が存在して$A\times B\subset G$が成り立つ。特に$\lbrace z \rbrace\times B\subset G$である。故に$F\supset f( G )\supset f_{z}( B )$を得るので$F\in ( f_{z} )_{\ast}\mathscr{F}$が分かる。以上より$f_{z}$が連続であること、$( f_{z} )_{\ast}\mathscr{F}\rightarrow f( z, x )$が示された。

$\lambda f\colon Z\rightarrow C( X, Y )$は$z\mapsto f_{z}$と定めればよい。これが合成の条件を満たすことは明らかである。一意性も$\lambda f$の定義より明らかなので、後は連続性を示せば良い。$Z$において$\mathscr{F}\rightarrow z$とする。$\lambda f_{\ast}\mathscr{F}\rightarrow f_{z}$を示すには、補題より$X$において$\mathscr{A}\rightarrow x$として$\mathrm{eval}_{\ast}( \lambda f_{\ast}\mathscr{F}\prod\mathscr{A} )\rightarrow f_{z}( x )$を示せば良い。しかし$\mathrm{eval}_{\ast}( \lambda f_{\ast}\mathscr{F}\prod\mathscr{A} )=f_{\ast}( \mathscr{F}\prod\mathscr{A} )$なので$f$の連続性より従う。$\square$