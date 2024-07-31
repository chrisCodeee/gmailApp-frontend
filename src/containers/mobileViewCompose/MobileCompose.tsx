import { useNavBarState } from "../../state-management";
import { MobileViewComposeWrapper } from "./MobileViewComposeStyle";

const MobileCompose = () => {
	const { setMobileComposeState } = useNavBarState();

	return (
		<MobileViewComposeWrapper>
			<div className="header">
				<button className="closeBtn" onClick={() => setMobileComposeState(false)}>
					Close
				</button>
				<button className="sendBtn">Send</button>
			</div>

			<div className="d-flex align-items-center inputwrapper">
				<label htmlFor="email">To:</label>
				<input type="text" id="email" style={{ width: "100%", margin: "0 0 0 .5rem" }} />
			</div>

			<div className="d-flex align-items-center inputwrapper">
				<label htmlFor="Cc/Bcc">Cc/Bcc:</label>
				<input type="text" id="Cc/Bcc" style={{ width: "100%", margin: "0 0 0 .5rem" }} />
			</div>

			<div className="d-flex align-items-center inputwrapper">
				<label htmlFor="subject">Subject:</label>
				<input type="text" id="subject" style={{ width: "100%", margin: "0 0 0 .5rem" }} />
			</div>

			<div className="textarea" contentEditable></div>

			<p style={{ textAlign: "center", fontSize: "1.05rem", color: "#000" }}>&copy; 2024 Google</p>
		</MobileViewComposeWrapper>
	);
};

export default MobileCompose;
