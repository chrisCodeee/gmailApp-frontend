import { useNavigate } from "react-router-dom";
import { BtnNext } from "../components";
import SignUp from "../SignUp";

const InvalidDOB = () => {
	const navigate = useNavigate();

	const nextPage = () => {
		navigate("/");
	};

	return (
		<>
			<SignUp>
				<div className="row mt-3">
					<div className="col" style={{ fontSize: "3.8rem" }}>
						Can’t create the account
					</div>
					<div className="col" style={{ margin: "1.5rem 0 0 0" }}>
						<div style={{ fontSize: "1.42rem" }}>You cannot create a Google Account because you do not meet the minimum age requirement.</div>
						<div style={{ marginTop: "15rem" }} onClick={nextPage}>
							<BtnNext />
						</div>
					</div>
				</div>
			</SignUp>
		</>
	);
};

export default InvalidDOB;
