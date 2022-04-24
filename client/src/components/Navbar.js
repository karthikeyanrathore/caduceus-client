import { useState } from 'react';

const Navbar = () => {
	const [search, setSearch] = useState('');
	return (
		<div className="bg-white p-5 flex">
			<div className="text-blue-500 font-bold flex align-middle text-2xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 my-auto"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
					/>
				</svg>
				<h3 className="ml-2 mt-1">Cadeceus</h3>
			</div>
			<div className="ml-20 text-base w-72 text-gray-800 bg-blue-100 flex rounded-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 my-auto m-3 text-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<input
					className="pr-5 py-2 bg-inherit rounded-lg outline-none"
					placeholder="Search..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="ml-auto text-lg my-auto flex gap-6">
				<div className="relative my-auto">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
						/>
					</svg>
					<div className="w-3 h-3 bg-blue-300 rounded-full absolute top-0 right-0"></div>
				</div>
				<div className="relative my-auto">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
					<div className="w-3 h-3 bg-blue-300 rounded-full absolute top-0 right-0"></div>
				</div>
				<div className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 bg-blue-100 rounded-full p-1.5 text-gray-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
