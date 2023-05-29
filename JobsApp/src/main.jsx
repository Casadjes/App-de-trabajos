import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// colores: desendencia => #000039, #3e3e53, #7c7b6c, #bab986, #f8f69f
