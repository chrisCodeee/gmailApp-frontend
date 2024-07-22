import { create } from "zustand";

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
}));

export default useInboxState;
