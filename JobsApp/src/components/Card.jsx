import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Card.css";
export function Card({
	name = "undefined",
	lastName = "undefined",
	img,
	job,
	id
}) {
	return (
		<div className='card'>
			<img src={img} alt={name} />
			<div className='card__info'>
				<p className='userName'>{name + " " + lastName}</p>
				<p className='card__info--job'>{job}</p>
				<div className='card__info--rating'>
					<BsStarFill color='#3e3e53' />
					<BsStarFill color='#3e3e53' />
					<BsStarFill color='#3e3e53' />
					<BsStarFill color='#3e3e53' />

					<BsStarHalf color='#3e3e53' />
					<span>rating</span>
				</div>
				<Link to={id}>
					<button className='seeMore'>Ver más</button>
				</Link>
			</div>
		</div>
	);
}
