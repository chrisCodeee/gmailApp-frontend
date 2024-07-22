import { IoSearchSharp } from "react-icons/io5";
import { useCompose } from "../../../hooks";
import * as MoreLabelOptionStyle from "./SubMoreOptionsStyles";
import { RiStarSLine } from "react-icons/ri";
import { useAsideState } from "../../../state-management";

const MoreLabelOption = () => {
	const { useComposeMessage } = useCompose();
	const { setCreateLabelStateOn } = useAsideState();

	const categoryCheckList = ["Social", "Updates", "Forums", "Promotions"];
	return (
		<>
			<MoreLabelOptionStyle.MoreLabelOptionWrapper $maximizeState={useComposeMessage.maximizeState.toString()} onMouseEnter={useComposeMessage.setMoreLabelOptionOn}>
				<MoreLabelOptionStyle.MoreLabelContainer>
					<label>Label as:</label>
					<div className="inputContainer">
						<input type="text" autoFocus />
						<div className="iconContainer">
							<IoSearchSharp size={17} />
						</div>
					</div>
				</MoreLabelOptionStyle.MoreLabelContainer>

				<MoreLabelOptionStyle.MoreOptionCategoryContainer
					onClick={() => {
						useComposeMessage.setMoreLabelOptionOff();
						useComposeMessage.setMoreOptionOff();
					}}>
					{categoryCheckList.map((items) => (
						<MoreLabelOptionStyle.CheckBoxWrapper key={items}>
							<input type="checkbox" id={items} />
							<label htmlFor={items}>{items}</label>
						</MoreLabelOptionStyle.CheckBoxWrapper>
					))}
				</MoreLabelOptionStyle.MoreOptionCategoryContainer>

				<MoreLabelOptionStyle.AddStarContainer
					onClick={() => {
						useComposeMessage.setMoreLabelOptionOff();
						useComposeMessage.setMoreOptionOff();
					}}>
					<MoreLabelOptionStyle.AddStarWrapper>
						<RiStarSLine size={20} />
						<div className="">Add star</div>
					</MoreLabelOptionStyle.AddStarWrapper>
				</MoreLabelOptionStyle.AddStarContainer>

				<MoreLabelOptionStyle.CreateAndManageLabelWrapper
					onClick={() => {
						useComposeMessage.setMoreLabelOptionOff();
						useComposeMessage.setMoreOptionOff();
					}}>
					<div onClick={setCreateLabelStateOn}>Create new</div>
					<div>Manage labels</div>
				</MoreLabelOptionStyle.CreateAndManageLabelWrapper>
			</MoreLabelOptionStyle.MoreLabelOptionWrapper>
		</>
	);
};

export default MoreLabelOption;
