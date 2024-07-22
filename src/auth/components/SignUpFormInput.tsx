import { useAuthState } from "../../state-management";
import { FormInput, FormLabel, FormWrapper } from "../AuthStyles";

export interface InputParams {
	margin?: string;
	name: string;
	labelName: string;
	cursor?: string;
	value?: string;
	type?: string;
	autoFocusValue?: boolean;
	padding?: string;
	error?: string;
}
const SignUpFormInput = (params: InputParams) => {
	const { setUser, setSigninDetails, setRecoveryEmailDetails, clearError } = useAuthState();

	return (
		<FormWrapper $inputstyle={params}>
			<FormInput
				type={params.type ? params.type : "text"}
				name={params.name}
				id={params.name}
				value={params.value}
				$inputstyle={params}
				onChange={(e) => {
					setUser(e.target.name, e.target.value);
					setSigninDetails(e.target.name, e.target.value);
					setRecoveryEmailDetails(e.target.name, e.target.value);
					clearError(params.name);
					clearError("month");
				}}
				autoFocus={params.autoFocusValue}
			/>
			<FormLabel htmlFor={params.name} $inputstyle={params}>
				{params.labelName}
			</FormLabel>
		</FormWrapper>
	);
};

export default SignUpFormInput;
