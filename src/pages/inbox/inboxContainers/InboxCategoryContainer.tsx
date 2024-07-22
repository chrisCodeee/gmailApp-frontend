import { MdOutlinePeopleOutline } from "react-icons/md";
import { PiTag } from "react-icons/pi";
import { iconSize } from "../../../components/list/useListParams";
import { CategoryContainer, Container } from "../InboxStyles";
import { CategoryLabel, PrimaryCategory } from "../inboxComponents";

const InboxCategoryContainer = () => {
	const promotion = {
		icon: <PiTag size={iconSize} />,
		heading: "Promotions",
		count: "3",
		bgColor: "#188038",
		subHeading: "Adobe Acrobat, Course Hero, S..",
		padding: "pb-2",
	};

	const social = {
		icon: <MdOutlinePeopleOutline size={iconSize} />,
		heading: "Social",
		count: "1",
		bgColor: "#0b57d0",
		subHeading: "X (Formerly Twitter), Linkedln",
		padding: "pe-0 ",
	};

	return (
		<>
			<CategoryContainer>
				<Container>
					{/* Primary */}
					<PrimaryCategory />

					{/* Promotions */}

					<CategoryLabel items={promotion} />

					{/* Social */}
					<CategoryLabel items={social} />
				</Container>
			</CategoryContainer>
		</>
	);
};

export default InboxCategoryContainer;
