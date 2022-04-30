import Calendar from 'react-widgets/Calendar';

const RightNavbar = () => {
	return (
		<div className="bg-white h-full mt-5 rounded-tl-xl p-3">
			<Calendar defaultCurrentDate={new Date()} max={new Date()} />
		</div>
	);
};

export default RightNavbar;
