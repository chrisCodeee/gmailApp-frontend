import { FaPlus } from "react-icons/fa6";
import { Calender, Contacts, Keep, Tasks } from "../../assets";
import { Icon } from "../../components";
import { iconSize } from "../../components/list/useListParams";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAsideState } from "../../state-management";
import { IconContainer, ImageIconWrapper, RightSideBarWrapper, RightSideIconWrapper } from "./RIghtSideBarStyles";

const RightSideBar = () => {
	const rightAsideIcons = [
		{ src: Calender, alt: "Calender" },
		{ src: Keep, alt: "Keep" },
		{ src: Tasks, alt: "Tasks" },
		{ src: Contacts, alt: "Contacts" },
	];

	const { showRightSideState, setShowRIghtSideStateOff } = useAsideState();
	return (
		<>
			{showRightSideState && (
				<RightSideBarWrapper>
					<RightSideIconWrapper>
						{rightAsideIcons.map(({ src, alt }) => (
							<IconContainer key={alt} title={alt}>
								<Icon>
									<ImageIconWrapper src={src} alt={alt} />
								</Icon>
							</IconContainer>
						))}

						<IconContainer style={{ marginTop: "5rem" }} title="Get Add-ons">
							<Icon>
								<FaPlus size={iconSize} fontWeight="bold" />
							</Icon>
						</IconContainer>
					</RightSideIconWrapper>

					<div style={{ marginBottom: "-0.7rem" }} onClick={setShowRIghtSideStateOff} title="Hide side panel">
						<Icon>
							<MdKeyboardArrowRight size={iconSize} />
						</Icon>
					</div>
				</RightSideBarWrapper>
			)}
		</>
	);
};

export default RightSideBar;
