import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { Unsubscribe } from ".";
import { useNavBarState } from "../../../state-management";
import useInboxState, { InboxType } from "../../../state-management/useInboxState";
import { InboxMessageBodyWrapper, InboxMessageBodyWrapperSubject, InboxMessageTime } from "../InboxStyles";

export type InboxMessageBodyProps = {
	heading: string;
	id?: number;
	message: string;
	time: string;
	inboxState?: boolean;
	on?: () => void;
	off?: () => void;
	bgColor?: string;
};

interface InboxMessageBodyParams {
	items: InboxType & InboxMessageBodyProps;
}

const InboxMessageBody = ({ items }: InboxMessageBodyParams) => {
	const { settingState } = useNavBarState();
	const { isStar, isStarState, setIsStar } = useInboxState();

	// const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	// const date = new Date(items.date);
	// const month = date.getMonth();
	// const day = date.getDate();

	// const pastDate = `${months[month]} ${day}`;

	// let hours = new Date(items.date).getHours();
	// let minutes = new Date(items.date).getMinutes().toString().padStart(2, "0");
	// const ampm = hours >= 12 ? "PM" : "AM";

	// hours = hours % 12;
	// hours = hours ? hours : 12; // the hour '0' should be '12'
	// const strHours = hours.toString();

	// let time;
	// new Date().getDate() - day >= 1 ? (time = pastDate) : (time = `${strHours}:${minutes} ${ampm}`);

	return (
		<>
			<InboxMessageBodyWrapper className="ms-xl-5 d-xl-flex">
				<InboxMessageBodyWrapperSubject className="d-none d-xl-flex">
					{!items.inboxState && !settingState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 90) : items.subject}</div> : <div>(no subject)</div>}
							{items.message && <span className="mx-2">-</span>}

							{<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.message.slice(0, 110)}` : items.subject.length < 75 ? `${items.message.slice(0, 80)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 40)}${items.message && "..."}` : items.message}</div>}
						</>
					)}

					{items.inboxState && !settingState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 80) : items.subject}</div> : <div>(no subject)</div>}
							{items.message && <span className="mx-2">-</span>}
							<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.message.slice(0, 80)}` : items.subject.length < 75 ? `${items.message.slice(0, 50)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 20)}${items.message && "..."}` : items.message}</div>
						</>
					)}
					{settingState && !items.inboxState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 50) : items.subject}</div> : <div>(no subject)</div>}
							{items.message && <span className="mx-2">-</span>}
							<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.message.slice(0, 65)}` : items.subject.length < 75 ? `${items.message.slice(0, 28)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 0)}${items.message && "..."}` : items.message}</div>
						</>
					)}

					{settingState && items.inboxState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 50) : items.subject}</div> : <div>(no subject)</div>}
							{items.message && <span className="mx-2">-</span>}
							<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.message.slice(0, 38)}` : items.subject.length < 75 ? `${items.message.slice(0, 0)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 0)}${items.message && "..."}` : items.message}</div>
						</>
					)}
				</InboxMessageBodyWrapperSubject>

				<div className="d-block d-sm-none">
					{items.subject ? <div style={{ textAlign: "left", color: "#000", margin: "-.2rem 0 0 0" }}>{items.subject.length >= 75 ? items.subject.slice(0, 35) : items.subject}</div> : <div>(no subject)</div>}

					<div className="d-flex justify-content-between align-items-center" style={{ margin: "-.38rem 0 0 0" }}>
						<div style={{ textAlign: "left", fontSize: "1.3rem", color: "rgba(0,0,0,0.7)" }}>{items.subject.length < 15 ? `${items.message.slice(0, 110)}` : items.subject.length < 75 ? `${items.message.slice(0, 40)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 45)}${items.message && "..."}` : items.message}</div>

						<div className="d-flex align-items-center" onClick={() => setIsStar(items._id)}>
							{isStar === items._id && isStarState ? <MdOutlineStarPurple500 size={25} color="rgb(255, 191, 0)" /> : <MdOutlineStarOutline size={25} color="rgba(0,0,0,.6)" />}
						</div>
					</div>
				</div>

				<div className="d-none d-sm-block d-md-none">
					{items.subject ? <div style={{ textAlign: "left", color: "#000", margin: "-.2rem 0 0 0" }}>{items.subject.length >= 75 ? items.subject.slice(0, 65) : items.subject}</div> : <div>(no subject)</div>}

					<div className="d-flex justify-content-between align-items-center" style={{ margin: "-.38rem 0 0 0" }}>
						<div style={{ textAlign: "left", fontSize: "1.3rem", color: "rgba(0,0,0,0.7)" }}>{items.subject.length < 15 ? `${items.message.slice(0, 110)}` : items.subject.length < 75 ? `${items.message.slice(0, 40)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 85)}${items.message && "..."}` : items.message}</div>

						<div className="d-flex align-items-center" onClick={() => setIsStar(items._id)}>
							{isStar === items._id && isStarState ? <MdOutlineStarPurple500 size={25} color="rgb(255, 191, 0)" /> : <MdOutlineStarOutline size={25} color="rgba(0,0,0,.6)" />}
						</div>
					</div>
				</div>

				<div className="d-none d-md-block d-xl-none">
					{items.subject ? <div style={{ textAlign: "left", color: "#000", margin: "-.2rem 0 0 0" }}>{items.subject.length >= 75 ? items.subject.slice(0, 75) : items.subject}</div> : <div>(no subject)</div>}

					<div className="d-flex justify-content-between align-items-center" style={{ margin: "-.38rem 0 0 0" }}>
						<div style={{ textAlign: "left", fontSize: "1.3rem", color: "rgba(0,0,0,0.7)" }}>{items.subject.length < 15 ? `${items.message.slice(0, 110)}` : items.subject.length < 75 ? `${items.message.slice(0, 40)}${items.message && "..."}` : items.subject.length >= 75 ? `${items.message.slice(0, 180)}${items.message && "..."}` : items.message}</div>

						<div className="d-flex align-items-center" onClick={() => setIsStar(items._id)}>
							{isStar === items._id && isStarState ? <MdOutlineStarPurple500 size={25} color="rgb(255, 191, 0)" /> : <MdOutlineStarOutline size={25} color="rgba(0,0,0,.6)" />}
						</div>
					</div>
				</div>

				{items.inboxState && <Unsubscribe messageId={items._id} />}

				{!items.inboxState && <InboxMessageTime className="d-none d-xl-flex">{items.time}</InboxMessageTime>}
			</InboxMessageBodyWrapper>
		</>
	);
};

export default InboxMessageBody;
