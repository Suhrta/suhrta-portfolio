# suhrta portfolio

個人開発者ポートフォリオサイト。Astro + Tailwind CSS。

## セットアップ

```powershell
npm install
npm run dev
```

`http://localhost:4321` で開く。

## ビルド

```powershell
npm run build
```

## デプロイ (Vercel)

1. GitHub にリポジトリを作って push
2. https://vercel.com → New Project → リポジトリ選択
3. Framework: Astro が自動検出される
4. Deploy → `<project>.vercel.app` で公開

カスタムドメインは後で Vercel のドメイン設定から接続可能。

## 編集ポイント

- 自己紹介・連絡先: `src/pages/index.astro`
- プロジェクト一覧: `src/pages/index.astro` 冒頭の `projects` 配列
- カラー・フォント: `tailwind.config.mjs`
