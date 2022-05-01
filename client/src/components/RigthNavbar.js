import Calendar from 'react-widgets/Calendar';

const RightNavbar = () => {
	return (
		<div className="bg-white h-full mt-5 rounded-tl-xl p-3">
			<Calendar defaultCurrentDate={new Date()} max={new Date()} />
			<hr className="mt-10" />
			<div className="mt-3">
				<div className="text-xl font-medium text-gray-700 mb-2">
					Doctors' Appointment
				</div>
				<span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
					Today
				</span>
				<div className="mt-5 border-2 border-gray-100 p-3 rounded-lg">
					<div className="text-xl font-medium text-gray-700">Heart Surgeon</div>
					<div className="text-md text-gray-800">Dr. R. Ramakrishan</div>
					<div className="text-sm text-gray-500">10:30am - 12:30pm</div>
				</div>
				<div className="mt-3 border-2 border-gray-100 p-3 rounded-lg">
					<div className="text-xl font-medium text-gray-700">Neurologist</div>
					<div className="text-md text-gray-800">Dr. Melani</div>
					<div className="text-sm text-gray-500">11:00am - 12:00pm</div>
				</div>
				<div className="mt-3 border-2 border-gray-100 p-3 rounded-lg">
					<div className="text-xl font-medium text-gray-700">Neurologist</div>
					<div className="text-md text-gray-800">Dr. Caroline</div>
					<div className="text-sm text-gray-500">3:00pm - 5:00pm</div>
				</div>
			</div>
		</div>
	);
};

export default RightNavbar;
