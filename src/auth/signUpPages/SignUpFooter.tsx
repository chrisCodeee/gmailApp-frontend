import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { SignUpFooterWrapper } from "../AuthStyles";

const SignUpFooter = () => {
	return (
		<SignUpFooterWrapper className="d-flex align-items-center justify-content-between px-4">
			<div className="d-flex align-items-center footer_link">
				<span className="me-5">English (United States)</span>
				<div>
					<MdArrowDropDown size={18} />
				</div>
			</div>
			<ul className="d-flex">
				<li className="footer_link">
					<Link to="https://support.google.com/accounts" target="_blank">
						Help
					</Link>
				</li>
				<li className="mx-3 footer_link">
					<Link to="https://policies.google.com/privacy" target="_blank">
						Privacy
					</Link>
				</li>
				<li className="footer_link">
					<Link to="https://policies.google.com/terms" target="_blank">
						Terms
					</Link>
				</li>
			</ul>
		</SignUpFooterWrapper>
	);
};

export default SignUpFooter;
