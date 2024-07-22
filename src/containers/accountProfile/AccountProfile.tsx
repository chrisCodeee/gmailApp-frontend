import { IoClose } from "react-icons/io5";
import { BtnTertiary, Icon, User } from "../../components";
import { AccountPhoto } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import { AccountProfileContainer, AccountProfileWrapper, AddButton, AddIconContainer, BtnManageWrapper, BtnName, Dot, PrivacyWrapper, SignUpButton, UserButtonWrapper, UserContainer, UserInfoIcon, UserNameContainer } from "./AccountProfileStyles";
import { useState } from "react";
import { useNavBarState } from "../../state-management";
import { useUser } from "../../hooks";

const AccountProfile = () => {
	const [info, setInfo] = useState(false);
	const iconMoreInfoColor = info ? "rgb(26, 115, 232)" : "rgb(0, 29, 53)";
	const { setAccountProfileStateOff } = useNavBarState();
	const navigate = useNavigate();

	const { username, firstName } = useUser();

	const logout = () => {
		localStorage.clear();
	};
	return (
		<>
			<AccountProfileWrapper>
				<AccountProfileContainer>
					<UserNameContainer>
						<div className="me-5">&nbsp;</div>
						<div>{username}</div>
						<div onClick={setAccountProfileStateOff}>
							<Icon>
								<IoClose size={24} />
							</Icon>
						</div>
					</UserNameContainer>

					<UserContainer>
						<button style={{ position: "relative" }}>
							<User img={AccountPhoto} height="8rem" />
							<UserInfoIcon onMouseOver={() => setInfo(true)} onMouseLeave={() => setInfo(false)}>
								<BiPencil size={17} color={iconMoreInfoColor} />
							</UserInfoIcon>
						</button>

						<div className="mt-1" style={{ fontSize: "2.2rem" }}>
							Hi, {firstName}
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

						<SignUpButton className="col" onClick={() => navigate("/login")}>
							<PiSignOutBold size={23} />
							<BtnName onClick={logout}>Sign out</BtnName>
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
