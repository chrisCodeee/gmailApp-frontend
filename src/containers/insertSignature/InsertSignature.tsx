import { IoCheckmarkSharp } from "react-icons/io5";
import * as InsertSignatureStyle from "./InsertSignatureStyle";
import { useCompose } from "../../hooks";

const InsertSignature = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<InsertSignatureStyle.InsertSignatureWrapper maximizeState={useComposeMessage.maximizeState.toString()}>
				<InsertSignatureStyle.InsertSignatureHeading>
					<div onClick={useComposeMessage.setNotActiveOn}>Manage signatures</div>
				</InsertSignatureStyle.InsertSignatureHeading>
				<InsertSignatureStyle.InsertSignatureCheck>
					<div>
						<IoCheckmarkSharp size={19} />
						<span>No signature</span>
					</div>
				</InsertSignatureStyle.InsertSignatureCheck>
			</InsertSignatureStyle.InsertSignatureWrapper>
		</>
	);
};

export default InsertSignature;
