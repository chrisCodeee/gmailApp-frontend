import { useNavigate } from "react-router-dom";
import { BtnPrimaryLightWrapper } from "./BtnStyle";
interface Props {
	btnName2?: string;
	disabled?: boolean;
	link?: string;
}
const BtnPrimaryLight = (props: Props) => {
	const navigate = useNavigate();

	return (
		<>
			<BtnPrimaryLightWrapper $disabled={props.disabled?.toString()} onClick={() => navigate(`${props.link}`)}>
				{props.btnName2}
			</BtnPrimaryLightWrapper>
		</>
	);
};

export default BtnPrimaryLight;
