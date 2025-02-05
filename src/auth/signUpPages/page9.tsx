import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { BtnNext, Form } from "../components";
import SignUp from "../SignUp";
import { FormEvent } from "react";

const page9 = () => {
	const { user, clearUsers } = useAuthState();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		clearUsers();

		navigate("/");
		localStorage.setItem("user", JSON.stringify(user));
		window.location.reload();

		// axios
		// 	.post(`http://localhost:8080/users/register/`, user)
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			console.log(res.data);
		// 			navigate("/");
		// 			localStorage.setItem("user", JSON.stringify(res.data));
		// 			window.location.reload();
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

	return (
		<>
			<SignUp>
				<Form heading="Terms and Conditions" subHeading="Google Terms and Conditions" handleSubmit={handleSubmit} users={user}>
					<div style={{}}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores debitis ipsum ea minus quis soluta inventore natus, nisi expedita nesciunt ratione, repellendus atque, commodi ex obcaecati? Rem veniam tempore atque! Provi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis minus temporibus non impedit consequuntur voluptate cumque ad nobis nihil magnam necessitatibus
						commodi sint asperiores similique quas atque, obcaecati, pariatur quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis minus temporibus non impedit consequuntur voluptate cumque ad nobis nihil magnam necessitatibus commodi sint asperiores similique quas atque, obcaecati, pariatur quam!
					</div>
					<div style={{ marginTop: "10rem" }}>
						<BtnNext />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default page9;
