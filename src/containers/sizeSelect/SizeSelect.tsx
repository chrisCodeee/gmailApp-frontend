import { IoCheckmarkSharp } from "react-icons/io5";
import { FontSizeWrapper, FontStyleSelectWrapper } from "../fontStyleSelect/FontStyleStyles";
import { sizes } from "./useSizeSelect";
import { useComposeMessageState } from "../../state-management";

const SizeSelect = () => {
	const { fontSizeIndex, maximizeState, setFontSize, setFontSizeStateOff } = useComposeMessageState();
	return (
		<>
			<FontSizeWrapper onClick={setFontSizeStateOff} maximizeState={maximizeState}>
				{sizes.map((item, index) => (
					<FontStyleSelectWrapper
						key={item.name}
						style={{ fontSize: item.fontSize, padding: item.name === "Huge" ? "0 5rem 0 1.8rem" : "0.5rem 5rem 0.5rem 1.8rem" }}
						onClick={() => {
							setFontSize(item.fontSize, index);
						}}>
						{/* Icon Tick */}
						{index === fontSizeIndex && <IoCheckmarkSharp size={19} />}

						{/* Name of item */}
						<span style={{ paddingLeft: index === fontSizeIndex ? "1.05rem" : "3.05rem", marginTop: item.name === "Huge" ? "-1rem" : "" }}>{item.name}</span>
					</FontStyleSelectWrapper>
				))}
			</FontSizeWrapper>
		</>
	);
};

export default SizeSelect;
