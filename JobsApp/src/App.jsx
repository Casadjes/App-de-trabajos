import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { CardContainer } from "./components/CardContainer";
import { Footer } from "./components/Footer";
// import { Card } from "./components/Card";

function App() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			const result = await fetch("http://localhost:3000/users");

			setData(await result.json());
			setIsLoading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			<Header title='JobsApp' />
			<div className='app'>
				<Filter />
				<CardContainer data={data} isLoading={isLoading} />
			</div>
			<Footer />
		</>
	);
}

export default App;

// colores: desendencia => #000039, #3e3e53, #7c7b6c, #bab986, #f8f69f
