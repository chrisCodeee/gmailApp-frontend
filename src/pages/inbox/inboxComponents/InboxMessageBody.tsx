import { Unsubscribe } from ".";
import { useNavBarState } from "../../../state-management";
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
	items: InboxMessageBodyProps;
}

const InboxMessageBody = ({ items }: InboxMessageBodyParams) => {
	// const { inboxState } = useInboxState();
	const { settingState } = useNavBarState();

	let message;
	if (items.heading.concat(items.message).length > 50 && items.heading.concat(items.message).length < 130) {
		message = items.heading.concat(items.message).slice(0, 1);
	} else if (items.heading.concat(items.message).length > 137) {
		message = items.heading.concat(items.message).slice(0, 35);
	} else if (items.heading.concat(items.message).length > 75 && items.heading.concat(items.message).length <= 130) {
		message = items.heading.concat(items.message).slice(0, 64);
	} else {
		message = items.heading.concat(...items.message);
	}

	let messageHover;
	if (items.heading.concat(items.message).length > 50 && items.heading.concat(items.message).length < 130) {
		messageHover = items.heading.concat(items.message).slice(0, 46);
	} else if (items.heading.concat(items.message).length > 137) {
		messageHover = items.heading.concat(items.message).slice(0, 10);
	} else if (items.heading.concat(items.message).length > 75 && items.heading.concat(items.message).length <= 130) {
		messageHover = message.slice(0, 0);
	} else {
		// messageHover = items.heading.concat(...items.message);
	}

	return (
		<>
			<InboxMessageBodyWrapper>
				<InboxMessageBodyWrapperSubject>
					{!items.inboxState && <h4>{items.heading} &nbsp;</h4>}

					{settingState && (
						<h4 className="me-5" style={{ fontWeight: "400" }}>
							{/* {items.heading.concat(...items.message).slice(0, 2)}.. */}
							{message}...
						</h4>
					)}

					{settingState && items.inboxState && (
						<h4 style={{ fontWeight: "400" }}>
							{/* {items.heading.concat(...items.message).slice(0, 28)}.. */}
							{messageHover}...
						</h4>
					)}

					{!items.inboxState && !settingState && <h4 style={{ fontWeight: "400" }}>{items.message.length > 75 ? items.message.slice(0, 80) : items.message}...</h4>}

					{items.inboxState && !settingState && <h4 style={{ fontWeight: "400" }}>{items.heading.concat(...items.message).slice(0, 97)}...</h4>}
				</InboxMessageBodyWrapperSubject>

				{items.inboxState && <Unsubscribe />}
				{/* <div className="show">
					<Unsubscribe />
				</div> */}
				{!items.inboxState && <InboxMessageTime>{items.time}</InboxMessageTime>}
			</InboxMessageBodyWrapper>
		</>
	);
};

export default InboxMessageBody;
