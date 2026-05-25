# メディカルフィットネスLP GitHub Pages公開版

## 一言で言うと

FRACTAL MEDICAL FITNESSのLPを、GitHub Pagesで共有・確認できるようにした静的公開用フォルダです。

## 何ができるのか

- `index.html` をGitHub Pagesでそのまま公開できる
- ファーストビュー画像や各セクション画像を同梱して表示できる
- WordPressなしでLPの見た目を共有できる

## 構成

- `index.html`：公開用LP本体
- `style.css`：公開用スタイル
- `script.js`：公開用JavaScript
- `lp-medical-fitness/img/`：LPで使う画像素材
- `ABOUT.md`：この公開用フォルダの説明

## 使い方

GitHub Pagesの公開元をこのリポジトリの `main` ブランチ直下に設定します。ローカルで確認する場合は以下です。

```bash
cd /Users/hayatokagami/⭐FW/fractal-pilates-lp/github-pages-medical-fitness
python3 -m http.server 8088
```

## 状態

- `index.html`：稼働中。メディカルフィットネスLPの静的公開版
- `style.css`：稼働中。GitHub Pages用に画像パスを調整済み
- `script.js`：稼働中。ドロワー・スクロールアニメーション用
- `lp-medical-fitness/img/`：稼働中。生成画像を同梱済み
