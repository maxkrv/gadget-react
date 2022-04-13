import React from "react";
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
						{props.product.map((p, i) => (
							<div key={i} className="product__item">
								<img
									src={p.image}
									alt=""
									className="product__img"
								/>
								<h2 className="product__title">{p.title}</h2>

								<div className="product__footer">
									<Button>Add to Cart</Button>
									<span className="product__price">
										${p.price}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
