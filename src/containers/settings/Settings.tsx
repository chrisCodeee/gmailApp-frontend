import { BtnBlue, BtnTertiary, Icon } from "../../components";
import { iconSize } from "../../components/list/useListParams";
import { SettingWrapper } from "../../pages/home/HomeStyles";
import { IoClose } from "react-icons/io5";
import { AllSettingWrapper, BtnAllSettingContainer, FlexContainer, PreviewImage, Wrapper } from "./SettingStyles";
import { Classic, Comfortable, Compact, Default, ImportantFirst, MultipleInboxes, NavPromo, PreviewHD5, PreviewPaneBottom, PreviewPaneOff, PreviewPaneRight, PrimaryInbox, StarredFirst, UnreadFirst } from "../../assets";
import { Heading, RadioContainer, RadioTextContainer, SettingTextContainer } from ".";
import { useNavBarState } from "../../state-management";
import { BiCheckSquare } from "react-icons/bi";
import { useState } from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Settings = () => {
	const { setSettingStateOff } = useNavBarState();
	const [check, setCheck] = useState(false);
	return (
		<>
			<AllSettingWrapper>
				<FlexContainer>
					<h3 style={{ fontWeight: "400" }}>Quick settings</h3>
					<div onClick={setSettingStateOff}>
						<Icon>
							<IoClose size={iconSize} />
						</Icon>
					</div>
				</FlexContainer>

				<BtnAllSettingContainer>
					<BtnTertiary name="See all settings" width="100%" />
				</BtnAllSettingContainer>
			</AllSettingWrapper>

			<SettingWrapper>
				<Wrapper>
					<Heading text="Apps in Gmail" />
					<SettingTextContainer text="Chat and Meet" btnName="Customize" image={NavPromo} alt="Nav_Promo" />
				</Wrapper>

				<Wrapper>
					<Heading text="Density" />
					<RadioContainer text="Default" image={Default} alt="default" />
					<RadioContainer text="Comfortable" image={Comfortable} alt="comfortable" />
					<RadioContainer text="Compact" image={Compact} alt="compact" />
				</Wrapper>

				<Wrapper>
					<div className="d-flex justify-content-between align-items-center">
						<Heading text="Theme" />
						<BtnBlue btnName="View all" />
					</div>

					<PreviewImage src={PreviewHD5} alt="preview" />
				</Wrapper>

				<Wrapper>
					<Heading text="Inbox type" />
					<RadioTextContainer text="Default" image={Classic} id="classic" btnName="Customize" alt="classic" />
					<RadioContainer text="Important first" image={ImportantFirst} alt="important_first" />
					<RadioContainer text="Unread first" image={UnreadFirst} alt="unread_first" />
					<RadioContainer text="Starred first" image={StarredFirst} alt="starred first" />
					<RadioTextContainer text="Primary inbox" image={PrimaryInbox} id="primary_inbox" btnName="Customize" alt="primary_inbox" />
					<RadioTextContainer text="Multiple inboxes" image={MultipleInboxes} id="multiple_inboxes" btnName="Customize" alt="multiple_inboxes" />
				</Wrapper>

				<Wrapper>
					<Heading text="Reading pane" />
					<RadioContainer text="No split" image={PreviewPaneOff} alt="preview_pane_off" />
					<RadioContainer text="Right of inbox" image={PreviewPaneRight} alt="preview_pane_right" />
					<RadioContainer text="Below inbox" image={PreviewPaneBottom} alt="preview_pane_bottom" />
				</Wrapper>

				<Wrapper>
					<Heading text="Email threading" />

					<div className="d-flex align-items-center mt-2">
						<div onClick={() => setCheck(!check)}>
							<Icon>
								{check && <input type="checkbox" color="rgb(26, 115, 232)" name="checkbox" id="conversation_view" style={{ height: "15px", width: "15px" }} checked={!check} />}
								{!check && <BiCheckSquare size={iconSize} color="rgb(26, 115, 232)" />}
							</Icon>
						</div>
						<label htmlFor="conversation_view" className="me-3" onClick={() => setCheck(!check)}>
							Conversation view
						</label>
						<div>
							<IoMdHelpCircleOutline size={iconSize} color="rgba(32, 33, 36, .7)" />
						</div>
					</div>
				</Wrapper>
			</SettingWrapper>
		</>
	);
};

export default Settings;
