import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dataDB from "./data/users.json";
import NotFound from "./pages/NotFound.jsx";
import { UserPage } from "./pages/UserPage.jsx";
const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />
	}
];

dataDB.users.forEach((user) => {
	routes.push({
		path: user.id,
		element: <UserPage user={user} />,
		errorElement: <NotFound />
	});
});

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
