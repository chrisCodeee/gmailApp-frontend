import { MdInbox, MdLabelImportantOutline, MdOutlineChat, MdOutlineScheduleSend, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlinePeopleOutline, MdOutlineForum } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import { BiInfoCircle, BiSend } from "react-icons/bi";
import { PiTagSimple, PiTag } from "react-icons/pi";
import { RiStarSLine, RiSpam2Line } from "react-icons/ri";
import { TbClockHour5, TbMail } from "react-icons/tb";
import useAsideState from "../../state-management/useAsideState";
import { IoMdArrowDropdown, IoMdArrowDropright, IoMdMore } from "react-icons/io";
import { upperIconSize } from "../../containers/messages/UpperMessage";
import { CategoryIcon } from "./ListStyles";
import { CgTrash } from "react-icons/cg";

export const iconSize = 19;

const useListParams = () => {
	const { categoryState, socialCategoryState, promotionCategoryState, forumCategoryState, updateCategoryState, setSocialCategoryStateOn, setPromotionCategoryStateOn, setForumCategoryStateOn, setUpdateCategoryStateOn, setSocialCategoryStateOff, setPromotionCategoryStateOff, setForumCategoryStateOff, setUpdateCategoryStateOff } = useAsideState();

	const list_1 = [
		{ icon: <MdInbox size={iconSize} />, name: "Inbox", count: "7,177", link: "" },
		{ icon: <RiStarSLine size={iconSize} />, name: "Starred", count: "", link: "/starred" },
		{ icon: <TbClockHour5 size={iconSize} />, name: "Snoozed", count: "", link: "/snoozed" },
		{ icon: <BiSend size={iconSize} />, name: "Sent", count: "", link: "/sent" },
		{ icon: <AiOutlineFile size={iconSize} />, name: "Drafts", count: "", link: "/draft" },
	];

	const list_2 = [
		{ icon: <MdLabelImportantOutline size={iconSize} />, name: "Important", count: "", link: "/important" },
		{ icon: <MdOutlineChat size={iconSize} />, name: "Chats", count: "", link: "/chats" },
		{ icon: <MdOutlineScheduleSend size={iconSize} />, name: "Scheduled", count: "", link: "/scheduled" },
		{ icon: <TbMail size={iconSize} />, name: "All mail", count: "", link: "/inbox" },
		{ icon: <RiSpam2Line size={iconSize} />, name: "Spam", count: "2", link: "/spam" },
		{ icon: <CgTrash size={iconSize} />, name: "Trash", count: "", link: "/trash" },
	];

	const socialCategoryIconState = socialCategoryState ? (
		<CategoryIcon>
			<IoMdMore size={upperIconSize} />
		</CategoryIcon>
	) : (
		"3,463"
	);
	const promotionCategoryIconState = promotionCategoryState ? (
		<CategoryIcon>
			<IoMdMore size={upperIconSize} />
		</CategoryIcon>
	) : (
		"114"
	);
	const updateCategoryIconState = updateCategoryState ? (
		<CategoryIcon>
			<IoMdMore size={upperIconSize} />
		</CategoryIcon>
	) : (
		"6,875"
	);
	const forumCategoryIconState = forumCategoryState ? (
		<CategoryIcon>
			<IoMdMore size={upperIconSize} />
		</CategoryIcon>
	) : (
		"367"
	);

	const list_4 = [
		{ icon: <MdOutlinePeopleOutline size={iconSize} />, name: "Social", count: socialCategoryIconState, link: "/social", onMouseHover: setSocialCategoryStateOn, onMouseLeave: setSocialCategoryStateOff },
		{ icon: <BiInfoCircle size={iconSize} />, name: "Updates", count: updateCategoryIconState, link: "/updates", onMouseHover: setUpdateCategoryStateOn, onMouseLeave: setUpdateCategoryStateOff },
		{ icon: <MdOutlineForum size={iconSize} />, name: "Forums", count: forumCategoryIconState, link: "/forums", onMouseHover: setForumCategoryStateOn, onMouseLeave: setForumCategoryStateOff },
		{ icon: <PiTag size={iconSize} />, name: "Promotions", count: promotionCategoryIconState, link: "/promotion", onMouseHover: setPromotionCategoryStateOn, onMouseLeave: setPromotionCategoryStateOff },
	];

	const { moreState } = useAsideState();
	const moreIconState = moreState ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />;
	const more = { icon: moreIconState, name: `${moreState ? "Less" : "More"}`, link: "" };

	const category = { icon: <PiTagSimple size={17} />, name: "Categories" };

	const categoryArrowIcon = categoryState ? <IoMdArrowDropdown size={15} /> : <IoMdArrowDropright size={15} />;

	return { list_1, list_2, list_4, more, category, iconSize, categoryArrowIcon };
};

export default useListParams;
