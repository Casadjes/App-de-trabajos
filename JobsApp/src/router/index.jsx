import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { UserPage } from "../pages/UserPage";
import { NotFound } from "../pages/NotFound";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Contact } from "../pages/Contact";
import { ApiUsers } from "../Api/ApiUsers";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutPublic />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: ApiUsers
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "contact",
				element: <Contact />
			},
			{
				path: "/user/:id",
				element: <UserPage />
			}
		]
	}
]);
