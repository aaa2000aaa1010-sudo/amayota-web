export default function Home() {
  return (
    <div className="bg-[#000000] text-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-2xl bg-black/70 border-b border-white/[0.08]">
        <div className="max-w-[980px] mx-auto px-5 h-12 flex items-center justify-between">
          <span className="text-[13px] font-semibold tracking-wide">AMAYOTA</span>
          <nav className="hidden sm:flex gap-8 text-[12px] text-white/50">
            {["Service", "Company", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors duration-200">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-12">
        {/* radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[900px] rounded-full"
            style={{background: "radial-gradient(ellipse at center, rgba(120,120,255,0.08) 0%, transparent 70%)"}} />
        </div>

        {/* app icon */}
        <div className="relative z-10 w-[88px] h-[88px] rounded-[20px] bg-white flex items-center justify-center mb-10 shadow-[0_0_60px_rgba(255,255,255,0.15)]">
          <span className="text-black text-4xl font-black">S</span>
        </div>

        <p className="relative z-10 text-[11px] tracking-[0.35em] uppercase text-white/30 mb-4">合同会社AMAYOTA プレゼンツ</p>

        <h1 className="relative z-10 text-[72px] sm:text-[96px] font-bold leading-none tracking-[-0.03em] mb-5"
          style={{background: "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          Three Good
        </h1>

        <p className="relative z-10 text-[19px] sm:text-[21px] text-white/60 font-light leading-relaxed max-w-[520px]">
          スキルで学生をつなぐ。<br />
          大学生のための、新しいマッチングプラットフォーム。
        </p>

        <div className="relative z-10 mt-16 grid grid-cols-3 gap-12 border-t border-white/10 pt-10 w-full max-w-lg">
          {[["70+","登録ユーザー"],["2026","サービス開始"],["無料","ずっと無料"]].map(([n,l]) => (
            <div key={l} className="text-center">
              <div className="text-[28px] font-semibold">{n}</div>
              <div className="text-[11px] text-white/30 mt-1 tracking-wide">{l}</div>
            </div>
          ))}
        </div>

        {/* down arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section id="service" className="py-32 px-5">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/30 mb-3">Service</p>
            <h2 className="text-[48px] sm:text-[64px] font-bold tracking-tight leading-none"
              style={{background: "linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
              依頼する。受注する。<br />可能性をひらく。
            </h2>
          </div>

          {/* Big feature card */}
          <div className="rounded-3xl overflow-hidden mb-4" style={{background: "linear-gradient(145deg, #1c1c1e 0%, #0a0a0a 100%)", border: "1px solid rgba(255,255,255,0.08)"}}>
            <div className="p-10 sm:p-14">
              <div className="text-[48px] mb-6">💼</div>
              <h3 className="text-[28px] sm:text-[34px] font-bold mb-4 tracking-tight">スキルシェア</h3>
              <p className="text-white/50 text-[15px] leading-[1.8] max-w-xl">
                写真撮影・勉強サポート・就活相談など、大学生が持つスキルを活かして互いに助け合えるプラットフォーム。依頼者と受注者が合意した金額で取引が成立します。
              </p>
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {[["依頼を投稿","やってほしいことを投稿するだけ"],["マッチング","学生同士でマッチング"],["取引完了","安心のプラットフォーム手数料制"]].map(([t,d]) => (
                  <div key={t} className="bg-white/[0.04] rounded-2xl p-5">
                    <div className="text-[13px] font-semibold mb-1">{t}</div>
                    <div className="text-[12px] text-white/40 leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Safety card */}
          <div className="rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row gap-8 items-start" style={{background: "linear-gradient(145deg, #0f1117 0%, #080810 100%)", border: "1px solid rgba(100,100,255,0.15)"}}>
            <div className="text-[52px]">🎓</div>
            <div>
              <h3 className="text-[22px] font-bold mb-3">学生証確認による安心設計</h3>
              <p className="text-white/40 text-[14px] leading-[1.8] max-w-lg">
                Three Goodは学生証確認を導入。本物の大学生だけが使えるクローズドコミュニティで、安全で信頼性の高いマッチング環境を提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY ── */}
      <section id="company" className="py-32 px-5 bg-[#0a0a0a]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/20 mb-3">Company</p>
          <h2 className="text-[48px] sm:text-[64px] font-bold tracking-tight mb-16 leading-none"
            style={{background: "linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
            会社情報
          </h2>

          <div className="rounded-3xl overflow-hidden" style={{border: "1px solid rgba(255,255,255,0.07)"}}>
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
            ].map(([label, value], i) => (
              <div key={label} className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 px-8 py-5 ${i !== 0 ? "border-t border-white/[0.06]" : ""}`}>
                <div className="text-[12px] text-white/25 sm:w-28 shrink-0 tracking-wide">{label}</div>
                <div className="text-[14px] text-white/70">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-40 px-5 text-center relative">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full"
            style={{background: "radial-gradient(ellipse, rgba(100,100,255,0.06) 0%, transparent 70%)"}} />
        </div>
        <p className="relative z-10 text-[11px] tracking-[0.35em] uppercase text-white/25 mb-4">Contact</p>
        <h2 className="relative z-10 text-[48px] sm:text-[64px] font-bold tracking-tight mb-5 leading-none"
          style={{background: "linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          お問い合わせ
        </h2>
        <p className="relative z-10 text-white/40 text-[15px] mb-12">ご質問・取材・協業のご相談はお気軽にどうぞ。</p>
        <a href="mailto:musubi.match@gmail.com"
          className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-white/90 transition-colors">
          メールで問い合わせる
          <span>→</span>
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.07] py-8 px-5">
        <div className="max-w-[980px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/20 tracking-widest">
          <span>AMAYOTA LLC</span>
          <span>© 2026 合同会社AMAYOTA. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
