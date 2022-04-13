import React, { useState } from "react";
import Modal from "./UI/Modal/Modal";

const Header = () => {
	const [modal, setModal] = useState(false);

	const list = JSON.parse(localStorage.getItem("cart-list")) || [];
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="logo">
						gadg<span>et</span>
					</h1>

					<div className="cart">
						<span onClick={() => setModal(true)}>cart</span>
						<div className="cart__counter">{list.length}</div>
						<Modal visible={modal} setVisible={setModal}>
							<div className="modal">
								<h2 className="modal__title">Your Cart</h2>

								<div className="modal__product">
									{list.map((l, i) => (
										<div key={i} className="modal__product-item">
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
														src="https://via.placeholder.com/10"
														alt=""
														className="arrow"
													/>
													<p>1</p>
													<img
														src="https://via.placeholder.com/10"
														alt=""
														className="arrow"
													/>
												</div>

												<img
													src="https://via.placeholder.com/10"
													alt=""
													className="modal__delete"
												/>
											</div>
										</div>
									))}
								</div>
								<div className="modal__product-footer">
									<p>Total: $ 5997</p>

									<button className="modal__product-button">
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
