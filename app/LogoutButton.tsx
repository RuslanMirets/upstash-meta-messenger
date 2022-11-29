"use client";

function LogoutButton() {
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={() => console.log("Logout")}
		>
			Sign Out
		</button>
	);
}

export default LogoutButton;
