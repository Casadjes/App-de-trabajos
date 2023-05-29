import "./FilterCategory.css";
// import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import PropTypes from "prop-types";
export function FilterCategory({
	categoryName = "category",
	available = 0,
	handleChangeCategory
}) {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
		handleChangeCategory(categoryName);
	};

	return (
		<div
			className={`filterCategory ${isClicked ? "clicked" : ""}`}
			onClick={handleClick}>
			<span className='filterCategoryName'>{categoryName}</span>
			<span className='filterAvailable'>{available}</span>
		</div>
	);
}

FilterCategory.propTypes = {
	categoryName: PropTypes.string,
	available: PropTypes.number,
	handleChangeCategory: PropTypes.func
};
