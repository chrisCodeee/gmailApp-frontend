import { useCompose } from "../../hooks";
import { MoreFormattingOptionWrapper } from "./FormattingOptionStyle";
import { IndexDecrease, IndexIncrease, QuoteFormat, RemoveFormat, StrikeThrough } from "./subFormattingOption";

const MoreFormattingOPtion = () => {
	const { useComposeMessage } = useCompose();
	return (
		<MoreFormattingOptionWrapper onClick={useComposeMessage.setMoreFormattingOptioneStateOff}>
			<RemoveFormat />
			<StrikeThrough />
			<QuoteFormat />
			<IndexIncrease />
			<IndexDecrease />
		</MoreFormattingOptionWrapper>
	);
};

export default MoreFormattingOPtion;
