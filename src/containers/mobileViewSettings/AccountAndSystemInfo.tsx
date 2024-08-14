import { MdArrowBack } from "react-icons/md";
import { useNavBarState } from "../../state-management";
import { useUser } from "../../hooks";

const AccountAndSystemInfo = () => {
	const { setAccountAndSystemInfoState } = useNavBarState();
	const { username } = useUser();

	const accountInfoList = [
		{ name_1: "appCodeName", name_2: "Mozilla" },
		{ name_1: "appName", name_2: "Netscape" },
		{ name_1: "appVersion", name_2: "5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1" },
		{ name_1: "cookieEnabled", name_2: "Not available" },
		{ name_1: "onLine", name_2: "Not available" },
		{ name_1: "platform", name_2: "Win32" },
		{ name_1: "userAgent", name_2: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1" },
		{ name_1: "javaEnabled", name_2: "Not available" },
		{ name_1: "pluginNames", name_2: "Not available" },
	];
	return (
		<div style={{ backgroundColor: "#191919", width: "100vw", padding: "1.8rem", position: "absolute", top: "0", color: "rgb(227, 227, 227)" }}>
			<div>
				<div className="d-flex align-items-center">
					<div className="d-flex align-items-center me-4" onClick={() => setAccountAndSystemInfoState(false)}>
						<MdArrowBack size={25} />
					</div>
					<h1 className="" style={{ fontSize: "2rem" }}>
						Account and system info
					</h1>
				</div>

				<div style={{ margin: "2.7rem 0 0 0", borderBottom: "1px solid rgba(227, 227, 227, .2)", padding: "0 0 3rem 0" }}>
					<h2 className="" style={{ textTransform: "uppercase", fontSize: "1.4rem", letterSpacing: "1px" }}>
						Account info
					</h2>
					<div className="" style={{ margin: "2rem 0 0 0" }}>
						<span className="" style={{ display: "block", fontSize: "1.7rem" }}>
							Email ID
						</span>
						<span style={{ fontSize: "1.5rem" }}>{username}</span>
					</div>
				</div>
			</div>

			<div className="" style={{ margin: "3rem 0 0 0", borderBottom: "1px solid rgba(227, 227, 227, .2)", padding: "0 0 3rem 0" }}>
				<h2 className="" style={{ textTransform: "uppercase", fontSize: "1.4rem", letterSpacing: "1px" }}>
					Browser info
				</h2>

				{accountInfoList.map((item) => (
					<div key={item.name_1} style={{ margin: "2rem 0 0 0" }}>
						<span className="" style={{ display: "block", fontSize: "1.7rem" }}>
							{item.name_1}
						</span>
						<span style={{ fontSize: "1.5rem" }}>{item.name_2}</span>
					</div>
				))}
			</div>

			<div className="" style={{ margin: "3rem 0 0 0", borderBottom: "1px solid rgba(227, 227, 227, .2)", padding: "0 0 3rem 0" }}>
				<h2 className="" style={{ textTransform: "uppercase", fontSize: "1.4rem", letterSpacing: "1px" }}>
					Page info
				</h2>

				<div className="" style={{ margin: "2rem 0 0 0" }}>
					<span className="" style={{ display: "block", fontSize: "1.7rem" }}>
						URL
					</span>
					<span style={{ fontSize: "1.5rem" }}>https://mail.google.com/mail/mu/mp/762/#pr</span>
				</div>
			</div>

			<div className="" style={{ margin: "3rem 0 0 0" }}>
				<h2 className="" style={{ textTransform: "uppercase", fontSize: "1.4rem", letterSpacing: "1px" }}>
					Page structure
				</h2>

				<div className="" style={{ margin: "2rem 0 0 0" }}>
					<span className="" style={{ display: "block", fontSize: "1.7rem" }}>
						pageHtml
					</span>
					<span style={{ fontSize: "1.5rem" }}>Not available</span>
				</div>
			</div>
		</div>
	);
};

export default AccountAndSystemInfo;
