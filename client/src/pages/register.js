import Navbar from '../components/Navbar';

const Register = () => {
	return (
		<div>
			<Navbar />
			<div className="mx-auto w-2/3 my-12">
				<div className="text-3xl font-bold text-gray-700">
					New Patient Registration
				</div>
				<form className="mt-7 grid grid-cols-1 gap-5">
					<div className="grid grid-cols-2 gap-5">
						<input
							className="p-2 outline-none rounded"
							placeholder="First Name"
						/>
						<input
							className="p-2 outline-none rounded"
							placeholder="Last Name"
						/>
					</div>
					<div className="grid grid-cols-2 gap-5">
						<input
							className="p-2 outline-none rounded"
							placeholder="Patient's Email Adress"
						/>
						<input
							className="p-2 outline-none rounded"
							placeholder="Patient's Mobile Number"
						/>
					</div>
					<div className="grid grid-cols-3 gap-5">
						<input className="p-2 outline-none rounded" placeholder="Gender" />
						<input className="p-2 outline-none rounded" placeholder="DOB" />
						<input className="p-2 outline-none rounded" placeholder="Age" />
					</div>
					<textarea
						className="p-2 outline-none rounded"
						placeholder="Address"
					/>
				</form>
				<button className="mt-5 px-4 py-2 rounded bg-indigo-700 text-white">
					Register
				</button>
			</div>
		</div>
	);
};

export default Register;
