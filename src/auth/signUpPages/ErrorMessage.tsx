import { MdError } from "react-icons/md";

interface ErrorProps {
	errorMessage?: string;
}
const ErrorMessage = ({ errorMessage }: ErrorProps) => {
	return (
		<>
			<div className="d-flex mt-2 mb-0">
				<div style={{ margin: "-1px 8px 0 0" }}>{errorMessage ? <MdError color="rgb(179, 38, 30)" size={16} /> : <span>&nbsp;</span>}</div>
				<p className="m-0" style={{ color: "rgb(179, 38, 30)", fontWeight: "400", fontSize: "1.3rem" }}>
					{errorMessage}
				</p>
			</div>
		</>
	);
};

export default ErrorMessage;
