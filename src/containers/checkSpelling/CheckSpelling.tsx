import { MdArrowDropDown } from "react-icons/md";
import { iconSize } from "../../components/list/useListParams";
import { IoClose } from "react-icons/io5";
import * as CheckSpellingStyle from "./CheckSpellingStyle";
import { useCompose } from "../../hooks";

const CheckSpelling = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<CheckSpellingStyle.CheckSpellingWrapper $maximizeState={useComposeMessage.maximizeState.toString()}>
				<CheckSpellingStyle.RecheckWrapper>
					<div className="recheck">Recheck</div>
					<div className="iconArrow">
						<MdArrowDropDown size={iconSize} />
					</div>
				</CheckSpellingStyle.RecheckWrapper>

				<div className="iconClose" onClick={useComposeMessage.setRecheckOff}>
					<IoClose size={21} color="rgba(0, 0, 0, 0.7)" />
				</div>
			</CheckSpellingStyle.CheckSpellingWrapper>
		</>
	);
};

export default CheckSpelling;
