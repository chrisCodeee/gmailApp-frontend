import { useState } from "react";
import { useInboxState } from "../../state-management";
import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";

const Inbox = () => {
	const { inboxState, messages, setInboxStateOn, setInboxStateOff } = useInboxState();
	const [num, setNum] = useState<string>();

	const newInboxMessageDetails = messages.map((items) => (items._id === num ? { ...items, inboxState: inboxState } : items));

	const hover = (index: string) => {
		setNum(index);
	};

	return (
		<InboxContainer>
			{/* Category Labels */}

			<InboxCategoryContainer />

			{/* Messages */}
			{newInboxMessageDetails.map((items: any) => (
				<div
					key={items._id}
					onMouseOver={() => {
						hover(items._id);
						setInboxStateOn();
					}}
					onMouseLeave={setInboxStateOff}>
					<InboxMessages items={items} />
				</div>
			))}
		</InboxContainer>
	);
};

export default Inbox;
