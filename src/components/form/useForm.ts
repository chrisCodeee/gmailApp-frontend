const formDetails = [
	{ label: "From", type: "text", name: "from" },
	{ label: "To", type: "text", name: "to" },
	{ label: "Subject", type: "text", name: "subject" },
	{ label: "Has the words", type: "text", name: "hasTheWords" },
	{ label: "Doesn't have", type: "text", name: "doNotHave" },
];

const dataSize = ["MB", "KB", "Bytes"];
const size = ["greater than", "less than"];
const dateWithin = [
	{ name: "1 day", value: 1 },
	{ name: "3 days", value: 3 },
	{ name: "1 week", value: 7 },
	{ name: "2 weeks", value: 14 },
	{ name: "1 month", value: 30 },
	{ name: "2 months", value: 60 },
	{ name: "6 months", value: 180 },
	{ name: "1 year", value: 365 },
];

const search = [
	{ name: "All Mail", value: "inbox" },
	{ name: "Inbox", value: "inbox" },
	{ name: "Starred", value: "starred" },
	{ name: "Sent Mail", value: "sent" },
	{ name: "Drafts", value: "drafts" },
	{ name: "Chats", value: "chats" },
	{ name: "Spam", value: "spam" },
	{ name: "Trash", value: "trash" },
	{ name: "Mail & Spam & Trash", value: "", padding: "up" },
	{ name: "Read Mail", value: "" },
	{ name: "Unread Mail", value: "" },
	{ name: "Social", value: "social" },
	{ name: "Updates", value: "update" },
	{ name: "Forums", value: "forum" },
	{ name: "Promotions", value: "promotion" },
];

const inputCheckbox = [
	{ id: "hasAttachment", name: "Has attachment" },
	{ id: "noChat", name: "Don't include chats" },
];

export { formDetails, dataSize, size, search, dateWithin, inputCheckbox };
