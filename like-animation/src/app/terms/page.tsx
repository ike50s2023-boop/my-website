"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 border-b-4 border-gray-100 pb-8 tracking-tighter">
                        利用規約
                    </h1>

                    <div className="space-y-12 text-gray-600 leading-relaxed font-bold">
                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-primary rounded-full" />
                                第1条（適用）
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                本規約は、Like Animation（以下「当方」といいます。）が提供するすべてのサービス（以下「本サービス」といいます。）の利用条件を定めるものです。
                                本サービスをご利用いただくお客様（以下「ユーザー」といいます。）は、本規約に同意したものとみなします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-secondary rounded-full" />
                                第2条（契約の成立）
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                ユーザーが当方に対し制作の申し込みを行い、当方がこれを承諾した時点で、本サービスの利用契約が成立するものとします。
                                契約の詳細条件については、別途提示する見積書および発注書等により定めるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-accent rounded-full" />
                                第3条（著作権の帰属）
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                成果物の著作権は、特段の定めがない限り、利用代金の完済をもってユーザーに移転するものとします。
                                ただし、制作過程で生じた中間生成物（絵コンテ、未使用案、プロジェクトファイル等）の著作権は当方に留保されます。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-primary rounded-full" />
                                第4条（禁止事項）
                            </h2>
                            <div className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                                    <li>法令または公序良俗に違反する行為</li>
                                    <li>犯罪行為に関連する行為</li>
                                    <li>当方のサービスの運営を妨害するおそれのある行為</li>
                                    <li>他のユーザーまたは第三者に不利益、損害、不快感を与える行為</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-pop-secondary rounded-full" />
                                第5条（免責事項）
                            </h2>
                            <p className="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                                当方は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                                当方の債務不履行責任は、当方の故意または重過失によらない場合には免責されるものとします。
                            </p>
                        </section>

                        <div className="p-8 bg-pop-dark rounded-[32px] text-white">
                            <p className="font-black text-lg mb-4">お問い合わせ窓口</p>
                            <p className="text-gray-400">本規約に関するお問い合わせは、お問い合わせフォームよりお願いいたします。</p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            <Footer />
        </main>
    );
}
