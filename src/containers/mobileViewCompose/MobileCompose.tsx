import axios, { CanceledError } from "axios";
import { FormEvent, useState } from "react";
import { useCompose, useUser } from "../../hooks";
import { useInboxState, useNavBarState } from "../../state-management";
import { validateSendEmail } from "../scheduleSend/component/useScheduleSend";
import { MobileViewComposeWrapper } from "./MobileViewComposeStyle";

const MobileCompose = () => {
	const { setMobileComposeState, setMobileSuccessMesssage } = useNavBarState();
	const { useComposeMessage } = useCompose();
	const { setMessage } = useInboxState();
	const [isEmail, setIsEmail] = useState(false);

	const { username, firstName, lastName } = useUser();

	const message = {
		email: useComposeMessage.recipientEmailAddress,
		subject: useComposeMessage.emailSubject,
		body: useComposeMessage.contentEditable,
		sender: `${firstName} ${lastName}`,
	};

	const handleInput = (event: FormEvent<HTMLDivElement>) => {
		useComposeMessage.setContentEditable(event.currentTarget.textContent || "");
	};

	const getMessages = () => {
		const controller = new AbortController();
		axios
			.get(`https://gmailapp-backend-production.up.railway.app/getmessage/${username}`, {
				signal: controller.signal,
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					setMessage(res.data);
				}
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				console.log(err);
			});
		return () => controller.abort();
	};

	const sendMessage = () => {
		const { error } = validateSendEmail(useComposeMessage.recipientEmailAddress);

		if (useComposeMessage.recipientEmailAddress === "") {
			setTimeout(() => {
				setIsEmail(false);
			}, 5000);

			return setIsEmail(true);
		}

		if (error) {
			return alert(`'${useComposeMessage.recipientEmailAddress}' isn't a valid email address. Try sending again after fixing it.`);
		}

		setTimeout(() => {
			setMobileSuccessMesssage(false);
		}, 5000);

		axios
			.post(`https://gmailapp-backend-production.up.railway.app/sendmessage/`, message)
			.then((res) => {
				if (res.status === 200) {
					setMobileComposeState(false);
					setMobileSuccessMesssage(true);

					setTimeout(() => {
						getMessages();
					}, 1000);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<MobileViewComposeWrapper>
			<div className="header">
				<button className="closeBtn" onClick={() => setMobileComposeState(false)}>
					Close
				</button>
				<button className="sendBtn" onClick={sendMessage}>
					Send
				</button>
			</div>

			{isEmail && (
				<div className="" style={{ textAlign: "center", backgroundColor: "rgb(255, 245, 194)", padding: ".6rem 0", fontWeight: "500" }}>
					Please add a recipient.
				</div>
			)}

			<div className="d-flex align-items-center inputwrapper">
				<label htmlFor="email">To:</label>
				<input type="text" id="email" style={{ width: "100%", margin: "0 0 0 .5rem" }} value={useComposeMessage.recipientEmailAddress ? useComposeMessage.recipientEmailAddress : ""} onChange={(e) => useComposeMessage.setRecipientEmailAddress(e.target.value)} />
			</div>

			<div className="d-flex align-items-center inputwrapper">
				<label htmlFor="Cc/Bcc">Cc/Bcc:</label>
				<input type="text" id="Cc/Bcc" style={{ width: "100%", margin: "0 0 0 .5rem" }} />
			</div>

			<div className="d-flex align-items-center inputwrapper">
				<label htmlFor="subject">Subject:</label>
				<input type="text" id="subject" style={{ width: "100%", margin: "0 0 0 .5rem" }} value={useComposeMessage.emailSubject} onChange={(e) => useComposeMessage.setEmailSubject(e.target.value)} />
			</div>

			<div className="textarea" contentEditable onInput={handleInput}></div>

			<p style={{ textAlign: "center", fontSize: "1.05rem", color: "#000", backgroundColor: "rgba(0,0,0,0.05)", padding: "1rem 0" }}>&copy; {new Date().getFullYear()} Google</p>
		</MobileViewComposeWrapper>
	);
};

export default MobileCompose;
