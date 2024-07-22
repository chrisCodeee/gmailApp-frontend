import { IoCheckmarkSharp } from "react-icons/io5";
import { useComposeMessageState } from "../../state-management";
import { FontStyleSelectWrapper, FontStyleWrapper } from "./FontStyleStyles";
import useFontStyles from "./useFontStyles";

const FontStyle = () => {
	const { maximizeState, tick, setFontStyleStateOff, setFontStyle } = useComposeMessageState();
	const { fontStyles } = useFontStyles();

	return (
		<>
			<FontStyleWrapper onClick={setFontStyleStateOff} maximizeState={maximizeState}>
				{fontStyles.map((item, index) => (
					<FontStyleSelectWrapper
						key={item.name}
						style={{ fontFamily: item.fontFamily }}
						onClick={() => {
							setFontStyle(item.displayName, item.fontFamily, index);
						}}>
						{index === tick && <IoCheckmarkSharp size={19} />}
						<span style={{ paddingLeft: index === tick ? "1.05rem" : "3.05rem" }}>{item.name}</span>
					</FontStyleSelectWrapper>
				))}
			</FontStyleWrapper>
		</>
	);
};

export default FontStyle;
