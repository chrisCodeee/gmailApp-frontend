const useUser = () => {
	let user = localStorage.getItem("user");

	let userDetail = {
		username: user && JSON.parse(user).username,
		userId: user && JSON.parse(user)._id,
		firstName: user && JSON.parse(user).firstName,
	};

	const { username, userId, firstName } = userDetail;

	return { username, userId, firstName };
};

export default useUser;
