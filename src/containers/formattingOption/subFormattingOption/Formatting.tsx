import { FormatIcon } from "../../compose/component";
import { ReactNode } from "react";
interface Props {
	icon: ReactNode;
	title: string;
	margin?: string;
}

const Formatting = (item: Props) => {
	return (
		<>
			<FormatIcon title={item.title} margin={item.margin}>
				{item.icon}
			</FormatIcon>
		</>
	);
};

export default Formatting;
