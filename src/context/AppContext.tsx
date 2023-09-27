// UserContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import { ApplicationData, initialData } from '../initialData';

interface UserContextType {
	appState: ApplicationData;
	setItems: (arg0: ApplicationData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUserContext must be used within a UserContextProvider');
	}
	return context;
}

export function UserContextProvider({ children }: { children: ReactNode }) {
	const [appState, setAppState] = useState<ApplicationData>(initialData);

	const setItems = (items: ApplicationData) => {
		setAppState(items);
	};

	const value: UserContextType = {
		appState,
		setItems,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
