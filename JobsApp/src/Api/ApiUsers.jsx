// import { useState } from "react";
export const ApiUsers = async () => {
	// const [isLoading, setIsLoading] = useState(true);

	const res = await fetch("http://localhost:3000/users");
	const users = await res.json();
	return { users };
};
