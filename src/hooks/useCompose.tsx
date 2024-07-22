import { useNavBarState, useInboxState, useComposeMessageState } from "../state-management";

const useCompose = () => {
	const { setShowMoreStateOff, setAccountProfileStateOff, setSupportStateOff, setGoogleAppStateOff } = useNavBarState();

	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff, setSelectInputToolStateOff } = useInboxState();
	const useComposeMessage = useComposeMessageState();

	const closeAllState = () => {
		setShowMoreStateOff();
		setAccountProfileStateOff();
		setSupportStateOff();
		setGoogleAppStateOff();
		setSelectInputToolStateOff();
		setMarkAllMessageReadStateOff();
		setSelectMessageTypeStateOff();
	};

	const closeFormmating = () => {
		useComposeMessage.setMoreFormattingOptioneStateOff();
		useComposeMessage.setAlignFormattingOptioneStateOff();
		useComposeMessage.setColorStateOff();
		useComposeMessage.setMoreOptionOff();
		useComposeMessage.setMoreLabelOptionOff();
		useComposeMessage.setMoreOptionTimeAndDateOff();
	};

	const closeFormattingStylesOption = () => {
		useComposeMessage.setMoreFormattingOptioneStateOff();
		useComposeMessage.setFontStyleStateOff();
		useComposeMessage.setFontSizeStateOff();
		useComposeMessage.setInsertSignatureOff();
		useComposeMessage.setScheduleSendOff();
	};

	const insertCloseFormatting = () => {
		closeFormmating();
		useComposeMessage.setFontStyleStateOff();
		useComposeMessage.setFontSizeStateOff();
	};

	const closeFormattingOption = () => {
		insertCloseFormatting();
		useComposeMessage.setInsertSignatureOff();
	};

	const fontSizeFormattingOption = () => {
		closeFormmating();
		useComposeMessage.setFontSizeStateOn();
		useComposeMessage.setFontStyleStateOff();
		useComposeMessage.setInsertSignatureOff();
		useComposeMessage.setScheduleSendOff();
	};

	const fontStyleFormattingOption = () => {
		closeFormmating();
		useComposeMessage.setFontStyleStateOn();
		useComposeMessage.setFontSizeStateOff();
		useComposeMessage.setInsertSignatureOff();
		useComposeMessage.setScheduleSendOff();
	};

	const removeFormat = () => {
		useComposeMessage.setBoldStateOff();
		useComposeMessage.setItalicStateOff();
		useComposeMessage.setUnderlineStateOff();
		useComposeMessage.setFontSizeOff();
		useComposeMessage.setBgColorOff();
		useComposeMessage.setColorOff();
		useComposeMessage.setAlignSelectStateOff();
		useComposeMessage.setBulletListOff();
		useComposeMessage.setNumberListOff();
		useComposeMessage.setStrikethroughStateOff();
		useComposeMessage.setIndexTextOff();
	};

	const textAreaStyle = {
		fontFamilySelect: useComposeMessage.fontFamilyStyle,
		fontSizeSelect: useComposeMessage.fontSize,
		fontStyleSelect: useComposeMessage.fontStyleState,
		boldSelect: useComposeMessage.boldState,
		italicSelect: useComposeMessage.italicState,
		underlineSelect: useComposeMessage.underlineState,
		colorSelect: useComposeMessage.color,
		align: useComposeMessage.alignText,
		listStyleList: useComposeMessage.numberList,
		listStyleBullet: useComposeMessage.bulletList,
		strikeThrough: useComposeMessage.strikethroughState,
		indentTextValue: useComposeMessage.indentText,
		listType: useComposeMessage.listType,
	};
	return { textAreaStyle, closeAllState, closeFormattingOption, closeFormattingStylesOption, fontSizeFormattingOption, fontStyleFormattingOption, removeFormat, insertCloseFormatting, useComposeMessage };
};

export default useCompose;
