import "./Header.css";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className='header'>
			<nav className='header__left'>
				<div className='header__logo'>
					<h1>JobsApp</h1>
					<MdWork />
				</div>

				<div className='header__links animated'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/contact'>Contact Us</NavLink>
				</div>
			</nav>
			<nav className='header__right'>
				<div className='header__links account'>
					<a href='#'>Log In</a>
					<a href='#'>Sing Up</a>
				</div>
			</nav>
			<RiMenu3Fill className='header__icon--open' onClick={handleClick} />
			<nav className={`navResponsive ${isOpen ? "active" : ""}`}>
				<div className='navResponsive__close'>
					<RiCloseFill onClick={handleClick} />
				</div>
				<div className='navResponsive__links animated'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/contact'>Contact Us</NavLink>
				</div>
				<div className='navResponsive__buttons'>
					<a href='#'>Log In</a>
					<a href='#'>Sing Up</a>
				</div>
			</nav>
		</header>
	);
}
