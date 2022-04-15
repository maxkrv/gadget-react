import React from "react";
import Button from "./UI/Button/Button";

const ProductItem = ({product, addToCart}) => {
	return (
		<div key={product.id} className="product__item">
			<img src={product.image} alt="" className="product__img" />
			<h2 className="product__title">{product.title}</h2>

			<div className="product__footer">
				<Button onClick={() => addToCart(product)}>Add to Cart</Button>
				<span className="product__price">${product.price}</span>
			</div>
		</div>
	);
};

export default ProductItem;
