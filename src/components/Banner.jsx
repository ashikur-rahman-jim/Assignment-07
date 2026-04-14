import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <section className="w-11/12 mx-auto my-10 bg-[#F8FAFC] px-4 py-8 md:px-8 lg:px-16">
            {/* Top Section */}
            <div className="text-center mb-10 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937]">
                    Friends to keep close in your life
                </h2>
                <p className="mt-2 text-[#64748B] max-w-xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="mt-4 inline-flex items-center space-x-2 bg-[#244D3F] text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                    <Plus className="w-5 h-5" />
                    <span>Add a Friend</span>
                </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#244D3F]">10</h3>
                    <p className="text-[#64748B]">Total Friends</p>
                </div>

                <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#244D3F]">3</h3>
                    <p className="text-[#64748B]">On Track</p>
                </div>

                <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#244D3F]">6</h3>
                    <p className="text-[#64748B]">Need Attention</p>
                </div>

                <div className="bg-gray-50 rounded-lg shadow p-4 text-center">
                    <h3 className="text-2xl font-bold text-[#244D3F]">12</h3>
                    <p className="text-[#64748B]">Interactions This Month</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
