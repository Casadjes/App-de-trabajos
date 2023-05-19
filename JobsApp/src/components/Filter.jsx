import "./Filter.css";
import { FiFilter } from "react-icons/fi";
import { FilterCategory } from "./FilterCategory";
export function Filter() {
	return (
		<div className='filter'>
			<div className='filter__title'>
				<h2>Filtros</h2> <FiFilter />
			</div>
			<div className='filter__subTitle '>
				<h4>Categorias</h4>
			</div>
			<div className='filter__components--container'>
				<FilterCategory />
				<FilterCategory />
				<FilterCategory />
				<FilterCategory />
				<FilterCategory />
			</div>
		</div>
	);
}
