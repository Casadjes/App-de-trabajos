import "./FilterCategory.css";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
export function FilterCategory({ categoryName = "category", available = 0 }) {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<div
			className={isClicked ? "filterCategory clicked" : "filterCategory"}
			onClick={handleClick}>
			<span className='filterCategoryName'>
				{isClicked ? <BsCheckLg /> : null}
				{categoryName}
			</span>
			<span className='filterAvailable'>{available}</span>
		</div>
	);
}
