import Navbar from '../components/Navbar';

const Login = () => {
	return (
		<div>
			<Navbar />
			<div className="mx-auto w-1/3 my-12">
				<div className="text-3xl font-bold text-gray-700">Login</div>
				<form className="mt-7 grid grid-cols-1 gap-5">
					<input
						className="p-2 outline-none rounded"
						placeholder="Email Address or Username"
					/>
					<input className="p-2 outline-none rounded" placeholder="Password" />
					<div className="ml-auto cursor-pointer text-gray-500">
						Forget Password?
					</div>
				</form>
				<button className="mt-5 px-4 w-full py-2 rounded bg-indigo-700 text-white">
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
