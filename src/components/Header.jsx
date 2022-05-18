import React, { useState } from "react";
import Modal from "./UI/Modal/Modal";
import arrowUp from "../images/arrow-up.svg";
import arrowDown from "../images/arrow-down.svg";
import trash from "../images/trash.svg";

const Header = ({
	getCartTotal,
	cart,
	clearCart,
	getTotalSum,
	removeFromCart,
	addToCart,
	cartDecrease,
}) => {
	const [modal, setModal] = useState(false);

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="logo">
						gadg<span>et</span>
					</h1>

					<div className="cart">
						<span onClick={() => setModal(true)}>cart</span>
						<div className="cart__counter">{getCartTotal()}</div>
						<Modal visible={modal} setVisible={setModal}>
							<div className="modal">
								<h2 className="modal__title">Your Cart</h2>

								<div className="modal__product">
									{cart.map((l, i) => (
										<div
											key={l.id}
											className="modal__product-item"
										>
											<img
												src={l.image}
												alt=""
												className="modal__product-img"
											/>

											<div className="modal__product-info">
												<p className="product__title">
													{l.title}
												</p>
												<span
													className="product__price"
													style={{
														cursor: "default",
													}}
												>
													${l.price}
												</span>
											</div>

											<div className="modal__buttons">
												<div className="modal__buttons-wrapper">
													<img
														onClick={() => {

															addToCart(l)
														}}
														src={arrowUp}
														alt=""
														className="arrow"
													/>
													<p>{l.quantity}</p>
													<img
														onClick={() => {
															if (l.quantity > 1) {
																cartDecrease(l);
															}
														}}
														src={arrowDown}
														alt=""
														className="arrow"
													/>
												</div>

												<img
													onClick={() => {
														removeFromCart(l);
													}}
													src={trash}
													alt=""
													className="modal__delete"
												/>
											</div>
										</div>
									))}
								</div>
								<div className="modal__product-footer">
									<p>Total: $ {getTotalSum()}</p>

									<button
										onClick={clearCart}
										className="modal__product-button"
									>
										Clear Cart
									</button>
								</div>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
