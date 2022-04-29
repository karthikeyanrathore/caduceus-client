import { useState } from 'react';
import SideNavbar from './SideNavbar';
import Dashboard from './Dashboard';

const Container = () => {
	return (
		<div className="grid grid-cols-5 h-full">
			<div className="">
				<SideNavbar />
			</div>
			<div className="col-span-3">
				<Dashboard />
			</div>
			<div>
				<Dashboard />
			</div>
		</div>
	);
};

export default Container;
