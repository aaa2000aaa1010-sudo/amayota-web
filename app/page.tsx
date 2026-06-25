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
        <div className="relative h-[440px] sm:h-[500px] w-full overflow-hidden rounded-3xl border border-gray-100 bg-[#f9fafb]">
          {/* ラインGrid背景 */}
          <div className="absolute inset-0 opacity-60" style={{backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '44px 44px'}} />
          {/* 中央グロー */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white opacity-70 blur-3xl" />

          {/* ── 中央カード（プロフィール） ── */}
          <div className="float3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-52">
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-gray-100/80 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-[14px] font-bold shrink-0">田</div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-gray-900 truncate">田中 けんじ</p>
                  <p className="text-[11px] text-gray-400">京都大学 2年</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl px-3 py-2.5 mb-4">
                <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wide">スキル</p>
                <p className="text-[13px] font-semibold text-gray-800">勉強サポート</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-px">
                  {[0,1,2,3,4].map(i => <span key={i} className="text-amber-400 text-[11px]">★</span>)}
                </div>
                <span className="text-[14px] font-bold text-gray-900">¥1,500/h</span>
              </div>
            </div>
          </div>

          {/* ── マッチング通知（上） ── */}
          <div className="float1 absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 7l3 3 6-6" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-gray-900">マッチング完了</p>
                <p className="text-[10px] text-gray-400">依頼が確定しました</p>
              </div>
            </div>
          </div>

          {/* ── 支払いカード（左上） ── */}
          <div className="float2 absolute top-14 left-[6%] sm:left-[12%]">
            <div className="bg-gray-900 text-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.14)] px-4 py-3.5">
              <p className="text-[10px] text-white/40 mb-1 tracking-widest uppercase">Payment</p>
              <p className="text-[18px] font-bold tracking-tight">¥ 1,500</p>
            </div>
          </div>

          {/* ── スキルタグ（左下） ── */}
          <div className="float4 absolute bottom-14 left-[6%] sm:left-[12%]">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 px-4 py-3">
              <p className="text-[10px] text-gray-400 mb-2 tracking-wide uppercase">Skills</p>
              <div className="flex gap-1.5">
                <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-full">写真撮影</span>
                <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-full">就活相談</span>
              </div>
            </div>
          </div>

          {/* ── 学生証確認（右上） ── */}
          <div className="float5 absolute top-14 right-[6%] sm:right-[12%]">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 px-4 py-3 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1a3 3 0 100 6 3 3 0 000-6zM2 12a5 5 0 0110-1" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-gray-900">学生証確認済み</p>
                <p className="text-[10px] text-gray-400">本人確認完了</p>
              </div>
            </div>
          </div>

          {/* ── 評価（右下） ── */}
          <div className="float2 absolute bottom-14 right-[6%] sm:right-[12%]">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 px-4 py-3">
              <p className="text-[10px] text-gray-400 mb-1.5 tracking-wide uppercase">Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-bold text-gray-900 leading-none">4.9</span>
                <div className="flex gap-px">{[0,1,2,3,4].map(i => <span key={i} className="text-amber-400 text-[11px]">★</span>)}</div>
              </div>
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
