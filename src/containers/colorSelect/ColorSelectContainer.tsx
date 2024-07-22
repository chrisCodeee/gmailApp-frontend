import { useComposeMessageState } from "../../state-management";
import { ColorSelectFlexWrapper, ColorWrapper } from "./ColorSelectStyle";
import { colorRow1, colorRow2 } from "./useColorSelect";
import { GiCheckMark } from "react-icons/gi";

interface Props {
	heading: string;
	margin?: string;
	setColorFunc: (color: string) => void;
	colorSelect: string;
}

const ColorSelectContainer = ({ heading, margin, setColorFunc, colorSelect }: Props) => {
	const { setColorStateOff } = useComposeMessageState();

	return (
		<div className="col" style={{ marginRight: margin }} onClick={setColorStateOff}>
			<div className="mb-3">{heading}</div>
			<ColorSelectFlexWrapper>
				{colorRow1.map((item) => (
					<>
						<ColorWrapper
							key={item.title}
							title={item.title}
							bgColor={item.color}
							margin="0 0 1rem 0"
							style={{ outline: colorSelect === item.color ? "1px solid #000" : "", outlineOffset: colorSelect === item.color ? "0.8px" : "" }}
							onClick={() => {
								setColorFunc(item.color);
							}}>
							{colorSelect === item.color && (
								<div className="d-flex">
									<GiCheckMark size={12} color={item.iconColor ? item.iconColor : "#fff"} />
								</div>
							)}
						</ColorWrapper>
					</>
				))}
			</ColorSelectFlexWrapper>

			<ColorSelectFlexWrapper style={{ marginTop: "-0.25rem" }}>
				{colorRow2.map((item) => (
					<ColorWrapper key={item.title} title={item.title} bgColor={item.color} margin="0 0 0.2rem 0" style={{ outline: colorSelect === item.color ? "1px solid #000" : "", outlineOffset: colorSelect === item.color ? "0.8px" : "" }} onClick={() => setColorFunc(item.color)}>
						{colorSelect === item.color && (
							<div className="d-flex">
								<GiCheckMark size={12} color={item.iconColor ? item.iconColor : "#000"} />
							</div>
						)}
					</ColorWrapper>
				))}
			</ColorSelectFlexWrapper>
		</div>
	);
};

export default ColorSelectContainer;
