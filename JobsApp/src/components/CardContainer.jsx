import { Card } from "./Card";
import { ImSpinner9 } from "react-icons/im";
import "./CardContainer.css";
export function CardContainer({ data, isLoading }) {
	return (
		<div className='cardContainer'>
			{isLoading ? (
				<div className='loading'>
					<ImSpinner9 className='spinner' />
					Loading...
				</div>
			) : (
				data.map((userData) => (
					<Card
						key={userData.id}
						name={userData.name}
						lastName={userData.lastName}
						img={userData.img}
						job={userData.job}
						id={userData.id}
					/>
				))
			)}
		</div>
	);
}
