import { IoClose } from "react-icons/io5";
import { BtnSecondary, Icon } from "../../components";
import { useAsideState } from "../../state-management";
import { useState } from "react";
import { BtnCreateLabel, CreateLabelModalWrapper, LabelContainer, ModalBtnWrapper, ModalContainer, NestLabelContainer, NestWrapper, NewLabelWrapper } from "./CreateLabelModalStyle";

const CreateLabelModal = () => {
	const { setCreateLabelStateOff } = useAsideState();

	const [nestChecked, setNestChecked] = useState(false);

	const [label, setLabel] = useState<string>();
	const [labelName, setLabelName] = useState<string>("Please enter a new label name");

	const checkLabel = () => {
		label === "" ? setLabelName("No name specified. Please try another name") : alert("Successfully created label");
	};

	return (
		<>
			<CreateLabelModalWrapper>
				<ModalContainer className="col-4">
					<LabelContainer>
						<span>New label</span>
						<div onClick={setCreateLabelStateOff} title="Close">
							<Icon>
								<IoClose size={25} />
							</Icon>
						</div>
					</LabelContainer>

					<NewLabelWrapper>
						<label htmlFor="labelName">{labelName}:</label>

						<input type="text" id="labelName" value={label} onChange={(e) => setLabel(e.target.value)} autoFocus />
					</NewLabelWrapper>

					<NestWrapper>
						<NestLabelContainer onClick={() => setNestChecked(!nestChecked)}>
							<input type="checkbox" checked={nestChecked} />
							<label>Nest label under:</label>
						</NestLabelContainer>

						<select>
							<option value="">{nestChecked && "Please select a parent..."}</option>
						</select>
					</NestWrapper>

					<ModalBtnWrapper>
						<div onClick={setCreateLabelStateOff}>
							<BtnSecondary name="Cancel" borderRadius="30px" />
						</div>
						<div>
							<BtnCreateLabel disabled={nestChecked} nestChecked={nestChecked} onClick={checkLabel}>
								Create
							</BtnCreateLabel>
						</div>
					</ModalBtnWrapper>
				</ModalContainer>
			</CreateLabelModalWrapper>
		</>
	);
};

export default CreateLabelModal;
