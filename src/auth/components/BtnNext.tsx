import { BtnPrimary, BtnPrimaryLight } from "../../components";
import { BtnNextWrapper } from "../AuthStyles";

interface BtnProps {
	btnName2?: string;
	disabled?: boolean;
	link?: string;
	margin?: string;
	name?: string;
}

const BtnNext = ({ btnName2, disabled, link, margin, name = "Next" }: BtnProps) => {
	return (
		<BtnNextWrapper $disabled={disabled?.toString()} $margin={margin}>
			<BtnPrimaryLight btnName2={btnName2} link={link} disabled={disabled} />
			<BtnPrimary name={name} padding=".9rem 2.4rem" borderRadius="20px" margin="ms-0" />
		</BtnNextWrapper>
	);
};

export default BtnNext;
