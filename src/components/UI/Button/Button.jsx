import React from "react";
import classes from "./Button.module.css";

function Button({ children, ...props }) {
	return (
		<button {...props} className={classes.btn}>
			{children}
		</button>
	);
}

export default Button;
