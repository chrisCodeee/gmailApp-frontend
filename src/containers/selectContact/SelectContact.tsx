import { IoClose, IoSearch } from "react-icons/io5";
import { ContactIcon, NoData } from "../../assets";
import * as SelectContactStyle from "./SelectContactStyle";
import { Icon } from "../../components";
import { MdArrowDropDown } from "react-icons/md";
import { useCompose } from "../../hooks";
import SelectContactDropDown from "./component/SelectContactDropDown";
import AllContactList from "./component/AllContactList";
import { CgTrash } from "react-icons/cg";

const SelectContact = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<SelectContactStyle.SelectContactWrapper>
				<SelectContactStyle.SelectContactContainer>
					<SelectContactStyle.SelectContactHeader>
						<div className="header">
							<div className="section1" onClick={useComposeMessage.setSelectContactDropdownOff}>
								<SelectContactStyle.ContactIconContainer>
									<SelectContactStyle.IconContainer>
										<img src={ContactIcon} alt="Google Contact Icon" />
									</SelectContactStyle.IconContainer>
									<SelectContactStyle.IconText>Select contacts</SelectContactStyle.IconText>
								</SelectContactStyle.ContactIconContainer>
								<SelectContactStyle.SearchButton>
									<SelectContactStyle.SearchIcon>
										<IoSearch size={20} color="rgba(0,0,0,0.6)" />
									</SelectContactStyle.SearchIcon>
									<input type="text" placeholder="Search for contacts" />
								</SelectContactStyle.SearchButton>
								<div className="">
									<Icon>
										<IoClose size={25} />
									</Icon>
								</div>
							</div>

							<div className="section2">
								<div className="selectAll" onClick={useComposeMessage.setSelectContactDropdownOff}>
									<div className="d-flex align-items-center">
										<input type="checkbox" />
									</div>
									<label>Select All</label>
								</div>

								<div className="manageLabel" onClick={useComposeMessage.setSelectContactDropdownOff}>
									Manage labels
								</div>

								<div className="selectContact" onClick={useComposeMessage.setSelectContactDropdownOn}>
									<span>{useComposeMessage.contactTypeState ? useComposeMessage.contactTypeState : "My contacts"}</span>

									<div className="dropdownIcon">
										<MdArrowDropDown size={26} color="rgba(0,0,0,0.3)" />
									</div>

									{useComposeMessage.selectContactDropdownState && <SelectContactDropDown />}
								</div>
							</div>
						</div>
					</SelectContactStyle.SelectContactHeader>

					<SelectContactStyle.ContactDisplayContainer onClick={useComposeMessage.setSelectContactDropdownOff}>
						<div className="myContact">
							<span>
								{useComposeMessage.contactTypeState ? useComposeMessage.contactTypeState : "my contacts"} {`(${useComposeMessage.contactCount})`}
							</span>

							{useComposeMessage.contactTypeState === "Starred in Android" && (
								<div className="deleteIcon" title="Delete label">
									<CgTrash size={23} color="rgba(0,0,0,0.5)" />
								</div>
							)}
						</div>

						{useComposeMessage.contactShow && <AllContactList />}

						{!useComposeMessage.contactShow && (
							<div className="noData">
								<img src={NoData} alt="no_data" />

								<div className="noDataText">
									<div className="nothing">There's nothing here.</div>
									<div className="noContact">There are no contacts for this user.</div>
								</div>
							</div>
						)}
					</SelectContactStyle.ContactDisplayContainer>
				</SelectContactStyle.SelectContactContainer>
			</SelectContactStyle.SelectContactWrapper>
		</>
	);
};

export default SelectContact;
