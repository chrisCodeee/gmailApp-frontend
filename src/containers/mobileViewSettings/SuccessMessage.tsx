import { IoClose } from "react-icons/io5";
import { useNavBarState } from "../../state-management";

const SuccessMessage = () => {
	const { setSettingSuccessMessage } = useNavBarState();
	return (
		<div className="animate__animated animate__slideInUp" style={{ position: "absolute", bottom: "0", right: "0", left: "0", zIndex: "2000000000", backgroundColor: "rgba(0,0,0,0.6)" }}>
			<div className="d-flex align-items-center justify-content-between" style={{ padding: "1rem 2rem", color: "#fff" }}>
				<div style={{ fontSize: "1.4rem" }}>Your preferences has been saved</div>
				<div onClick={() => setSettingSuccessMessage(false)}>
					<IoClose size={20} />
				</div>
			</div>
		</div>
	);
};

export default SuccessMessage;
