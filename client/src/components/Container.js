import Dashboard from './Dashboard';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RigthNavbar';

const Container = () => {
	return (
		<div className="grid grid-cols-5 h-full gap-7">
			<LeftNavbar />
			<div className="col-span-3">
				<Dashboard />
			</div>
			<RightNavbar />
		</div>
	);
};

export default Container;
