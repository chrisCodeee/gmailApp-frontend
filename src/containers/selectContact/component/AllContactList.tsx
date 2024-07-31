import { IoPersonCircleSharp } from "react-icons/io5";
import { AllContactListWrapper } from "../SelectContactStyle";

export const contactListItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

const AllContactList = () => {
	// const { useComposeMessage } = useCompose();

	// const [isActive, setIsActive] = useState(false);

	// const [index, setIndex] = useState<string>();

	return (
		<>
			<AllContactListWrapper>
				{contactListItems.map((item) => (
					<button
						className="container"
						key={item}
						onClick={() => {
							// setIndex(item.toString());
							// useComposeMessage.setSelectContactStateOff();
						}}
						onMouseEnter={() => {
							// useComposeMessage.setSelectContactStateOn();
							// setIndex(item);
						}}>
						<div className="user col-7">
							{/* {!useComposeMessage.selectContactState && ( */}
							<div className="iconUser">
								<IoPersonCircleSharp size={50} color="rgba(0,0,0,0.1)" />
							</div>
							{/* )} */}

							<input id={item.toString()} type="checkbox" style={{ height: "20px", width: "20px" }} />
							{/* <input id={item.toString()} type="checkbox" style={{ height: "20px", width: "20px" }} /> */}
							{/* 
							<div className="input"> */}
							{/* {useComposeMessage.selectContactState && index === item && <MdCheckBox size={25} />} */}
							{/* {!useComposeMessage.selectContactState && useComposeMessage.selectContactIndexState === item && <MdCheckBoxOutlineBlank size={25} />} */}
							{/* </div> */}

							<label htmlFor={item.toString()} className="emailFirst col">
								example{item}@gmail.com
							</label>
						</div>

						<label htmlFor={item.toString()} className="emailSecond col">
							example{item}@gmail.com
						</label>
					</button>
				))}
			</AllContactListWrapper>
		</>
	);
};

export default AllContactList;
