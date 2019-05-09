---
path: "/Notes/CliffordAlgebraExamples"
author: "mathmathniconico"
date: "2019-05-09"
title: "クリフォード代数の例"
---

## クリフォード代数の例

例えば$X=\mathbb{Z}$として通常の大小関係を考える。符号は$x\ge 0$のとき$r( x )=1$として、$x\lt 0$のとき$r( x )=-1$とする。以下このクリフォード代数$\mathrm{Clif}( \mathbb{Z}, R, r )$を$\mathrm{Clif}( R )_{\infty, \infty}$と表すことにする。このとき$p, q\ge 0$に対して

$$
e_{-q}, \dotsc, e_{-1}, e_{0}, e_{1}, \dotsc, e_{p-1}
$$

で生成される部分代数（あるいは$X=\lbrace -q, \dotsc, p-1 \rbrace$のクリフォード代数）を$\mathrm{Clif}( R )_{q, p}$で表す。以下$R=\mathbb{R}$として計算してみよう。

$i_{1}\lt\dotsb\lt i_{t}$および$I=\lbrace i_{1}, \dotsc, i_{t} \rbrace$のとき$e_{i_{1}}\dotsm e_{i_{t}}=r( I )e_{I}$である。

行列代数$\mathbb{M}_{n}( R )$を$R( n )$と表す。

**例** $\mathrm{Clif}( \mathbb{R} )_{0, 0}=\mathbb{R}$である。

**例** $\mathrm{Clif}( \mathbb{R} )_{0, 1}=\mathbb{R}\oplus\mathbb{R}e_{0}$の積構造は

$$
( a+be_{0} )( c+de_{0} )=( ac+bd )+( ad+bc )e_{0}
$$

である。これは全単射$a+be_{0}\mapsto ( a+b, a-b )\in \mathbb{R}^{2}$によって

$$
\begin{aligned} ( a+b, a-b )( c+d, c-d ) &= ( ac+bd+ad+bc, ac+bd-ad-bc ) \\ &= ( ( a+b )( c+d ), ( a-b )( c-d ) ) \end{aligned}
$$

に翻訳されるので、結局代数として成分毎の積構造を持つ$R^{2}$と同型である。

**例** $\mathrm{Clif}( \mathbb{R} )_{1, 0}=\mathbb{R}\oplus\mathbb{R}e_{-1}$の積構造は

$$
( a+be_{-1} )( c+de_{-1} )=( ac-bd )+( ad+bc )e_{-1}
$$

である。これは複素数$\mathbb{C}$に他ならない。つまり$a+be_{-1}\mapsto a+bi$と対応させればよい。

**例** $\mathrm{Clif}( \mathbb{R} )_{0, 2}=\mathbb{R}\oplus\mathbb{R}e_{0}\oplus\mathbb{R}e_{1}\oplus\mathbb{R}e_{0, 1}$の積構造は$e_{0, 1}=e_{0}e_{1}$に注意すると

| | $1$ | $e_{0}$ | $e_{1}$ | $e_{0, 1}$ |
|:-:|:-:|:-:|:-:|:-:|
| $1$ | $1$ | $e_{0}$ | $e_{1}$ | $e_{0, 1}$ |
| $e_{0}$ | $e_{0}$ | $1$ | $e_{0, 1}$ | $e_{1}$ |
| $e_{1}$ | $e_{1}$ | $-e_{0, 1}$ | $1$ | $-e_{0}$ |
| $e_{0, 1}$ | $e_{0, 1}$ | $-e_{1}$ | $e_{0}$ | $-1$ |

によって決まる。天下りで恐縮だが

$$
1\mapsto\left( \begin{matrix} 1 & 0 \\ 0 & 1 \end{matrix} \right), e_{0}\mapsto\left( \begin{matrix} 1 & 0 \\ 0 & -1 \end{matrix} \right), e_{1}\mapsto\left( \begin{matrix} 0 & 1 \\ 1 & 0 \end{matrix}\right), e_{0, 1}\mapsto\left( \begin{matrix} 0 & 1 \\ -1 & 0 \end{matrix} \right)
$$

