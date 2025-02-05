import { Outlet } from "react-router-dom";
import * as Container from "../containers";
import { AppWrapper } from "./AppStyles";
import { useAsideState, useInboxState, useNavBarState } from "../state-management";
import { ComposeMessageMinimized } from "../containers/compose/component";
import { useCompose } from "../hooks";
import { ScheduleCheckEmailPopUp, ScheduleCheckPopUp } from "../containers/scheduleSend/component";
import MoreLabelOption from "../containers/moreOptions/subMoreOptions/MoreLabelOption";
import MoreOptionTimeAndDate from "../containers/moreOptionSetUpTimeAndDate/MoreOptionTimeAndDate";
import { ScheduleAppointment } from "../containers/moreOptionSetUpTimeAndDate/components";
import SuccessMessage from "../containers/mobileViewCompose/SuccessMessage";
import GetGmailApp from "../containers/mobileViewMenu/GetGmailApp";
import { useEffect } from "react";
import { inboxMessageDetails } from "../pages/inbox/useInboxParams";

function App() {
	const { showMoreState, supportState, googleAppState, accountProfileState, mobileComposeState, mobileSuccessMessageState } = useNavBarState();

	const { createLabelState, composeMessageState } = useAsideState();

	const { useComposeMessage } = useCompose();

	const { selectMessageTypeState, markAllMessageReadState, selectInputToolState, messageSentState, setMessage } = useInboxState();

	// const { user } = useUser();
	// const { user, username } = useUser();

	useEffect(() => {
		setMessage(inboxMessageDetails);
		// const controller = new AbortController();
		// axios
		// 	.get(`http://localhost:8080/getmessage/${username}`, {
		// 		signal: controller.signal,
		// 	})
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			setMessage(res.data);
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		if (err instanceof CanceledError) return;
		// 		console.log(err);
		// 	});
		// return () => controller.abort();
	}, []);

	return (
		<>
			{/* {user.userName ? ( */}
			<>
				<AppWrapper>
					<div className="d-none d-xl-block">
						<Container.NavBar />
					</div>

					<div className="d-block d-xl-none animate__animated animate__slideInRight">
						<>
							<GetGmailApp />
							<Container.MobileNavBar />
						</>
					</div>

					{/* {mobileMenuState && <Container.MobileViewMenu />} */}
					{mobileComposeState && <Container.MobileCompose />}
					{mobileSuccessMessageState && <SuccessMessage />}
					{/* <SuccessMessage /> */}

					<div className="d-block d-xl-none animate__animated animate__slideInRight">
						<Outlet />
					</div>

					<div className="d-none d-xl-block">
						<Outlet />
					</div>

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
					{useComposeMessage.scheduleSendCheckPopUpState && <ScheduleCheckPopUp />}
					{messageSentState && <Container.MessageSentAlert />}
					{/* <Container.SelectContact /> */}
				</AppWrapper>
			</>
			{/* ) : (
				<Navigate to="/login" />
			)} */}
		</>
	);
}

export default App;
