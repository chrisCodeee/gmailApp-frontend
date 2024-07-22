import { SelectMessageList, SelectMessageListItems, SelectMessageTypeWrapper } from "./SelectMessageTypeStyle";

const SelectMessageType = () => {
	const filterMessageTypeList = ["All", "None", "Read", "Unread", "Starred", "Unstarred"];
	return (
		<>
			<SelectMessageTypeWrapper className="p-0">
				<SelectMessageList className="">
					{filterMessageTypeList.map((items) => (
						<SelectMessageListItems key={items}>{items}</SelectMessageListItems>
					))}
				</SelectMessageList>
			</SelectMessageTypeWrapper>
		</>
	);
};

export default SelectMessageType;
