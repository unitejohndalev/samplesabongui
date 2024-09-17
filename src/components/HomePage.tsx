/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { Menu, Wallet, X } from "lucide-react"

export default function Homepage() {
    const [ isProfileOpen, setIsProfileOpen ] = useState(false)
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">MyApp</h1>
                    <nav className="hidden md:flex items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
                        </ul>
                        <UserProfileButton isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
                    </nav>
                    <div className="flex items-center md:hidden">
                        <UserProfileButton isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="ml-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed right-0 top-0 bottom-0 w-64 bg-white p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}

            <main className="container mx-auto px-4 py-8">
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to MyApp</h2>
                        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/vRw1E35r3mg"
                                title="SABONG NATION QT"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>

                        
                          
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Make a Payment</h3>
                        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                            <Wallet className="inline-block mr-2 h-5 w-5" /> Pay with GCash
                        </button>
                    </section>
                </div>
            </main>

            {/* User Profile Modal */}
            {isProfileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-md w-full">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold">User Profile</h2>
                                <button
                                    onClick={() => setIsProfileOpen(false)}
                                    className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
                                    UN
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">User Name</h3>
                                    <p className="text-gray-600">user@example.com</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Bio</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                                    <p>Manila, Philippines</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500">Member Since</h4>
                                    <p>January 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

interface UserProfileButtonProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserProfileButton({ setIsOpen }: UserProfileButtonProps) {
    return (
        <button
            onClick={() => setIsOpen(true)}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <span className="text-xl font-bold text-gray-600">UN</span>
        </button>
    )
}