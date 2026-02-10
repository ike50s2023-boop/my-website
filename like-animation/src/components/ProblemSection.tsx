"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, UserPlus2 } from "lucide-react";

const problems = [
    {
        icon: <UserPlus2 className="w-6 h-6" />,
        title: "オンボーディングの離脱",
        description: "多機能ゆえの「複雑さ」が、新規ユーザーの 60% を最初の 1分で脱落させている。",
        color: "from-red-500/20 to-orange-500/20"
    },
    {
        icon: <TrendingDown className="w-6 h-6" />,
        title: "深刻なチャーン（解約）",
        description: "プロダクトの「真の価値」を体感する前に、ユーザーが価値を感じず去ってしまう。",
        color: "from-orange-500/20 to-yellow-500/20"
    },
    {
        icon: <AlertCircle className="w-6 h-6" />,
        title: "機能停滞の壁",
        description: "渾身の新機能をリリースしても、誰にも気づかれず、UI の一部として埋もれていく。",
        color: "from-yellow-500/20 to-red-500/20"
    }
];

export default function ProblemSection() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-[0.3em] text-xs uppercase"
                    >
                        The Reality
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-display font-bold leading-tight"
                    >
                        多機能化の果てに待つ、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                            サイレントなユーザー離脱。
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-muted text-lg max-w-2xl mx-auto"
                    >
                        静止した UI は、もはやユーザーを繋ぎ止めることはできません。<br />
                        複雑さを解き明かし、魅了する「体験」への投資が必要です。
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-8 glass-panel border-white/5 group hover:border-red-500/30 transition-all duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3">{problem.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
