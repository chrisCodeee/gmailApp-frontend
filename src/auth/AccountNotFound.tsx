import { useNavigate } from "react-router-dom";
import { BtnNext, Form } from "./components";
import SignUp from "./SignUp";
import { FormEvent } from "react";

const AccountNotFound = () => {
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		navigate("/");
	};

	return (
		<>
			<SignUp>
				<Form heading="No account found" subHeading="There’s no Google Account with the info you provided." handleSubmit={handleSubmit}>
					<BtnNext margin="20rem" name="Try again" />
				</Form>
			</SignUp>
		</>
	);
};

export default AccountNotFound;
