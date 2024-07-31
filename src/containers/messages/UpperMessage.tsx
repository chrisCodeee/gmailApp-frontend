import { IoMdMore } from "react-icons/io";
import { MdArrowDropDown, MdOutlineRefresh, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BiSolidKeyboard } from "react-icons/bi";
import { Icon } from "../../components";
import { FlexWrapper, FlexWrapperArrow, FlexWrapperCheckbox, MessageCount, UpperMessageWrapper } from "./MessageStyles";
import { useInboxState } from "../../state-management";
import { useState } from "react";

export const upperIconSize = 19;

const UpperMessage = () => {
	const refreshPage = () => {
		window.location.reload();
	};

	const [inputCheckboxState, setInputCheckboxState] = useState(false);

	const { setSelectMesssageTypeStateOn, setSelectMessageTypeStateOff, setMarkAllMessageReadStateOn, setMarkAllMessageReadStateOff, setSelectInputToolStateOn, setSelectInputToolStateOff, messages } = useInboxState();
	return (
		<>
			<UpperMessageWrapper className="d-none d-xl-flex">
				<FlexWrapper>
					<FlexWrapper>
						<FlexWrapperCheckbox title="Select" onClick={() => setInputCheckboxState(!inputCheckboxState)}>
							<input type="checkbox" checked={inputCheckboxState} onChange={() => setInputCheckboxState(!inputCheckboxState)} />
						</FlexWrapperCheckbox>
						<FlexWrapperArrow
							title="Select"
							onClick={() => {
								setSelectMesssageTypeStateOn();
								setMarkAllMessageReadStateOff();
								setSelectInputToolStateOff();
							}}>
							<span className="d-flex">
								<MdArrowDropDown size={upperIconSize} />
							</span>
						</FlexWrapperArrow>
					</FlexWrapper>

					<div onClick={() => refreshPage()}>
						<Icon>
							<MdOutlineRefresh size={upperIconSize} />
						</Icon>
					</div>

					<div
						title="More"
						onClick={() => {
							setMarkAllMessageReadStateOn();
							setSelectMessageTypeStateOff();
							setSelectInputToolStateOff();
						}}>
						<Icon>
							<IoMdMore size={upperIconSize} />
						</Icon>
					</div>
				</FlexWrapper>

				<FlexWrapper>
					<MessageCount>
						{/* {inboxMessageDetails.length - (inboxMessageDetails.length - 1)}-{inboxMessageDetails.length} of {inboxMessageDetails.length + inboxMessageDetailsPage2.length} */}
						1&ndash;{messages.length} of {messages.length}
					</MessageCount>
					<div title="Newer">
						<Icon>
							<MdKeyboardArrowLeft size={upperIconSize} />
						</Icon>
					</div>
					<div title="Older">
						<Icon>
							<MdKeyboardArrowRight size={upperIconSize} />
						</Icon>
					</div>
					<FlexWrapper>
						<FlexWrapperCheckbox title="Input tools on/off (Ctrl-Shift-K)">
							<BiSolidKeyboard size={upperIconSize} />
						</FlexWrapperCheckbox>
						<FlexWrapperArrow
							title="Select input tool"
							onClick={() => {
								setSelectInputToolStateOn();
								setSelectMessageTypeStateOff();
								setMarkAllMessageReadStateOff();
							}}>
							<span className="d-flex">
								<MdArrowDropDown size={upperIconSize} />
							</span>
						</FlexWrapperArrow>
					</FlexWrapper>
				</FlexWrapper>
			</UpperMessageWrapper>
		</>
	);
};

export default UpperMessage;
