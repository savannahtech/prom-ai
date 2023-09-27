import { UserContextProvider } from './context/AppContext';
import { Landing } from './pages/landing';

function App() {
	return (
		<UserContextProvider>
			<Landing />
		</UserContextProvider>
	)
}

export default App;
