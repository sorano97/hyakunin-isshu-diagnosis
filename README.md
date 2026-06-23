# 百人一首診断

10の質問から、今のユーザーに合う一首を小倉百人一首の全100首から選ぶスマホ優先のWebアプリです。

公開版: https://sorano97.github.io/hyakunin-isshu-diagnosis/

## 開発

```bash
npm install
npm run dev
```

`http://localhost:3000` を開いて確認できます。

## コマンド

- `npm run dev` — 開発サーバー
- `npm run build` — 本番ビルド
- `npm test` — データと診断ロジックのテスト
- `npm run lint` — TypeScript型チェック

診断内容はブラウザ内のReact stateだけで扱い、サーバーやlocalStorageには保存しません。
