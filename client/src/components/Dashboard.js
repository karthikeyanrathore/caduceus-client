import { useState } from 'react';
import SideNavbar from './LeftNavbar';

const Dashboard = () => {
	return (
		<div className="mt-7">
			<div className="text-3xl font-bold text-gray-700">Dashboard</div>
			<div className="my-8 grid grid-cols-3 gap-5">
				<div className="bg-white p-5 rounded-lg flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-full w-14 my-auto p-3 rounded-lg text-white bg-pink-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
					</svg>
					<div className="ml-5">
						<div className="text-lg font-medium text-gray-400">Total Staff</div>
						<div className="text-2xl font-bold text-gray-700">150</div>
					</div>
				</div>
				<div className="bg-white p-5 rounded-lg flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-full w-14 my-auto p-3 rounded-lg text-white bg-blue-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
							clipRule="evenodd"
						/>
					</svg>
					<div className="ml-5">
						<div className="text-lg font-medium text-gray-400">
							Total Patients
						</div>
						<div className="text-2xl font-bold text-gray-700">970</div>
					</div>
				</div>
				<div className="bg-white p-5 rounded-lg flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-full w-14 my-auto p-3 rounded-lg text-white bg-green-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
					</svg>
					<div className="ml-5">
						<div className="text-lg font-medium text-gray-400">Total Staff</div>
						<div className="text-2xl font-bold text-gray-700">250</div>
					</div>
				</div>
			</div>
			<div className="bg-white p-5 rounded-lg">
				<div className="text-lg font-medium text-gray-800">
					Latest Patient Data
				</div>
				<ul className="divide-y-2 mt-5">
					<li className="grid grid-cols-7 py-2 font-medium text-gray-500">
						<div>S. No</div>
						<div>Date In</div>
						<div>Name</div>
						<div>Age</div>
						<div>Gender</div>
						<div className="col-span-2">Disease</div>
					</li>
					<li className="grid grid-cols-7 py-2 font-medium text-gray-600">
						<div>374</div>
						<div>30/04/22</div>
						<div>Manish S.</div>
						<div>21</div>
						<div>Male</div>
						<div className="col-span-2">Heart Dysfunction</div>
					</li>
					<li className="grid grid-cols-7 py-2 font-medium text-gray-600">
						<div>463</div>
						<div>1/05/22</div>
						<div>Tanuj S.</div>
						<div>35</div>
						<div>Male</div>
						<div className="col-span-2">Kidney Stones</div>
					</li>
					<li className="grid grid-cols-7 py-2 font-medium text-gray-600">
						<div>239</div>
						<div>1/05/22</div>
						<div>Kartik R.</div>
						<div>27</div>
						<div>Male</div>
						<div className="col-span-2">Liver Failure</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
