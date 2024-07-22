import { create } from "zustand";

interface NavBarProps {
	showMoreState: boolean;
	setShowMoreStateOn: () => void;
	setShowMoreStateOff: () => void;

	supportState: boolean;
	setSupportStateOn: () => void;
	setSupportStateOff: () => void;

	settingState: boolean;
	setSettingStateOn: () => void;
	setSettingStateOff: () => void;

	googleAppState: boolean;
	setGoogleAppStateOn: () => void;
	setGoogleAppStateOff: () => void;

	accountProfileState: boolean;
	setAccountProfileStateOn: () => void;
	setAccountProfileStateOff: () => void;
}

const useNavBarState = create<NavBarProps>((set) => ({
	showMoreState: false,
	setShowMoreStateOn: () => set(() => ({ showMoreState: true })),
	setShowMoreStateOff: () => set(() => ({ showMoreState: false })),

	supportState: false,
	setSupportStateOn: () => set((store) => ({ supportState: !store.supportState })),
	setSupportStateOff: () => set(() => ({ supportState: false })),

	settingState: false,
	setSettingStateOn: () => set((store) => ({ settingState: !store.settingState })),
	setSettingStateOff: () => set(() => ({ settingState: false })),

	googleAppState: false,
	setGoogleAppStateOn: () => set((store) => ({ googleAppState: !store.googleAppState })),
	setGoogleAppStateOff: () => set(() => ({ googleAppState: false })),

	accountProfileState: false,
	setAccountProfileStateOn: () => set((store) => ({ accountProfileState: !store.accountProfileState })),
	setAccountProfileStateOff: () => set(() => ({ accountProfileState: false })),
}));

export default useNavBarState;
