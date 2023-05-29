import { Filter } from "../components/Filter";
import { CardContainer } from "../components/CardContainer";
import { useLoaderData } from "react-router-dom";

import "./HomeUsers.css";
import { useState } from "react";
export function Home() {
	const { users } = useLoaderData();
	const [filter, setFilter] = useState({
		category: "all",
		minPrice: 0
	});

	const filterUsers = (users) => {
		return users.filter((user) => {
			return (
				user.price >= filter.minPrice &&
				(filter.category === "all" || user.category === filter.category)
			);
		});
	};

	const filteredUsers = filterUsers(users);
	return (
		<>
			<div className='home'>
				<Filter
					className='userFilter'
					data={filteredUsers}
					setFilter={setFilter}
				/>
				<CardContainer
					className='card-container'
					filteredUsers={filteredUsers}
				/>
			</div>
		</>
	);
}
