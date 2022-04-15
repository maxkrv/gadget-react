import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import "./styles/style.css";
import products from "./products.json";
import Footer from "./components/Footer";

function App() {
	const [product, setProduct] = useState(products);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const sortByPrice = () => {
		setProduct([...product].sort((a, b) => a.price - b.price));
	};

	const sortByName = () => {
		setProduct([...product].sort((a, b) => a.title.localeCompare(b.title)));
	};

	const addToCart = (productToAdd) => {
		console.log(12);

		if (cart.length < 1) {
			setCart([{ ...productToAdd, quantity: 1 }]);
		}

		setCart(
			cart.map((currentProduct) => {
				if (currentProduct.id === productToAdd.id) {
					return {
						...currentProduct,
						quantity: currentProduct.quantity + 1,
					};
				}

				return { ...currentProduct, quantity: 1 };
			})
		);
	};

	return (
		<div className="App">
			<Header />
			<ProductsList
				addToCart={addToCart}
				sortByName={sortByName}
				sortByPrice={sortByPrice}
				product={product}
			/>
			<Footer />
		</div>
	);
}

export default App;
