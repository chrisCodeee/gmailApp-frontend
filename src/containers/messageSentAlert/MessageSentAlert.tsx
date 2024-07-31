import { MdClose } from "react-icons/md";
import { useInboxState } from "../../state-management";

const MessageSentAlert = () => {
	const { setMessageSentState } = useInboxState();
	return (
		<>
			<div className="" style={{ position: "absolute", bottom: "0", left: "20px", zIndex: "700000000" }}>
				<div className="d-flex align-items-center" style={{ backgroundColor: "rgba(0,0,0,0.85)", padding: "1.5rem 2.3rem", width: "fit-content", borderRadius: "5px", fontWeight: "500" }}>
					<span style={{ color: "rgba(255,255,255,0.85)" }}>Message sent</span>
					<button style={{ color: "rgb(138, 180, 248)", margin: "0 0 0 1.6rem" }}>Undo</button>
					<button style={{ color: "rgb(138, 180, 248)", margin: "0 1rem" }}>View message</button>
					<div className="" style={{ cursor: "pointer" }} onClick={() => setMessageSentState(false)}>
						<MdClose color="rgba(255,255,255,0.85)" size={22} />
					</div>
				</div>
			</div>
		</>
	);
};

export default MessageSentAlert;
