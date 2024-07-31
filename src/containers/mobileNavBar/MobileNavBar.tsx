import { IoMdMenu } from "react-icons/io";
import { Icon } from "../../components";
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
			<div className="nav d-flex justify-content-between align-items-center px-3">
				<div className="d-flex">
					<div>
						<Icon>
							<IoMdMenu size={iconStyle.iconSize} color={iconStyle.iconColor} />
						</Icon>
					</div>
					<div onClick={() => refreshPage()}>
						<Icon>
							<MdOutlineRefresh size={upperIconSize} />
						</Icon>
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
