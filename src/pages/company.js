import Header from "../components/Header";
import Footer from "../components/Footer";

function Company(props) {
	return (
		<div>
			<Header />
			<main className="min-h-[70vh] bg-gray-200 pt-40 flex flex-col items-center">
				<div className="bg-white rounded-md w-full md:w-2/3 px-5 py-10">
					<h2 className="w-full text-center text-lg border-b">
						運営会社
					</h2>
					<p className="pt-5 w-full text-center">
						株式会社Fractalform – Uguide事務局
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
export default Company;
