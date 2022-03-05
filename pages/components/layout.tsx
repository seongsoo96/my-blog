import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			<main className="max-w-4xl mx-auto px-5 py-20 sm:px-6 md:px-8 xl:px-12 xl:max-w-4xl">
				{children}
			</main>
			<Footer />
		</>
	);
}
