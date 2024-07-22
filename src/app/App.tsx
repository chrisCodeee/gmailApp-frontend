import { Outlet } from "react-router-dom";
import * as Container from "../containers";
import { AppWrapper } from "./AppStyles";
import { useAsideState, useInboxState, useNavBarState } from "../state-management";
import { ComposeMessageMinimized } from "../containers/compose/component";
import { useCompose } from "../hooks";
import { ScheduleCheckEmailPopUp } from "../containers/scheduleSend/component";
import MoreLabelOption from "../containers/moreOptions/subMoreOptions/MoreLabelOption";
import MoreOptionTimeAndDate from "../containers/moreOptionSetUpTimeAndDate/MoreOptionTimeAndDate";
import { ScheduleAppointment } from "../containers/moreOptionSetUpTimeAndDate/components";

function App() {
	const { showMoreState, supportState, googleAppState, accountProfileState } = useNavBarState();

	const { createLabelState, composeMessageState } = useAsideState();

	const { useComposeMessage } = useCompose();

	const { selectMessageTypeState, markAllMessageReadState, selectInputToolState } = useInboxState();
	return (
		<AppWrapper>
			<Container.NavBar />
			<Outlet />

			{/* Other Components when clicked or hovered */}
			{createLabelState && <Container.CreateLabelModal />}
			{googleAppState && <Container.GoogleApps />}
			{showMoreState && <Container.SearchMoreOptions />}
			{supportState && <Container.Support />}
			{accountProfileState && <Container.AccountProfile />}
			{selectMessageTypeState && <Container.SelectMessageType />}
			{markAllMessageReadState && <Container.MarkAllAsRead />}
			{selectInputToolState && <Container.LanguageInputTool />}
			{composeMessageState && <Container.Compose />}
			{useComposeMessage.composeMessageMinimizeState && <ComposeMessageMinimized />}
			{useComposeMessage.insertLinkState && <Container.InsertLink />}
			{useComposeMessage.alertState && <Container.Alert alertName="The URL is not valid and cannot be loaded." />}
			{useComposeMessage.notActiveState && <Container.Alert alertName="Sorry, this is yet to be implemented. Thank you for checking out my work." />}

			{useComposeMessage.confidentialModeState && <Container.ConfidentialMode />}
			{useComposeMessage.insertSignatureState && <Container.InsertSignature />}

			{useComposeMessage.scheduleSendPopUpState && <Container.ScheduleSendPopUp />}
			{useComposeMessage.scheduleCheckEmailPopUpState && <ScheduleCheckEmailPopUp />}

			{useComposeMessage.moreLabelOptionState && <MoreLabelOption />}

			{useComposeMessage.moreOptionTimeAndDateState && <MoreOptionTimeAndDate />}

			{useComposeMessage.scheduleAppointmentState && <ScheduleAppointment />}

			{/* <Container.SelectContact /> */}
		</AppWrapper>
	);
}

export default App;
