import { IndexDecrease, IndexIncrease, QuoteFormat, RemoveFormat, StrikeThrough } from "./subFormattingOption";
import { FormatDivider } from "./FormattingOptionStyle";

const FullFormatingOption = () => {
	return (
		<>
			<IndexDecrease />
			<IndexIncrease />
			<QuoteFormat />

			<FormatDivider>&nbsp;</FormatDivider>

			<StrikeThrough />

			<FormatDivider>&nbsp;</FormatDivider>

			<RemoveFormat />
		</>
	);
};

export default FullFormatingOption;
