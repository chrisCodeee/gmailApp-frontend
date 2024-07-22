import { IoClose } from "react-icons/io5";
import { BtnSecondary, Icon } from "../../components";
import { Link } from "react-router-dom";
import * as InsertLinkStyle from "./InsertLinkStyle";
import { useCompose } from "../../hooks";
import { useEffect, useState } from "react";

const InsertLink = () => {
	const { useComposeMessage } = useCompose();

	const [validEmail, setValidEmail] = useState("");
	const [validEmailState, setValidEmailState] = useState(false);

	const text = useComposeMessage.urlText.split("@");
	const text2 = text[text.length - 1].split(".");

	const checkEmail = () => {
		if (!useComposeMessage.urlText.includes("@") || !text2[0] || text2[1].length < 2) {
			setValidEmail("Invalid email address");
		} else {
			setValidEmail("");
		}
	};

	// To update the mainUrlLink
	useEffect(() => {
		useComposeMessage.setMainUrlLink();
		{
			validEmailState && text2[1] && checkEmail();
		}
	}, [useComposeMessage.displayText, useComposeMessage.urlText]);

	const checkUrl = () => {
		if (useComposeMessage.urlText === "") {
			useComposeMessage.setAlertOn(); //Design the alert
		}
	};
	return (
		<>
			<InsertLinkStyle.InsertLinkWrapper>
				<InsertLinkStyle.InsertLinkContainer $emailstate={useComposeMessage.insertLinkEmailState.toString()}>
					<InsertLinkStyle.InsertLinkHeading>
						<span>Edit Link</span>

						<div onClick={useComposeMessage.setInsertLinkOff}>
							<Icon>
								<IoClose size={25} />
							</Icon>
						</div>
					</InsertLinkStyle.InsertLinkHeading>

					<InsertLinkStyle.InsertTextToDisplay>
						<label htmlFor="textToDisplay">Text to display:</label>

						<input
							type="text"
							id="textToDisplay"
							value={useComposeMessage.mainLinkText}
							onChange={(e) => {
								useComposeMessage.setDisplayText(e.target.value);
								useComposeMessage.setUrlLinkState(true);
							}}
							autoFocus
						/>
					</InsertLinkStyle.InsertTextToDisplay>

					<span>Link to:</span>
					<InsertLinkStyle.InsertLinkAddressWrapper>
						<InsertLinkStyle.InsetLinkAddressContainer className="col-3">
							<InsertLinkStyle.InsertLinkWebAddressContainer $insertemailstyle={useComposeMessage.insertLinkEmailState.toString()} onClick={useComposeMessage.setInsertLinkEmailOff}>
								<input type="radio" name="textAddress" id="webAddress" checked={useComposeMessage.insertLinkEmailState} onChange={useComposeMessage.setInsertLinkEmailOn} />

								<label htmlFor="urlLink">Web address</label>
							</InsertLinkStyle.InsertLinkWebAddressContainer>

							<InsertLinkStyle.InsertLinkEmailAddressContainer $insertemailstyle={useComposeMessage.insertLinkEmailState.toString()} onClick={useComposeMessage.setInsertLinkEmailOn}>
								<input type="radio" name="textAddress" id="emailAddress" checked={!useComposeMessage.insertLinkEmailState} onChange={useComposeMessage.setInsertLinkEmailOff} />

								<label htmlFor="urlLink">Email address</label>
							</InsertLinkStyle.InsertLinkEmailAddressContainer>
						</InsertLinkStyle.InsetLinkAddressContainer>
						<InsertLinkStyle.InsertLinkDestinationWrapper>
							<InsertLinkStyle.InsertLinkDestinationContainer>
								<label>{useComposeMessage.insertLinkEmailState ? "To what URL should this link go?" : "To what email address should this link?"}</label>

								<input
									onInvalid={() => setValidEmail("Invalid Email address")}
									type={useComposeMessage.insertLinkEmailState ? "url" : "email"}
									id="urlLink"
									value={useComposeMessage.urlText}
									onChange={(e) => {
										useComposeMessage.setUrlText(e.target.value);
										!useComposeMessage.displayText && useComposeMessage.setUrlLinkState(false);
										checkEmail();
										setValidEmailState(true);
									}}
								/>

								{!useComposeMessage.insertLinkEmailState && (
									<p className="text-center" style={{ fontWeight: "500", color: "rgb(204, 0, 0)", margin: "0", padding: "0" }}>
										{validEmail}
									</p>
								)}
							</InsertLinkStyle.InsertLinkDestinationContainer>

							<InsertLinkStyle.InsertLinkTestLinkContainer $emailstate={useComposeMessage.insertLinkEmailState.toString()}>
								<Link to={useComposeMessage.urlText && `https://www.${useComposeMessage.urlText}`} onClick={() => checkUrl()} target={useComposeMessage.urlText && "_blank"}>
									Test this link
								</Link>

								<InsertLinkStyle.InsertLinkText>
									<span>Not sure what to put in the box?</span> First, find the page on the web that you want to link to. (A{" "}
									<Link to="https://www.google.com" target="_blank">
										search engine
									</Link>{" "}
									might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.
								</InsertLinkStyle.InsertLinkText>
							</InsertLinkStyle.InsertLinkTestLinkContainer>

							<InsertLinkStyle.InsertLinkButtonWrapper $emailstate={useComposeMessage.insertLinkEmailState.toString()}>
								<div onClick={useComposeMessage.setInsertLinkOff}>
									<BtnSecondary name="Cancel" borderRadius="20px" />
								</div>

								<InsertLinkStyle.BtnOk disabled={!useComposeMessage.urlText} $btnstate={useComposeMessage.urlText} onClick={useComposeMessage.setDisplayComposeTextState}>
									OK
								</InsertLinkStyle.BtnOk>
							</InsertLinkStyle.InsertLinkButtonWrapper>
						</InsertLinkStyle.InsertLinkDestinationWrapper>
					</InsertLinkStyle.InsertLinkAddressWrapper>
				</InsertLinkStyle.InsertLinkContainer>
			</InsertLinkStyle.InsertLinkWrapper>
		</>
	);
};

export default InsertLink;
