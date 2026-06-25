export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.15em] uppercase">AMAYOTA</span>
          <nav className="hidden sm:flex gap-8 text-xs text-white/50">
            <a href="#service" className="hover:text-white transition-colors">Service</a>
            <a href="#company" className="hover:text-white transition-colors">Company</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero — full viewport */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* App icon */}
        <div className="w-24 h-24 rounded-[26px] bg-white flex items-center justify-center mb-10 shadow-2xl relative z-10">
          <span className="text-black text-5xl font-black">S</span>
        </div>

        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-5 relative z-10">合同会社AMAYOTA</p>

        <h1 className="text-6xl sm:text-8xl font-bold leading-tight tracking-tight mb-6 relative z-10">
          Three Good
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-lg leading-relaxed relative z-10">
          大学生のスキルをつなぐ、<br className="hidden sm:block" />
          新しいマッチングプラットフォーム。
        </p>

        <div className="mt-16 flex gap-12 relative z-10">
          {[
            { num: "70+", label: "登録ユーザー" },
            { num: "2026", label: "サービス開始" },
            { num: "学生限定", label: "本人確認済み" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-semibold">{num}</div>
              <div className="text-white/40 text-xs mt-1 tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Service — white section */}
      <section id="service" className="bg-white text-gray-900 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 text-center">Service</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 tracking-tight">2つの機能。</h2>
          <p className="text-center text-gray-500 mb-20">学生生活をもっとリッチにする体験を提供します。</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-950 text-white rounded-3xl p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="text-5xl mb-8">💼</div>
                <h3 className="text-2xl font-bold mb-3">スキルシェア</h3>
                <p className="text-white/50 text-sm leading-loose">
                  写真撮影・勉強サポート・就活相談など、大学生のスキルで互いに助け合えるプラットフォーム。依頼者と受注者が合意した金額のみで取引が成立します。
                </p>
              </div>
              <div className="mt-8 text-xs text-white/30 tracking-widest uppercase">Skill Sharing</div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-3xl p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="text-5xl mb-8">👥</div>
                <h3 className="text-2xl font-bold mb-3">友達マッチング</h3>
                <p className="text-gray-500 text-sm leading-loose">
                  共通の趣味・授業・エリアを持つ学生同士が出会えるマッチング機能。新しい環境でも自然に友達ができる仕組みを提供します。
                </p>
              </div>
              <div className="mt-8 text-xs text-gray-400 tracking-widest uppercase">Friend Matching</div>
            </div>
          </div>

          {/* Safety banner */}
          <div className="mt-6 bg-gray-950 text-white rounded-3xl p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="text-5xl">🎓</div>
            <div>
              <h3 className="text-xl font-bold mb-2">学生証確認による安心設計</h3>
              <p className="text-white/50 text-sm leading-loose max-w-xl">
                Three Goodは学生証確認を導入し、本物の大学生だけが利用できるクローズドコミュニティを実現。安全で信頼性の高いマッチング環境を提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company — dark section */}
      <section id="company" className="bg-black py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-3">Company</p>
          <h2 className="text-5xl sm:text-6xl font-bold mb-20 tracking-tight">会社情報</h2>

          <div className="divide-y divide-white/10">
            {[
              { label: "会社名", value: "合同会社AMAYOTA" },
              { label: "英文名", value: "AMAYOTA LLC" },
              { label: "設立", value: "2026年5月29日" },
              { label: "資本金", value: "500,000円" },
              { label: "代表社員", value: "宮木 寛次郎" },
              { label: "所在地", value: "〒603-8351 京都府京都市北区衣笠大祓町15-6 グローバル衣笠303" },
              { label: "電話番号", value: "080-6572-8572" },
              { label: "メール", value: "musubi.match@gmail.com" },
              { label: "事業内容", value: "インターネットを利用した各種情報提供サービス" },
            ].map(({ label, value }) => (
              <div key={label} className="py-6 sm:grid sm:grid-cols-4 gap-8">
                <div className="text-white/30 text-sm mb-1 sm:mb-0">{label}</div>
                <div className="sm:col-span-3 text-white/80 text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — white section */}
      <section id="contact" className="bg-white text-gray-900 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Contact</p>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">お問い合わせ</h2>
          <p className="text-gray-500 mb-12 text-lg">
            ご質問・取材・協業のご相談はお気軽にどうぞ。
          </p>
          <a
            href="mailto:musubi.match@gmail.com"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            メールで問い合わせる
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20 tracking-widest">
          <span>AMAYOTA LLC</span>
          <span>© 2026 合同会社AMAYOTA. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
