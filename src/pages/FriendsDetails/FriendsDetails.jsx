import { AppWindow, Bell, MessageSquareMore, PhoneCall, Trash2, Video, Pencil } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendsDetails = () => {
    const { FriendId } = useParams();
    const friends = useLoaderData();
    
    const expectedFriend = friends?.find((friend) => friend.id == FriendId)

    return (
        <section className="min-h-screen bg-slate-50 p-4 md:p-8 lg:p-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Left Sidebar - Profile Info */}
                <div className="md:col-span-4 lg:col-span-3 space-y-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-gray-100">
                            <img src={expectedFriend.picture} alt={expectedFriend.name} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{expectedFriend.name}</h2>
                        <span className="mt-2 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                            {expectedFriend.status}
                        </span>
                        <span className="mt-2 px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">
                            {expectedFriend.tags[0]}
                        </span>
                        <p className="mt-4 text-gray-500 text-sm">{expectedFriend.bio}</p>
                        <p className="text-xs text-gray-400 mt-2">Preferred: email</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <button className="w-full flex items-center justify-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 text-gray-700 transition">
                            <Bell size={18} /> <span className="font-medium">Snooze 2 Weeks</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 text-gray-700 transition">
                            <AppWindow size={18} /> <span className="font-medium">Archive</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 p-4 cursor-pointer hover:bg-red-50 text-red-500 transition">
                            <Trash2 size={18} /> <span className="font-medium">Delete</span>
                        </button>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="md:col-span-8 lg:col-span-9 space-y-6">
                    
                    {/* Top Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-[#244D3F]">{expectedFriend.days_since_contact}</h3>
                            <p className="text-sm text-gray-500 mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-3xl font-bold text-[#244D3F]">{expectedFriend.goal}</h3>
                            <p className="text-sm text-gray-500 mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-2xl font-bold text-[#244D3F] leading-9">Feb 27 2026</h3>
                            <p className="text-sm text-gray-500 mt-1">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-bold text-[#244D3F]">Relationship Goal</h4>
                            <button className="px-4 py-1 border border-gray-200 rounded text-sm font-medium cursor-pointer hover:bg-gray-50">Edit</button>
                        </div>
                        <p className="text-gray-600">Connect every <span className="font-bold text-gray-800">{expectedFriend.goal} days</span></p>
                    </div>

                    {/* Quick Check-In Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="text-lg font-bold text-[#244D3F] mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-transparent cursor-pointer hover:border-teal-200 hover:bg-teal-50 transition group">
                                <PhoneCall className="text-gray-600 group-hover:text-teal-600 mb-2" />
                                <span className="text-sm font-medium text-gray-700">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-transparent cursor-pointer hover:border-teal-200 hover:bg-teal-50 transition group">
                                <MessageSquareMore className="text-gray-600 group-hover:text-teal-600 mb-2" />
                                <span className="text-sm font-medium text-gray-700">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-transparent cursor-pointer hover:border-teal-200 hover:bg-teal-50 transition group">
                                <Video className="text-gray-600 group-hover:text-teal-600 mb-2" />
                                <span className="text-sm font-medium text-gray-700">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FriendsDetails;