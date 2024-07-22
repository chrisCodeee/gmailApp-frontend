import { Badge } from "../../../components";
import { ReactNode } from "react";
import { CategoryLabelWrapper, PrimaryIconWrapper } from "../InboxStyles";
import { useInboxState } from "../../../state-management";

type CategoryItems = {
	icon: ReactNode;
	heading: string;
	count: string; //Change to number later
	bgColor: string;
	subHeading: string;
	padding: string;
};

interface CategoryProps {
	items: CategoryItems;
}

const CategoryLabel = ({ items }: CategoryProps) => {
	const { setPrimaryActiveOff } = useInboxState();
	return (
		<>
			<CategoryLabelWrapper className={`col pt-3 ${items.padding} `} onClick={setPrimaryActiveOff}>
				<PrimaryIconWrapper>
					<span className="ps-3">{items.icon}</span>
					<div className="ms-4">
						<div className="d-flex align-items-center">
							<h4 className="me-3 mb-0">{items.heading}</h4>
							<Badge count={items.count} bgColor={items.bgColor} />
						</div>
						<span className="span" style={{ fontSize: "1.2rem", color: "grey" }}>
							{items.subHeading}
						</span>
					</div>
				</PrimaryIconWrapper>
			</CategoryLabelWrapper>
		</>
	);
};

export default CategoryLabel;
