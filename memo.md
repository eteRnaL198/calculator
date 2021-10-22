# git 流れ
## 作業開始時
VSCodeで開く(画面上 Repository → Open in Visual Studio Code)
プルリクエストをマージする
mainブランチで fetch → pull
kazumaブランチで merge ( 画面上 Branch → Merge into current branch → mainを選択し、青いボタンが Merge main into kazuma になるように)

## 作業終了時
左下の欄に メッセージを書き込む → commit(青いボタン)
Push(右上のボタン Push origin)
プルリク(ブラウザ kazumaブランチで作業)
Pull Requests(画面上)


# 数式文字列→逆ポーランド記法 変換アルゴリズム
https://www.mk-mode.com/blog/2020/11/18/cpp-convert-infix-to-rpn-with-stack/ \\

https://www.kagawa-nct.ac.jp/IT/member/miyatake/calc/\\

数式文字列をトークン分割（配列化）\\
配列の先頭から順次読み込んで判定（ループ処理）\\
a. 数値の場合\\
=> そのまま、出力\\
b. 括弧・開き ( の場合\\
=> そのまま、スタックへ push\\
c. 括弧・閉じ ) の場合\\
=> ( が出るまでスタックから pop して出力\\
但し、 (, ) は廃棄\\
d. その他（演算子）の場合\\
=> そのまま、スタックへ push\\
但し、スタックトップの演算子の方が優先度が高ければ、それを pop して出力\\
（※演算子・括弧の優先度： * = / > + = - > ( = )）\\