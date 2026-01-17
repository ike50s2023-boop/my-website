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
        description: "複雑なアプリの利用フローを、60秒で「疑似体験」させる。ユーザー同士をつなぐマッチングサービスの仕組みを、UIアニメーションで直感的に表現。",
        tags: ["Service Introduction", "UI Animation", "CVR Up"],
        color: "bg-blue-50",
        videoSrc: "/videos/skill-connect.mp4",
        client: "株式会社スキルコネクト様",
        duration: "2週間",
        overview: "スキルシェアリングプラットフォーム「Skill Connect」のサービス紹介動画を制作。複雑なマッチングフローを60秒の動画で直感的に伝え、ユーザー獲得を支援しました。",
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
        technologies: ["After Effects", "Illustrator", "Premiere Pro"],
        results: [
            "動画公開後、アプリダウンロード数が前月比150%増加",
            "SNS広告のCVRが2.3倍に改善",
            "視聴完了率85%を達成"
        ]
    },
    {
        slug: "logical-thinking",
        title: "ロジカルシンキング研修",
        category: "研修・eラーニング",
        subtitle: "社内研修・eラーニング教材",
        description: "「やらされる研修」を「見たくなるコンテンツ」へ。抽象的なビジネススキルを、共感を生むストーリーと図解で解説。",
        tags: ["Internal Training", "Educational", "Understanding Up"],
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
        technologies: ["After Effects", "Illustrator", "Character Animator"],
        results: [
            "理解度テストの平均点が20点向上",
            "受講完了率が従来の60%から92%に改善",
            "受講者アンケートで「分かりやすい」評価が95%"
        ]
    },
    {
        slug: "recruiting-branding",
        title: "採用ブランディング",
        category: "採用動画",
        subtitle: "インタビュー動画",
        description: "社員の熱意を伝えるドキュメンタリータッチの映像。働く人の「リアル」を届け、ミスマッチを防ぎます。",
        tags: ["Recruiting", "Branding", "Interview"],
        color: "bg-indigo-50",
        videoSrc: "/videos/recruiting.mp4",
        client: "株式会社テックイノベーション様",
        duration: "4週間",
        overview: "エンジニア採用を強化するための採用ブランディング動画を制作。社員インタビューを中心に、企業文化と働く魅力を伝えました。",
        challenges: [
            "求人サイトだけでは企業の魅力が伝わりにくい",
            "入社後のミスマッチを減らしたい",
            "競合他社との差別化が必要"
        ],
        solutions: [
            "現場で働く社員の生の声をドキュメンタリータッチで撮影",
            "オフィスの雰囲気や開発環境をリアルに映像化",
            "企業理念と日々の業務のつながりをストーリーで表現"
        ],
        technologies: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        results: [
            "採用サイトの滞在時間が平均3分増加",
            "応募数が前年比180%増加",
            "内定承諾率が75%から90%に向上"
        ]
    },
    {
        slug: "dx-solution",
        title: "DXソリューション紹介",
        category: "サービス紹介動画",
        subtitle: "サービス解説アニメーション",
        description: "目に見えないクラウドサービスの価値を、インフォグラフィックで可視化。導入メリットを直感的に伝えます。",
        tags: ["SaaS", "Infographic", "Sales Support"],
        color: "bg-slate-100",
        videoSrc: "/videos/dx-solution.mp4",
        client: "クラウドソリューション株式会社様",
        duration: "3週間",
        overview: "BtoB向けDXソリューションのサービス紹介動画を制作。複雑なシステムの仕組みと導入効果を分かりやすく可視化しました。",
        challenges: [
            "目に見えないクラウドサービスの価値を伝えにくい",
            "技術的な説明が専門的すぎて理解されにくい",
            "営業資料だけでは導入イメージが湧かない"
        ],
        solutions: [
            "システムの仕組みをインフォグラフィックで分かりやすく図解",
            "導入前後の業務フローを比較し、改善効果を可視化",
            "実際の導入事例を交えて具体的なメリットを提示"
        ],
        technologies: ["After Effects", "Illustrator", "Cinema 4D"],
        results: [
            "営業商談での資料理解度が大幅に向上",
            "問い合わせ数が前月比220%増加",
            "商談成約率が35%から52%に改善"
        ]
    },
    {
        slug: "safety-education",
        title: "製造業 安全教育ビデオ",
        category: "マニュアル動画",
        subtitle: "マニュアル動画",
        description: "紙のマニュアルでは伝わりにくい作業手順を、3DCGと実写を組み合わせて解説。事故リスクを低減。",
        tags: ["Manual", "Safety", "Industrial"],
        color: "bg-orange-50",
        videoSrc: "/videos/safety.mp4",
        client: "大手製造業様",
        duration: "5週間",
        overview: "製造現場の安全教育用マニュアル動画を制作。3DCGと実写を組み合わせ、危険箇所と正しい作業手順を分かりやすく解説しました。",
        challenges: [
            "紙のマニュアルでは作業手順が伝わりにくい",
            "新人教育に時間がかかり、現場の負担が大きい",
            "安全意識の向上と事故防止が急務"
        ],
        solutions: [
            "3DCGで機械の内部構造や危険箇所を可視化",
            "実写映像で正しい作業手順を段階的に解説",
            "NG例とOK例を対比させ、注意点を明確化"
        ],
        technologies: ["Cinema 4D", "Premiere Pro", "After Effects"],
        results: [
            "新人教育時間が平均30%短縮",
            "安全教育の理解度テストで平均点が25点向上",
            "労働災害件数が前年比60%減少"
        ]
    },
    {
        slug: "corporate-vision",
        title: "コーポレートビジョン",
        category: "ブランドムービー",
        subtitle: "ブランドムービー",
        description: "企業の長期ビジョンを、エモーショナルなストーリー展開で映像化。インナーブランディングにも活用。",
        tags: ["Branding", "Corporate", "Vision"],
        color: "bg-blue-50",
        videoSrc: "/videos/corporate.mp4",
        client: "株式会社フューチャービジョン様",
        duration: "6週間",
        overview: "企業の10年ビジョンを映像化したブランドムービーを制作。社員のインナーブランディングと対外的な企業イメージ向上に貢献しました。",
        challenges: [
            "抽象的な企業ビジョンを具体的に表現したい",
            "社員の一体感を醸成し、モチベーションを高めたい",
            "対外的な企業イメージを刷新したい"
        ],
        solutions: [
            "企業の歴史と未来をストーリーで繋ぐ感動的な構成",
            "社員インタビューと実際のプロジェクト映像を織り交ぜた演出",
            "企業カラーを活かした洗練されたビジュアルデザイン"
        ],
        technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
        results: [
            "社内イベントで上映し、社員満足度調査で高評価",
            "企業サイトのトップページに掲載し、滞在時間が2倍に",
            "採用説明会での使用により、企業理解度が向上"
        ]
    }
];

// ホームページ用の抜粋版(最初の2件のみ)
export const FEATURED_WORKS = ALL_WORKS.slice(0, 2);
