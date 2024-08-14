import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks";
import { SettingHeader, SettingWrapper } from "./MobileViewSettingStyle";
import { MobileMenuBg } from "../../assets";
import { useEffect, useState } from "react";
import { useNavBarState } from "../../state-management";
import HelpAndFeedback from "./HelpAndFeedback";
import GetGmailApp from "../mobileViewMenu/GetGmailApp";
import SuccessMessage from "./SuccessMessage";
import SendFeedBack from "./SendFeedBack";
import AccountAndSystemInfo from "./AccountAndSystemInfo";

const MobileViewSettings = () => {
	const { username } = useUser();
	const { helpAndFeedback, settingSuccessMessage, sendFeedback, accountAndSystemInfoState, setAccountAndSystemInfoState, setSettingSuccessMessage, setHelpAndFeedback } = useNavBarState();
	const navigate = useNavigate();
	const [toggleSignature, setToggleSignature] = useState(false);
	const [toggleVacation, setToggleVacation] = useState(false);

	const [signature, setSignature] = useState("null");

	useEffect(() => {
		setAccountAndSystemInfoState(false);
	}, []);

	const applySetting = () => {
		setSettingSuccessMessage(true);

		setTimeout(() => {
			setSettingSuccessMessage(false);
		}, 5000);
	};

	return (
		<>
			<GetGmailApp />
			<SettingWrapper className="animate__animated animate__slideInRight">
				<SettingHeader $bg={MobileMenuBg} $toggleSignature={toggleSignature.toString()} $toggleVacation={toggleVacation.toString()}>
					<button className="menu" onClick={() => navigate("/menu")}>
						Menu
					</button>
					<div style={{ fontSize: "1.4rem" }}>{username}</div>
					<button className="apply" disabled={!toggleSignature && !toggleVacation} onClick={applySetting}>
						Apply
					</button>
				</SettingHeader>
				<div className="settingContainer">
					<div className="text">Mobile Signature</div>
					<div className="" style={{ position: "relative" }} onClick={() => setToggleSignature(!toggleSignature)}>
						<div className="toggle" style={{ width: "55px", height: "22px", borderRadius: "10px", backgroundColor: !toggleSignature ? "rgba(0,0,0,0.3)" : "rgba(33, 150, 243,.5)" }}>
							&nbsp;
						</div>
						<div className="circleToggle" style={{ backgroundColor: !toggleSignature ? "#fff" : "rgb(33, 150, 243)", height: "30px", width: "30px", borderRadius: "100%", position: "absolute", top: "-5px", boxShadow: "0px 1px 2px rgba(0,0,0,0.5)", transition: "all .2s", transform: toggleSignature ? "translateX(30px)" : "translateX(0)" }}></div>
					</div>
				</div>
				{toggleSignature && (
					<div className="settingContainer pt-4 flex-column">
						<input type="text" value={signature} placeholder="Mobile Signature" onChange={(e) => setSignature(e.target.value)} style={{ backgroundColor: "#fff", borderRadius: "10px", width: "100%", padding: "1.5rem", border: "1px solid rgba(0,0,0,0.1)", letterSpacing: "1px" }} />
						<p style={{ textAlign: "center", width: "80%", fontSize: "1.4rem", margin: "0" }}>This will be used instead of your signature on desktop Gmail.</p>
					</div>
				)}
				<div className="settingContainer">
					<div className="text">Vacation Responder</div>
					<div className="" style={{ position: "relative" }} onClick={() => setToggleVacation(!toggleVacation)}>
						<div className="toggle" style={{ width: "55px", height: "22px", borderRadius: "10px", backgroundColor: !toggleVacation ? "rgba(0,0,0,0.3)" : "rgba(33, 150, 243,.5)" }}>
							&nbsp;
						</div>
						<div className="circleToggle" style={{ backgroundColor: !toggleVacation ? "#fff" : "rgb(33, 150, 243)", height: "30px", width: "30px", borderRadius: "100%", position: "absolute", top: "-5px", boxShadow: "0px 1px 2px rgba(0,0,0,0.5)", transition: "all .2s", transform: toggleVacation ? "translateX(30px)" : "translateX(0)" }}></div>
					</div>
				</div>
				<div className="settingContainer py-4">
					<div className="text" onClick={() => setHelpAndFeedback(true)} style={{ backgroundColor: "#fff", borderRadius: "10px", width: "100%", textAlign: "center", padding: "1.2rem 0", border: "1px solid rgba(0,0,0,0.1)" }}>
						Help and Feedback...
					</div>
				</div>
			</SettingWrapper>

			{helpAndFeedback && <HelpAndFeedback />}
			{settingSuccessMessage && <SuccessMessage />}
			{sendFeedback && <SendFeedBack />}
			{accountAndSystemInfoState && <AccountAndSystemInfo />}
		</>
	);
};

export default MobileViewSettings;
