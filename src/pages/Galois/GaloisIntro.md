---
path: "/Galois/GaloisIntro"
author: "mathmathniconico"
date: "2019-04-05"
title: "イントロダクション"
---

## はじめに

本稿では、代数体のガロア理論を解説する。ガロア理論というと、決闘で死亡した逸話のある数学者エヴァリスト・ガロアの発想を基にした理論であり、体の代数拡大とその自己同型群に関する対応関係を記述する。現代ではそれに端を発して多種多様なガロア理論が研究されているが、本稿ではより内容を絞って代数体（厳密には有限次代数体）のクラスでガロア理論を解説する。

理由は2つあって、一つはガロア理論が純代数的であるために難解で、理論は追えても理解が進まない人（私）がいる。代数体を用いれば複雑な議論を大幅に省略することができるので、理解の助けになれば良いと思う。もう一つはガロア理論の先の展開を考えた時に、代数体は充分過ぎる程に豊かな構造を持つからである。代数体はそれ自体が高度な研究対象なのである。

前提知識としては、集合論の基本的な記号や用語、ベクトル空間の初歩（特に基底などに関する知識）、行列演算を含めた代数的操作くらいだろうか。



## 体について

加減乗除の四則演算ができる集合を体と呼ぶ。具体例を挙げた方が分かり易いだろう。

**例** $\mathbb{Q}, \mathbb{R}, \mathbb{C}$は標準的な加減乗除で体となる。

**例** $\sqrt{2}\notin\mathbb{Q}$について

$$
\mathbb{Q}( \sqrt{2} ):=\lbrace a+b\sqrt{2} : a, b\in\mathbb{Q} \rbrace
$$

は体である。足し算と引き算、それに掛け算ができることは明らかである。残るは割り算だが、これはゼロ以外に逆元が存在することを示せば良い。$a, b\in\mathbb{Q}$について$a^{2}-2b^{2}\neq 0$に注意すると

$$
( a+b\sqrt{2} )\left(\frac{a-b\sqrt{2}}{a^{2}-2b^{2}}\right)=1
$$

が成り立ち、確かに$\mathbb{Q}( \sqrt{2} )$の元はゼロを除き可逆である。

**例** $\sqrt[3]{2}\notin\mathbb{Q}$について

$$
\mathbb{Q}( \sqrt[3]{2} )=\lbrace a+b\sqrt[3]{2}+c\sqrt[3]{4} : a, b, c\in\mathbb{Q} \rbrace
$$

は体である。これも同様に

$$
( a+b\sqrt[3]{2}+c\sqrt[3]{4} )( x+y\sqrt[3]{2}+z\sqrt[3]{4} )=1
$$

を$x, y, z$について解くことで逆元を計算することができる。上記は

$$
\left( \begin{matrix} a & 2c & 2b \\ b & a & 2c \\ c & b & a \end{matrix} \right)\left( \begin{matrix} x \\ y \\ z \end{matrix} \right)=\left( \begin{matrix} 1 \\ 0 \\ 0 \end{matrix} \right)
$$

と表せるので、

$$
f( a, b, c ):=\mathrm{det}\left( \begin{matrix} a & 2c & 2b \\ b & a & 2c \\ c & b & a \end{matrix} \right)=a^{3}+2b^{3}+4c^{3}-6abc
$$

が$a=b=c=0$以外のゼロ点を持たないことを示せば良い。

$f( a, b, c )=0$とする。このとき任意の$\lambda\in\mathbb{Q}$について$f( \lambda a, \lambda b, \lambda c )=0$だから、$a, b, c$は共通因子を持たない整数としてよい。すると$a^{3}$は偶数でなければならないから、$a$も偶数である。$a=2a^{\prime}$とすれば

$$8( a^{\prime} )^{3}+2b^{3}+4c^{3}-12a^{\prime}bc=0\Longleftrightarrow b^{3}+2c^{3}+4( a^{\prime} )^{3}-6bca^{\prime}=0$$

より、これを繰り返して$b=2b^{\prime}, c=2c^{\prime}$と表せることが分かる。$a, b, c$は共通因子を持たないので、$( a, b, c )=( 0, 0, 0 )$でなければならない。以上により$\mathbb{Q}( \sqrt[3]{2} )$の元はゼロを除き可逆である。

**例** $\omega:=-\frac{1}{2}+\frac{\sqrt{3}}{2}\sqrt{-1}\in\mathbb{C}$について

$$
\mathbb{Q}( \omega ):=\lbrace a+b\omega : a, b\in\mathbb{Q} \rbrace
$$

は体である。同じように$a, b\in\mathbb{Q}$について

$$
\mathrm{det}\left( \begin{matrix} a & -b \\ b & a-b \end{matrix}\right)=a^{2}+b^{2}-ab
$$

が$a=b=0$以外のゼロ点を持たないことを示せば良い。$a$について解くと判別式は$-3b^{2}$だから$b\neq 0$が実数の範囲を動くとき$a\notin\mathbb{R}$となる。$b=0$のとき$a=0$が従うので、$\mathbb{Q}( \omega )$の元はゼロを除き可逆である。

**例** $\omega, \sqrt[3]{2}$について

$$
\mathbb{Q}( \omega, \sqrt[3]{2} ):=\lbrace a+b\sqrt[3]{2}+c\sqrt[3]{4}+d\omega+e\omega\sqrt[3]{2}+f\omega\sqrt[3]{4} : a, b, c, d, e, f\in\mathbb{Q} \rbrace
$$

は体である。これは一見大変そうに見えるが、

$$
\mathbb{Q}( \omega, \sqrt[3]{2} )=\lbrace a+b\omega : a, b\in\mathbb{Q}( \sqrt[3]{2} ) \rbrace
$$

であることに注意すれば、$a^{2}+b^{2}-ab$が$a, b\in\mathbb{Q}( \sqrt[3]{2} )$の範囲でゼロ点を持たないことを示せばよい。しかし$a^{2}+b^{2}-ab$の非自明なゼロ点は実数でない。従って$\mathbb{Q}( \omega, \sqrt[3]{2} )$の元はゼロを除き可逆である。

