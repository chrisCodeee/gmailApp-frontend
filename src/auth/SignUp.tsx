import { GoogleIcon } from "../assets";
import { SignUPContainer, SignUpSubContainer, SignUPWrapper } from "./AuthStyles";
import { SignUpFooter } from "./signUpPages";
import { useAuthState } from "../state-management";
import { ReactNode, useEffect } from "react";

interface SignUpProps {
	children: ReactNode;
}

const SignUp = ({ children }: SignUpProps) => {
	const { clearStates, clearAllError } = useAuthState();

	useEffect(() => {
		clearAllError();
	}, []);

	return (
		<>
			<SignUPWrapper>
				<SignUPContainer>
					<SignUpSubContainer>
						<div
							onClick={() => {
								clearStates();
							}}>
							<img src={GoogleIcon} alt="Google icon" style={{ width: "50px" }} />
						</div>

						{children}
					</SignUpSubContainer>

					<SignUpFooter />
				</SignUPContainer>
			</SignUPWrapper>
		</>
	);
};

export default SignUp;
