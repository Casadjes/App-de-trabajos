import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import "./UserPage.css";
export function UserPage({ user }) {
	return (
		<>
			<Link to='/' style={{ textDecoration: "none", color: "#333" }}>
				<Header title='Volver' icon={<MdArrowBackIosNew />} />
			</Link>
			<div className='userCard'>
				<div className='userCard__content'>
					<div className='userCard__content--top'>
						<div className='userCard__img--container'>
							<div className='userCard__img'>
								<img src={user.img} alt={user.name} />
							</div>
							<button>Contratar</button>
						</div>
					</div>
					<div className='userCard__content--bottom'></div>
				</div>
			</div>
			<Footer />
		</>
	);
}
