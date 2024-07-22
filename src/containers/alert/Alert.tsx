import { BtnPrimary } from "../../components";
import { useCompose } from "../../hooks";
import * as AlertStyle from "./AlertStyle";

interface Props {
	alertName: string;
}

const Alert = ({ alertName }: Props) => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<AlertStyle.AlertWrapper>
				<AlertStyle.AlertContainer>
					<AlertStyle.AlertFlexContainer>
						<div>{alertName}</div>
						<AlertStyle.AlertBtnWrapper>
							<div
								onClick={() => {
									useComposeMessage.setAlertOff();
									useComposeMessage.setNotActiveOff();
								}}>
								<BtnPrimary name="Close" borderRadius="30px" />
							</div>
						</AlertStyle.AlertBtnWrapper>
					</AlertStyle.AlertFlexContainer>
				</AlertStyle.AlertContainer>
			</AlertStyle.AlertWrapper>
		</>
	);
};

export default Alert;
