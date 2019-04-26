---
path: "/Galois/FieldExtension"
author: "mathmathniconico"
date: "2019-04-26"
title: "体の拡大"
---

## 体の拡大を考える理由

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



## 拡大次数の連鎖律

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
