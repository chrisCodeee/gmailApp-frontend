import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import * as ComposeStyle from "./ComposeStyles";
import { ComposeFormatIcon, ComposeMessageHeading } from "./component";
import { Link } from "react-router-dom";
import * as Container from "..";
import { useCompose } from "../../hooks";
import { EditAppointment } from "../moreOptionSetUpTimeAndDate/components";

const Compose = () => {
	const { textAreaStyle, closeAllState, closeFormattingOption, useComposeMessage } = useCompose();

	return (
		<>
			<ComposeStyle.ComposeContainer maximizestate={useComposeMessage.maximizeState}>
				<ComposeStyle.ComposeMessageWrapper onClick={closeAllState} maximizestate={useComposeMessage.maximizeState}>
					{/* Compose Message Heading */}
					<ComposeStyle.NewMessageContainer
						onClick={() => {
							closeFormattingOption();
							useComposeMessage.setScheduleSendOff();
						}}
						confidenialModeState={useComposeMessage.confidentialModeTimeShow.toString()}>
						<ComposeMessageHeading />
					</ComposeStyle.NewMessageContainer>

					{/* Compose Message Form */}
					<div>
						<ComposeStyle.ComposeForm
							onClick={() => {
								closeFormattingOption();
								useComposeMessage.setScheduleSendOff();
							}}>
							<ComposeStyle.ComposeFormInputContainer className="d-flex">
								{useComposeMessage.recipientState && (
									<Link to="" className="me-2" title="Select contacts">
										To
									</Link>
								)}

								<input type="email" placeholder={!useComposeMessage.recipientState ? "Recipients" : ""} className="w-100" autoFocus onClick={useComposeMessage.setRecipientStateOn} value={useComposeMessage.recipientEmailAddress ? useComposeMessage.recipientEmailAddress : ""} onChange={(e) => useComposeMessage.setRecipientEmailAddress(e.target.value)} />

								{useComposeMessage.recipientState && (
									<div className="d-flex">
										<Link to="" className="me-2" title="Add Cc recipients (Ctrl-Shift-C)">
											Cc
										</Link>

										<Link to="" className="pe-3" title="Add Bcc recipients (Ctrl-Shift-B)">
											Bcc
										</Link>
									</div>
								)}
							</ComposeStyle.ComposeFormInputContainer>
							<ComposeStyle.ComposeFormInputContainer onClick={useComposeMessage.setRecipientStateOff}>
								<input type="text" placeholder="Subject" className="w-100" value={useComposeMessage.emailSubject} onChange={(e) => useComposeMessage.setEmailSubject(e.target.value)} />
							</ComposeStyle.ComposeFormInputContainer>

							<div className="mt-2" onClick={useComposeMessage.setRecipientStateOff} style={{ height: useComposeMessage.maximizeState ? "443px" : "322px", position: "relative", overflowY: "hidden" }}>
								{/* <ComposeStyle.ComposeMessageTextArea textStyle={textAreaStyle} /> */}
								<ComposeStyle.ComposeMessageTextArea textstyle={textAreaStyle} contentEditable onClick={useComposeMessage.setComposeHeading} onPointerLeave={useComposeMessage.setComposeHeadingOff}>
									{useComposeMessage.composeUrlText.map((text) => (
										<Link to={`http://www.${useComposeMessage.urlText}`} target="_blank">
											{text}
										</Link>
									))}

									{/* Link Hover */}

									{/* {isUrlHover && (
										<ComposeStyle.UrlTextContainer style={{ textDecoration: "none", color: "rgb(17, 85, 204)" }} contentEditable={false}>
											<div className="pe-0" style={{ color: "rgb(32, 33, 36)", textDecoration: "inherit" }}>
												Go to link:
											</div>
											<Link to={`http://www.${useComposeMessage.urlText}`} target="_blank">{`http://${useComposeMessage.urlText}`}</Link>|<span>Change</span>|<span>Remove</span>
										</ComposeStyle.UrlTextContainer>
									)} */}
								</ComposeStyle.ComposeMessageTextArea>
							</div>
						</ComposeStyle.ComposeForm>

						{/* Compose Message Footer */}
						<ComposeStyle.ComposeMessageFooter onClick={useComposeMessage.setRecipientStateOff}>
							<ComposeStyle.BtnSend onClick={closeFormattingOption}>
								<ComposeStyle.BtnName
									title="Send (Ctrl-Enter)"
									confidentialMode={useComposeMessage.confidentialModeTimeShow.toString()}
									onClick={() => {
										useComposeMessage.setScheduleSendOff();
									}}>
									Send
								</ComposeStyle.BtnName>

								{!useComposeMessage.confidentialModeTimeShow && (
									<>
										<ComposeStyle.Divider>&nbsp;</ComposeStyle.Divider>

										<div title="More send options" className="d-flex align-items-center align-self-stretch" style={{ padding: "7px 8px 7px 8px" }} onClick={useComposeMessage.setScheduleSendOn}>
											{!useComposeMessage.scheduleSendState && <IoMdArrowDropdown size={15} />}
											{useComposeMessage.scheduleSendState && <IoMdArrowDropup size={15} />}
										</div>
									</>
								)}
							</ComposeStyle.BtnSend>

							{/* Compose Message Formatting Icons */}
							<ComposeFormatIcon />
						</ComposeStyle.ComposeMessageFooter>
					</div>

					{useComposeMessage.formattingOptionState && <Container.FormattingOption />}

					{useComposeMessage.moreFormattingOptionState && <Container.MoreFormattingOPtion />}

					{useComposeMessage.fontStyleState && <Container.FontStyle />}

					{useComposeMessage.fontSizeState && <Container.FontSizeSelect />}

					{useComposeMessage.colorState && <Container.ColorSelect />}

					{useComposeMessage.alignFormattingOptionState && <Container.AlignSelect />}

					{useComposeMessage.confidentialModeTimeShow && <Container.ConfidentialExpireShow />}

					{useComposeMessage.scheduleSendState && <Container.ScheduleSend />}

					{useComposeMessage.moreOptionState && <Container.MoreOptions />}

					{useComposeMessage.recheckState && <Container.CheckSpelling />}

					{useComposeMessage.selectTimeState && <EditAppointment />}
				</ComposeStyle.ComposeMessageWrapper>
			</ComposeStyle.ComposeContainer>
		</>
	);
};

export default Compose;
