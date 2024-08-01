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
	const { isStar, setIsStar } = useInboxState();

	const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	const date = new Date(items.date);
	const month = date.getMonth();
	const day = date.getDate();

	const pastDate = `${months[month]} ${day}`;

	let hours = new Date(items.date).getHours();
	let minutes = new Date(items.date).getMinutes().toString().padStart(2, "0");
	const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const strHours = hours.toString();

	let time;
	new Date().getDate() - day >= 1 ? (time = pastDate) : (time = `${strHours}:${minutes} ${ampm}`);

	return (
		<>
			<InboxMessageBodyWrapper className="ms-xl-5 d-xl-flex">
				<InboxMessageBodyWrapperSubject className="d-none d-xl-flex">
					{!items.inboxState && !settingState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 90) : items.subject}</div> : <div>(no subject)</div>}
							{items.body && <span className="mx-2">-</span>}

							{<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 110)}` : items.subject.length < 75 ? `${items.body.slice(0, 80)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 40)}${items.body && "..."}` : items.body}</div>}
						</>
					)}

					{items.inboxState && !settingState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 85) : items.subject}</div> : <div>(no subject)</div>}
							{items.body && <span className="mx-2">-</span>}
							<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 80)}` : items.subject.length < 75 ? `${items.body.slice(0, 50)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 20)}${items.body && "..."}` : items.body}</div>
						</>
					)}
					{settingState && !items.inboxState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 50) : items.subject}</div> : <div>(no subject)</div>}
							{items.body && <span className="mx-2">-</span>}
							<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 65)}` : items.subject.length < 75 ? `${items.body.slice(0, 28)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 0)}${items.body && "..."}` : items.body}</div>
						</>
					)}

					{settingState && items.inboxState && (
						<>
							{items.subject ? <div style={{ fontWeight: "500" }}>{items.subject.length >= 75 ? items.subject.slice(0, 50) : items.subject}</div> : <div>(no subject)</div>}
							{items.body && <span className="mx-2">-</span>}
							<div style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 38)}` : items.subject.length < 75 ? `${items.body.slice(0, 0)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 0)}${items.body && "..."}` : items.body}</div>
						</>
					)}
				</InboxMessageBodyWrapperSubject>

				<div className="d-block d-xl-none">
					{items.subject ? <div style={{ fontSize: "1.4rem", textAlign: "left" }}>{items.subject.length >= 75 ? items.subject.slice(0, 90) : items.subject}</div> : <div>(no subject)</div>}

					<div className="d-flex justify-content-between align-items-center">
						<div style={{ textAlign: "left" }}>{items.subject.length < 15 ? `${items.body.slice(0, 110)}` : items.subject.length < 75 ? `${items.body.slice(0, 80)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 100)}${items.body && "..."}` : items.body}</div>

						<div className="d-flex align-items-center" onClick={() => setIsStar(items._id)}>
							{isStar === items._id ? <MdOutlineStarPurple500 size={25} color="rgba(207, 179, 19, 0.9)" /> : <MdOutlineStarOutline size={25} color="rgba(0,0,0,0.2)" />}
						</div>
					</div>
				</div>

				{items.inboxState && <Unsubscribe messageId={items._id} />}

				{!items.inboxState && <InboxMessageTime className="d-none d-xl-flex">{time}</InboxMessageTime>}
			</InboxMessageBodyWrapper>
		</>
	);
};

export default InboxMessageBody;
