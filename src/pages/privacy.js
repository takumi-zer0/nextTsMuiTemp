import Header from "../components/Header";
import Footer from "../components/Footer";

function privacy(props) {
	return (
		<div className="">
			<Header />
			<main className="min-h-[70vh] flex flex-col items-center">
				<div className="md:w-2/3 md:border rounded-md mt-16 py-5 mb-5">
					<article
						id="post-3920"
						className="post-3920 page type-page status-publish hentry w-full text-center gap-3 flex-col flex"
					>
						<header className="page-header">
							<h1 className="page-title text-xl">
								プライバシーポリシー
							</h1>
						</header>
						<div
							className="entry-content text-left flex flex-col gap-3 px-5"
							itemProp="text"
						>
							<p>
								・個人情報の取得、管理について
								<br />
								当サイトは、お客さまの個人情報を正確、または最新のステータスと状態に保ち、個人情報への不正なアクセス・紛失・漏洩などを徹底的に防止するため、セキュリティまた、組織内部の維持・管理体制づくりの整備・社員教育の必要な教育の徹底に措置を講じ、安全対策を実施し個人情報の漏洩をなくす徹底的な管理を行います。また偽りその他不正の手段によらず適正に個人情報を取得致します。
							</p>
							<p>
								・利用目的範囲内での利用
								<br />
								当サイトは、あらかじめご本人の同意を得た場合は、先に特定された利用目的の達成に必要な範囲内でのみ個人情報を取り扱います。
							</p>
							<p>
								・個人情報の第三者への開示・提供の禁止
								<br />
								当サイトは、取り扱う個人情報の漏洩、滅失または毀損防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。個人情報保護法(プライバシー保護法)等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることをなく、第三者に提供致しません。
							</p>
							<p>
								・個人情報の安全対策
								<br />
								当サイトは、個人情報の安全性確保のために、サイト内外でのセキュリティに万全の対策または強化を講じています。
							</p>
							<p>
								・ご本人の照会
								<br />
								ご利用者がご本人の個人情報の照会・削除などをご希望される場合、また変更・修正をされる場合には、ご本人様かどうかを確認の上、対応させていただきます。
							</p>
							<p>
								・法令、規範の遵守と本方針の変更見直し
								<br />
								当サイトは、保有する本サイトからの個人情報に関して、適用される日本での法令、政令の同等の、または規範を遵守するとともに、本プライバシーポリシーのコンテンツを随時確認し、その改善に努めます。本方針の内容は変更されることがあります。 変更後の本方針については、当サイトがその後別途、制定する場合を除いて、当サイトに掲載した時から効力を生じるものとします。
							</p>
						</div>
					</article>
				</div>
			</main>
			<Footer />
		</div>
	);
}
export default privacy;
