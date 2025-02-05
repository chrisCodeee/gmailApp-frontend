import { create } from "zustand";
export type InboxType = {
	email: string;
	_id: number;
	subject: string;
	body: string;
	date: string;
	sender: string;
};
interface InboxProps {
	inboxState: boolean;
	setInboxStateOn: () => void;
	setInboxStateOff: () => void;

	checkedState: boolean;
	setCheckedStateOn: () => void;

	primaryActive: boolean;
	setPrimaryActiveOff: () => void;

	selectMessageTypeState: boolean;
	setSelectMesssageTypeStateOn: () => void;
	setSelectMessageTypeStateOff: () => void;

	markAllMessageReadState: boolean;
	setMarkAllMessageReadStateOn: () => void;
	setMarkAllMessageReadStateOff: () => void;

	selectInputToolState: boolean;
	setSelectInputToolStateOn: () => void;
	setSelectInputToolStateOff: () => void;

	messages: InboxType[];
	setMessage: (message: any) => void;

	messageSentState: boolean;
	setMessageSentState: (state: boolean) => void;

	errorMessage: string;
	setErrorMessage: (text: string) => void;

	isStar: number;
	isStarState: boolean;
	setIsStar: (id: number) => void;

	mobileCategory: string;
	count?: string | number;
	setMobileCategory: (category: string, count?: string | number) => void;
}

const useInboxState = create<InboxProps>((set) => ({
	inboxState: false,
	setInboxStateOn: () => set(() => ({ inboxState: true })),
	setInboxStateOff: () => set(() => ({ inboxState: false })),

	checkedState: false,
	setCheckedStateOn: () => set((state) => ({ checkedState: !state.checkedState })),

	primaryActive: true,
	setPrimaryActiveOff: () => set(() => ({ primaryActive: false })),

	selectMessageTypeState: false,
	setSelectMesssageTypeStateOn: () => set((store) => ({ selectMessageTypeState: !store.selectMessageTypeState })),
	setSelectMessageTypeStateOff: () => set(() => ({ selectMessageTypeState: false })),

	markAllMessageReadState: false,
	setMarkAllMessageReadStateOn: () => set((store) => ({ markAllMessageReadState: !store.markAllMessageReadState })),
	setMarkAllMessageReadStateOff: () => set(() => ({ markAllMessageReadState: false })),

	selectInputToolState: false,
	setSelectInputToolStateOn: () => set((store) => ({ selectInputToolState: !store.selectInputToolState })),
	setSelectInputToolStateOff: () => set(() => ({ selectInputToolState: false })),

	messages: [],
	setMessage: (message) => set(() => ({ messages: message })),

	messageSentState: false,
	setMessageSentState: (state) => set(() => ({ messageSentState: state })),

	errorMessage: "",
	setErrorMessage: (text) => set(() => ({ errorMessage: text })),

	isStar: NaN,
	isStarState: false,
	setIsStar: (id) => set((store) => ({ isStar: id, isStarState: !store.isStarState })),

	mobileCategory: "",
	count: "",
	setMobileCategory: (category, count) => set(() => ({ mobileCategory: category, count: count })),
}));

export default useInboxState;