と対応させると、代数としての同型を与える。従って行列代数$\mathbb{R}( 2 )$と同型である。

**例** $\mathrm{Clif}( \mathbb{R} )_{1, 1}=\mathbb{R}\oplus\mathbb{R}e_{-1}\oplus\mathbb{R}e_{0}\oplus\mathbb{R}e_{-1, 0}$の積構造は、$e_{-1, 0}=-e_{-1}e_{0}$に注意すると、

| | $e_{-1}$ | $e_{0}$ | $e_{-1, 0}$ |
|:-:|:-:|:-:|:-:|
| $e_{-1}$ | $-1$ | $-e_{-1, 0}$ | $e_{0}$ |
| $e_{0}$ | $e_{-1, 0}$ | $1$ | $e_{-1}$ |
| $e_{-1, 0}$ | $-e_{0}$ | $-e_{-1}$ | $1$ |

である。並び替えて

| | $e_{0}$ | $e_{-1, 0}$ | $e_{-1}$ |
|:-:|:-:|:-:|:-:|
| $e_{0}$ | $1$ | $e_{-1}$ | $e_{-1, 0}$ |
| $e_{-1, 0}$ | $-e_{-1}$ | $1$ | $-e_{0}$ |
| $e_{-1}$ | $-e_{-1, 0}$ | $e_{0}$ | $-1$ |

とすれば$\mathrm{Clif}( \mathbb{R} )_{0, 2}$の右下と同等である。よって

$$
1\mapsto\left( \begin{matrix} 1 & 0 \\ 0 & 1 \end{matrix} \right), e_{0}\mapsto\left( \begin{matrix} 1 & 0 \\ 0 & -1 \end{matrix} \right), e_{-1, 0}\mapsto\left( \begin{matrix} 0 & 1 \\ 1 & 0 \end{matrix}\right), e_{-1}\mapsto\left( \begin{matrix} 0 & 1 \\ -1 & 0 \end{matrix} \right)
$$

と対応させれば$\mathbb{R}( 2 )$と同型になる。

**例** $\mathrm{Clif}( \mathbb{R} )_{2, 0}=\mathbb{R}\oplus\mathbb{R}e_{-2}\oplus\mathbb{R}e_{-1}\oplus\mathbb{R}e_{-2, -1}$の積構造は、$e_{-2, -1}=e_{-2}e_{-1}$に注意すると

| | $e_{-2}$ | $e_{-1}$ | $e_{-2, -1}$ |
|:-:|:-:|:-:|:-:|
| $e_{-2}$ | $-1$ | $e_{-2, -1}$ | $-e_{-1}$ |
| $e_{-1}$ | $-e_{-2, -1}$ | $-1$ | $e_{-2}$ |
| $e_{-2, -1}$ | $e_{-1}$ | $-e_{-2}$ | $-1$ |

である。$e_{-1}\mapsto i, e_{-2, -1}\mapsto j, e_{-2}\mapsto k$とすれば$i^{2}=j^{2}=k^{2}=-1$かつ$ij=k, jk=i, ki=j, ijk=-1$となる。よって四元数$\mathbb{H}$と同型になる。







TODO

良く知られた符号$( -, -, -, + )$のミンコフスキー空間は$\mathrm{Clif}( \mathbb{R} )_{3, 1}$に埋め込まれる。（空間成分の符号が負、時間成分の符号が正）

まとめると

| $\mathbb{R}$ | $p=0$ | $1$ | $2$ | $3$ |
|:-:|:-:|:-:|:-:|:-:|
| $q=0$ | $\mathbb{R}$ | $\mathbb{R}^{2}$ | $\mathbb{R}( 2 )$ | ? |
| $1$ | $\mathbb{C}$ | $\mathbb{R}( 2 )$ | ? | ? |
| $2$ | $\mathbb{H}$ | ? | ? | ? |
| $3$ | ? | ? | ? | ? |