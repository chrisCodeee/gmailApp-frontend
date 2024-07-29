import { InboxMessageContainer, InboxMessageWrapper } from "../InboxStyles";
import { InboxMessageBody, InboxSubject } from "../inboxComponents";
import { InboxSubjectProps } from "../inboxComponents/InboxSubject";
import { InboxMessageBodyProps } from "../inboxComponents/InboxMessageBody";
import { InboxType } from "../../../state-management/useInboxState";

export type InboxMessagePropsCombine = InboxMessageBodyProps & InboxSubjectProps;

interface InboxMessageProps {
	items: InboxMessagePropsCombine & InboxType;
}

const InboxMessages = ({ items }: InboxMessageProps) => {
	return (
		<InboxMessageContainer style={{ backgroundColor: items.bgColor }}>
			<InboxMessageWrapper>
				<InboxSubject sender={items.sender} />
				<InboxMessageBody items={items} />
			</InboxMessageWrapper>
		</InboxMessageContainer>
	);
};

export default InboxMessages;
