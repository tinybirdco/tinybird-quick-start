'use client';

import { useState } from "react";
import NavBar from "../components/navbar";

import { NextReward } from "../components/next-reward";

export default function Page() {
    const [selectedCustomer, setSelectedCustomer] = useState('April');
    console.log(selectedCustomer);
    
    return (
        <>
            <div>
                <NavBar selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />
            </div>
            <div className="flex flex-col min-h-screen items-center justify-between mx-10 pt-16">
                <div className="flex flex-1 flex-col items-center justify-between w-full min-h-screen max-w-screen-xl">
                    <div className="flex flex-1 justify-center w-full gap-8 mb-10 max-h-full min-h-1100px">

                        <div className="w-1/2 rounded-md bg-white shadow-tinybird-emerald shadow-sm p-5">
                            <p className='text-2xl text-semibold pb-3'>Order History</p>
                        </div>

                        <div className="w-1/2 flex flex-col gap-y-4">

                            <div className="h-1/2 rounded-md bg-white shadow-tinybird-emerald shadow-sm p-5 space-y-3">
                                <p className='text-2xl text-semibold'>{selectedCustomer}&apos;s Profile</p> 
                                {/* add progress chart here */}
                                <NextReward />
                            </div>

                            <div className="h-1/2 rounded-md bg-white shadow-tinybird-emerald shadow-sm p-5">
                                <p className='text-2xl text-semibold pb-3'>Favorites</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}