import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { Form } from "./components";
import { MdHelpOutline, MdLockOutline, MdScreenSearchDesktop } from "react-icons/md";
import { TryAnotherWayWrapper } from "./AuthStyles";
import { useAuthState } from "../state-management";
import { useUser } from "../hooks";

const TryAnotherwayLogin = () => {
	const navigate = useNavigate();
	const { setGetHelp } = useAuthState();
	const { firstName } = useUser();

	const passwordBtn = () => {
		navigate("/login/confirmpassword");
	};

	const tapPhone = () => {
		navigate("/login/challenge/dp");
	};
	return (
		<>
			<SignUp>
				<Form heading={`Hi ${firstName}`} handleSubmit={passwordBtn} loginState>
					<div className="mt-4" style={{ fontSize: "2.2rem" }}>
						Choose how you want to sign in:
					</div>
					<TryAnotherWayWrapper>
						<div className="container" onClick={passwordBtn}>
							<div className="d-flex sub_container">
								<div className="d-flex" style={{ margin: "0 1.5rem 0 0" }}>
									<MdLockOutline size={25} color="rgba(11, 87, 208)" />
								</div>
								<div className="" style={{ fontSize: "1.62rem", margin: "-2px 0 0 0" }}>
									Enter your password
								</div>
							</div>
						</div>

						<div
							className="container"
							onClick={() => {
								tapPhone();
								setGetHelp(false);
							}}>
							<div className="d-flex sub_container">
								<div className="d-flex" style={{ margin: "0 1.5rem 0 0" }}>
									<MdScreenSearchDesktop size={25} color="rgba(11, 87, 208)" />
								</div>
								<div className="" style={{ fontSize: "1.62rem", margin: "-2px 0 0 0" }}>
									Tap <b>Yes</b> on your phone or tablet
								</div>
							</div>
						</div>

						<div
							className="container"
							onClick={() => {
								tapPhone();
								setGetHelp(true);
							}}>
							<div className="d-flex sub_container">
								<div className="d-flex" style={{ margin: "0 1.5rem 0 0" }}>
									<MdHelpOutline size={25} color="rgba(11, 87, 208)" />
								</div>
								<div className="" style={{ fontSize: "1.62rem", margin: "-2px 0 0 0" }}>
									Get help
								</div>
							</div>
						</div>
					</TryAnotherWayWrapper>
				</Form>
			</SignUp>
		</>
	);
};

export default TryAnotherwayLogin;
