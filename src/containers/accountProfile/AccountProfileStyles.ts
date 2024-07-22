import styled from "styled-components";

const AccountProfileWrapper = styled.div`
	background-color: rgb(233, 238, 246);
	position: absolute;
	top: 10%;
	right: 1%;
	z-index: 300;
	width: 400px;
	border-radius: 30px;
	padding: 0.5rem 1.5rem;

	box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
`;

const AccountProfileContainer = styled.div``;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const UserNameContainer = styled(FlexWrapper)`
	font-weight: 500;
	justify-content: space-between;
`;

const UserContainer = styled(FlexWrapper)`
	flex-direction: column;
	margin: 1.5rem 0 0 0;
`;

const UserInfoIcon = styled(FlexWrapper)`
	justify-content: center;
	background-color: rgb(248, 250, 253);
	border-radius: 100%;
	height: 23px;
	width: 23px;
	position: absolute;
	right: 8%;
	bottom: 1%;

	&:hover {
		background-color: rgba(26, 115, 232, 0.15);
	}
`;

const UserButtonWrapper = styled(FlexWrapper)`
	margin: 1.5rem 0 0 0;
`;

const AddButton = styled.button`
	display: flex;
	background-color: rgb(248, 250, 253);
	padding: 1.5rem 5rem 1.5rem 1.5rem;
	border-top-left-radius: 100px;
	border-bottom-left-radius: 100px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	font-weight: 500;

	&:hover {
		background-color: rgba(157, 162, 171, 0.15);
	}
`;
const SignUpButton = styled.button`
	display: flex;
	align-items: center;
	align-self: stretch;
	margin: 0 0 0 0.3rem;
	background-color: rgb(248, 250, 253);
	padding: 1.5rem 5rem 1.5rem 1.5rem;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	border-top-right-radius: 100px;
	border-bottom-right-radius: 100px;
	font-weight: 500;

	&:hover {
		background-color: rgba(157, 162, 171, 0.15);
	}
`;

const AddIconContainer = styled(FlexWrapper)`
	justify-content: center;
	background-color: rgba(26, 115, 232, 0.1);
	border-radius: 100%;
	padding: 0.2rem;
`;

const BtnManageWrapper = styled.div`
	text-align: center;
	margin: 1rem 0 0 0;

	& button {
		&:hover {
			background-color: rgba(26, 115, 232, 0.07);
		}
	}
`;

const BtnName = styled(FlexWrapper)`
	align-self: stretch;
	margin: 0 0 0 1rem;
`;

const PrivacyWrapper = styled(FlexWrapper)`
	margin: 1rem 0;
	font-size: 1.3rem;
	justify-content: center;

	& a {
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		display: flex;
		align-items: center;

		&:hover {
			background-color: rgba(157, 162, 171, 0.2);
		}
	}
`;

const Dot = styled.div`
	transform: translateY(-0.5rem);
	font-weight: 500;
	font-size: 2rem;
	padding: 0 0.5rem;
`;

export { AccountProfileWrapper, AccountProfileContainer, FlexWrapper, UserNameContainer, UserContainer, UserInfoIcon, UserButtonWrapper, AddButton, SignUpButton, AddIconContainer, BtnName, PrivacyWrapper, Dot, BtnManageWrapper };
