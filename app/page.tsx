export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">AMAYOTA</span>
          <nav className="hidden sm:flex gap-10 text-xs tracking-widest uppercase text-gray-500">
            <a href="#service" className="hover:text-gray-900 transition-colors">Service</a>
            <a href="#company" className="hover:text-gray-900 transition-colors">Company</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex flex-col justify-center px-8">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-8">合同会社AMAYOTA</p>
          <h1 className="text-6xl sm:text-8xl font-thin leading-none tracking-tight mb-12 text-gray-900">
            Connect<br />
            <span className="font-semibold">Students.</span>
          </h1>
          <p className="text-base text-gray-500 max-w-md leading-loose">
            大学生の可能性を最大化する<br />
            スキルシェア・マッチングプラットフォーム
          </p>
          <div className="mt-16 h-px bg-gray-200 w-full" />
          <div className="mt-8 flex gap-16 text-center sm:text-left">
            <div>
              <div className="text-4xl font-semibold">70<span className="text-lg text-gray-400">+</span></div>
              <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">Users</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">2026</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">京都</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">Based in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-32 px-8 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Service</p>
          <h2 className="text-4xl font-thin mb-20">事業内容</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-gray-800">
            <div className="bg-gray-950 p-12">
              <div className="text-xs tracking-widest uppercase text-gray-500 mb-6">01</div>
              <h3 className="text-xl font-medium mb-4">スキルシェア・依頼マッチング</h3>
              <p className="text-gray-400 text-sm leading-loose">
                大学生が持つスキルを活かして、学生同士でお手伝いを依頼・受注できるプラットフォーム。写真撮影・勉強サポート・就活相談など多様な依頼に対応。
              </p>
            </div>
            <div className="bg-gray-950 p-12">
              <div className="text-xs tracking-widest uppercase text-gray-500 mb-6">02</div>
              <h3 className="text-xl font-medium mb-4">友達マッチング</h3>
              <p className="text-gray-400 text-sm leading-loose">
                共通の趣味・授業・エリアを持つ学生同士が出会えるマッチング機能。学生証確認済みユーザーのみが利用できる安全な環境を提供。
              </p>
            </div>
          </div>
          <div className="mt-px bg-gray-800">
            <div className="bg-gray-950 p-12">
              <div className="text-xs tracking-widest uppercase text-gray-500 mb-6">Platform</div>
              <h3 className="text-xl font-medium mb-4">Three Good</h3>
              <p className="text-gray-400 text-sm leading-loose max-w-xl">
                学生証確認による本人認証を導入し、安心・安全な学生コミュニティを実現。大学生限定のクローズドプラットフォームとして信頼性の高い環境を提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Company</p>
          <h2 className="text-4xl font-thin mb-20">会社情報</h2>
          <div className="space-y-0">
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
            ].map(({ label, value }, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-gray-100 py-6 last:border-b">
                <div className="text-xs tracking-widest uppercase text-gray-400 pt-1">{label}</div>
                <div className="col-span-2 text-sm leading-relaxed">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-8 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Contact</p>
          <h2 className="text-4xl font-thin mb-8">お問い合わせ</h2>
          <p className="text-gray-400 text-sm mb-12 leading-loose">
            ご質問・取材・協業のご相談はメールにてお気軽にご連絡ください。
          </p>
          <a
            href="mailto:musubi.match@gmail.com"
            className="inline-flex items-center gap-4 border border-gray-700 px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-colors"
          >
            musubi.match@gmail.com
            <span className="text-gray-500">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8 px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600 tracking-widest">
          <span>AMAYOTA LLC</span>
          <span>© 2026 合同会社AMAYOTA. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
