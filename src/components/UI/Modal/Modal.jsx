import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
	const rootClasses = [classes.Modal];

	if (visible) {
		rootClasses.push(classes.active);
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "visible";
    }

	return (
		<div
			className={rootClasses.join(" ")}
			onClick={() => setVisible(false)}
		>
			<div
				className={classes.ModalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
