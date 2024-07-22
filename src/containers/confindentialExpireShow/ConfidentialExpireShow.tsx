import { IoClose } from "react-icons/io5";
import { Icon } from "../../components";
import { useCompose } from "../../hooks";
import { ConfidentialModeImage } from "../../assets";
import * as ConfidentialExpireShowStyle from "./ConfidentialExpireShowStyle";
import { currentDate } from "../confidentialModeExpire/confidentialModeParams";

const ConfidentialExpireShow = () => {
	const { useComposeMessage } = useCompose();

	const closeAll = () => {
		useComposeMessage.setConfidentialModeOn();
		useComposeMessage.setFontSizeStateOff();
		useComposeMessage.setFontStyleStateOff();
		useComposeMessage.setMoreFormattingOptioneStateOff();
		useComposeMessage.setAlignFormattingOptioneStateOff();
		useComposeMessage.setColorStateOff();
	};

	return (
		<>
			<ConfidentialExpireShowStyle.ConfidentialExpireShowWrapper formattingOptionState={useComposeMessage.formattingOptionState.toString()} maximizeState={useComposeMessage.maximizeState.toString()} recheckState={useComposeMessage.recheckState.toString()}>
				<ConfidentialExpireShowStyle.ConfidentialExpireShowContainer>
					<div className="d-flex">
						<ConfidentialExpireShowStyle.ConfidentialIconLockWrapper className="col-2" maximizeState={useComposeMessage.maximizeState.toString()}>
							<img src={ConfidentialModeImage} alt="Lock clock" />
						</ConfidentialExpireShowStyle.ConfidentialIconLockWrapper>
						<ConfidentialExpireShowStyle.ConfidentialModeExpireTimeWrapper>
							<div>Content expires {useComposeMessage.confidentialModeExpireNextTimeValueOnClick ? useComposeMessage.confidentialModeExpireNextTimeValueOnClick : currentDate.slice(5, currentDate.length)}.</div>
							<p>Recipients won't have the option to forward, copy, print, or download this email.</p>
						</ConfidentialExpireShowStyle.ConfidentialModeExpireTimeWrapper>
					</div>

					<ConfidentialExpireShowStyle.ConfidentialModeExpireButtonWrapper>
						<ConfidentialExpireShowStyle.ConfidentialModeExpireButtonContainer>
							<button onClick={closeAll}>Edit</button>

							<div onClick={useComposeMessage.setConfidentialModeTimeShowOff}>
								<Icon>
									<IoClose size={22} />
								</Icon>
							</div>
						</ConfidentialExpireShowStyle.ConfidentialModeExpireButtonContainer>
					</ConfidentialExpireShowStyle.ConfidentialModeExpireButtonWrapper>
				</ConfidentialExpireShowStyle.ConfidentialExpireShowContainer>
			</ConfidentialExpireShowStyle.ConfidentialExpireShowWrapper>
		</>
	);
};

export default ConfidentialExpireShow;
