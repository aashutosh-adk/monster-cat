import React from "react";
import "./IconBar.scss";
import facebookIcon from "../../assests/Images/facebook-icon.png";
import instagramIcon from "../../assests/Images/instagram.png";
import xIcon from "../../assests/Images/x.png";


export default function IconBar() {
	return (
		<div className="icon-bar">

            <button className="icon">
				<img src={facebookIcon} alt="Facebook" />
			</button>
			
			<button className="icon">
				<img src={instagramIcon} alt="Instagram" />
			</button>

			<button className="icon">
				<img src={xIcon} alt="X" />
			</button>
		</div>
	);
}
