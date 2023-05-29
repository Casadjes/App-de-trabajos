import { useState } from "react";
import "./Filter.css";
import { FiFilter } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import { FilterCategory } from "./FilterCategory";
import PropTypes from "prop-types";

export function Filter({ data, setFilter }) {
	const [isClicked, setIsClicked] = useState(false);

	function handleClick() {
		setIsClicked(!isClicked);
	}

	function handleChangeCategory(category) {
		setFilter((prevState) => ({
			...prevState,
			category: category
		}));
	}

	const categoryCounts = data.reduce((counts, user) => {
		if (counts[user.category]) {
			counts[user.category]++;
		} else {
			counts[user.category] = 1;
		}
		return counts;
	}, {});

	console.log(categoryCounts);
	return (
		<div className='filter'>
			<div className='filter__title'>
				<h2>Filtros</h2> <FiFilter />
			</div>
			<div
				className={`filter__subTitle ${isClicked ? "active" : ""}`}
				onClick={handleClick}>
				<h4>Categorias</h4>
				<RiArrowDownSFill
					className={`filter__category--arrow ${isClicked ? "active" : ""}`}
				/>
			</div>
			<div
				className={`filter__components--container ${
					isClicked ? "active" : ""
				}`}>
				{Object.entries(categoryCounts).map(([categoryName, count]) => (
					<FilterCategory
						key={categoryName}
						categoryName={categoryName}
						available={count}
						handleChangeCategory={handleChangeCategory}
					/>
				))}
			</div>
		</div>
	);
}

Filter.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
	handleChangeCategory: PropTypes.func
};
