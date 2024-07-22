interface InputCheckboxProps {
	name: string;
	id: string;
}
const InputCheckbox = ({ name, id }: InputCheckboxProps) => {
	return (
		<>
			<input type="checkbox" id={id} style={{ height: "16px", width: "16px" }} />
			<label htmlFor={id} className="ms-4">
				{name}
			</label>
		</>
	);
};

export default InputCheckbox;
