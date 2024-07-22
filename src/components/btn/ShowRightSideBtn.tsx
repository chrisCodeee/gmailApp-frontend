import { MdKeyboardArrowLeft } from "react-icons/md";
import { iconSize } from "../list/useListParams";
import { useAsideState } from "../../state-management";
import { ShowRightSideWrapper } from "./BtnStyle";

const ShowRightSideBtn = () => {
	const { setShowRightSideStateOn } = useAsideState();
	return (
		<>
			<ShowRightSideWrapper onClick={setShowRightSideStateOn} title="Show side panel">
				<MdKeyboardArrowLeft size={iconSize} />
			</ShowRightSideWrapper>
		</>
	);
};

export default ShowRightSideBtn;
