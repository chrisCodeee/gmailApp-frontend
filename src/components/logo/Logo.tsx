import { Link } from "react-router-dom";
import { GmailLogo } from "../../assets";

const Logo = () => {
	return (
		<>
			<Link to="">
				<img src={GmailLogo} alt="Gmail logo" className="ms-3" style={{ objectFit: "cover", height: "3.8rem" }} />
			</Link>
		</>
	);
};

export default Logo;
