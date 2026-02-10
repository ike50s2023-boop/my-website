/// <reference types="@cloudflare/workers-types" />

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // 必要に応じて環境変数を追加
        }
    }
}

export { };
