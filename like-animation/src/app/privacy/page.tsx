"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 border-b-4 border-gray-100 pb-8 tracking-tighter">
                        プライバシーポリシー
                    </h1>

                    <div className="space-y-12 text-gray-600 leading-relaxed font-bold">
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-primary rounded-full" />
                                1. 個人情報の定義
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、
                                当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-secondary rounded-full" />
                                2. 個人情報の収集方法
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                当方は、ユーザーがサービスへのお問い合わせや申し込みをする際に、氏名、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-accent rounded-full" />
                                3. 個人情報の利用目的
                            </h2>
                            <div className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                <p className="mb-4">当方が個人情報を収集・利用する目的は、以下のとおりです。</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                                    <li>サービスの提供・運営のため</li>
                                    <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                                    <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                                    <li>上記の利用目的に付随する目的</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-primary rounded-full" />
                                4. 個人情報の第三者提供
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                当方は、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
                                ただし、個人情報保護法その他の法令で認められる場合を除きます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-secondary rounded-full" />
                                5. お問い合わせ窓口
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
                            </p>
                        </section>
                    </div>
                </ScrollReveal>
            </section>

            <Footer />
        </main>
    );
}
