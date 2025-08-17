import React from "react";

const messages = [
    {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Alice Smith",
        content: "Hey John, how's it going?",
        time: "2 min ago"
    },
    {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        name: "Michael Lee",
        content: "Can we reschedule our meeting?",
        time: "5 min ago"
    },
    {
        id: 3,
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        name: "Priya Patel",
        content: "I'll send you the docs tonight.",
        time: "10 min ago"
    }
];

export default function Messages() {
    return (
        <div className="max-w-lg mx-auto bg-white shadow rounded-xl p-6 mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Messages</h2>
            <ul className="divide-y divide-gray-200">
                {messages.map((msg) => (
                    <li key={msg.id} className="py-4 flex items-start gap-4">
                        <img
                            src={msg.avatar}
                            alt={msg.name}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-800">{msg.name}</span>
                                <span className="text-xs text-gray-400">{msg.time}</span>
                            </div>
                            <p className="text-gray-700 mt-1">{msg.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
