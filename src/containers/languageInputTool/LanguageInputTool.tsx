import { BiSolidKeyboard } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import { RiEnglishInput } from "react-icons/ri";
import { InputToolSettingsWrapper, InputWrapper, LanguageInputContainer, LanguageInputToolWrapper } from "./LanguageInputToolStyle";
import { useNavBarState } from "../../state-management";

const LanguageInputTool = () => {
	const { settingState } = useNavBarState();
	const iconStyles = {
		size: 17,
		color: "rgba(0,0,0,.5)",
	};

	const languageInputList = [
		{ icon: <BiSolidKeyboard size={iconStyles.size} color={iconStyles.color} />, name: "English" },
		{ icon: <BiSolidKeyboard size={iconStyles.size} color={iconStyles.color} />, name: "English  Dvorak" },
		{ icon: <RiEnglishInput size={iconStyles.size} color={iconStyles.color} />, name: "English" },
		{ icon: <HiPencil size={iconStyles.size} color={iconStyles.color} />, name: "English" },
	];

	return (
		<>
			<LanguageInputToolWrapper style={{ right: settingState ? "400px" : "73px" }}>
				<LanguageInputContainer>
					{languageInputList.map((items) => (
						<InputWrapper key={items.name}>
							<div>{items.icon}</div>
							<span className="ms-3">{items.name}</span>
						</InputWrapper>
					))}
				</LanguageInputContainer>

				<InputToolSettingsWrapper>Input Tools Settings</InputToolSettingsWrapper>
			</LanguageInputToolWrapper>
		</>
	);
};

export default LanguageInputTool;
