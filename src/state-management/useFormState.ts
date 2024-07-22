import { create } from "zustand";

interface NavBarProps {
	formState: boolean;
	setFormStateOn: () => void;
	setFormStateOff: () => void;
}

const useFormState = create<NavBarProps>((set) => ({
	formState: false,
	setFormStateOn: () => set(() => ({ formState: true })),
	setFormStateOff: () => set(() => ({ formState: false })),
}));

export default useFormState;
