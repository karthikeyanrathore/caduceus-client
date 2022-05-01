import Dashboard from './Dashboard';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RigthNavbar';
import AppointmentList from './AppointmentList';

const Container = ({ screen }) => {
	return (
		<div className="grid grid-cols-5 h-full gap-7">
			<LeftNavbar screen={screen} />
			<div className="col-span-3">
				{screen === 'dashboard' ? <Dashboard /> : <AppointmentList />}
			</div>
			<RightNavbar />
		</div>
	);
};

export default Container;
