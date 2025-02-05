import { IoClose } from "react-icons/io5";
import { BtnTertiary, Icon, UserProfile } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import { AccountProfileContainer, AccountProfileWrapper, AddButton, AddIconContainer, BtnManageWrapper, BtnName, Dot, PrivacyWrapper, SignUpButton, UserButtonWrapper, UserContainer, UserInfoIcon, UserNameContainer } from "./AccountProfileStyles";
import { useNavBarState } from "../../state-management";
import { useUser } from "../../hooks";

const AccountProfile = () => {
	const iconMoreInfoColor = "rgb(0, 29, 53)";
	const { setAccountProfileStateOff } = useNavBarState();
	const navigate = useNavigate();

	const { username, firstName } = useUser();

	const logout = () => {
		localStorage.removeItem("user");
		navigate("/login");
		setAccountProfileStateOff();
	};

	return (
		<>
			<AccountProfileWrapper>
				<AccountProfileContainer>
					<UserNameContainer>
						<div className="me-5">&nbsp;</div>
						<div>{username ? username : "user@gmail.com"}</div>
						<div onClick={setAccountProfileStateOff}>
							<Icon>
								<IoClose size={24} />
							</Icon>
						</div>
					</UserNameContainer>

					<UserContainer>
						<button style={{ position: "relative" }}>
							<UserProfile height="85px" padding="0" fontSize="2.5rem" />
							<UserInfoIcon>
								<BiPencil size={17} color={iconMoreInfoColor} />
							</UserInfoIcon>
						</button>

						<div className="mt-1" style={{ fontSize: "2.2rem" }}>
							Hi, {firstName ? firstName : "User"}
						</div>
					</UserContainer>

					<BtnManageWrapper>
						<Link to="https://myaccount.google.com/" target="_blank">
							<BtnTertiary name="Manage your Google Account" borderColor="grey" padding=".8rem 2.5rem" />
						</Link>
					</BtnManageWrapper>

					<UserButtonWrapper>
						<AddButton className="col">
							<AddIconContainer>
								<BsPlusLg size={20} color="rgb(26, 115, 232)" />
							</AddIconContainer>
							<BtnName>Add account</BtnName>
						</AddButton>

						<SignUpButton className="col" onClick={logout}>
							<PiSignOutBold size={23} />
							<BtnName>Sign out</BtnName>
						</SignUpButton>
					</UserButtonWrapper>

					<PrivacyWrapper>
						<Link to="https://policies.google.com/privacy" target="_blank">
							Privacy Policy
						</Link>
						<Dot>.</Dot>
						<Link to="https://policies.google.com/terms" target="_blank">
							Terms of Service
						</Link>
					</PrivacyWrapper>
				</AccountProfileContainer>
			</AccountProfileWrapper>
		</>
	);
};

export default AccountProfile;
