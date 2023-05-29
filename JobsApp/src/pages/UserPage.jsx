import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserPage.css";

export function UserPage() {
	const { id } = useParams();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetchUserData(id).then((data) => setUserData(data));
	}, [id]);

	if (!userData) {
		return <div>Loading...</div>;
	}

	return (
		<div className='userProfile'>
			<div className='userProfile__background'>
				<h2>{userData.name + " " + userData.lastName}</h2>
				<span></span>
				<p>{userData.job}</p>
				<div className='userProfile__img'>
					<img src={userData.img} alt={userData.name} />
				</div>
			</div>
			<div className='userProfile__info'>
				<div className='userProfile__info--slogan'>
					<span>&quot;{userData.slogan}&quot;</span>
				</div>
				<div className='userProfile__info--data'>
					<div className='userProfile__info--1'>
						<h4>Descripción:</h4>
						<p>{userData.description}</p>
					</div>
					<div className='userProfile__info--3'>
						<div className='userInfo__left'>
							<h4>Conocimientos:</h4>
							{userData.knowledge.map((k, index) => (
								<li key={index}>{k}</li>
							))}
						</div>
						<div className='userInfo__right'>
							<h4>Hobbies:</h4>
							{userData.hobbies.map((k, index) => (
								<li key={index}>{k}</li>
							))}
						</div>
					</div>
					<div className='userProfile__info--4'>
						<h4>Contactame:</h4>
						<p>{userData.phoneNumber}</p>
						<p>{userData.email}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

async function fetchUserData(id) {
	const response = await fetch(`http://localhost:3000/users/${id}`);
	const data = await response.json();
	return data;
}
