import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./App.css";

export function LayoutPublic() {
	return (
		<div>
			<Header />
			<main className='app'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
