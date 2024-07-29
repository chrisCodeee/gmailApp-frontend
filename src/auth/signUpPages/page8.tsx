import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../state-management";
import { BtnNext, Form } from "../components";
import SignUp from "../SignUp";
import { FormEvent, useEffect, useState } from "react";

const page8 = () => {
	const { user } = useAuthState();
	const navigate = useNavigate();

	const [bgColor, setBgColor] = useState<string>();

	useEffect(() => {
		const color = ["#B692C2", "#694F8E", "#254336", "#6B8A7A", "pink", "#1A4D2E", "#4F6F52"];
		const bgRandom = Math.floor(Math.random() * color.length);
		setBgColor(color[bgRandom]);
	}, []);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		localStorage.setItem("bgColor", JSON.stringify(bgColor));
		navigate("/register/step_9");
	};

	return (
		<>
			<SignUp>
				<Form heading="Review your account info" subHeading="You can use this info when you need to sign in" handleSubmit={handleSubmit}>
					<div>
						<div className="d-flex align-items-center" style={{ marginBottom: "1.5rem" }}>
							{user.firstName && (
								<div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: bgColor, color: "#fff", borderRadius: "100%", width: "28px", height: "28px", marginRight: "1.5rem" }}>
									{user.firstName[0].toUpperCase()}
								</div>
							)}

							<div className="">
								<div style={{ fontWeight: "500", fontSize: "1.7rem" }}>
									{user.firstName} {user.lastName}
								</div>
								<div>{user.username}</div>
							</div>
						</div>

						{user.phoneNumber && (
							<div className="">
								<div className="" style={{ fontSize: "1.25rem" }}>
									Recovery mobile number
								</div>
								<div className="" style={{ fontSize: "1.6rem" }}>
									{`(${user.phoneNumber.slice(0, 3)}) ${user.phoneNumber.slice(3, 6)}-${user.phoneNumber.slice(6, 10)}`}
								</div>
							</div>
						)}
					</div>

					<div style={{ margin: "10rem 0 0 0" }}>
						<BtnNext />
					</div>
				</Form>
			</SignUp>
		</>
	);
};

export default page8;
