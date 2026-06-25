export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-wide">AMAYOTA</span>
          <nav className="hidden sm:flex gap-8 text-sm text-gray-600">
            <a href="#service" className="hover:text-gray-900">事業内容</a>
            <a href="#company" className="hover:text-gray-900">会社情報</a>
            <a href="#contact" className="hover:text-gray-900">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-sm text-gray-500 mb-4 tracking-widest uppercase">合同会社AMAYOTA</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          学生の可能性を、<br />つなぐ。
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          大学生同士がスキルを活かし、助け合えるプラットフォームを提供しています。
        </p>
      </section>

      {/* Service */}
      <section id="service" className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">事業内容</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-bold mb-3">スキルシェア・依頼マッチング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                大学生が持つスキルや時間を活かして、学生同士でお手伝いを依頼・受注できるプラットフォームです。写真撮影・勉強サポート・就活相談など、様々な依頼に対応しています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold mb-3">友達マッチング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                共通の趣味・授業・エリアを持つ学生同士が出会えるマッチング機能です。新しい環境でも仲間を見つけやすくします。
              </p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Three Good について</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">70+</div>
                <div className="text-sm text-gray-500">登録ユーザー数</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">2026</div>
                <div className="text-sm text-gray-500">サービス開始年</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">学生限定</div>
                <div className="text-sm text-gray-500">学生証確認済みユーザーのみ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">会社情報</h2>
          <div className="border rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "会社名", value: "合同会社AMAYOTA" },
                  { label: "英文名", value: "AMAYOTA LLC" },
                  { label: "設立", value: "2026年5月29日" },
                  { label: "資本金", value: "50万円" },
                  { label: "代表社員", value: "宮木 寛次郎" },
                  { label: "所在地", value: "〒603-8351 京都府京都市北区衣笠大祓町15-6 グローバル衣笠303" },
                  { label: "電話番号", value: "080-6572-8572" },
                  { label: "メール", value: "musubi.match@gmail.com" },
                  { label: "事業内容", value: "インターネットを利用した各種情報提供サービス" },
                ].map(({ label, value }, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4 px-6 font-medium text-gray-500 bg-gray-50 w-1/3 align-top">{label}</td>
                    <td className="py-4 px-6 text-gray-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-8">ご質問・ご相談はメールにてお気軽にどうぞ。</p>
          <a
            href="mailto:musubi.match@gmail.com"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            musubi.match@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6 text-center text-sm text-gray-400">
        © 2026 合同会社AMAYOTA. All rights reserved.
      </footer>
    </div>
  );
}
