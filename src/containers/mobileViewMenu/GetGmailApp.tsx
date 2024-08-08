import { Link } from "react-router-dom";
import { GoogleGmailIcon } from "../../assets";

const GetGmailApp = () => {
	return (
		<div className="px-3 py-4" style={{}}>
			<div className="d-flex justify-content-between align-items-center">
				<div className="d-flex justify-content-between align-items-center">
					<div className="" style={{ backgroundColor: "#fff", borderRadius: "5px", margin: "0 1rem 0 0", position: "relative", padding: ".5rem .7rem" }}>
						<img src={GoogleGmailIcon} alt="gmail Logo" height={30} />
						<div className="" style={{ width: "10px", height: "10px", borderRadius: "100%", backgroundColor: "orangered", position: "absolute", top: "-2px", right: "-2px" }}>
							&nbsp;
						</div>
					</div>
					<div className="">
						<div className="" style={{ fontWeight: "500", fontSize: "1.5rem" }}>
							Upgrade to a smarter Gmail
						</div>
						<div className="" style={{ fontSize: "1.3rem" }}>
							Secure, fast & organized email
						</div>
					</div>
				</div>

				<Link to="https://apps.apple.com/us/app/gmail-email-by-google/id422689480" target="_blank" style={{ color: "rgb(11, 87, 208)", textTransform: "uppercase", fontWeight: "500" }}>
					Open
				</Link>
			</div>
		</div>
	);
};

export default GetGmailApp;
