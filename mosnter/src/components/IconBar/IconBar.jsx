import React from "react";
import "./IconBar.scss";


export default function IconBar() {
	return (
		<div className="icon-bar">

            <button className="icon">
				<img src="../assests/Images/facebook-icon.png" alt="Facebook" />
			</button>
			
			<button className="icon">
				<img src="../assests/Images/instagram.png" alt="Instagram" />
			</button>

			<button className="icon">
				<img src="../assests/Images/x.png" alt="X" />
			</button>
		</div>
	);
}
