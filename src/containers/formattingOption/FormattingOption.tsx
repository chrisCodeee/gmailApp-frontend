import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { FormatIcon } from "../compose/component";
import { formatIconSize } from "../compose/component/ComposeFormatIcon";
import * as MdFormatIcon from "react-icons/md";
import { AiOutlineBold } from "react-icons/ai";
import * as FormattingOptionStyles from "./FormattingOptionStyle";
import FullFormatingOption from "./FullFormatingOption";
import { Formatting } from "./subFormattingOption";
import { useCompose } from "../../hooks";

const FormattingOption = () => {
	const { closeFormattingStylesOption, fontSizeFormattingOption, fontStyleFormattingOption, useComposeMessage } = useCompose();

	return (
		<>
			<FormattingOptionStyles.FormattingOptionWrapper maximizestate={useComposeMessage.maximizeState} onClick={useComposeMessage.setScheduleSendOff}>
				<FormattingOptionStyles.FormattingOptionContainer maximizestate={useComposeMessage.maximizeState}>
					<FormattingOptionStyles.FormatFlexContainer
						style={{ marginLeft: "3.5px" }}
						onClick={() => {
							closeFormattingStylesOption();
							useComposeMessage.setAlignFormattingOptioneStateOff();
						}}>
						<div onClick={useComposeMessage.setNotActiveOn}>
							<Formatting title="Undo (Ctrl-Z)" icon={<LuUndo2 size={formatIconSize} />} />
						</div>

						<div onClick={useComposeMessage.setNotActiveOn}>
							<Formatting title="Redo (Ctrl-Y)" icon={<LuRedo2 size={formatIconSize} />} />
						</div>
					</FormattingOptionStyles.FormatFlexContainer>

					<FormattingOptionStyles.FormatDivider>&nbsp;</FormattingOptionStyles.FormatDivider>

					<FormattingOptionStyles.FormatFlexContainer onClick={fontStyleFormattingOption}>
						<FormatIcon title="Font (Ctrl-Shift-5, Ctrl-Shift-6)" padding="0.4rem 0 0.4rem 0.4rem" margin="0">
							<FormattingOptionStyles.FormatFlexContainer style={{ width: "100px" }}>
								<span style={{ marginRight: "8px" }}>{useComposeMessage.fontStyle ? useComposeMessage.fontStyle : "Sans Serif"}</span>

								<MdFormatIcon.MdArrowDropDown size={formatIconSize} />
							</FormattingOptionStyles.FormatFlexContainer>
						</FormatIcon>
					</FormattingOptionStyles.FormatFlexContainer>

					<FormattingOptionStyles.FormatDivider>&nbsp;</FormattingOptionStyles.FormatDivider>

					<FormattingOptionStyles.FormatFlexContainer onClick={fontSizeFormattingOption}>
						<FormatIcon title="Size (Ctrl-Shift--, Ctrl-Shift-+)" padding="0.4rem 0 0.4rem 0.4rem" margin="0">
							<FormattingOptionStyles.FormatFlexContainer>
								<MdFormatIcon.MdFormatSize size={20} />

								<MdFormatIcon.MdArrowDropDown size={formatIconSize} />
							</FormattingOptionStyles.FormatFlexContainer>
						</FormatIcon>
					</FormattingOptionStyles.FormatFlexContainer>

					<FormattingOptionStyles.FormatDivider>&nbsp;</FormattingOptionStyles.FormatDivider>

					<FormattingOptionStyles.FormatFlexContainer
						onClick={() => {
							closeFormattingStylesOption();
							useComposeMessage.setAlignFormattingOptioneStateOff();
							useComposeMessage.setMoreOptionOff();
						}}>
						<div
							onClick={() => {
								useComposeMessage.setBoldStateOn();
								useComposeMessage.setColorStateOff();
							}}>
							<Formatting title="Bold (Ctrl-B)" icon={<AiOutlineBold size={formatIconSize} />} />
						</div>

						<div
							onClick={() => {
								useComposeMessage.setItalicStateOn();
								useComposeMessage.setColorStateOff();
							}}>
							<Formatting title="Italic (Ctrl-I)" icon={<MdFormatIcon.MdFormatItalic size={21} />} />
						</div>

						<div
							onClick={() => {
								useComposeMessage.setUnderlineStateOn();
								useComposeMessage.setColorStateOff();
							}}>
							<Formatting title="Underline (Ctrl-U)" icon={<MdFormatIcon.MdFormatUnderlined size={21} />} />
						</div>

						<div onClick={useComposeMessage.setColorStateOn}>
							<FormatIcon title="Text color" padding="0.4rem 0 0.4rem 0.4rem">
								<FormattingOptionStyles.FormatFlexContainer>
									<MdFormatIcon.MdFormatColorText size={16} />
									<MdFormatIcon.MdArrowDropDown size={formatIconSize} />
								</FormattingOptionStyles.FormatFlexContainer>
							</FormatIcon>
						</div>
					</FormattingOptionStyles.FormatFlexContainer>

					<FormattingOptionStyles.FormatDivider>&nbsp;</FormattingOptionStyles.FormatDivider>

					<FormattingOptionStyles.FormatFlexContainer
						onClick={() => {
							closeFormattingStylesOption();
							useComposeMessage.setColorStateOff();
							useComposeMessage.setMoreOptionOff();
						}}>
						<div onClick={useComposeMessage.setAlignFormattingOptioneStateOn}>
							<FormatIcon title="Align" padding="0.4rem 0 0.4rem 0.4rem">
								<FormattingOptionStyles.FormatFlexContainer>
									{useComposeMessage.alignTextSelectIcon ? useComposeMessage.alignTextSelectIcon : <MdFormatIcon.MdOutlineFormatAlignLeft size={formatIconSize} />}
									<MdFormatIcon.MdArrowDropDown size={formatIconSize} />
								</FormattingOptionStyles.FormatFlexContainer>
							</FormatIcon>
						</div>

						<div className="d-flex" onClick={useComposeMessage.setAlignFormattingOptioneStateOff}>
							<div
								onClick={() => {
									useComposeMessage.setNumberList("decimal");
									useComposeMessage.setBulletListOff();
								}}>
								<Formatting title="Numbered list (Ctrl-Shift-7)" icon={<MdFormatIcon.MdFormatListNumbered size={20} />} />
							</div>
							<div
								onClick={() => {
									useComposeMessage.setBulletList("disc");
									useComposeMessage.setNumberListOff();
								}}>
								<Formatting title="Bulleted list (Ctrl-Shift-8)" icon={<MdFormatIcon.MdFormatListBulleted size={20} />} />
							</div>
						</div>

						{useComposeMessage.maximizeState && <FullFormatingOption />}
					</FormattingOptionStyles.FormatFlexContainer>

					{!useComposeMessage.maximizeState && (
						<>
							<FormattingOptionStyles.FormatDivider>&nbsp;</FormattingOptionStyles.FormatDivider>
							<div
								onClick={() => {
									useComposeMessage.setMoreFormattingOptioneStateOn();
									useComposeMessage.setFontStyleStateOff();
									useComposeMessage.setFontSizeStateOff();
									useComposeMessage.setColorStateOff();
									useComposeMessage.setAlignFormattingOptioneStateOff();
									useComposeMessage.setMoreOptionOff();
								}}>
								<FormatIcon title="More formatting options" padding="0.4rem 0.15rem">
									<MdFormatIcon.MdArrowDropDown size={formatIconSize} />
								</FormatIcon>
							</div>
						</>
					)}
				</FormattingOptionStyles.FormattingOptionContainer>
			</FormattingOptionStyles.FormattingOptionWrapper>
		</>
	);
};

export default FormattingOption;
