'use client';

import { useState } from "react";
import NavBar from "./components/navbar";
import { Orders, Leaderboard, CustomerDetails, SpendUntilNextReward } from "./components/tinybird-charts";

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

                        {/* column 1 */}
                        <div className="w-1/2 rounded-md bg-white shadow-tinybird-emerald shadow-sm p-5">
                            <p className='text-2xl text-semibold pb-3'>Order History</p>
                            <Orders name={selectedCustomer}/>
                        </div>

                        {/* column 2 */}
                        <div className="w-1/2 flex flex-col gap-y-4">

                            {/* column 2, row 1 */}
                            <div className="h-1/2 rounded-md bg-white shadow-tinybird-emerald shadow-sm p-5 space-y-3">
                                <p className='text-2xl text-semibold'>{selectedCustomer}&apos;s Profile</p> 
                                <CustomerDetails name={selectedCustomer}/>
                                <SpendUntilNextReward name={selectedCustomer}/>
                            </div>

                            {/* column 2, row 2 */}
                            <div className="h-1/2 rounded-md bg-white shadow-tinybird-emerald shadow-sm p-5">
                                <p className='text-2xl text-semibold pb-3'>Favorites</p>
                                <Leaderboard name={selectedCustomer}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}