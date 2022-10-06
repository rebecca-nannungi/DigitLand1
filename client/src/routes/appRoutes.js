import HomePage from "../Home/HomePage";
import Auth from "../Auth/Auth";
import Register from "../Auth/Register";

export default [
	{
		path: "/",
		component: HomePage,
		exact: true,
	},
	{
		path: "/auth",
		component: Auth,
	},
	{
		path: "/register",
		component: Register,
	},
];
