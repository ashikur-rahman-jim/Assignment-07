import React from 'react';
import FooterLogo from '../assignment-assets/logo-xl.png';
import Insta from '../assignment-assets/instagram.png';
import Facebook from '../assignment-assets/facebook.png';
import X from '../assignment-assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center">
                <div className="mb-4">
                    <img src={FooterLogo} alt="KeenKeeper Logo" className="w-40 md:w-48 lg:w-56" />
                </div>

                <p className="text-sm mb-4 md:text-base lg:mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div>
                    <p className="font-medium text-xl mb-3">Social Links</p>
                    <div className="flex gap-4 justify-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <img src={Insta} alt="Instagram" className="w-6 h-6" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <img src={X} alt="Twitter" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            <hr className="max-w-6xl mx-auto border-[#1A8862]" />

            {/* Bottom Section */}
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
                <div className="mb-4 md:mb-0">
                    <p className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <p className="hover:text-[#FAFAFA] cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-[#FAFAFA] cursor-pointer">Terms of Service</p>
                    <p className="hover:text-[#FAFAFA] cursor-pointer">Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
