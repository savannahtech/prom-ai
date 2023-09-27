import { ReactNode } from 'react';
import { Navbar, Sidebar } from '../components';

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="h-screen overflow-hidden">
			{/* <Navbar /> */}
			{/* main layout */}
			<div className="flex flex-1 h-full">
				<aside className="w-1/4">
					<Sidebar />
				</aside>
				<main className="w-3/4 bg-mainBg p-4 overflow-y-auto">{children}</main>
			</div>
		</div>
	);
};
