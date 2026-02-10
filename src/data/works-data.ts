export interface WorkData {
    slug: string;
    title: string;
    category: string;
    subtitle: string;
    description: string;
    tags: string[];
    color: string;
    videoSrc: string;
    // 詳細ページ用の追加データ
    client?: string;
    duration?: string;
    overview: string;
    challenges: string[];
    solutions: string[];
    technologies: string[];
    results?: string[];
}

export const ALL_WORKS: WorkData[] = [
    {
        slug: "skill-connect",
        title: "Skill Connect",
        category: "サービス紹介動画",
        subtitle: "CtoC プラットフォーム紹介動画",
        description: "複雑なアプリの利用フローを、1分18秒で「疑似体験」させる。ユーザー同士をつなぐマッチングサービスの仕組みを、UIアニメーションで直感的に表現。",
        tags: ["サービス紹介", "UIアニメーション"],
        color: "bg-blue-50",
        videoSrc: "/videos/skill-connect.mp4",
        client: "自主製作",
        duration: "3週間",
        overview: "スキルシェアリングプラットフォーム「Skill Connect」のサービス紹介動画を制作。複雑なマッチングフローを1分18秒の動画で直感的に伝え、ユーザー獲得を意識して制作しました。",
        challenges: [
            "複雑なアプリの利用フローを短時間で理解してもらう必要がある",
            "テキストだけでは伝わりにくいマッチングの仕組みを可視化したい",
            "ターゲット層(20-30代)に響くビジュアル表現が必要"
        ],
        solutions: [
            "UIアニメーションを活用し、実際のアプリ操作を疑似体験できる動画を制作",
            "ユーザーとスキル提供者の両視点からストーリーを展開",
            "モダンでポップなデザインとテンポの良い編集で視聴維持率を向上"
        ],
        technologies: ["After Effects", "Illustrator"]
    },
    {
        slug: "logical-thinking",
        title: "ロジカルシンキング研修",
        category: "研修・eラーニング",
        subtitle: "社内研修・eラーニング教材",
        description: "「やらされる研修」を「見たくなるコンテンツ」へ。抽象的なビジネススキルを、共感を生むストーリーと図解で解説。",
        tags: ["研修動画", "解説動画"],
        color: "bg-slate-50",
        videoSrc: "/videos/logical-thinking.mp4",
        client: "大手IT企業様",
        duration: "3週間",
        overview: "社内研修用のロジカルシンキング教材を動画化。抽象的な概念を具体的なストーリーと図解で表現し、受講者の理解度向上に貢献しました。",
        challenges: [
            "抽象的なビジネススキルを分かりやすく伝える必要がある",
            "従来のテキスト教材では受講者のモチベーションが低い",
            "理解度テストの平均点が低く、実務への応用が難しい"
        ],
        solutions: [
            "実際のビジネスシーンを想定したストーリー仕立ての動画を制作",
            "複雑な思考プロセスをインフォグラフィックで可視化",
            "各章ごとに実践的な演習問題を組み込み、理解を深める構成に"
        ],
        technologies: ["After Effects", "Illustrator"],
        results: [
            "理解度テストの平均点が20点向上",
            "受講完了率が従来の60%から92%に改善",
            "受講者アンケートで「分かりやすい」評価が95%"
        ]
    },

    {
        slug: "morning-quest",
        title: "モーニングクエスト",
        category: "サービス紹介動画",
        subtitle: "コンセプトムービー",
        description: "朝の時間をクリエイティブに。ブランドの象徴的なビジュアルと心地よい編集で、サービスの価値を伝えます。",
        tags: ["プロモーション", "コンセプトムービー"],
        color: "bg-amber-50",
        videoSrc: "/videos/morning-quest.mp4",
        client: "自主製作",
        duration: "4週間",
        overview: "「モーニングクエスト」のブランドコンセプトを伝えるプロモーション動画を制作。視聴者の感性に訴えかけるエモーショナルな演出で、ブランドイメージの向上を図りました。",
        challenges: [
            "ブランドの世界観を感性的に伝えたい",
            "視聴者のライフスタイルに寄り添う映像表現が必要",
            "ターゲット層の共感を得られるストーリーライン"
        ],
        solutions: [
            "コンセプトに合わせた柔らかなライティングとシネマティックな編集",
            "日常の美しさを切り取ったビジュアル構成",
            "ブランドメッセージを深く届けるための緻密なサウンドデザイン"
        ],
        technologies: ["After Effects", "Illustrator"]
    },
    {
        slug: "energy-smart",
        title: "EnergySmart",
        category: "サービス紹介動画",
        subtitle: "賢いエネルギー管理を！",
        description: "EnergySmartで、誰でも簡単に賢くエネルギー管理。15秒で伝わるサービスの魅力。",
        tags: ["サービス紹介", "ショート動画"],
        color: "bg-emerald-50",
        videoSrc: "/videos/energy-smart.mp4",
        client: "Halさんコーチング様",
        duration: "1週間",
        overview: "「EnergySmart」のサービス紹介動画。短時間でサービスのメリットと世界観を伝えることを目指しました。",
        challenges: [
            "15秒という短時間でサービスの魅力を伝える必要がある",
            "親しみやすさと信頼感を両立させたい"
        ],
        solutions: [
            "テンポの良いアニメーションで視聴者の興味を惹きつける",
            "グリーンを基調とした安心感のある配色"
        ],
        technologies: ["After Effects", "Illustrator"]
    },
    {
        slug: "trivia-short",
        title: "雑学ショートムービー",
        category: "SNS・Web広告動画",
        subtitle: "15秒で賢くなれるかも？",
        description: "スキマ時間で楽しめる、ちょっとした雑学をアニメーションで紹介。親しみやすいデザインと動きで、知識への興味を惹きつけます。",
        tags: ["ショート動画", "モーショングラフィックス"],
        color: "bg-purple-50",
        videoSrc: "/videos/trivia-short.mp4",
        client: "自主製作",
        duration: "3週間",
        overview: "「雑学ショートムービー」として、短時間で楽しめるコンテンツを制作。SNSでの拡散も意識し、冒頭のインパクトとテンポの良さにこだわりました。",
        challenges: [
            "短い時間内で情報を分かりやすく伝える",
            "視聴者の興味を持続させる工夫"
        ],
        solutions: [
            "イラストとモーショングラフィックスを効果的に組み合わせる",
            "リズム感のある編集で心地よい視聴体験を提供"
        ],
        technologies: ["After Effects", "Illustrator"]
    },
    {
        slug: "new-year-2026",
        title: "2026モーション年賀",
        category: "イベント・季節の動画",
        subtitle: "新年のご挨拶",
        description: "2026年の幕開けを彩る、ポップで楽しい年賀アニメーション。新しい年への期待感を動きで表現しました。",
        tags: ["モーショングラフィックス", "アニメーション"],
        color: "bg-red-50",
        videoSrc: "/videos/new-year-2026.mp4",
        client: "自主製作",
        duration: "1週間",
        overview: "2026年の年賀状として制作したモーショングラフィックス。干支や新年のモチーフを楽しく動かし、見ていて明るい気持ちになるような作品を目指しました。",
        challenges: [
            "新年の祝賀ムードを演出する",
            "オリジナリティのある表現"
        ],
        solutions: [
            "華やかな色使いと躍動感のあるアニメーション",
            "伝統的なモチーフをモダンにアレンジ"
        ],
        technologies: ["After Effects", "Illustrator"]
    }
];

// ホームページ用の抜粋版(最初の2件のみ)
export const FEATURED_WORKS = ALL_WORKS.slice(0, 2);
