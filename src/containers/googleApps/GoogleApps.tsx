import { Link } from "react-router-dom";
import { BtnTertiary, User } from "../../components";
import { AppsContainer, GoogleAppsWrapper } from "./GoogleAppStyles";
import { apps, apps2 } from "./useGoogleAppsParams";

const GoogleApps = () => {
	return (
		<GoogleAppsWrapper>
			<div style={{ backgroundColor: " rgb(248, 250, 253)", borderTopLeftRadius: "28px", borderTopRightRadius: "28px", marginRight: "0.6rem" }}>&nbsp;</div>
			<div className="appContainer">
				<AppsContainer>
					<div className="row ">
						{apps.map((items) => (
							<Link key={items.name} to={items.link} className="col-4 mb-2" target="_blank">
								<User height={items.height} img={items.image} borderRadius={items.name === "Account" ? "100%" : "0"} />
								<span className={items.name === "Chat" ? "mt-0" : "mt-3"} style={{ textAlign: "center" }}>
									{items.name}
								</span>
							</Link>
						))}
					</div>
				</AppsContainer>

				<AppsContainer className="mt-3 pt-5" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px" }}>
					<div className="row ">
						{apps2.map((items) => (
							<Link key={items.name} to={items.link} className="col-4 mb-2" target="_blank">
								<User height="3.8rem" img={items.image} borderRadius={items.name === "Account" ? "100%" : "0"} />

								<span className="mt-3" style={{ textAlign: "center" }}>
									{items.name}
								</span>
							</Link>
						))}
					</div>
				</AppsContainer>

				<div className="text-center btnWrapper" style={{ margin: "2.5rem 0 1.5rem 0" }}>
					<Link to="https://about.google/products/" target="_blank">
						<BtnTertiary name="More from Google" borderColor="grey" />
					</Link>
				</div>
			</div>
		</GoogleAppsWrapper>
	);
};

export default GoogleApps;
