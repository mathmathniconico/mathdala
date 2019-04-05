---
path: "/Galois/GaloisIntro"
date: "2019-04-05"
title: "代数体のガロア理論"
---

# 代数体のガロア理論

## はじめに

本稿では、代数体のガロア理論を解説する。ガロア理論というと、決闘で死亡した逸話のある数学者エヴァリスト・ガロアの発想を基にした理論であり、体の代数拡大とその自己同型群に関する対応関係を記述する。現代ではそれに端を発して多種多様なガロア理論が研究されているが、本稿ではより内容を絞って代数体（厳密には有限次代数体）のクラスでガロア理論を解説する。

理由は2つあって、一つはガロア理論が純代数的であるために難解で、理論は追えても理解が進まない人（私）がいる。代数体を用いれば複雑な議論を大幅に省略することができるので、理解の助けになれば良いと思う。もう一つはガロア理論の先の展開を考えた時に、代数体は充分過ぎる程に豊かな構造を持つからである。代数体はそれ自体が高度な研究対象なのである。

前提知識としては、集合論の基本的な記号や用語、ベクトル空間の初歩（特に基底などに関する知識）、行列演算を含めた代数的操作くらいだろうか。


本稿の内容は以下の通りである。

1. [体について](#体について)
1. [体の拡大](#体の拡大)
    1. [体の拡大を考える理由](#体の拡大を考える理由)
    1. [拡大次数の連鎖律](#拡大次数の連鎖律)
1. [多項式](#多項式)
    1. [多項式の剰余](#多項式の剰余)
    1. [剰余体と分解体](#剰余体と分解体)
    1. [有限次拡大と最小多項式](#有限次拡大と最小多項式)
1. [ガロア理論の骨子](#ガロア理論の骨子)
    1. [自己同型](#自己同型)
    1. [ガロア拡大](#ガロア拡大)
1. [代数体のガロア理論](#代数体のガロア理論)
    1. [代数体](#代数体)
    1. [ガロアの基本定理](#ガロアの基本定理)
    1. [ガロア群の計算例](#ガロア群の計算例)


（なんか上のリストが変な表示になる https://github.com/gatsbyjs/gatsby/issues/10870）



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



## 体の拡大

### 体の拡大を考える理由

2つの体$k, K$について、$k\subset K$かつ互いの演算が一致しているとき、**体の拡大**と呼び$K/k$で表す。このとき$K$を$k$の拡大体とか、$k$を$K$の基礎体などという。また$k\subset M\subset K$が体の拡大を定めているとき、$M$を拡大$K/k$の中間体と呼ぶ。

**例** $\mathbb{Q}( \sqrt{2} )/\mathbb{Q}$は体の拡大である。$\mathbb{Q}( \sqrt[3]{2} ), \mathbb{Q}( \omega )$は拡大$\mathbb{Q}( \sqrt[3]{2}, \omega )/\mathbb{Q}$の中間体である。

ガロア理論は体の拡大に関する理論だが、その起源は代数方程式の解法にある。代数方程式というのは

$$
a_{n}x^{n}+a_{n-1}x^{n-1}+\dotsb+a_{1}x+a_{0}=0
$$

の形をした方程式であり、既知の変数$a_{1}, \dotsc, a_{n}$に対して未知の変数$x$を求める問題が古くから考えられてきた。ここで「求める」というのは代数的に解くということである。すなわち上記の左辺を上手く変形し、別の変数で置き換えるなどして簡単な方程式に帰着させて解く。

**例**
カルダノの方法で$x^{3}+3px-q=0$を解いてみよう。体積$y$の立方体の内部に、端を揃えて体積$z$の立方体を描こう。重なりが無い部分は、小さな立方体と3つの直方体に分けることが出来る。小さな立方体の一辺を$x$、重なりが無い部分の体積を$q$、そして直方体の体積を$px$と置けば、$x^{3}=q-3px$を満たし、特に$x=\sqrt[3]{y}-\sqrt[3]{z}$が求まる。従ってこのような立方体の組、つまり

$$
\begin{aligned} y-z&=q, & yz&=p^{3} \end{aligned}
$$

を満たす$y, z$が分かれば良い。$(y+z)^{2}=q^{2}+4p^{3}$だから、$x^{3}+3px-q=0$の解を求める問題は、2次方程式

$$
t^{2}-\sqrt{q^{2}+4p^{3}}\cdot t+p^{3}=0
$$

を解くことに帰着される。

4次方程式も同様に解くことが出来たため、高次の代数方程式であっても次数を1つずつ下げていけば解を求めることができるだろう、という楽観が生まれたが、それが見事に打ち破られることになるのはご存知のことだと思う。

さて、例のように低次の代数方程式に帰着させると、その係数はより複雑なものとなる。$p, q$が住む世界（体）に、$q^{2}+4p^{3}$の二乗根を加え、更に$y, z$の三乗根を加える、という積み上げを考えることになる。式変形は係数の加減乗除で行われるので、この積み上げは体の枠組みで考えるのが自然である。これが体の拡大を考える理由である。



### 拡大次数の連鎖律

$K/k$を体の拡大とする。このとき$K$は$k$上のベクトル空間と見なすことができる。$k$上のベクトル空間としての次元を拡大$K/k$の**拡大次数**と呼び、$\lbrack K : k \rbrack$で表す。拡大次数が有限のものを**有限次拡大**と呼ぶ。

**例** $1, \sqrt{2}$は$\mathbb{Q}$上一次独立で

$$
\mathbb{Q}( \sqrt{2} )=\lbrace a+b\sqrt{2} : a, b\in\mathbb{Q} \rbrace
$$

なので$\lbrack \mathbb{Q}( \sqrt{2} ) : \mathbb{Q} \rbrack=2$である。

**例** $1, \sqrt[3]{2}, \sqrt[3]{4}$は$\mathbb{Q}$上一次独立で

$$
\mathbb{Q}( \sqrt[3]{2} )=\lbrace a+b\sqrt[3]{2}+c\sqrt[3]{4} : a, b, c\in\mathbb{Q} \rbrace
$$

なので$\lbrack \mathbb{Q}( \sqrt[3]{2} ) : \mathbb{Q} \rbrack=3$である。

**例** $1, \omega$は$\mathbb{Q}( \sqrt[3]{2} )$上一次独立で

$$
\mathbb{Q}( \sqrt[3]{2}, \omega )=\lbrace a+b\omega : a, b\in\mathbb{Q}( \sqrt[3]{2} ) \rbrace
$$

なので$\lbrack \mathbb{Q}( \sqrt[3]{2}, \omega ) : \mathbb{Q}( \sqrt[3]{2} ) \rbrack=2$である。

**例** $1, \sqrt[3]{2}, \sqrt[3]{4}, \omega, \omega\sqrt[3]{2}, \omega\sqrt[3]{4}$は$\mathbb{Q}$上一次独立で

$$
\mathbb{Q}( \sqrt[3]{2}, \omega )=\lbrace a+b\sqrt[3]{2}+c\sqrt[3]{4}+d\omega+e\omega\sqrt[3]{2}+f\omega\sqrt[3]{4} : a, b, c, d, e, f\in\mathbb{Q} \rbrace
$$

なので$\lbrack \mathbb{Q}( \sqrt[3]{2}, \omega ) : \mathbb{Q} \rbrack=6$である。



**例** $\mathbb{R}$の$\mathbb{Q}$上のベクトル空間としての基底はハメル基底などと呼ばれ、無限集合であることが知られている。つまり$\lbrack \mathbb{R} : \mathbb{Q} \rbrack=\infty$である。

このように体の拡大はベクトル空間の特殊な例であるが、ただ単に積の定まったベクトル空間というだけでなく、その積構造がベクトル空間の構造に反映される。その一つが次に示す拡大次数に対する連鎖律である。

**命題** $K/M/k$を拡大の列とする。拡大次数について

$$
\lbrack K : k \rbrack = \lbrack K : M \rbrack\cdot\lbrack M : k \rbrack
$$

が成り立つ。

（証明）$K/M$および$M/k$について、それぞれの基底を$\lbrace \alpha_{i} \rbrace, \lbrace \beta_{j} \rbrace$と置く。このとき$\lbrace \alpha_{i}\beta{j} \rbrace$が$K/k$の基底となる。実際、一次独立性のみ示してみよう。有限個の$c_{ij}\in k$について$\sum c_{ij}\alpha_{i}\beta_{j}=0$とする。$i$で括ると$\sum_{i}( \sum_{j}c_{ij}\beta_{j} )\alpha_{i}$となる。$\alpha_{i}$の係数は$M$の元だから、$\lbrace \alpha_{i} \rbrace$の一次独立性より$\sum_{j}c_{ij}\beta_{j}=0$が従う。更に$\lbrace \beta_{j} \rbrace$の一次独立性から$c_{ij}=0$が従う。$\square$

**例** 拡大の列$\mathbb{Q}( \sqrt[3]{2}, \omega )/\mathbb{Q}( \sqrt[3]{2} )/\mathbb{Q}$を考えると

$$
\lbrack \mathbb{Q}( \sqrt[3]{2}, \omega ) : \mathbb{Q} \rbrack=6=2\cdot 3=\lbrack \mathbb{Q}( \sqrt[3]{2}, \omega ) : \mathbb{Q}( \sqrt[3]{2} ) \rbrack\cdot\lbrack \mathbb{Q}( \sqrt[3]{2} ) : \mathbb{Q} \rbrack
$$

となる。



## 多項式

### 多項式の剰余

$k$を体、$a_{0}, \dotsc, a_{n}\in k$とする。不定元$x$を用いて

$$
a_{n}x^{n}+a_{n-1}x^{n-1}+\dotsb+a_{1}x+a_{0}
$$

と表せる式を$k$上の**多項式**と呼び、その全体を$k\lbrack x \rbrack$で表す。特に$a_{n}\neq 0$のとき$n$を多項式の**次数**と呼び、多項式$f$について$\mathrm{deg}( f )$などと表す。ゼロ多項式の次数については$\mathrm{deg}( 0 )=-\infty$と定めておこう。

多項式同士も足し算や引き算、掛け算ができることに注意する。（このような構造を数学では**環**と呼ぶが、詳しくは別の機会に譲る。）ただし整数全体$\mathbb{Z}$と同じように、多項式同士の割り算を多項式の範囲で行うことはできないが、剰余を考えることはできる。

**定理** 多項式$f, g\in k\lbrack x \rbrack$について$g\neq 0$とする。このとき$q, r\in k\lbrack x \rbrack$が存在して

$$
f=qg+r, \quad \mathrm{deg}( r )\lt\mathrm{deg}( g )
$$

と表すことができる。更に$q, r$は一意的に決まる。

（証明）多項式$f, g$は

$$
\begin{aligned} f&= a_{n}x^{n}+\dotsb+a_{1}x+a_{0}, & a_{n}&\neq 0 \\ g &= b_{m}x^{m}+\dotsb+b_{1}x+b_{0}, & b_{m}&\neq 0 \end{aligned}
$$

と表せる。$n\lt m$なら$q=0, r=f$と置けばよい。$n\ge m$とする。ここで

$$
h:=f-\frac{a_{n}}{b_{m}}x^{n-m}g
$$

を考えると$\mathrm{deg}( h )\lt\mathrm{deg}( f )$となるから、帰納的にある多項式$q\in k\lbrack x \rbrack$を用いて$r:=f-qg$が$\mathrm{deg}( r )\lt\mathrm{deg}( g )$を満たすようにできる。

一意性を示すために$f=qg+r=q^{\prime}g+r^{\prime}$とする。$( q-q^{\prime} )g=( r^{\prime}-r )$より$q\neq q^{\prime}$なら

$$
\mathrm{deg}( (q-q^{\prime} )g )\ge\mathrm{deg}( g )\gt\mathrm{deg}( r^{\prime}-r )
$$

より矛盾する。よって$q=q^{\prime}$であり$r^{\prime}=r$である。$\square$

**例** $f=x^{2}+x+1, g=x+1$について$f=xg+1$より$q=x, r=1$である。

多項式の妙は**代入**という操作にあるが、これをきちんと述べるには少し準備が必要となる。なのでここで詳しくは述べないこととして、単に$x$を代入したい数で置き換える操作としておく。具体的には体の拡大$K/k$について、$k$上の多項式

$$
f=a_{n}x^{n}+\dotsb+a_{1}x+a_{0}\in k\lbrack x \rbrack
$$

に$\alpha\in K$を代入したものを

$$
f( \alpha ):=a_{n}\alpha^{n}+\dotsb+a_{1}\alpha+a_{0}\in K
$$

と表す。

定理の系として、因数定理と根の個数に関する不等式が得られる。

**系** $K/k$を体の拡大とする。$f\in k\lbrack x \rbrack, \alpha\in K$とする。以下は同値である。

- $f( \alpha )=0$である。
- $f$は$K\lbrack x \rbrack$の多項式として$x-\alpha$で割り切れる。つまり$q\in K\lbrack x \rbrack$を用いて$f=q( x-\alpha )$と表せる。

（証明）$x-\alpha$による余りを考えればよい。$\square$

$f( \alpha )=0$となる$\alpha\in K$を多項式$f$の$K$における**根**と呼ぶ。

**系** $K/k$を体の拡大とする。ゼロでない多項式$f\in k\lbrack x \rbrack, \neq 0$に対し、$f$の$K$における根は高々$\mathrm{deg}( f )$個である。

（証明）$f$に根$\alpha$があれば$x-\alpha$で割り切れるので次数を考えれば帰納的に示せる。$\square$

常に$\mathrm{deg}( f )$個あるわけではないことに注意しよう。

**例** $\mathbb{Q}( \sqrt{2} )/\mathbb{Q}$において、$f=x^{3}-2\in\mathbb{Q}\lbrack x \rbrack$の根は存在しない。$\mathbb{Q}( \sqrt{2} )$の元は$a, b\in\mathbb{Q}$として$a+b\sqrt{2}$と表せるので、

$$
f( a+b\sqrt{2} )=( a+b\sqrt{2} )^{3}-2=a^{3}+6ab^{2}-2+( 3a^{2}b+2b^{3} )\sqrt{2}
$$

となるが、これはゼロにならない。

### 剰余体と分解体

多項式$f\in k\lbrack x \rbrack, \neq 0$は最高次の係数が$1$のとき**モニック**であるという。また一次以上の多項式$g, h\in k\lbrack x \rbrack$を用いて$f=gh$と表せないとき、$f$は$k\lbrack x \rbrack$において**既約**であるという。

多項式は次数を持つので、任意の多項式は有限個の既約多項式の積で表せることに注意する。

**命題** 多項式の既約多項式による剰余全体は体となる。

（証明）$p\in k\lbrack x \rbrack$を既約多項式とする。$f\in k\lbrack x \rbrack, \neq 0$は$\mathrm{deg}( f )\lt\mathrm{deg}( p )$を満たすとする。このとき$p$の$f$による剰余を考えると$p=qf+r$と表せるが、$p$は既約だから$r\neq 0$である。$r\in k$なら$f$は可逆となるから、帰納的に$r$は可逆としてよい。つまり$s, t\in k\lbrack x \rbrack$が存在して$sr=tp+1$と表せる。

$$
sp=sqf+sr=sqf+tp+1 \Longleftrightarrow ( s-t )p=sqf+1
$$

だから$f$も可逆となる。$\square$

上記の体、つまり既約多項式$p\in k\lbrack x \rbrack$による剰余全体を$k\lbrack x \rbrack/( p )$と書き、$p$による**剰余体**と呼ぶ。特に$k\lbrack x \rbrack/( p )$は$k$の拡大体である。

**補題** $f\in k\lbrack x \rbrack$を$\mathrm{deg}( f )=n\gt 0$なる多項式とする。このときある体の拡大$K/k$が存在して、$f$は$K\lbrack x \rbrack$において$n$個の一次多項式の積として表せる。

（証明）$n$に関する帰納法で示す。$n=1$のとき、$f=ax+b$だから、$x=-\frac{b}{a}\in k$が解である。故に$K=k$とすればよい。$n\gt 0$のとき$f=gp$と既約多項式$p\in k\lbrack x \rbrack$と分解できる。体$E=k\lbrack x \rbrack/( p )$を考えれば$E/k$は体の拡大であって、剰余としての$x\in E$は多項式$p$の根である。これを改めて$\xi$と書き、不定元を$y$とすれば$p$は$E\lbrack y \rbrack$において$( y-\xi )$を因子に持つ。特に$f=( y-\xi )g$と分解できるので、帰納的に$1$次多項式の積で表せる体の拡大$K/k$が存在する。$\square$

多項式について、その根を全て含む体を**分解体**と呼ぶ。先の補題は、任意の多項式が分解体を持つことを述べている。




### 有限次拡大と最小多項式

多項式と関連して有限次拡大の性質を見ていく。

**命題** $K/k$は有限次拡大とする。このとき任意の$\alpha\in K$は、ある$k$上の多項式$f\in k\lbrack x \rbrack$の根である。

（証明）拡大次数を$n$とすると、

$$
1, \alpha, \alpha^{2}, \dotsc, \alpha^{n}
$$

は$k$上一次従属である。従って、ある$a_{0}, \dotsc, a_{n}\in k$が存在して

$$
a_{0}\cdot 1+a_{1}\alpha+\dotsb+a_{n}\alpha^{n}=0
$$

となる。$f=a_{0}+a_{1}x+\dotsb+a_{n}x^{n}\in k\lbrack x \rbrack$と置けば$f( \alpha )=0$より$\alpha$は$f$の根である。$\square$

$\alpha$を根とする多項式のうち、次数が最小でモニックなものを$\alpha$の$k$上の**最小多項式**と呼ぶ。

**命題** 最小多項式は既約である。

（証明）有限次拡大$K/k$において、$\alpha\in K$の最小多項式を$f\in k\lbrack x \rbrack$とする。もし一次以上の多項式$g, h\in k\lbrack x \rbrack$に対し$f=gh$と書けるなら、

$$
0=f( \alpha )=g( \alpha )h( \alpha )
$$

より、$g( \alpha )=0$または$h( \alpha )=0$となる。これは次数の最小性に矛盾する。$\square$

**命題** $K/k$を有限次拡大とする。$\alpha\in K$の$k\lbrack x \rbrack$における最小多項式を$f$とする。多項式$g\in k\lbrack x \rbrack$について$g( \alpha )=0$のとき$f$は$g$を割り切る。

（証明）定理より$g=qf+r$となる$q, r\in k\lbrack x \rbrack$が存在するが、$\alpha$を代入すると$r( \alpha )=0$を得る。$\mathrm{deg}( r )\lt\mathrm{deg}( f )$より、$r=0$でなければならない。$\square$

上記の2つの命題より最小多項式の判定法が得られる。すなわち、既約かつモニックな多項式の根は、その根の最小多項式である。つまり最小多項式は自分自身の根の最小多項式になっている。

**例** $\mathbb{Q}( \sqrt{2} )/\mathbb{Q}$において$x^{2}-2$は$\sqrt{2}$の最小多項式である。実際$( \sqrt{2} )^{2}-2=0$であり、$\sqrt{2}\notin\mathbb{Q}$より既約である。

**例** $\mathbb{Q}( \sqrt[3]{2} )/\mathbb{Q}$において$x^{3}-2$は$\sqrt[3]{2}$の最小多項式である。これも$\sqrt[3]{2}\notin\mathbb{Q}$より既約性が分かる。

拡大$K/k$において、体$k$を含み、$S\subset K$を含む最小の体を$k( S )$などと表す。特に$S=\lbrace \alpha \rbrace$が唯一つの元であるとき$k( \alpha )$と書き$k( \alpha )/k$は**単拡大**と呼ぶ。

有限次単拡大は、ベクトル空間としての基底が生成元の冪で取れるという性質を持つ。

**命題** $K/k$は有限次拡大とする。$\alpha\in K$について最小多項式の次数を$n$とすると

$$
k( \alpha )=k\lbrack \alpha \rbrack=\lbrace a_{0}+a_{1}\alpha+\dotsb+a_{n-1}\alpha^{n-1} : a_{0}, \dotsc, a_{n-1}\in k \rbrace
$$

が成り立ち

$$
1, \alpha, \alpha^{2}, \dotsc, \alpha^{n-1}
$$

はベクトル空間$k( \alpha )$の$k$上の基底となる。従って$n$は$k( \alpha )/k$の拡大次数と一致する。

（証明）$\alpha$の最小多項式を$p$とする。すると$p( \alpha )=0$より$\alpha^{n}$は$1, \alpha, \dotsc, \alpha^{n-1}$の線形結合で書ける。よって

$$
k\lbrack \alpha \rbrack=\lbrace a_{0}+a_{1}\alpha+\dotsb+a_{n-1}\alpha^{n-1} : a_{0}, \dotsc, a_{n-1}\in k \rbrace
$$

と表せる。$k\lbrack \alpha \rbrack\subset k( \alpha )$は自明であり、逆も$k\lbrack \alpha \rbrack\cong k\lbrack x \rbrack/( p )$が剰余体（$\cong$については後述するが、$\alpha$を不定元とする多項式と思えば同じとみなせるということ）であることから$k( \alpha )$の最小性より従う。一次独立性は$p$の最小性より従う。$\square$



## ガロア理論の骨子

### 自己同型

同型とはその名の通り、体として同じ型であることを表す。つまり同型という対応によって一方の演算がそのまま他方の演算に写るため、代数的には両者が同一なものとみなすことが出来る。

基礎体$k$を共有する拡大$K/k, L/k$に対し、写像$\sigma\colon K\rightarrow L$が$k$上の**同型**であるとは、準同型（演算をそのまま写す）であって、全単射であり、$k$上で恒等写像のときをいう。このとき$K$と$L$は同型といい、$K\cong L$と表す。特に$K=L$のとき$K$上の**自己同型**と呼び、その全体を$\mathrm{Aut}( K/k )$と表す。自己同型全体は写像の合成で**群**を為し、一般に元$\alpha\in K$に対する$\sigma\in\mathrm{Aut}( K/k )$の作用を$\alpha^{\sigma}:=\sigma( \alpha )$と表す。

上記を要約したものが以下のリストである。なお写像の合成は$\sigma, \tau\in\mathrm{Aut}( K/k )$に対して、$\sigma$の後に$\tau$を作用させることを$\tau\circ\sigma$あるいは$\sigma\tau$と書く。

- $\alpha, \beta\in K$について$( \alpha+\beta )^{\sigma}=\alpha^{\sigma}+\beta^{\sigma}, ( \alpha\beta )^{\sigma}=\alpha^{\sigma}\beta^{\sigma}$である。
- $\sigma$について$\sigma^{-1}\in\mathrm{Aut}( K/k )$が存在して$\sigma\circ\sigma^{-1}=\sigma^{-1}\circ\sigma=\mathrm{id}$は恒等写像である。
- $c\in k$について$c^{\sigma}=c$である。
- $\alpha\in K$について$\alpha^{\mathrm{id}}=\alpha$である。
- $\alpha\in K$について$( \alpha^{\sigma} )^{\tau}=\alpha^{\sigma\tau}=\alpha^{( \tau\circ\sigma )}$である。

では有限次拡大$K/k$において、$\alpha\in K$について単拡大$k( \alpha )$と同型な体はどれくらいあるだろうか。$\sigma\colon k( \alpha )\rightarrow K$を中への同型（$K/k$のある中間体への同型）とする。

$$
f( x )=a_{0}+a_{1}x+\dotsb+a_{n-1}x^{n-1}+a_{n}x^{n}\in k\lbrack x \rbrack
$$

について$\alpha$が$f$の根とする。このとき

$$
f( \alpha )=a_{0}+a_{1}\alpha+\dotsb+a_{n-1}\alpha^{n-1}+a_{n}\alpha^{n}=0
$$

であるが、

$$
f( \alpha )^{\sigma}=a_{0}+a_{1}\alpha^{\sigma}+\dotsb+a_{n-1}( \alpha^{\sigma} )^{n-1}+a_{n}( \alpha^{\sigma} )^{n}=0
$$

となる。つまり$\alpha^{\sigma}$もまた$f$の根であることが分かる。特に$f$として$\alpha$の最小多項式$p$を取れば、$p$の別の根$\beta$について同型

$$
k( \alpha )\cong k\lbrack x \rbrack/( p )\cong k( \beta )
$$

を得る。体の同型はベクトル空間としての同型でもあり、更に$k( \alpha )$の基底は$\alpha$の冪で表せるから、中への同型$\sigma$は$\alpha$の行き先で決まる。このことから、中への同型は最小多項式の$K$における根と一対一に対応する。（同型の像とは対応しないことに注意。）

**例** $\mathbb{Q}( \sqrt[3]{2} )/\mathbb{Q}$において、自己同型は恒等写像のみである。実際$\sqrt[3]{2}$の最小多項式$x^{3}-2$の根は$\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^{2}\sqrt[3]{2}$であるが、$\mathbb{Q}( \sqrt[3]{2} )$に含まれるのは$\sqrt[3]{2}$のみである。

**例** $\mathbb{Q}( \omega )/\mathbb{Q}$において、自己同型は恒等写像と$\omega\mapsto \omega^{2}$の2通りある。実際$\omega$の最小多項式$x^{2}+x+1$の根は$\omega, \omega^{2}$であり、$\omega^{2}=-1-\omega\in\mathbb{Q}( \omega )$となる。

**例** $\mathbb{Q}( \omega, \sqrt[3]{2} )/\mathbb{Q}$において、$\mathbb{Q}( \sqrt[3]{2} )$と同型なのは他に$\mathbb{Q}( \omega\sqrt[3]{2} ), \mathbb{Q}( \omega^{2}\sqrt[3]{2} )$である。

**問** $k( \alpha )\cong k( \beta )$から何が言える？



### ガロア拡大

拡大$K/k$において、$\mathrm{Aut}( K/k )$は$K$の元に対して作用している。つまり$\sigma, \tau\in\mathrm{Aut}( K/k )$及び$\alpha\in K$について

- $\alpha^{\mathrm{id}}=\alpha$
- $\alpha^{\sigma\tau}=( \alpha^{\sigma} )^{\tau}$

が成り立つ。

一般に上記のような作用が与えられたとき、その作用で不変な部分を考えることができる。$S\subset\mathrm{Aut}( K/k ), \neq\emptyset$について、

$$
\Psi( S )=K^{S}:=\lbrace \alpha\in K : \forall\sigma\in S, \alpha^{\sigma}=\alpha \rbrace
$$

と定めると、これは$K/k$の中間体となる。

あるいは、ある部分を不変とする作用全体を考えることもできる。$k\subset T\subset K$について、

$$
\Phi( T )=\mathrm{Aut}( K/k )_{T}:=\lbrace \sigma\in\mathrm{Aut}( K/k ) : \forall\alpha\in T, \alpha^{\sigma}=\alpha \rbrace
$$

と定めると、これは$\mathrm{Aut}( K/k )$の部分群となる。（$T$を不変とする$\sigma, \tau$に対して$\sigma\tau$も$T$を不変とする。）

この2つの事実から、$K/k$の中間体と$\mathrm{Aut}( K/k )$の部分群との間の反変的な（互いに包含関係が逆となる）対応関係が見えてくる。$\Psi$の像は部分群が大きくなるほど小さくなる。

| $\Psi$による像 | $\mathrm{Aut}( K/k )$の部分群 |
|-|-|
| $K^{\lbrace \mathrm{id} \rbrace}=K$ | $\lbrace\mathrm{id}\rbrace$ |
| $K^{H}$ | $H$ |
| ？ | $\mathrm{Aut}( K/k )$ |

$\Phi$の像は中間体が小さくなるほど大きくなる。

| $K/k$の中間体 | $\Phi$による像 |
|-|-|
| $K$ | $\mathrm{Aut}( K/k )_{K}=\lbrace \mathrm{id} \rbrace$ |
| $M$ | $\mathrm{Aut}( K/k )_{M}=\mathrm{Aut}( K/M )$ |
| k | $\mathrm{Aut}( K/k )_{k}=\mathrm{Aut}( K/k )$ |

表中の？に注目してほしい。綺麗な対応を作りたければ、

$$
K^{\mathrm{Aut}( K/k )}=k
$$

が成り立つことが望ましい。

**定義** 拡大$K/k$は$K^{\mathrm{Aut}( K/k )}=k$を満たすとき、**ガロア拡大**と呼ぶ。特にこのとき$\mathrm{Aut}( K/k )$は$\mathrm{Gal}( K/k )$と表し**ガロア群**と呼ぶ。



## 代数体のガロア理論

### 代数体

体$K$が$k=\mathbb{Q}$上の有限次拡大であるとき、$K$を代数体と呼ぶ。

**命題** 最小多項式はその分解体において重根を持たない。

（証明）$p\in k\lbrack x \rbrack$を最小多項式、$K$を分解体とする。$p$は$K\lbrack x \rbrack$において一次の積で表せるから

$$
p( x )=x^{n}+a_{n-1}x^{n-1}+\dotsb+a_{1}x+a_{0}=( x-\alpha_{1} )\dotsm( x-\alpha_{n} )
$$

と表せる。ただし$a_{0}, \dotsc, a_{n-1}\in k$であり、$\alpha_{1}, \dotsc, \alpha_{n}\in K$である。

$p$が重根$\alpha$を持つとしよう。このとき$K\lbrack x \rbrack$において$p( x )=( x-\alpha )^{2}g( x )$と表せるが、形式的な微分を考えると

$$
p^{\prime}( x )=nx^{n-1}+( n-1 )a_{n-1}x^{n-2}+\dotsb+a_{1}=2( x-\alpha )g( x )+( x-\alpha )^{2}g^{\prime}( x )
$$

となる。（ライプニッツ則と微分の線型性より従う。）左辺より$p^{\prime}\neq 0$は$k\lbrack x \rbrack$の元であり、右辺に$x=\alpha$を代入するとゼロとなることから$p^{\prime}$も$\alpha$を根に持つ。これは$p$の最小性に矛盾する。$\square$

$k=\mathbb{Q}$としたが、一般的な体$k$（$\mathbb{Q}$を含まない体）上では$p^{\prime}\equiv 0$の可能性があり、上記の命題が成り立たないので少し難しくなる。

**定理** 代数体は単拡大である。

（証明）$K/k$を有限次拡大とすると、ベクトル空間としての基底は有限個なので、有限集合$S$を用いて$K=k( S )$と表せる。従って2つの元で生成される体$K=k( \alpha, \beta )$が単拡大であることを示せば、一般の$K$についても帰納的に示せる。

$\alpha, \beta$の最小多項式を$p, q\in k\lbrack x \rbrack$とする。ここで積$pq$の分解体$L$を取ると、最小多項式は重根を持たないので、$L\lbrack x \rbrack$において

$$
\begin{aligned} p( x )&=\prod_{i=1}^{n}( x-\alpha_{i} ),& q( x )&=\prod_{j=1}^{m}( x-\beta_{j} ) \end{aligned}
$$

と相異な$\alpha_{i}\in L$と相異な$\beta_{j}\in L$で表せる。ここで$\alpha_{1}=\alpha, \beta_{1}=\beta$と仮定して良い。$m=1$のときは$k( \alpha, \beta )=k( \alpha )$である。$m\ge 2$のときは、$c\in k$を

$$
c\notin\left\lbrace \frac{\alpha-\alpha_{i}}{\beta{j}-\beta} : 1\le i \le n, 2\le j \le m \right\rbrace
$$

となるように取り、$\gamma=\alpha+c\beta$と置く。明らかに$k( \alpha, \beta )\supset k( \gamma )$である。$f( x ):=p( \gamma-cx )\in k( \gamma )\lbrack x \rbrack$を考える。$f( \beta )=p( \alpha )=0$より、$\beta$は$f$の根である。また$\beta$は$q$の根でもあるが、$f$と$q$の唯一の共通根となる。実際$f$は$\beta_{2}, \dotsc, \beta_{m}$を根に持たない。なぜなら

$$
f( \beta_{j} )=p( \gamma-c\beta_{j} )=p( \alpha+c( \beta-\beta_{j} ) )=\prod_{i=1}^{n}( ( \alpha-\alpha_{i} )-c( \beta_{j}-\beta ) )
$$

となるが、$c$は右辺のそれぞれがゼロにならないように取った。$\beta$の$k( \gamma )$上の最小多項式を$g$とすると、$g$は共通根が1つしかない$f$と$q$を割り切るので一次であり、$g=x-\beta$と分かる。$g\in k( \gamma )$より$\beta\in k( \gamma )$となる。故に$\alpha=\gamma-c\beta\in k( \gamma )$となり$K=k( \gamma )$を得る。つまり$K$は単拡大である。$\square$

**例** $\mathbb{Q}( \sqrt{2}, \sqrt{3} )$が単拡大であることを定理に沿って示してみよう。$\sqrt{2}, \sqrt{3}$の最小多項式は$p=x^{2}-2, q=x^{2}-3$である。よって

$$
\alpha_{1}=\sqrt{2}, \alpha_{2}=-\sqrt{2}, \beta_{1}=\sqrt{3}, \beta_{2}=-\sqrt{3}
$$

となる。従って$c\neq 0, \frac{\sqrt{2}}{2\sqrt{3}}$を取ればよいので$c=1$としてよい。つまり$\mathbb{Q}( \sqrt{2}, \sqrt{3} )=\mathbb{Q}( \sqrt{2}+\sqrt{3} )$である。実際$\gamma:=\sqrt{2}+\sqrt{3}$とすると、$\gamma^{2}=5+2\sqrt{6}$より$\sqrt{6}=\frac{1}{2}\gamma^{2}-\frac{5}{2}$であり、

$$
\sqrt{2}=( 3\sqrt{2}+2\sqrt{3} )-2( \sqrt{2}+\sqrt{3} )=\gamma\sqrt{6}-2\gamma=\frac{1}{2}\gamma^{3}-\frac{9}{2}\gamma
$$

を得る。$\sqrt{3}$は$\gamma-\sqrt{2}$を計算すればよい。

**問** 一般に$\gamma$から$\alpha, \beta$を求めるアルゴリズムはあるか？



### ガロアの基本定理

最初に代数体がガロア拡大となる特徴付けを行う。

**補題** $k=\mathbb{Q}$とする。代数体$K=k( \alpha )$について、以下は同値である。

- $K/k$はガロア拡大である。
- $K$は$\alpha$の最小多項式の根を全て含む。

従って$K/k$がガロア拡大のとき、$| \mathrm{Gal}( K/k ) |=\lbrack K : k \rbrack$が成り立つ。

（証明）まず$\alpha$の最小多項式を$p\in k\lbrack x \rbrack$として、$p$の$K$における相異な根全体を$\lbrace \alpha_{1}=\alpha, \dotsc, \alpha_{m} \rbrace$とする。このとき$m\le\mathrm{deg}( p )$である。写像$\alpha\mapsto\alpha_{i}$は中への同型$k( \alpha )\rightarrow k( \alpha )$を引き起こすが、その像$k( \alpha_{i} )\subset k( \alpha )$は$k( \alpha )$と同型なので、ベクトル空間としての次元を比較すると$k( \alpha_{i} )=k( \alpha )$が成り立つ。つまり$\alpha\mapsto\alpha_{i}$は自己同型になる。従って

$$
\mathrm{Aut}( k( \alpha )/k )=\lbrace \alpha\mapsto\alpha_{i} : i=1, \dotsc, m \rbrace
$$

が成り立つ。

$K/k$をガロア拡大とする。ここで

$$
f=\prod_{i=1}^{m}( x-\alpha_{i})=c_{0}+c_{1}x+\dotsb+c_{m}x^{m}\in K\lbrack x \rbrack
$$

を取ると、$\sigma\in\mathrm{Aut}( K/k )$について

$$
\lbrace \alpha_{1}^{\sigma}, \dotsc, \alpha_{m}^{\sigma} \rbrace=\lbrace \alpha_{1}, \dotsc, \alpha_{m} \rbrace
$$

が成り立つ。解と係数の関係より

$$
f^{\sigma}( x ):=c_{0}^{\sigma}+c_{1}^{\sigma}x+\dotsb+c_{m}^{\sigma}x^{m}=\prod_{i=1}^{m}( x-\alpha_{i}^{\sigma} )=\prod_{i=1}^{m}( x-\alpha_{i} )=f( x )
$$

となるから、$c_{i}^{\sigma}=c_{i}$を得る。これが任意の$\sigma\in\mathrm{Aut}( K/k )$について言えるから、

$$
c_{i}\in K^{\mathrm{Aut}( K/k )}=k
$$

となる。従って$f\in k\lbrack x \rbrack$であり、$f( \alpha )=0$より最小性から$f=p$でなければならない。つまり$K=k( \alpha )$は$p$の根を全て含む。

逆に$K$が$p$の根$\alpha_{1}=\alpha, \dotsc, \alpha_{n}$を全て含むとする。$\theta\in K^{\mathrm{Aut}( K/k )}$とする。まず$k$上の基底$1, \alpha, \dotsc, \alpha^{n-1}$を用いて

$$
\theta=c_{0}+c_{1}\alpha+\dotsb+c_{n-1}\alpha^{n-1}, \quad c_{i}\in k
$$

と表せる。ここで任意の$\sigma\in\mathrm{Aut}( K/k )$について

$$
\theta^{\sigma}=\theta=c_{0}+c_{1}\alpha^{\sigma}+\dotsb+c_{n-1}( \alpha^{\sigma} )^{n-1}
$$

が成り立つ。つまり$\alpha^{\sigma}$は$n-1$次以下の多項式

$$
c_{n-1}x^{n-1}+\dotsb+c_{1}x+c_{0}-\theta\in k\lbrack x \rbrack
$$

の根となるが、$\alpha^{\sigma}$は相異な$n$個の元を定めるため、この多項式は恒等的にゼロである。故に$\theta=c_{0}\in k$を得る。$\square$

**例** $\mathbb{Q}( \sqrt[3]{2} )/\mathbb{Q}$はガロア拡大ではない。なぜなら$\sqrt[3]{2}$の最小多項式は$x^{3}-2$であり、その根は$\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^{2}\sqrt[3]{2}$であるが、後ろの2つを$\mathbb{Q}( \sqrt[3]{2} )$は含まない。

**例** $\mathbb{Q}( \sqrt{2} )/\mathbb{Q}$はガロア拡大である。実際$\sqrt{2}$の最小多項式$x^{2}-2$の根は$\sqrt{2}, -\sqrt{2}\in\mathbb{Q}( \sqrt{2} )$を満たす。

次にガロアの基本定理と呼ばれる定理を示そう。

**定理** $k=\mathbb{Q}$とする。代数体$K:=k( \alpha )$について$K/k$はガロア拡大、$G:=\mathrm{Gal}( K/k )$とする。

- 中間体$M$について$K/M$はガロア拡大である。特に$\Psi( \Phi( M ) )=M$が成り立つ。
- ガロア群の部分群$H$について$\Phi( \Psi( H ) )=H$が成り立つ。

（証明）$M$を中間体とする。前節では本質的に$k$が$\mathbb{Q}$を含むことのみを用いていた。従って有限次拡大$K/M$もまた単拡大であることが分かる。そこで$K=M( \beta )$と表し、$\beta\in K$の$M$上の最小多項式を$q\in M\lbrack x \rbrack$として$pq$の分解体$E$を取る。このとき$q$は$E\lbrack x \rbrack$において一次の積

$$
q( x )=\prod_{j=1}^{m}( x-\beta_{j} )\in E\lbrack x \rbrack
$$

で表せる。すると$\beta\mapsto \beta_{j}$は中への同型$M( \beta )\rightarrow E$を定めるが、それは中への同型$K\rightarrow E$のことであるから、$\alpha\mapsto\alpha_{i}$のどれかになる。$K/k$はガロア拡大であるから$\alpha_{i}\in K$であり、それゆえ$\beta\mapsto\beta_{j}$の像は$K$に含まれる。特に$\beta_{j}\in K$である。故に$\mathrm{Aut}( K/M )$の元は拡大次数$m=\lbrack K : M \rbrack$と同じだけあることが分かり、補題の証明と同様にして$K/M$がガロア拡大であることが分かる。

$H$をガロア群の部分群とする。$\alpha$の$K^{H}$上の最小多項式を$f\in K^{H}\lbrack x \rbrack$とすると$\lbrack K : K^{H} \rbrack=\mathrm{deg}( f )$が成り立つ。ここで

$$
g( x ):=\prod_{\sigma\in H}( x-\alpha^{\sigma} )
$$

とおくと、各係数は$H$の作用で不変となるから$g\in K^{H}\lbrack x \rbrack$である。$g( \alpha )=0$より$f$は$g$を割り切る。従って

$$
\lbrack K : K^{H} \rbrack=\mathrm{deg}( f )\le\mathrm{deg}( g )=| H |
$$

を得る。$H\subset G_{K^{H}}$より群の位数を比較すると$H=G_{K^{H}}$が分かる。$\square$

**問** $K/k$がガロア拡大のとき、中間体$M$について$M/k$がガロア拡大となるのはどういうときか？



### ガロア群の計算例

最後に$K=\mathbb{Q}( \sqrt[3]{2}, \omega )$について、$\mathbb{Q}( \sqrt[3]{2}, \omega )/\mathbb{Q}$のガロア群$G$を計算して、ガロアの基本定理を検証しよう。

まず$\lbrack \mathbb{Q}( \sqrt[3]{2}, \omega ) : \mathbb{Q} \rbrack=6$なので$| G |=6$である。一方で$\sqrt[3]{2}$と$\omega$の$\mathbb{Q}$上の最小多項式は$x^{3}-2, x^{2}+x+1$だから、同型の候補となるのは$\sqrt[3]{2}\mapsto \sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^{2}\sqrt[3]{2}$と$\omega\mapsto\omega, \omega^{2}$の組み合わせでちょうど6種類となる。つまりこの6個の同型がガロア群を定める。ここで

$$
\sigma:\left\lbrace \begin{aligned} \sqrt[3]{2} &\mapsto \omega\sqrt[3]{2} \\ \omega &\mapsto \omega \end{aligned}\right. , \quad \tau:\left\lbrace \begin{aligned} \sqrt[3]{2} &\mapsto \sqrt[3]{2} \\ \omega &\mapsto \omega^{2} \end{aligned}\right.
$$

とおくと、各々の同型は$\sigma$と$\tau$の積で表せる。表し方は複数あるが、

$$
\begin{aligned} \sigma^{3}&=\mathrm{id},& \tau^{2}&=\mathrm{id},& \sigma\tau&=\tau\sigma^{2} \end{aligned}
$$

という関係で同一視できる。これは3次対称群$S_{3}$と呼ばれるものと同型となる。

ガロアの基本定理に依れば、$\mathbb{Q}( \sqrt[3]{2}, \omega )$の中間体は、このガロア群$S_{3}$の部分群によって完全に決定される。$S_{3}$の部分群は良く知られており、位数2の部分群

$$
\langle \tau \rangle, \langle \tau\sigma \rangle, \langle \sigma\tau \rangle
$$

と、位数3の部分群

$$
\langle \sigma \rangle
$$

である。これに対応する中間体を計算し、表にまとめると次のようになる。

| 部分群$H$ | 中間体$K^{H}$ | $\lbrack K : K^{H} \rbrack=\vert H \vert$ |
|:-:|:-:|:-:|
| $\lbrace \mathrm{id} \rbrace$ | $\mathbb{Q}( \sqrt[3]{2}, \omega )$ | 1 |
| $\langle \tau \rangle$ | $\mathbb{Q}( \sqrt[3]{2} )$ | 2 |
| $\langle \tau\sigma \rangle$ | $\mathbb{Q}( \omega^{2}\sqrt[3]{2} )$ | 2 |
| $\langle \sigma\tau \rangle$ | $\mathbb{Q}( \omega\sqrt[3]{2} )$ | 2 |
| $\langle \sigma \rangle$ | $\mathbb{Q}( \omega )$ | 3 |
| $S_{3}$ | $\mathbb{Q}$ | 6 |

互いに逆の対応になっていることが分かるだろうか。