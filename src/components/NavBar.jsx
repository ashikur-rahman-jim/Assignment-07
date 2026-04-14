import React, { useState } from 'react';
import NavLogo from '../assignment-assets/logo.png'
import { ChartLine, History, House } from 'lucide-react';
import { Link } from 'react-router';

const NavBar = () => {

    const [selectedTab, setSelectedTab] = useState("available");

    const handleHomeTab = () => {
        setSelectedTab("available");
    }

    const handleTimelineTab = () => {
        setSelectedTab("timeline");
    }

    const handleStatsTab = () => {
        setSelectedTab("stats");
    }

    return (
        <nav className="w-full bg-white px-4 py-2 flex items-center justify-between shadow">
            {/* Logo */}
            <div className="flex items-center">
                <img src={NavLogo} alt="KeenKeeper Logo" className="" />
            </div>

            {/* Nav Buttons */}
            <div className="flex space-x-2 md:space-x-4">
                <Link to={"/"} onClick={handleHomeTab} className={`flex items-center space-x-1 px-3 py-2 rounded-md ${selectedTab === "available" ? "bg-[#244D3F] text-white font-semibold" : ""} text-[#64748B] font-medium cursor-pointer shadow`}>
                    <House className="w-4 h-4" />
                    <span className="hidden sm:inline">Home</span>
                </Link>

                <Link to={"/timeline"} onClick={handleTimelineTab} className={`flex items-center space-x-1 px-3 py-2 rounded-md ${selectedTab === "timeline" ? "bg-[#244D3F] text-white font-semibold" : ""} text-[#64748B] font-medium cursor-pointer shadow`}>
                    <History className="w-4 h-4" />
                    <span className="hidden sm:inline">Timeline</span>
                </Link>

                <Link to={"/stats"} onClick={handleStatsTab} className={`flex items-center space-x-1 px-3 py-2 rounded-md ${selectedTab === "stats" ? "bg-[#244D3F] text-white font-semibold" : ""} text-[#64748B] font-medium cursor-pointer shadow`}>
                    <ChartLine className="w-4 h-4" />
                    <span className="hidden sm:inline">Stats</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
