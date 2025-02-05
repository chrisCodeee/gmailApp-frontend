const useUser = () => {
	let user_name = localStorage.getItem("username");
	let mainUser = localStorage.getItem("user");
	let user = { userName: user_name, firstName: mainUser && JSON.parse(mainUser).firstName, lastName: mainUser && JSON.parse(mainUser).lastName };
	let userBgColor = localStorage.getItem("bgColor");

	let userDetail = {
		username: user.userName,
		// userId: user && JSON.parse(user)._id,
		firstName: user.firstName,
		lastName: user.lastName,
		bgColor: userBgColor ? JSON.parse(userBgColor) : "#4F6F52",
	};

	// const { username, userId, firstName, lastName, bgColor } = userDetail;
	const { username, firstName, lastName, bgColor } = userDetail;

	// return { user, username, userId, firstName, lastName, bgColor };
	return { user, username, firstName, lastName, bgColor };
};

export default useUser;
