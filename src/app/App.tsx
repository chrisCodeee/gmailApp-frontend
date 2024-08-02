import { Navigate, Outlet } from "react-router-dom";
import * as Container from "../containers";
import { AppWrapper } from "./AppStyles";
import { useAsideState, useInboxState, useNavBarState } from "../state-management";
import { ComposeMessageMinimized } from "../containers/compose/component";
import { useCompose, useUser } from "../hooks";
import { ScheduleCheckEmailPopUp, ScheduleCheckPopUp } from "../containers/scheduleSend/component";
import MoreLabelOption from "../containers/moreOptions/subMoreOptions/MoreLabelOption";
import MoreOptionTimeAndDate from "../containers/moreOptionSetUpTimeAndDate/MoreOptionTimeAndDate";
import { ScheduleAppointment } from "../containers/moreOptionSetUpTimeAndDate/components";
import axios, { CanceledError } from "axios";
import { useEffect } from "react";
import SuccessMessage from "../containers/mobileViewCompose/SuccessMessage";

function App() {
	const { showMoreState, supportState, googleAppState, accountProfileState, mobileComposeState, mobileSuccessMessageState } = useNavBarState();

	const { createLabelState, composeMessageState } = useAsideState();

	const { useComposeMessage } = useCompose();

	const { selectMessageTypeState, markAllMessageReadState, selectInputToolState, messageSentState, setMessage } = useInboxState();

	const { user, username } = useUser();

	useEffect(() => {
		const controller = new AbortController();

		axios
			.get(`https://gmailapp-backend-production.up.railway.app/getmessage/${username}`, {
				signal: controller.signal,
			})
			.then((res) => {
				if (res.status === 200) {
					setMessage(res.data);
				}
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				console.log(err);
			});

		return () => controller.abort();
	}, []);

	return (
		<>
			{user ? (
				<AppWrapper>
					<div className="d-none d-xl-block">
						<Container.NavBar />
					</div>
					<div className="d-block d-xl-none">
						<Container.MobileNavBar />
					</div>
					<Container.MobileViewMenu />

					{mobileComposeState && <Container.MobileCompose />}
					{mobileSuccessMessageState && <SuccessMessage />}
					{/* <SuccessMessage /> */}
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
					{useComposeMessage.scheduleSendCheckPopUpState && <ScheduleCheckPopUp />}
					{messageSentState && <Container.MessageSentAlert />}

					{/* <Container.SelectContact /> */}
				</AppWrapper>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
}

export default App;
