import { RiStarSLine } from "react-icons/ri";
import { SelectItemsHover } from ".";
import { Icon } from "../../../components";
import { iconSize } from "../../../components/list/useListParams";
import { InboxSubjectWrapper } from "../InboxStyles";

export interface InboxSubjectProps {
	subject: string;
}

const InboxSubject = ({ subject }: InboxSubjectProps) => {
	return (
		<>
			<InboxSubjectWrapper>
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

				<h4>{subject}</h4>
			</InboxSubjectWrapper>
		</>
	);
};

export default InboxSubject;
