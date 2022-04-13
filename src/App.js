import { useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import "./styles/style.css";
import products from "./products.json";
import Footer from "./components/Footer";

function App() {
	const [product, setProduct] = useState(products);

	const sortByPrice = () => {
		setProduct([...product].sort((a, b) => a.price - b.price));
	};

	const sortByName = () => {
		setProduct([...product].sort((a, b) => a.title.localeCompare(b.title)));
	};

	return (
		<div className="App">
			<Header />
			<ProductsList
				sortByName={sortByName}
				sortByPrice={sortByPrice}
				product={product}
			/>
			<Footer />
		</div>
	);
}

export default App;
