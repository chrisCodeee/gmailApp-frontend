import { FormEvent, ReactNode } from "react";
import { useAuthState } from "../../state-management";
import { USerDetails } from "../../state-management/useAuthState";
import { MdArrowDropDown } from "react-icons/md";
import { AccountPhoto } from "../../assets";
import { ProfileSwitchWrapper } from "../AuthStyles";
import { FaCircleUser } from "react-icons/fa6";

interface FormProps {
	heading: string;
	subHeading?: string;
	children: ReactNode;
	users?: USerDetails;
	loginState?: boolean;
	handleSubmit: (e: FormEvent) => void;
}
const Form = (props: FormProps) => {
	const { clearStates } = useAuthState();

	const handleSubmit = (e: FormEvent) => {
		props.handleSubmit(e);

		console.log(props.users);
	};
	return (
		<>
			<div className="mt-3" style={{ display: "flex", justifyContent: "space-between" }}>
				<div
					className="me-3 col"
					onClick={() => {
						clearStates();
					}}>
					<div style={{ fontSize: "3.8rem" }}>{props.heading}</div>

					<p style={{ fontSize: "1.7rem", margin: "1.5rem 0 0 0" }}>{props.subHeading}</p>

					{props.loginState && (
						<ProfileSwitchWrapper className="d-flex align-items-center mt-4">
							{/* <img className="me-3" src={AccountPhoto} alt="profile picture" style={{ height: "2.5rem", borderRadius: "100%" }} /> */}
							<FaCircleUser size={20} className="me-3" />
							<div className="d-flex">
								<span>..............@gmail.com</span>
								<div className="ms-1">
									<MdArrowDropDown size={20} />
								</div>
							</div>
						</ProfileSwitchWrapper>
					)}
				</div>

				<div className="col" style={{ padding: "0 0 0 7rem", margin: "1.5rem 0 0 0" }}>
					<form action="" onSubmit={handleSubmit}>
						<div>{props.children}</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Form;
