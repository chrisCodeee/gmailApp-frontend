import { useState } from "react";
import { useInboxState } from "../../state-management";
import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BiLinkExternal } from "react-icons/bi";
import { MobileNoMessage } from "../../assets";
import { IoSearchSharp } from "react-icons/io5";

const Inbox = () => {
	const { inboxState, messages, setInboxStateOn, setInboxStateOff } = useInboxState();
	const [num, setNum] = useState<number>(0);

	const newInboxMessageDetails = messages.map((items) => (items._id === num ? { ...items, inboxState: inboxState } : items));

	const hover = (index: number) => {
		setNum(index);
	};

	const iconStyle = {
		iconSize: 22,
		iconColor: "rgb(95, 99, 104)",
	};

	return (
		<InboxContainer>
			{/* Category Labels */}
			<div>
				<div className="d-flex d-xl-none align-items-center" style={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(0, 0, 0, 0.2)", padding: ".6rem 1rem" }}>
					<div>
						<IoSearchSharp size={iconStyle.iconSize} color={iconStyle.iconColor} />
					</div>
					<input type="search" style={{ width: "100%", fontSize: "1.8rem", padding: "0 .5rem", margin: "0 .8rem 0 .5rem" }} placeholder="Search" />
					<button className="btn-cancel">Cancel</button>
				</div>

				<div className="d-none d-xl-block">
					<InboxCategoryContainer />
				</div>

				{newInboxMessageDetails.length === 0 && (
					<>
						<div className="nomessage d-none d-xl-block" style={{ maxWidth: "55rem", margin: "8rem auto", color: "rgba(0,0,0,0.7)" }}>
							<div className="" style={{ fontSize: "1.65rem" }}>
								Your Primary tab is empty.
							</div>
							<p style={{ margin: "1.5rem 0" }}>Personal messages and messages that don’t appear in other tabs will be shown here.</p>
							<p>
								To add or remove tabs click{" "}
								<span className="inboxsetting" style={{ color: "rgb(11, 87, 208)", fontWeight: "500", cursor: "pointer" }}>
									inbox settings.
								</span>
							</p>
						</div>

						<div className="d-block d-xl-none" style={{ width: "fit-content", textAlign: "center", margin: "2rem auto", color: "rgba(0,0,0,0.7)" }}>
							<img src={MobileNoMessage} alt="no message" style={{ width: "110px", display: "block", margin: "auto" }} />
							<div style={{ textAlign: "center" }}>
								<p style={{ margin: "0" }}>You have no mail.</p>
								<p>Please enjoy your day!</p>
							</div>
						</div>
					</>
				)}
				{/* Messages */}
				{newInboxMessageDetails.map((items: any) => (
					<div
						key={items._id}
						onMouseEnter={() => {
							hover(items._id);
							setInboxStateOn();
						}}
						onMouseLeave={setInboxStateOff}>
						<InboxMessages items={items} />
					</div>
				))}
			</div>

			<div className="footer d-none d-xl-flex justify-content-between ps-4 pe-5 pt-5 pb-3" style={{ fontSize: "1.2rem", color: "rgba(0,0,0,0.7)" }}>
				<div className="" style={{ width: "25rem" }}>
					<ProgressBar animated variant="success" now={40} />
					<div className="mt-2 d-flex align-items-center">
						<Link to="https://one.google.com/u/0/storage" target="_blank" className="link">
							9.94 GB of 15 GB used
						</Link>

						<Link to="https://one.google.com/u/2/storage" target="_blank" style={{ margin: "-2px 0 0 .8rem" }}>
							<BiLinkExternal size={17} color="rgba(0,0,0,0.6)" />
						</Link>
					</div>
				</div>
				<div className="">
					<Link to="https://policies.google.com/terms?hl=en" target="_blank" className="link">
						Terms
					</Link>
					<Link to="https://policies.google.com/privacy?hl=en" target="_blank" className="px-3 link">
						Privacy
					</Link>
					<Link to="https://www.google.com/gmail/about/policy/" target="_blank" className="link">
						Program Policies
					</Link>
				</div>
				<div className="">
					<div>Last account activity: 29 minutes ago</div>
					<div className="link" style={{ textAlign: "right" }}>
						Details
					</div>
				</div>
			</div>
		</InboxContainer>
	);
};

export default Inbox;
