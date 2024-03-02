import "./NavBar.css";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import menuClose from "../../assets/images/icon-menu-close.svg";
import Button from "../Button";
import { useState } from "react";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="nav flex">
			<img className="logo" src={logo} alt="" />
			<div className={"nav__menu flex-between " + (isMenuOpen && "open-menu")}>
				<ul className="nav__menu-options flex">
					<li className="nav__menu-option">
						<a href="#">Features</a>
					</li>
					<li className="nav__menu-option">
						<a href="#">Pricing</a>
					</li>
					<li className="nav__menu-option">
						<a href="#">Resources</a>
					</li>
				</ul>
				<div className="nav__menu-buttons flex">
					<Button label="Login" />
					<Button aditionalClass="btn-secondary" label="Sign Up" />
				</div>
			</div>
			<div className="nav__open-close">
				{isMenuOpen ? (
					<img
						src={menuClose}
						alt="close menu"
						onClick={() => setIsMenuOpen(false)}
					/>
				) : (
					<img src={menu} alt="open menu" onClick={() => setIsMenuOpen(true)} />
				)}
			</div>
		</nav>
	);
};

export default NavBar;
