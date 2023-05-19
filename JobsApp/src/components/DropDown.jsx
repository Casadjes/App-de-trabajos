import "./DropDown.css";
import { useState } from "react";

export function DropDown() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
		<div className='dropdown' onClick={toggleDropdown}>
			<h3>Categorias</h3>
			{isOpen && (
				<ul className='dropdown__menu'>
					<li>Option 1</li>
					<li>Option 2</li>
					<li>Option 3</li>
				</ul>
			)}
		</div>
	);
}
