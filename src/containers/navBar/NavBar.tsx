import { Form, Icon, Logo, UserProfile } from "../../components";
import { ContainerLeft, ContainerRight, FormContainer, IconWrapper, Nav, Search } from "./NavBarStyles";
import { IoMdMenu, IoMdHelpCircleOutline } from "react-icons/io";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { useAsideState, useComposeMessageState, useFormState, useInboxState, useNavBarState } from "../../state-management";

const NavBar = () => {
	const { setShowMenuOn } = useAsideState();

	const { showMoreState, setShowMoreStateOn, setGoogleAppStateOff, setGoogleAppStateOn, setSupportStateOff, setSupportStateOn, setShowMoreStateOff, setSettingStateOn, setAccountProfileStateOn, setAccountProfileStateOff } = useNavBarState();

	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff, setSelectInputToolStateOff } = useInboxState();

	const { setMoreFormattingOptioneStateOff, setAlignFormattingOptioneStateOff, setFontSizeStateOff, setFontStyleStateOff, setColorStateOff } = useComposeMessageState();

	const iconStyle = {
		iconSize: 23,
		iconColor: "rgb(95, 99, 104)",
	};

	const { formState, setFormStateOn } = useFormState();

	const formStyle = {
		backgroundColor: `${formState ? "#fff" : "rgba(229, 236, 247, 0.6)"}`,
		boxShadow: `${formState ? "0px 1px 2px rgba(0, 0, 0, 0.4)" : "none"}`,
	};

	return (
		<Nav
			onClick={() => {
				setSelectMessageTypeStateOff();
				setMarkAllMessageReadStateOff();
				setSelectInputToolStateOff();
				setMoreFormattingOptioneStateOff();
				setAlignFormattingOptioneStateOff();
				setFontSizeStateOff();
				setFontStyleStateOff();
				setColorStateOff();
			}}>
			<ContainerLeft>
				<IconWrapper>
					<button onClick={setShowMenuOn} title="Main menu">
						<Icon>
							<IoMdMenu size={iconStyle.iconSize} color={iconStyle.iconColor} />
						</Icon>
					</button>

					<div title="Gmail">
						<Logo />
					</div>
				</IconWrapper>

				<Search className="col-9" style={formStyle}>
					<Icon>
						<IoSearchSharp size={iconStyle.iconSize} color={iconStyle.iconColor} title="Search" />
					</Icon>

					<FormContainer onClick={setFormStateOn}>
						<Form />
					</FormContainer>
					{!showMoreState && (
						<div
							title="Show search options"
							onClick={() => {
								setShowMoreStateOn();
								setSupportStateOff();
								setGoogleAppStateOff();
								setAccountProfileStateOff();
							}}>
							<Icon>
								<LuSlidersHorizontal size={iconStyle.iconSize} color={iconStyle.iconColor} />
							</Icon>
						</div>
					)}
				</Search>
			</ContainerLeft>

			<ContainerRight>
				<div
					title="Support"
					onClick={() => {
						setSupportStateOn();
						setShowMoreStateOff();
						setGoogleAppStateOff();
						setAccountProfileStateOff();
					}}>
					<Icon>
						<IoMdHelpCircleOutline size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
				</div>

				<div
					title="Settings"
					onClick={() => {
						setSettingStateOn();
						setShowMoreStateOff();
						setSupportStateOff();
						setGoogleAppStateOff();
						setAccountProfileStateOff();
					}}>
					<Icon>
						<IoSettingsOutline size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
				</div>

				<div
					title="Google apps"
					onClick={() => {
						setGoogleAppStateOn();
						setShowMoreStateOff();
						setSupportStateOff();
						setAccountProfileStateOff();
					}}>
					<Icon>
						<CgMenuGridO size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</Icon>
				</div>

				<div
					onClick={() => {
						setAccountProfileStateOn();
						setShowMoreStateOff();
						setSupportStateOff();
						setGoogleAppStateOff();
					}}>
					<Icon>
						<UserProfile />
					</Icon>
				</div>
			</ContainerRight>
		</Nav>
	);
};

export default NavBar;
