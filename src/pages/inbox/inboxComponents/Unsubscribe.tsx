import { LuMailOpen } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { TbClockHour5 } from "react-icons/tb";
import { Icon } from "../../../components";
import { iconSize } from "../../../components/list/useListParams";
import { UnsubscribeText, UnsubscribeWrapper } from "../InboxStyles";
import { useInboxState } from "../../../state-management";

interface Props {
	messageId: number;
}

const Unsubscribe = ({ messageId }: Props) => {
	const { setMessage, messages } = useInboxState();
	// const { username } = useUser();

	// const getMessages = () => {
	// 	const controller = new AbortController();
	// 	axios
	// 		.get(`http://localhost:8080/getmessage/${username}`, {
	// 			signal: controller.signal,
	// 		})
	// 		.then((res) => {
	// 			if (res.status === 200) {
	// 				console.log(res.data);
	// 				setMessage(res.data);
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			if (err instanceof CanceledError) return;
	// 			console.log(err);
	// 		});
	// 	return () => controller.abort();
	// };

	const deleteMessage = () => {
		setMessage(messages.filter((item) => item._id !== messageId));

		// axios
		// 	.delete(`http://localhost:8080/deletemessage/${messageId}`)
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			getMessages();
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};
	return (
		<>
			<UnsubscribeWrapper className="d-none d-xl-flex">
				<UnsubscribeText>Unsubscribe</UnsubscribeText>
				<div title="Archive">
					<Icon>
						<MdOutlineArchive size={iconSize} />
					</Icon>
				</div>

				<div onClick={() => deleteMessage()} title="Delete">
					<Icon>
						<CgTrash size={iconSize} />
					</Icon>
				</div>

				<div title="Mark as read">
					<Icon>
						<LuMailOpen size={iconSize} />
					</Icon>
				</div>

				<div title="Snooze">
					<Icon>
						<TbClockHour5 size={iconSize} />
					</Icon>
				</div>
			</UnsubscribeWrapper>
		</>
	);
};

export default Unsubscribe;
