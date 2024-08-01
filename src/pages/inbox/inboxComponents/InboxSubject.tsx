import { InboxSubjectWrapper } from "../InboxStyles";

export interface InboxSubjectProps {
	sender: string;
}

const InboxSubject = ({ sender }: InboxSubjectProps) => {
	return (
		<>
			<InboxSubjectWrapper>
				<h4>{sender}</h4>
			</InboxSubjectWrapper>
		</>
	);
};

export default InboxSubject;
