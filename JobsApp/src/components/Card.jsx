import { BsStarFill, BsStarHalf } from "react-icons/bs";
import PropTypes from "prop-types";
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
					<BsStarFill color='#1d1d1d' />
					<BsStarFill color='#1d1d1d' />
					<BsStarFill color='#1d1d1d' />
					<BsStarFill color='#1d1d1d' />

					<BsStarHalf color='#1d1d1d' />
					<span>rating</span>
				</div>
				<Link to={"/user/" + id}>
					<button className='seeMore'>Ver más</button>
				</Link>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	lastName: PropTypes.string,
	img: PropTypes.string,
	job: PropTypes.string,
	id: PropTypes.string
};
