import { IoClose } from "react-icons/io5";
import { useNavBarState } from "../../state-management";
import "animate.css";

const SuccessMessage = () => {
	const { setMobileSuccessMesssage } = useNavBarState();
	return (
		<div className="animate__animated animate__slideInDown" style={{ position: "absolute", top: "10px", right: "10px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.9)", color: "#fff", zIndex: "100000000000000" }}>
			<div className="d-flex align-items-center" style={{ padding: "1rem " }}>
				<div className="" style={{ margin: "0 1.5rem 0 0" }}>
					Your email has been sent.
				</div>
				<div className="d-flex" onClick={() => setMobileSuccessMesssage(false)}>
					<IoClose size={20} />
				</div>
			</div>
		</div>
	);
};

export default SuccessMessage;
