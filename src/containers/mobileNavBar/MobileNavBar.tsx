import { IoMdMenu } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { MobileNavBarWrapper } from "./MobileNavBarStyles";
import { useNavBarState } from "../../state-management";

const MobileNavBar = () => {
	const iconStyle = {
		iconSize: 23,
		iconColor: "rgba(0,0,0,0.8)",
	};

	const refreshPage = () => {
		window.location.reload();
	};

	const { setMobileComposeState } = useNavBarState();

	return (
		<MobileNavBarWrapper>
			<div className="nav d-flex justify-content-between align-items-center px-3 py-2">
				<div className="d-flex">
					<div style={{ margin: "0 2rem 0 0" }}>
						<IoMdMenu size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</div>
					<div onClick={() => refreshPage()}>
						<MdOutlineRefresh size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</div>
				</div>

				<div className="d-flex align-items-end">
					<div className="me-3" style={{ fontSize: "2rem" }}>
						Primary
					</div>
					<div className="d-flex" style={{ fontSize: "1.7rem", color: "rgba(0,0,0,0.5)" }}>
						120
					</div>
				</div>

				<button className="compose" onClick={() => setMobileComposeState(true)}>
					<HiPencil size={25} color="#fff" />
				</button>
			</div>
		</MobileNavBarWrapper>
	);
};

export default MobileNavBar;
