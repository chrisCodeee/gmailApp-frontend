import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import route from "./route.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
