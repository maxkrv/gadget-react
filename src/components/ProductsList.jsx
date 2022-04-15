import React from "react";
import ProductItem from "./ProductItem";
import Button from "./UI/Button/Button";

const ProductsList = (props) => {
	return (
		<div className="products">
			<div className="container">
				<div className="products__inner">
					<div className="products__buttons">
						<Button onClick={props.sortByName}>
							Sort by Product Name
						</Button>
						<Button onClick={props.sortByPrice}>
							Sort by Price
						</Button>
					</div>

					<div className="products__wrapper">
						{props.product.map((p) => (
							<ProductItem
								addToCart={props.addToCart}
								product={p}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
