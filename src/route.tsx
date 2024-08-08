import { createBrowserRouter } from "react-router-dom";
import { Draft, ErrorPage, Home, Important, Inbox, ManageLabel, Promotion, Scheduled, Sent, Snoozed, Spam, Starred, Trash } from "./pages";
import { App } from "./app";
import Chats from "./pages/chats/Chats";
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9 } from "./auth/signUpPages";
import InvalidDOB from "./auth/signUpPages/InvalidDOB";
import { Login, UserNameRecovery, ConfirmLoginPassword, QueryRecoveryEmailName, AccountNotFound, TryAnotherwayLogin, TryAnotherwayLoginTapPhone } from "./auth";
import { MobileViewMenu, MobileViewSettings } from "./containers";

const route = createBrowserRouter([
	{
		path: "",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
				children: [
					{ path: "", element: <Inbox /> },
					{ path: "/inbox", element: <Inbox /> },
					{ path: "/promotion", element: <Promotion /> },
					{ path: "/starred", element: <Starred /> },
					{ path: "/sent", element: <Sent /> },
					{ path: "/trash", element: <Trash /> },
					{ path: "/snoozed", element: <Snoozed /> },
					{ path: "/draft", element: <Draft /> },
					{ path: "/important", element: <Important /> },
					{ path: "/chats", element: <Chats /> },
					{ path: "/scheduled", element: <Scheduled /> },
					{ path: "/spam", element: <Spam /> },
					{ path: "/settings/labels", element: <ManageLabel /> },
				],
			},
		],
	},
	{ path: "/login", element: <Login /> },
	{ path: "/login/confirmpassword", element: <ConfirmLoginPassword /> },
	{ path: "/login/usernamerecovery", element: <UserNameRecovery /> },
	{ path: "/login/queryname", element: <QueryRecoveryEmailName /> },
	{ path: "/login/noaccount", element: <AccountNotFound /> },
	{ path: "/login/challenge/selection", element: <TryAnotherwayLogin /> },
	{ path: "/login/challenge/dp", element: <TryAnotherwayLoginTapPhone /> },
	{ path: "/register", element: <Page1 /> },
	{ path: "/register/step_2", element: <Page2 /> },
	{ path: "/register/step_3", element: <Page3 /> },
	{ path: "/register/step_4", element: <Page4 /> },
	{ path: "/register/step_5", element: <Page5 /> },
	{ path: "/register/step_6", element: <Page6 /> },
	{ path: "/register/step_7", element: <Page7 /> },
	{ path: "/register/step_8", element: <Page8 /> },
	{ path: "/register/step_9", element: <Page9 /> },
	{ path: "/register/error", element: <InvalidDOB /> },
	{ path: "/settings", element: <MobileViewSettings /> },
	{ path: "/menu", element: <MobileViewMenu /> },
]);
export default route;
