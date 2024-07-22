import { MdInbox } from "react-icons/md";
import { PrimaryIconWrapper, PrimaryHeading, CategoryLabelWrapper } from "../InboxStyles";
import { iconSize } from "../../../components/list/useListParams";
import { useInboxState } from "../../../state-management";

const PrimaryCategory = () => {
	const { primaryActive } = useInboxState();
	return (
		<>
			<CategoryLabelWrapper className={`col ${primaryActive ? "active" : ""}`}>
				<PrimaryIconWrapper>
					<div className="ps-3">
						<MdInbox size={iconSize} />
					</div>
					<PrimaryHeading>Primary</PrimaryHeading>
				</PrimaryIconWrapper>
			</CategoryLabelWrapper>
		</>
	);
};

export default PrimaryCategory;
