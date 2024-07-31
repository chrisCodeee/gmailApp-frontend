import { Unsubscribe } from ".";
import { useNavBarState } from "../../../state-management";
import { InboxType } from "../../../state-management/useInboxState";
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
			<InboxMessageBodyWrapper>
				<InboxMessageBodyWrapperSubject>
					{!items.inboxState && !settingState && (
						<>
							{items.subject ? <h4>{items.subject.length >= 75 ? items.subject.slice(0, 90) : items.subject}</h4> : <h4>(no subject)</h4>}
							{items.body && <span className="mx-2">-</span>}

							{<h4 style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 110)}` : items.subject.length < 75 ? `${items.body.slice(0, 80)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 40)}${items.body && "..."}` : items.body}</h4>}
						</>
					)}

					{items.inboxState && !settingState && (
						<>
							{items.subject ? <h4>{items.subject.length >= 75 ? items.subject.slice(0, 85) : items.subject}</h4> : <h4>(no subject)</h4>}
							{items.body && <span className="mx-2">-</span>}
							<h4 style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 80)}` : items.subject.length < 75 ? `${items.body.slice(0, 50)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 20)}${items.body && "..."}` : items.body}</h4>
						</>
					)}
					{settingState && !items.inboxState && (
						<>
							{items.subject ? <h4>{items.subject.length >= 75 ? items.subject.slice(0, 50) : items.subject}</h4> : <h4>(no subject)</h4>}
							{items.body && <span className="mx-2">-</span>}
							<h4 style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 65)}` : items.subject.length < 75 ? `${items.body.slice(0, 28)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 0)}${items.body && "..."}` : items.body}</h4>
						</>
					)}

					{settingState && items.inboxState && (
						<>
							{items.subject ? <h4>{items.subject.length >= 75 ? items.subject.slice(0, 50) : items.subject}</h4> : <h4>(no subject)</h4>}
							{items.body && <span className="mx-2">-</span>}
							<h4 style={{ fontWeight: "400" }}>{items.subject.length < 15 ? `${items.body.slice(0, 38)}` : items.subject.length < 75 ? `${items.body.slice(0, 0)}${items.body && "..."}` : items.subject.length >= 75 ? `${items.body.slice(0, 0)}${items.body && "..."}` : items.body}</h4>
						</>
					)}
				</InboxMessageBodyWrapperSubject>

				{items.inboxState && <Unsubscribe messageId={items._id} />}

				{!items.inboxState && <InboxMessageTime>{time}</InboxMessageTime>}
			</InboxMessageBodyWrapper>
		</>
	);
};

export default InboxMessageBody;
