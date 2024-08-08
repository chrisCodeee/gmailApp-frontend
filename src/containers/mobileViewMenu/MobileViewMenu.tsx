import { MdArrowDropDown, MdGroup } from "react-icons/md";
import { useUser } from "../../hooks";
import { IoMdSettings } from "react-icons/io";
import { HiInbox } from "react-icons/hi2";
import MobileViewMenuCategory from "./MobileViewMenuCategory";
import { FaInfoCircle, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GetGmailApp from "./GetGmailApp";

const MobileViewMenu = () => {
	const { username } = useUser();
	const navigate = useNavigate();

	const mobileCategories = [
		{ name: "Primary", icon: <HiInbox size={21} color="rgba(0,0,0,0.6)" />, badge: "99+", badgeColor: "rgba(0,0,0,0.6)", count: 120, link: "/inbox" },
		{ name: "Social", icon: <MdGroup size={21} color="rgba(0,0,0,0.6)" />, badge: "", count: "", link: "/inbox" },
		{ name: "Promotions", icon: <FaTags size={21} color="rgba(0,0,0,0.6)" />, badge: "2 new", badgeColor: "#188038", count: "", link: "/promotion" },
		{ name: "Updates", icon: <FaInfoCircle size={21} color="rgba(0,0,0,0.6)" />, badge: "1 new", badgeColor: "rgb(255, 191, 0)", count: "", link: "/inbox" },
	];

	const label = [
		{ name: "Starred", link: "/starred" },
		{ name: "Sent Mail", link: "/sent" },
		{ name: "Drafts", link: "/draft" },
	];

	const more = [
		{ name: "Important", link: "" },
		{ name: "From Circles", link: "" },
		{ name: "All Mail", link: "" },
		{ name: "Trash", link: "" },
		{ name: "Spam", link: "" },
	];

	return (
		<div className="animate__animated animate__slideInLeft" style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "1000000", width: "100vw", backgroundColor: "#fff" }}>
			<GetGmailApp />

			<div className="">
				<div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "rgb(241, 241, 241)", padding: ".7rem 1.2rem" }}>
					<div className="">&nbsp;</div>
					<div className="d-flex align-items-center" style={{ fontWeight: "500", border: "1px solid rgba(0,0,0,0.3)", borderRadius: "3px", padding: "0.2rem 1rem", fontSize: "1.3rem", backgroundColor: "#fff" }}>
						<div>{username}</div>
						<div className="d-flex">
							<MdArrowDropDown size={25} />
						</div>
					</div>
					<div onClick={() => navigate("/settings")}>
						<IoMdSettings size={25} color="rgba(0,0,0,0.6)" />
					</div>
				</div>
				<div className="">
					<div className="" style={{ backgroundColor: "rgba(0,0,0,0.07)", fontWeight: "500", padding: ".3rem 0 .3rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
						Inbox
					</div>
					<ul className="m-0">
						{mobileCategories.map((items) => (
							<MobileViewMenuCategory items={items} key={items.name} fontweight />
						))}
					</ul>
				</div>
				<div className="">
					<div className="" style={{ backgroundColor: "rgba(0,0,0,0.07)", fontWeight: "500", padding: ".3rem 0 .3rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
						Labels
					</div>
					<ul className="m-0">
						{label.map((items) => (
							<MobileViewMenuCategory items={items} key={items.name} />
						))}
					</ul>
				</div>
				<div className="">
					<div className="" style={{ backgroundColor: "rgba(0,0,0,0.07)", fontWeight: "500", padding: ".3rem 0 .3rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
						More
					</div>
					<ul className="m-0">
						{more.map((items) => (
							<MobileViewMenuCategory items={items} key={items.name} />
						))}
					</ul>
				</div>
				<div style={{ textAlign: "center" }}>
					<div className="" style={{ backgroundColor: "rgba(0,0,0,0.07)", padding: ".3rem 0", fontSize: "1.9rem" }}>
						{username}
					</div>
					<div style={{ fontSize: "1.1rem", padding: ".3rem 0" }}>&copy; {new Date().getFullYear()} Google</div>
				</div>
			</div>
		</div>
	);
};

export default MobileViewMenu;
