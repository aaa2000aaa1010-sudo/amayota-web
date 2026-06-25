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

        <h1 className="text-[27px] sm:text-[58px] font-bold leading-[1.25] tracking-tight mb-10 max-w-2xl">
          テクノロジーで、<br />
          すべての人に笑顔を。
        </h1>

        <p className="text-[16px] text-gray-600 leading-[1.9] max-w-2xl mb-20">
          AMAYOTAは、テクノロジーの力で人々の生活をより豊かにすることを目指す会社です。現在は学生向けスキルシェアプラットフォーム「Three Good」を運営し、若者が互いに支え合える環境をつくっています。
        </p>

        {/* ── ILLUSTRATION ── */}
        <div className="relative w-full overflow-hidden rounded-3xl bg-white border border-gray-100">
          <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section id="service" className="py-24 px-8 border-t border-gray-100">
        <div className="max-w-[1080px] mx-auto">
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-3">Service</p>
            <h2 className="text-[40px] sm:text-[52px] font-bold tracking-tight leading-none mb-4">Three Good</h2>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              大学生のスキルと時間をつなぐ、スキルシェアプラットフォーム。
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
