import { useState } from "react";
import { useInboxState } from "../../state-management";
import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";
import { InboxMessagePropsCombine } from "./inboxContainers/InboxMessages";
import { inboxMessageDetails } from "./useInboxParams";

const Inbox = () => {
	const { inboxState, setInboxStateOn, setInboxStateOff } = useInboxState();
	const [num, setNum] = useState<number>();

	const newInboxMessageDetails = inboxMessageDetails.map((items) => (items.id === num ? { ...items, inboxState: inboxState } : items));

	const hover = (index: number) => {
		setNum(index);
	};
	return (
		<InboxContainer>
			{/* Category Labels */}

			<InboxCategoryContainer />

			{/* Messages */}
			{newInboxMessageDetails.map((items: InboxMessagePropsCombine, index) => (
				<div
					key={items.id}
					onMouseOver={() => {
						hover(index + 1);
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
