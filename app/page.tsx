export default function Home() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1080px] mx-auto px-8 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">AMAYOTA</span>
          <nav className="hidden md:flex gap-8 text-[13px] text-gray-600">
            {[["About","#about"],["Service","#service"],["Company","#company"],["Contact","#contact"]].map(([l,h]) => (
              <a key={l} href={h} className="hover:text-gray-900 transition-colors font-medium">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── HERO / MISSION ── */}
      <section id="about" className="max-w-[1080px] mx-auto px-8 pt-20 pb-0">
        <p className="text-[13px] font-bold text-black mb-5 tracking-wide">Mission</p>

        <h1 className="text-[44px] sm:text-[58px] font-bold leading-[1.25] tracking-tight mb-10 max-w-2xl">
          学生の可能性を広げ、<br />
          スキルをつなぐ。
        </h1>

        <p className="text-[16px] text-gray-600 leading-[1.9] max-w-2xl mb-20">
          大学生が持つスキルや時間は、誰かの役に立てる価値があります。Three Goodは、依頼したい学生と手伝いたい学生をつなぐプラットフォームです。写真撮影・勉強サポート・就活相談など、学生同士が互いに支え合える環境をつくります。
        </p>

        {/* ── ILLUSTRATION ── */}
        <div className="relative h-[460px] sm:h-[520px] w-full overflow-hidden rounded-3xl bg-white border border-gray-100">
          {/* 薄グリッド */}
          <div className="absolute inset-0 opacity-25" style={{backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '44px 44px'}} />
          {/* 底部グロー */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-blue-50/50 to-transparent blur-2xl" />

          {/* ── メインイラスト（3人グループ） ── */}
          <div className="float3 absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <svg viewBox="0 0 430 320" width="400" height="298" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 装飾アーク 左 */}
              <path d="M0 310 Q95 120 215 210" stroke="#93c5fd" strokeWidth="6" strokeLinecap="round" opacity="0.55"/>
              <path d="M0 285 Q95 95 215 185" stroke="#bfdbfe" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="10 8" opacity="0.45"/>
              {/* 装飾アーク 右 */}
              <path d="M430 310 Q335 120 215 210" stroke="#93c5fd" strokeWidth="6" strokeLinecap="round" opacity="0.55"/>
              <path d="M430 285 Q335 95 215 185" stroke="#bfdbfe" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="10 8" opacity="0.45"/>

              {/* ── 人物A 左・ティール・やや前 ── */}
              <path d="M100 128 Q103 104 126 102 Q149 104 151 128" fill="#92400e"/>
              <circle cx="126" cy="136" r="24" fill="#fde8d0"/>
              <path d="M104 158 Q102 182 104 212 L148 212 Q150 182 148 158 Q139 152 126 152 Q113 152 104 158Z" fill="#0d9488"/>
              <path d="M106 170 Q86 182 74 198" stroke="#0d9488" strokeWidth="14" strokeLinecap="round"/>
              <path d="M146 170 Q162 180 166 198" stroke="#0d9488" strokeWidth="14" strokeLinecap="round"/>
              <rect x="160" y="193" width="14" height="19" rx="2.5" fill="#dc2626"/>
              <line x1="167" y1="193" x2="167" y2="212" stroke="white" strokeWidth="1.2"/>
              <path d="M110 212 Q106 236 84 248" stroke="#374151" strokeWidth="15" strokeLinecap="round"/>
              <path d="M144 212 Q148 234 170 244" stroke="#374151" strokeWidth="15" strokeLinecap="round"/>

              {/* ── 人物B 中央・コーラル・背が高い ── */}
              <path d="M172 70 Q175 44 200 42 Q225 44 228 70" fill="#1c0a00"/>
              <circle cx="200" cy="80" r="26" fill="#f5cba7"/>
              <rect x="191" y="104" width="18" height="14" rx="6" fill="#f5cba7"/>
              <path d="M176 116 Q174 155 176 185 L224 185 Q226 155 224 116 Q213 109 200 109 Q187 109 176 116Z" fill="#f97316"/>
              <path d="M178 128 Q158 142 150 160" stroke="#f97316" strokeWidth="15" strokeLinecap="round"/>
              <path d="M222 128 Q242 140 248 158" stroke="#f97316" strokeWidth="15" strokeLinecap="round"/>
              <rect x="241" y="152" width="13" height="22" rx="3" fill="#1f2937"/>
              <rect x="243" y="154" width="9" height="16" rx="1.5" fill="#60a5fa"/>
              <rect x="178" y="182" width="18" height="88" rx="9" fill="#6b7280"/>
              <rect x="204" y="182" width="18" height="88" rx="9" fill="#6b7280"/>

              {/* ── 人物C 右・ブルー ── */}
              <path d="M252 104 Q254 80 274 78 Q294 80 296 104" fill="#111827"/>
              <circle cx="274" cy="112" r="23" fill="#c8956c"/>
              <path d="M254 132 Q252 166 254 194 L294 194 Q296 166 294 132 Q284 125 274 125 Q264 125 254 132Z" fill="#3b82f6"/>
              <path d="M256 144 Q238 156 230 172" stroke="#3b82f6" strokeWidth="13" strokeLinecap="round"/>
              <path d="M292 144 Q308 154 314 168" stroke="#3b82f6" strokeWidth="13" strokeLinecap="round"/>
              <rect x="256" y="191" width="15" height="82" rx="7.5" fill="#374151"/>
              <rect x="279" y="191" width="15" height="82" rx="7.5" fill="#374151"/>

              {/* 地面の影 */}
              <ellipse cx="215" cy="318" rx="130" ry="7" fill="#e5e7eb" opacity="0.6"/>
            </svg>
          </div>

          {/* ── 浮かぶカード（オリジナルデザイン） ── */}
          <div className="float1 absolute bottom-36 left-[10%] sm:left-[16%]">
            <div className="bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 text-[13px] font-medium whitespace-nowrap">
              <span className="text-xl">📸</span> 写真撮影
            </div>
          </div>

          <div className="float2 absolute bottom-52 left-[2%] sm:left-[8%]">
            <div className="bg-black text-white rounded-2xl shadow-lg px-4 py-3 text-[13px] font-medium whitespace-nowrap">
              ¥ 1,500円
            </div>
          </div>

          <div className="float4 absolute bottom-36 right-[10%] sm:right-[16%]">
            <div className="bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 text-[13px] font-medium whitespace-nowrap">
              <span className="text-xl">📝</span> 就活相談
            </div>
          </div>

          <div className="float5 absolute bottom-56 right-[4%] sm:right-[10%]">
            <div className="bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 text-[13px] font-medium whitespace-nowrap">
              <span className="text-xl">🎓</span> 学生証確認済み
            </div>
          </div>

          <div className="float2 absolute bottom-14 left-[22%]">
            <div className="bg-gray-100 rounded-full px-4 py-2 text-[12px] text-gray-600 font-medium whitespace-nowrap">
              ✅ マッチング完了
            </div>
          </div>

          <div className="float1 absolute bottom-14 right-[22%]">
            <div className="bg-gray-100 rounded-full px-4 py-2 text-[12px] text-gray-600 font-medium whitespace-nowrap">
              ⭐ 評価 4.9
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section id="service" className="py-24 px-8 border-t border-gray-100">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-3">Service</p>
              <h2 className="text-[40px] sm:text-[52px] font-bold tracking-tight leading-none">Three Good</h2>
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
              大学生のスキルと時間をつなぐ、<br />スキルシェアプラットフォーム。
            </p>
          </div>

          {/* Photo + text */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl overflow-hidden h-72 sm:h-auto">
              <img src="/study.jpg" alt="学生同士で勉強をサポートしている様子" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center gap-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6a2 2 0 012-2h10a2 2 0 012 2v2H3V6zM3 10h14v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold mb-2 tracking-tight">スキルシェア</h3>
                <p className="text-[14px] text-gray-500 leading-[1.9]">
                  写真撮影・勉強サポート・就活相談など、大学生のスキルで互いに助け合えるプラットフォーム。依頼者と受注者が合意した金額で取引が成立します。
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold mb-2 tracking-tight">学生証確認</h3>
                <p className="text-[14px] text-gray-500 leading-[1.9]">
                  本物の大学生だけが利用できるクローズドコミュニティ。学生証確認を導入し、安全で信頼性の高い環境を提供しています。
                </p>
              </div>
            </div>
          </div>

          {/* Feature row 2 — wide */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 sm:p-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <h3 className="text-[26px] sm:text-[32px] font-bold leading-tight tracking-tight text-gray-900">
                大学生だけの、<br />信頼できる場所。
              </h3>
              <p className="text-[13px] text-gray-400 sm:text-right">Three Good のセキュリティ</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { num: "01", title: "学生証確認", body: "本物の大学生だけが登録できる。なりすましを防ぐ本人確認フロー。" },
                { num: "02", title: "通報・モニタリング", body: "問題ある行動は通報システムと運営監視で速やかに対処。" },
                { num: "03", title: "クローズドな環境", body: "学生同士だからこそ生まれる、安心感と信頼のコミュニティ。" },
              ].map(({ num, title, body }) => (
                <div key={num} className="bg-white border border-gray-100 rounded-xl p-6">
                  <p className="text-[11px] font-bold text-gray-300 mb-4 tracking-widest">{num}</p>
                  <p className="text-[15px] font-bold text-gray-900 mb-2">{title}</p>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY ── */}
      <section id="company" className="py-20 px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[13px] font-bold text-black mb-4">Company</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold mb-12 tracking-tight">会社情報</h2>

          <div className="divide-y divide-gray-100">
            {[
              ["会社名","合同会社AMAYOTA"],
              ["英文名","AMAYOTA LLC"],
              ["設立","2026年5月29日"],
              ["資本金","500,000円"],
              ["代表社員","宮木 寛次郎"],
              ["所在地","〒603-8351 京都府京都市北区衣笠大祓町15-6 グローバル衣笠303"],
              ["電話","080-6572-8572"],
              ["メール","musubi.match@gmail.com"],
              ["事業内容","インターネットを利用した各種情報提供サービス"],
            ].map(([label, value]) => (
              <div key={label} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0">
                <div className="text-[13px] text-gray-400 sm:w-36 shrink-0">{label}</div>
                <div className="text-[15px] text-gray-800">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-gray-50 py-20 px-8">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[13px] font-bold text-black mb-4">Contact</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold mb-4 tracking-tight">お問い合わせ</h2>
          <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
            ご質問・取材・協業のご相談はメールにてお気軽にどうぞ。
          </p>
          <a href="mailto:musubi.match@gmail.com"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-[14px] font-semibold hover:bg-gray-800 transition-colors">
            メールで問い合わせる →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 py-8 px-8">
        <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-gray-400">
          <span className="font-medium text-gray-600">AMAYOTA</span>
          <span>© 2026 合同会社AMAYOTA. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
