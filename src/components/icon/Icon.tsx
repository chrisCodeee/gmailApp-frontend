import { ReactNode } from "react";
import { IconContainer } from "./IconStyles";

interface IconProps {
	children: ReactNode;
}
const Icon = ({ children }: IconProps) => {
	return (
		<IconContainer>
			<span style={{ color: "rgba(32, 33, 36, .7)" }}>{children}</span>
		</IconContainer>
	);
};

export default Icon;
