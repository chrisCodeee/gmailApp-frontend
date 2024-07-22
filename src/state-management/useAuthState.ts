import { create } from "zustand";

export type USerDetails = {
	firstName: string;
	lastName?: string;
	month: string;
	day: string;
	year: string;
	DOB: string;
	gender: string;
	customGender: string;
	referGender: string;
	username: string;
	password: string;
	confirmPassword: string;
	phoneNumber: string;
	verificationCode: string;
	recoveryEmailAddress: string;
};

type IndexProps = {
	monthIndex: number;
	genderIndex: number;
	referGender: number;
};

interface AuthProps {
	user: USerDetails;
	setUser: (name: string, value: string) => void;
	isMonth: boolean;
	isGender: boolean;
	isReferGender: boolean;
	inputState: boolean;
	genderState: boolean;
	referGenderState: boolean;
	setInput: (value: boolean) => void;
	setIsMonth: (value: boolean) => void;
	setGender: (value: boolean) => void;
	setReferGender: (value: boolean) => void;
	setIsGender: (value: boolean) => void;
	setIsReferGender: (value: boolean) => void;
	indexNum: IndexProps;
	setIndex: (index: string, value: number) => void;

	clearStates: () => void;

	error: USerDetails;
	setError: (name: string, message: string | undefined) => void;
	clearError: (name: string) => void;
	clearAllError: () => void;
	clearUsers: () => void;

	signinDetails: {
		username: string;
		password: string;
	};
	setSigninDetails: (name: string, value: string) => void;

	recoveryEmailDetails: {
		username: string;
		firstName: string;
		lastName?: string;
	};
	setRecoveryEmailDetails: (name: string, value: string) => void;

	getHelpState: boolean;
	setGetHelp: (value: boolean) => void;
}

const useAuthState = create<AuthProps>((set) => ({
	error: {
		firstName: "",
		lastName: "",
		month: "",
		day: "",
		year: "",
		DOB: "",
		gender: "",
		customGender: "",
		referGender: "",
		username: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		verificationCode: "",
		recoveryEmailAddress: "",
	},

	signinDetails: {
		username: "",
		password: "",
	},

	recoveryEmailDetails: {
		username: "",
		firstName: "",
		lastName: "",
	},

	user: {
		firstName: "",
		lastName: "",
		month: "",
		day: "",
		year: "",
		DOB: "",
		gender: "",
		customGender: "",
		referGender: "",
		username: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		verificationCode: "",
		recoveryEmailAddress: "",
	},

	getHelpState: false,
	isMonth: false,
	isGender: false,
	isReferGender: false,
	inputState: false,
	genderState: false,
	referGenderState: false,

	setGetHelp: (value) => set(() => ({ getHelpState: value })),
	setError: (name, message) => set((store) => ({ error: { ...store.error, [name]: message } })),
	clearError: (name) => set((store) => ({ error: { ...store.error, [name]: "" } })),
	clearAllError: () => set(() => ({ error: { firstName: "", lastName: "", month: "", day: "", year: "", DOB: "", gender: "", customGender: "", referGender: "", username: "", password: "", confirmPassword: "", phoneNumber: "", verificationCode: "", recoveryEmailAddress: "" } })),
	clearUsers: () => set(() => ({ user: { firstName: "", lastName: "", month: "", day: "", year: "", DOB: "", gender: "", customGender: "", referGender: "", username: "", password: "", confirmPassword: "", phoneNumber: "", verificationCode: "", recoveryEmailAddress: "" } })),

	setUser: (name, value) => set((store) => ({ user: { ...store.user, [name]: value } })),
	setSigninDetails: (name, value) => set((store) => ({ signinDetails: { ...store.signinDetails, [name]: value } })),
	setRecoveryEmailDetails: (name, value) => set((store) => ({ recoveryEmailDetails: { ...store.recoveryEmailDetails, [name]: value } })),

	setIsMonth: (value) => set(() => ({ isMonth: value })),
	setInput: (value) => set(() => ({ inputState: value })),
	setGender: (value) => set(() => ({ genderState: value })),
	setReferGender: (value) => set(() => ({ referGenderState: value })),
	setIsGender: (value) => set(() => ({ isGender: value })),
	setIsReferGender: (value) => set(() => ({ isReferGender: value })),

	clearStates: () => set(() => ({ inputState: false, genderState: false, referGenderState: false, isMonth: false, isGender: false, isReferGender: false })),

	indexNum: {
		monthIndex: 0,
		genderIndex: 0,
		referGender: 0,
	},
	setIndex: (index, value) => set((store) => ({ indexNum: { ...store.indexNum, [index]: value } })),
}));

export default useAuthState;
