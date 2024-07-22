import { BiPencil } from "react-icons/bi";
import { Button, Text } from "./BtnStyle";

const BtnCompose = () => {
	return (
		<>
			<Button>
				<BiPencil size={25} color="rgb(0, 29, 53)" />

				<Text>Compose</Text>
			</Button>
		</>
	);
};

export default BtnCompose;
