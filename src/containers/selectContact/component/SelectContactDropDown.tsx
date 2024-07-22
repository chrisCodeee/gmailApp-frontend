import { useCompose } from "../../../hooks";
import { SelectContactDropDownContainer } from "../SelectContactStyle";
import { contactListItems } from "./AllContactList";

const SelectContactDropDown = () => {
	const selectContactDropdownList = [
		{ name: "My contacts", state: false, contactShow: false, contactCount: 0 },
		{ name: "All contacts", state: true, contactShow: true, contactCount: contactListItems.length + 1 },
		{ name: "Starred in Android", state: true, contactShow: false, contactCount: 0 },
	];

	const { useComposeMessage } = useCompose();

	return (
		<>
			<SelectContactDropDownContainer $contactType={useComposeMessage.contactState.toString()}>
				{selectContactDropdownList.map((items) => (
					<div
						className="myContactSelect"
						key={items.name}
						onClick={() => {
							useComposeMessage.setContactShowOn(items.contactShow, items.contactCount, items.state, items.name);
						}}>
						{items.name}
					</div>
				))}
			</SelectContactDropDownContainer>
		</>
	);
};

export default SelectContactDropDown;
