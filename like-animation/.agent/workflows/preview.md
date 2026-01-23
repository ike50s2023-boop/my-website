---
description: ローカル開発サーバーを起動し、ブラウザでプレビューを表示します
---

// turbo
1. ポート3000を使用している既存のプロセスを終了（クリーンアップ）
`powershell -Command "Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force -ErrorAction SilentlyContinue"`

// turbo
2. 開発サーバーをバックグラウンドで起動
`cmd /c "npm run dev"`

3. サーバーが起動するまで待機（ポート 3000）
準備が整うまで数秒お待ちください。

4. ブラウザでプレビューを開く
`http://localhost:3000`
