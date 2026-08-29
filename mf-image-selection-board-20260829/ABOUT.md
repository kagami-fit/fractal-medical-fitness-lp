# MF画像セレクションボード

## 一言で言うと
2026年8月28日に作成・更新された、FRACTAL MEDICAL FITNESSのLP関連画像素材98点を一覧で確認し、採用候補を選べる確認用サイトです。最終V4だけでなく、初版・V3・背景素材・旧アーカイブ・顔参照を分けて表示します。選択状態をURLに保存できるため、共有リンクを送ると他の人も同じ選択結果を確認できます。

## 何ができるのか
- LP関連画像素材98点を、LPのセクション・男女・版別に一覧表示
- セクション、女性／男性、キーワードで絞り込み
- 採用候補の選択、解除、表示中の画像の一括選択
- 選択済み画像の件数、画像名、用途を確認
- 選択状態と確認者名を共有URLに保存し、リンクをコピー
- ブラウザのローカル保存にも対応し、同じ端末で作業を再開

## 構成
- `index.html` — 画像一覧と操作UI
- `style.css` — レスポンシブな一覧画面のスタイル
- `app.js` — 40点の素材データ、絞り込み、選択、共有URLの処理
- `../lp-medical-fitness/img/mf-replacement-20260828/` — 初版と旧アーカイブ
- `../lp-medical-fitness/img/mf-replacement-20260828-v2/` — V2背景素材
- `../lp-medical-fitness/img/mf-replacement-20260828-v3/` — V3素材
- `../lp-medical-fitness/img/mf-replacement-20260828-v4/` — V4素材
- `reference-faces/` — 顔参照用のコピー

## 使い方
1. このフォルダをWebサーバーから開きます。
2. 採用候補にしたい画像の「採用候補に選ぶ」を押します。
3. 必要なら確認者名を入力し、「共有リンクをコピー」を押します。
4. コピーしたリンクを送ると、相手の画面にも同じ選択済み画像が表示されます。

ローカル確認の例:

```bash
cd "/Users/hayatokagami/⭐FW/fractal-pilates-lp"
python3 -m http.server 8765
```

その後、`http://localhost:8765/mf-image-selection-board-20260829/` を開きます。

## 状態
- `mf-image-selection-board-20260829/` — 稼働中（画像選択・共有URL対応）
- `../lp-medical-fitness/img/mf-replacement-20260828/` — 初版・旧アーカイブを参照
- `../lp-medical-fitness/img/mf-replacement-20260828-v2/` — V2背景を参照
- `../lp-medical-fitness/img/mf-replacement-20260828-v3/` — V3素材を参照
- `../lp-medical-fitness/img/mf-replacement-20260828-v4/` — V4素材を参照
- `reference-faces/` — 指定された顔参照画像のコピー
- WordPress用PHP、GitHub公開用LP — このボード作成では未変更
