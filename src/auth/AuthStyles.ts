import styled from "styled-components";
import { InputParams } from "./components/SignUpFormInput";

const SignUPWrapper = styled.div`
	min-height: 100vh;
	background-color: rgba(229, 236, 247, 0.349);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SignUPContainer = styled.div`
	flex-basis: 1150px;
	padding: 45px 0;
`;

const SignUpSubContainer = styled.div`
	background-color: #fff;
	border-radius: 20px;
	padding: 35px;
	min-height: 384px;
`;

const FormWrapper = styled.div<{ $inputstyle: InputParams }>`
	position: relative;
	margin-top: ${(props) => props.$inputstyle.margin};
`;

const FormInput = styled.input<{ $inputstyle?: InputParams }>`
	outline: ${(props) => (props.$inputstyle?.error ? "1px solid rgb(179, 38, 30)" : "1px solid rgba(0, 0, 0, 0.5)")};
	padding: ${(props) => (props.$inputstyle?.padding ? props.$inputstyle.padding : "1.5rem")};
	width: 100%;
	border-radius: 3px;
	font-size: 1.6rem;
	cursor: ${(props) => (props?.$inputstyle?.cursor ? props.$inputstyle.cursor : "text")};

	&:focus {
		outline: ${(props) => (props.$inputstyle?.error ? "2px solid rgb(179, 38, 30)" : "2px solid rgb(11, 87, 208)")};

		& + label {
			transform: scale(0.9);
			top: -15px;
			background-color: #fff;
			color: ${(props) => (props.$inputstyle?.error ? "rgb(179, 38, 30)" : "rgb(11, 87, 208)")};
		}
	}
`;

const FormLabel = styled.label<{ $inputstyle?: InputParams }>`
	color: ${(props) => props.$inputstyle?.error && props.$inputstyle?.value && "rgb(179, 38, 30)"};
	position: absolute;
	transform: ${(props) => (!props.$inputstyle?.value ? "scale(1.2)" : "scale(0.9)")};
	left: ${(props) => (props.$inputstyle?.padding ? "50px" : "5px")};
	top: ${(props) => (!props.$inputstyle?.value ? "15px" : "-15px")};
	background-color: ${(props) => (!props.$inputstyle?.value ? "transparent" : "#fff")};
	transition: all 0.2s;
	transform-origin: left;
	padding: 0 0.7rem;
	cursor: ${(props) => (props?.$inputstyle?.cursor ? props.$inputstyle.cursor : "text")};
`;

const BtnNextWrapper = styled.div<{ $disabled?: string; $margin?: string }>`
	margin-top: ${(props) => (props?.$margin ? props?.$margin : "6.2rem")};
	margin-left: auto;
	width: fit-content;
	display: flex;
	align-items: center;
`;

const RecoveryEmailBtnWrapper = styled.div`
	display: flex;
	margin: 8rem 0 0 0;

	& button {
		padding: 1rem 0;
		border-radius: 30px;
		border: 1px solid rgba(0, 0, 0, 0.5);
		color: rgb(11, 87, 208);
		font-weight: 500;

		&:hover {
			background-color: rgba(11, 87, 208, 0.04);
		}

		&:active {
			background-color: rgba(11, 87, 208, 0.1);
		}
	}
`;

const LoginUsernameContainer = styled.div`
	& .link {
		color: rgb(11, 87, 208);
		font-weight: 500;
		width: fit-content;
		padding: 0 0.5rem;
		border-radius: 5px;

		&:hover {
			background-color: rgba(11, 87, 208, 0.06);
		}

		&:active {
			background-color: rgba(11, 87, 208, 0.1);
		}
	}

	& .forgotEmail {
		margin: 1rem 0 0 -0.4rem;
		cursor: pointer;
	}

	& .learnMore {
		margin: -1.1rem 0 0 -0.4rem;
		display: block;
	}
`;

const ProfileSwitchWrapper = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.5);
	width: fit-content;
	border-radius: 30px;
	padding: 0.3rem 0.5rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

const TryAnotherWayWrapper = styled.div`
	margin: 0.5rem 0 2rem -1.5rem;

	& .container {
		cursor: pointer;
		padding: 0 1.5rem;
		border-radius: 15px;

		& .sub_container {
			border-bottom: 1px solid rgba(0, 0, 0, 0.25);
			padding: 1.5rem 0;
		}

		&:hover {
			background-color: rgba(11, 87, 208, 0.06);
		}

		&:active {
			background-color: rgba(11, 87, 208, 0.1);
		}
	}
`;

const TryAnotherWayAuthWrapper = styled.div`
	background-image: linear-gradient(rgba(233, 233, 233, 0) 0px, rgba(233, 233, 233, 0) 62.22%, rgb(233, 233, 233) 40.22%, rgba(233, 233, 233, 0) 100%);
	position: absolute;
	top: 0;
	left: 0;
	height: 370.362px;
	width: 100%;
	overflow: hidden;

	&::before {
		content: "";
		background-image: linear-gradient(rgba(243, 243, 243, 0) 0px, rgba(243, 243, 243, 0.9) 100%);
		position: absolute;
		display: block;
		right: -46px;
		width: 150px;
		bottom: -37.025px;
		transform: matrix(-0.241922, -0.970296, 0.970296, -0.241922, 0, 0);
		z-index: 2;
		height: 100%;
	}
`;

const SignUpFooterWrapper = styled.footer`
	font-size: 1.3rem;
	margin: 1.3rem 0 0 0;

	& .footer_link {
		border-radius: 5px;
		padding: 0.5rem 1rem;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
`;

export { SignUPWrapper, SignUPContainer, SignUpSubContainer, FormWrapper, FormInput, FormLabel, BtnNextWrapper, RecoveryEmailBtnWrapper, LoginUsernameContainer, ProfileSwitchWrapper, TryAnotherWayWrapper, TryAnotherWayAuthWrapper, SignUpFooterWrapper };
