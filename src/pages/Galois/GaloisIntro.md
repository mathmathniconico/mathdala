---
path: "/Galois/GaloisIntro"
date: "2019-03-23"
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
    1. [拡大次数の連鎖律](拡大次数の連鎖律)
1. [多項式](多項式)
    1. [多項式の剰余](多項式の剰余)
    1. [剰余体と分解体](剰余体と分解体)
    1. [有限次拡大と最小多項式](有限次拡大と最小多項式)
1. [代数体](代数体)
1. [共役と自己同型](#共役と自己同型)

<!--

1. [代数体のガロア理論](#代数体のガロア理論)
1. [ガロア対応](#ガロア対応)
1. [ガロア群の計算例](#ガロア群の計算例)

-->

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

上記の2つの命題より最小多項式の判定法が得られる。すなわち、既約かつモニックな多項式の根は、その根の最小多項式である。

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

と表せる。$k\lbrack \alpha \rbrack\subset k( \alpha )$は自明であり、逆も$k\lbrack \alpha \rbrack=k\lbrack x \rbrack/( p )$が剰余体であることから分かる。一次独立性は$p$の最小性より従う。$\square$



## 代数体

体$K$が$\mathbb{Q}$上の有限次拡大$K/\mathbb{Q}$を定めるとき、$K$を代数体と呼ぶ。

**命題** 最小多項式はその分解体において重根を持たない。

（証明）$p\in \mathbb{Q}\lbrack x \rbrack$を最小多項式、$K$を分解体とする。$p$は$K\lbrack x \rbrack$において一次の積で表せるから

$$
p( x )=x^{n}+a_{n-1}x^{n-1}+\dotsb+a_{1}x+a_{0}=( x-\alpha_{1} )\dotsm( x-\alpha_{n} )
$$

と表せる。ただし$a_{0}, \dotsc, a_{n-1}\in k$であり、$\alpha_{1}, \dotsc, \alpha_{n}\in K$である。

$p$が重根$\alpha$を持つとしよう。このとき$K\lbrack x \rbrack$において$p( x )=( x-\alpha )^{2}g( x )$と表せるが、形式的な微分を考えると

$$
p^{\prime}( x )=nx^{n-1}+( n-1 )a_{n-1}x^{n-2}+\dotsb+a_{1}=2( x-\alpha )g( x )+( x-\alpha )^{2}g^{\prime}( x )
$$

となる。（ライプニッツ則と微分の線型性より従う。）左辺より$p^{\prime}\neq 0$は$\mathbb{Q}\lbrack x \rbrack$の元であり、右辺に$x=\alpha$を代入するとゼロとなることから$p^{\prime}$も$\alpha$を根に持つ。これは$p$の最小性に矛盾する。$\square$

なお一般的な体$k$上では$p^{\prime}\equiv 0$の可能性があり、上記の命題が成り立たないので少し難しくなる。

**定理** 代数体は単拡大である。

（証明）$K/\mathbb{Q}$を有限次拡大とすると、ベクトル空間としての基底は有限個なので、有限集合$S$を用いて$K=\mathbb{Q}( S )$と表せる。従って2つの元で生成される体$K=\mathbb{Q}( \alpha, \beta )$が単拡大であることを示せば、一般の$K$についても帰納的に示せる。

$\alpha, \beta$の最小多項式を$p, q\in\mathbb{Q}\lbrack x \rbrack$とする。ここで積$pq$の分解体$L$を取ると、最小多項式は重根を持たないので、$L\lbrack x \rbrack$において

$$
\begin{aligned} p( x )&=\prod_{i=1}^{n}( x-\alpha_{i} ),& q( x )&=\prod_{j=1}^{m}( x-\beta_{j} ) \end{aligned}
$$

と相異な$\alpha_{i}\in L$と相異な$\beta_{j}\in L$で表せる。ここで$\alpha_{1}=\alpha, \beta_{1}=\beta$と仮定して良い。$m=1$のときは$\mathbb{Q}( \alpha, \beta )=\mathbb{Q}( \alpha )$である。$m\ge 2$のときは、$c\in\mathbb{Q}$を

$$
c\notin\left\lbrace \frac{\alpha-\alpha_{i}}{\beta{j}-\beta} : 1\le i \le n, 2\le j \le m \right\rbrace
$$

となるように取り、$\gamma=\alpha+c\beta$と置く。明らかに$\mathbb{Q}( \alpha, \beta )\supset \mathbb{Q}( \gamma )$である。$f( x ):=p( \gamma-cx )\in \mathbb{Q}( \gamma )\lbrack x \rbrack$を考える。$f( \beta )=p( \alpha )=0$より、$\beta$は$f$の根である。また$\beta$は$q$の根でもあるが、$f$と$q$の唯一の共通根となる。実際$f$は$\beta_{2}, \dotsc, \beta_{m}$を根に持たない。なぜなら

$$
f( \beta_{j} )=p( \gamma-c\beta_{j} )=p( \alpha+c( \beta-\beta_{j} ) )=\prod_{i=1}^{n}( ( \alpha-\alpha_{i} )-c( \beta_{j}-\beta ) )
$$

となるが、$c$は右辺のそれぞれがゼロにならないように取った。$\beta$の$\mathbb{Q}( \gamma )$上の最小多項式を$g$とすると、$g$は共通根が1つしかない$f$と$q$を割り切るので一次であり、$g=x-\beta$と分かる。$g\in \mathbb{Q}( \gamma )$より$\beta\in \mathbb{Q}( \gamma )$となる。故に$\alpha=\gamma-c\beta\in \mathbb{Q}( \gamma )$となり$K=\mathbb{Q}( \gamma )$を得る。つまり$K$は単拡大である。$\square$

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



## 共役と自己同型

基礎体$k$を共有する拡大$K/k, L/k$に対し、写像$\sigma\colon K\rightarrow L$が$k$**同型**であるとは、準同型（演算をそのまま写す）であって、全単射であり、$k$上で恒等写像のときをいう。特に$K=L$のとき$K$上の**自己同型**と呼び、その全体を$\mathrm{Aut}( K/k )$と表す。自己同型全体は写像の合成で群を為し、一般に元$\alpha\in K$に対する$\sigma\in\mathrm{Aut}( K/k )$の作用を$\alpha^{\sigma}:=\sigma( \alpha )$と表す。

上記の言葉はどうでもよく、以下の性質が重要である。なお写像の合成は$\sigma, \tau\in\mathrm{Aut}( K/k )$に対して、$\sigma$の後に$\tau$を作用させることを$\tau\circ\sigma$あるいは$\sigma\tau$と書く。

- $\alpha, \beta\in K$について$( \alpha\beta )^{\sigma}=\alpha^{\sigma}\beta^{\sigma}$である。
- $\sigma$について$\sigma^{-1}\in\mathrm{Aut}( K/k )$が存在して$\sigma\circ\sigma^{-1}=\sigma^{-1}\circ\sigma=\mathrm{id}$は恒等写像である。
- $c\in k$について$c^{\sigma}=c$である。
- $\alpha\in K$について$\alpha^{\mathrm{id}}=\alpha$である。
- $\alpha\in K$について$( \alpha^{\sigma} )^{\tau}=\alpha^{\sigma\tau}=\alpha^{( \tau\circ\sigma )}$である。










<!--


ここで興味深いことが分かる。

$$
f( x )=a_{0}+a_{1}x+\dotsb+a_{n-1}x^{n-1}+a_{n}x^{n}\in k\lbrack x \rbrack
$$

について$\alpha\in K$が$f$の根とする。このとき

$$
f( \alpha )=a_{0}+a_{1}\alpha+\dotsb+a_{n-1}\alpha^{n-1}+a_{n}\alpha^{n}=0
$$

であるが、$\sigma\in\mathrm{Aut}( K/k )$について

$$
f( \alpha )^{\sigma}=a_{0}+a_{1}\alpha^{\sigma}+\dotsb+a_{n-1}( \alpha^{\sigma} )^{n-1}+a_{n}( \alpha^{\sigma} )^{n}=0
$$

となる。つまり$\alpha^{\sigma}$もまた$f$の根であることが分かる。故に同型は多項式の根の間の置換を定める。






-->






<!--

### 体同型

$K/k$及び$L/k$を体の拡大とする。写像$\phi\colon K\rightarrow L$が以下を満たすとき、$k$-準同型であるという。

- $\alpha, \beta\in K$について$\phi( \alpha+\beta )=\phi( \alpha )+\phi( \beta )$が成り立つ。
- $\alpha, \beta\in K$について$\phi( \alpha\beta )=\phi( \alpha )\phi( \beta )$が成り立つ。
- $\phi$は$k$の元を保つ。



$\alpha, \beta\in K$の$k$上の最小多項式が一致するとき、$\alpha$と$\beta$は$k$-共役であるという。

$K/k$は$K$の全ての元$\alpha$について、$\alpha$の$k$-共役元が$K$に含まれているとき、ガロア拡大であるという。

-->