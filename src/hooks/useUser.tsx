const useUser = () => {
	let user = localStorage.getItem("user");
	let userBgColor = localStorage.getItem("bgColor");

	let userDetail = {
		username: user && JSON.parse(user).username,
		userId: user && JSON.parse(user)._id,
		firstName: user && JSON.parse(user).firstName,
		lastName: user && JSON.parse(user).lastName,
		bgColor: userBgColor ? JSON.parse(userBgColor) : "#4F6F52",
	};

	const { username, userId, firstName, lastName, bgColor } = userDetail;

	return { user, username, userId, firstName, lastName, bgColor };
};

export default useUser;
