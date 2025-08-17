import React from "react";

export default function Settings() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Settings</h2>
      <form className="space-y-5">
        <div>
          <label className="block text-left font-medium mb-1 text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue="johndoe"
          />
        </div>
        <div>
          <label className="block text-left font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue="johndoe@gmail.com"
          />
        </div>
        <div>
          <label className="block text-left font-medium mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Update Settings
        </button>
      </form>
    </div>
  );
}
