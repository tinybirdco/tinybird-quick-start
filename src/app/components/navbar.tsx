import Image from "next/image";
import Link from "next/link";

const customers = [
    { value: 'alasdair', label: 'Alasdair' },
    { value: 'april', label: 'April' },
    { value: 'ariel', label: 'Ariel' },
    { value: 'cameron', label: 'Cameron' },
    { value: 'jim', label: 'Jim' }
];

interface NavBarProps {
    selectedCustomer: string;
    setSelectedCustomer: (customer: string) => void;
}

export default function NavBar({ selectedCustomer, setSelectedCustomer }: NavBarProps) {
    return (
        <>
            <div className="fixed top-0 z-50 w-full flex justify-center bg-tinybird-navbar-green text-tinybird-space-cadet">
                <div className="flex h-12 max-w-screen-xl items-center justify-between w-full">
                    <Link href="/" className="flex items-center text-xl">
                        <Image
                            src="/logo.png"
                            alt="Tinybird logo"
                            width="45"
                            height="45"
                        ></Image>
                        <p className="font-semibold">Early Bird Café</p>
                    </Link>
                    <div>
                        <select className="rounded-md" value={selectedCustomer} onChange={e => setSelectedCustomer(e.target.value)}>
                            {customers.map((customer) => (
                                <option key={customer.value}>{customer.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}