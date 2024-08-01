import { IoMdMenu } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import { upperIconSize } from "../messages/UpperMessage";
import { HiPencil } from "react-icons/hi";
import { MobileNavBarWrapper } from "./MobileNavBarStyles";
import { useNavBarState } from "../../state-management";

const MobileNavBar = () => {
	const iconStyle = {
		iconSize: 23,
		iconColor: "rgb(95, 99, 104)",
	};

	const refreshPage = () => {
		window.location.reload();
	};

	const { setMobileComposeState } = useNavBarState();

	return (
		<MobileNavBarWrapper>
			<div className="nav d-flex justify-content-between align-items-center px-2 py-2">
				<div className="d-flex">
					<div className="me-3">
						<IoMdMenu size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</div>
					<div onClick={() => refreshPage()}>
						<MdOutlineRefresh size={upperIconSize} />
					</div>
				</div>

				<div className="">Primary</div>

				<button className="compose" onClick={() => setMobileComposeState(true)}>
					<HiPencil size={25} color="#fff" />
				</button>
			</div>
		</MobileNavBarWrapper>
	);
};

export default MobileNavBar;
