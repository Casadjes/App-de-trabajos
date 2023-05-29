import { Card } from "./Card";
import { ImSpinner9 } from "react-icons/im";
import "./CardContainer.css";
import Proptypes from "prop-types";
export function CardContainer({ isLoading, filteredUsers }) {
	return (
		<div className='cardContainer'>
			{isLoading ? (
				<div className='loading'>
					<ImSpinner9 className='spinner' />
					Loading...
				</div>
			) : (
				filteredUsers.map((user) => (
					<Card
						key={user.id}
						name={user.name}
						lastName={user.lastName}
						img={user.img}
						job={user.job}
						id={user.id}
					/>
				))
			)}
		</div>
	);
}

CardContainer.propTypes = {
	filteredUsers: Proptypes.array,
	isLoading: Proptypes.bool
};
