import { LeftAsideContainer, MainContainer, MessageContainer, RightAsideContainer } from "./HomeStyles";
import { Aside, Messages, RightSideBar, Settings } from "../../containers";
import { useAsideState, useComposeMessageState, useFormState, useInboxState } from "../../state-management";
import { ShowRIghtSideBtn } from "../../components";
import useNavBarState from "../../state-management/useNavBarState";

const Home = () => {
	const { setFormStateOff } = useFormState();

	const { showRightSideState, showMenu, setShowMenuOnOver } = useAsideState();
	const { setShowMoreStateOff, setSupportStateOff, setGoogleAppStateOff, settingState, setAccountProfileStateOff } = useNavBarState();

	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff } = useInboxState();
	const { setMoreFormattingOptioneStateOff, setAlignFormattingOptioneStateOff, setFontSizeStateOff, setFontStyleStateOff, setColorStateOff } = useComposeMessageState();

	return (
		<MainContainer
			onClick={() => {
				setFormStateOff();
				setShowMoreStateOff();
				setSupportStateOff();
				setGoogleAppStateOff();
				setAccountProfileStateOff();
				setMoreFormattingOptioneStateOff();
				setAlignFormattingOptioneStateOff();
				setFontSizeStateOff();
				setFontStyleStateOff();
				setColorStateOff();
			}}>
			{showMenu && (
				<LeftAsideContainer
					onClick={() => {
						setSelectMessageTypeStateOff();
						setMarkAllMessageReadStateOff();
					}}>
					<Aside />
				</LeftAsideContainer>
			)}

			{!showMenu && (
				<div className="menulist" style={{ width: "7rem" }} onMouseOver={setShowMenuOnOver}>
					<Aside />
				</div>
			)}

			<MessageContainer>
				<Messages />
			</MessageContainer>

			{settingState && (
				<div className="ms-4 me-2" style={{ width: "20%", backgroundColor: "#fff", borderRadius: "20px" }}>
					<Settings />
				</div>
			)}

			<RightAsideContainer onClick={setSelectMessageTypeStateOff}>
				<RightSideBar />
			</RightAsideContainer>

			{/* Icon to show the right side menu */}
			{!showRightSideState && <ShowRIghtSideBtn />}
		</MainContainer>
	);
};

export default Home;
