import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

const AppointmentList = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		let i = 0;
		setList([]);
		while (i < 10) {
			console.log(i + ' ' + list);
			setList((prev) => [
				...prev,
				{
					id: faker.random.alpha(5),
					name: faker.name.firstName(),
					doc: faker.name.findName(),
					ward: faker.datatype.number({ min: 0, max: 250 }),
					time: faker.time.recent(),
				},
			]);
			i++;
		}
	}, []);
	console.log(list);

	return (
		<div className="mt-7">
			<div className="text-3xl font-bold text-gray-700">Appointments</div>
			<div className="mt-7 bg-white p-5 rounded-lg">
				<div className="text-lg font-medium text-gray-800">
					Patient Appointments
					<span className="ml-4 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
						Today
					</span>
				</div>
				<ul className="divide-y-2 mt-5">
					<li className="grid grid-cols-6 py-2 font-medium text-gray-400">
						<div>Patient ID</div>
						<div>Name</div>
						<div className="col-span-2">Assigned Doctor</div>
						<div>Ward No.</div>
						<div>Time</div>
					</li>
					{list.map((appointment) => (
						<li className="grid grid-cols-6 py-2 font-medium text-gray-600">
							<div>{appointment.id}</div>
							<div>{appointment.name}</div>
							<div className="col-span-2">{appointment.doc}</div>
							<div>{appointment.ward}</div>
							<div>
								{faker.datatype.number({ min: 8, max: 11 })}am-
								{faker.datatype.number({ min: 8, max: 12 })}pm
							</div>
						</li>
					))}
				</ul>
				<div className="flex mt-5">
					<div className="ml-auto">
						<button
							type="button"
							class="r`w-calendar-btn-left rw-calendar-btn rw-btn"
						>
							<svg
								height="1em"
								fill="currentcolor"
								viewBox="0 0 320 512"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M34.52 239.03L228.87 44.69a24 24 0 0 1 33.94 0l22.67 22.67a24 24 0 0 1 .04 33.9L131.49 256l154.02 154.75a24 24 0 0 1-.04 33.9l-22.67 22.67a24 24 0 0 1-33.94 0L34.52 272.97a24 24 0 0 1 0-33.94z"></path>
							</svg>
						</button>
						<button
							type="button"
							class="rw-calendar-btn-today rw-calendar-btn rw-btn my-auto"
						>
							10/51
						</button>
						<button
							title="Navigate forward"
							type="button"
							disabled=""
							aria-label="Navigate forward"
							aria-disabled="true"
							class="rw-calendar-btn-right rw-calendar-btn rw-btn"
						>
							<svg
								height="1em"
								fill="currentcolor"
								viewBox="0 0 320 512"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M285.48 272.97L91.13 467.31a24 24 0 0 1-33.94 0l-22.67-22.66a24 24 0 0 1-.04-33.9L188.5 256 34.48 101.25a24 24 0 0 1 .04-33.9L57.2 44.7a24 24 0 0 1 33.94 0l194.35 194.34a24 24 0 0 1 0 33.94z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentList;
