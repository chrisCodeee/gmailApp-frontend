import { InboxMessageContainer, InboxMessageTime, InboxMessageWrapper } from "../InboxStyles";
import { InboxMessageBody, SelectItemsHover } from "../inboxComponents";
import { InboxSubjectProps } from "../inboxComponents/InboxSubject";
import { InboxMessageBodyProps } from "../inboxComponents/InboxMessageBody";
import { InboxType } from "../../../state-management/useInboxState";
import { RiStarSLine } from "react-icons/ri";
import { Icon } from "../../../components";
import { iconSize } from "../../../components/list/useListParams";

export type InboxMessagePropsCombine = InboxMessageBodyProps & InboxSubjectProps;

interface InboxMessageProps {
	items: InboxMessagePropsCombine & InboxType;
}

const InboxMessages = ({ items }: InboxMessageProps) => {
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
		<InboxMessageContainer className="px-3 px-xl-2" style={{ backgroundColor: items.bgColor }}>
			<InboxMessageWrapper className="d-flex py-xl-1" style={{ padding: ".6rem 0" }}>
				<div className="d-none d-xl-flex">
					<Icon>
						<div className="iconHover" style={{ position: "absolute", left: "-7px", opacity: ".3" }}>
							<SelectItemsHover />
						</div>
						<input id="checkbox" type="checkbox" style={{ height: "17px", width: "17px" }} />
					</Icon>
					<div className="iconStar" style={{ marginLeft: "-13px" }}>
						<Icon>
							<RiStarSLine size={iconSize} />
						</Icon>
					</div>
				</div>

				<div className="d-block d-xl-none me-3">
					<input id="checkbox" type="checkbox" style={{ height: "17px", width: "17px" }} />
				</div>

				<div className="d-flex flex-column flex-xl-row flex-grow-1">
					<div className="d-none d-xl-flex col-xl-2 align-items-center" style={{ fontWeight: "500" }}>
						{items.subject}
					</div>

					<div className="d-flex d-xl-none justify-content-between align-items-center">
						<div className="d-flex col-xl-2 align-items-center" style={{ fontWeight: "600", fontSize: "1.7rem" }}>
							{items.subject}
						</div>
						<InboxMessageTime>{items.time}</InboxMessageTime>
					</div>

					<InboxMessageBody items={items} />
				</div>
			</InboxMessageWrapper>
		</InboxMessageContainer>
	);
};

export default InboxMessages;
