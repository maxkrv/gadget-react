import {useState, useEffect} from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import "./styles/style.css";
import products from "./products.json";
import Footer from "./components/Footer";

const cartFromLocalStorage = JSON.parse(
	localStorage.getItem("cart-list") || "[]"
);

function App() {
	const [product, setProduct] = useState(products);
	const [cart, setCart] = useState(cartFromLocalStorage);

	useEffect(() => {
		localStorage.setItem("cart-list", JSON.stringify(cart));
	}, [cart]);

	const sortByPrice = () => {
		setProduct([...product].sort((a, b) => a.price - b.price));
	};

	const sortByName = () => {
		setProduct([...product].sort((a, b) => a.title.localeCompare(b.title)));
	};

	const getCartTotal = () => {
		return cart.reduce((sum, {quantity}) => sum + quantity, 0);
	};

	const clearCart = () => {
		setCart([]);
	};

	const getTotalSum = () => {
		return cart.reduce(
			(sum, {price, quantity}) => sum + price * quantity,
			0
		);
	};

	const addToCart = (productToAdd) => {
		const isProductInCart = cart.find(
			(currentProduct) => currentProduct.id === productToAdd.id
		);

		if (isProductInCart) {
			const updatedCart = cart.map((currentProduct) => {
				if (currentProduct.id === productToAdd.id) {
					return {
						...currentProduct,
						quantity: currentProduct.quantity + 1,
					};
				}

				return currentProduct;
			});

			setCart(updatedCart);
		} else {
			setCart([...cart, {...productToAdd, quantity: 1}]);
		}
	};

	const removeFromCart = (productToRemove) => {
		setCart(cart.filter((product) => product.id !== productToRemove.id));
	};

	const cartDecrease = (productToDecrease) => {
		const isProductInCart = cart.find(
			(currentProduct) => currentProduct.id === productToDecrease.id
		);

		if (productToDecrease.quantity === 1) {
			if (isProductInCart) {
				console.log(12)
				const updatedCart = cart.map((currentProduct) => {
					if (currentProduct.id === productToDecrease.id) {
						return {
							...currentProduct,
							quantity: currentProduct.quantity - 1,
						};
					}

					return currentProduct;
				});

				setCart(updatedCart);
			}
		} else {
			console.log("stop");
		}
	}

	return (
		<div className="App">
			<Header
				cart={cart}
				setCart={setCart}
				clearCart={clearCart}
				getCartTotal={getCartTotal}
				getTotalSum={getTotalSum}
				removeFromCart={removeFromCart}
				addToCart={addToCart}
				cartDecrease={cartDecrease}
			/>
			<ProductsList
				addToCart={addToCart}
				sortByName={sortByName}
				sortByPrice={sortByPrice}
				product={product}
			/>
			<Footer/>
		</div>
	);
}

export default App;
