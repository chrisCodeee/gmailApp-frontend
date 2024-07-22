import { useComposeMessageState } from "../../state-management";
import ColorSelectContainer from "./ColorSelectContainer";
import { ColorSelectWrapper } from "./ColorSelectStyle";

const ColorSelect = () => {
	const { maximizeState, setBgColor, setColor, formatBgColorSelectState, formatColorSelectState } = useComposeMessageState();
	return (
		<>
			<ColorSelectWrapper maximizeState={maximizeState}>
				{/* Background color select */}
				<ColorSelectContainer heading="Background color" margin="1.5rem" setColorFunc={setBgColor} colorSelect={formatBgColorSelectState} />

				{/* Text color select */}
				<ColorSelectContainer heading="Text color" setColorFunc={setColor} colorSelect={formatColorSelectState} />
			</ColorSelectWrapper>
		</>
	);
};

export default ColorSelect;
