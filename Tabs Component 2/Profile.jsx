import React from "react";

export default function Profile() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6 p-6 text-center">
            <img
                className="mx-auto h-24 w-24 rounded-full ring-2 ring-blue-500"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
            />
            <h2 className="mt-4 text-lg font-bold text-gray-900">Adinath</h2>
            <h4 className="text-blue-600">Front End Developer</h4>
            <p className="text-gray-600 my-3">
                Passionate developer based in San Francisco. Loves building cool products and sharing knowledge.
            </p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">GitHub</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="#" className="text-gray-800 hover:text-black">Portfolio</a>
            </div>
            <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Contact
            </button>
        </div>
    );
}
