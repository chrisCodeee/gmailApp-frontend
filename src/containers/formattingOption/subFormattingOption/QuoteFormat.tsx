import { IoMdQuote } from "react-icons/io";
import Formatting from "./Formatting";

const QuoteFormat = () => {
	return (
		<>
			<Formatting title="Quote (Ctrl-Shift-9)" icon={<IoMdQuote size={17} />} />
		</>
	);
};

export default QuoteFormat;
