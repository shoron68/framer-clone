import Link from "next/link";


export default function Nav (){
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
            <div className=" pr-[5px] pl-[20px] py-[5px] bg-[#F8EDE3] w-[700px] rounded-[5px] mx-auto mt-[30px] shadow-2xl">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h3 className="text-[20px] font-inter text-[#8D493A] font-bold "><Link href="/">Troscán</Link></h3>
                    </div>
                    <div className="">
                        <ul className="flex gap-x-[20px]">
                            <li className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500 ">
                            <Link href="/about">About</Link>
                            </li>
                            <li className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500 " >
                           <Link href="/project">Projects</Link>
                            </li>
                            <li className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-400 ">
                            <Link href="/news">News</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <button className="py-[16px] px-[26px] bg-[#8D493A] text-[#F8EDE3] rounded-[5px] font-inter font-medium hover:bg-[#B85842] duration-500"><Link href="/contact">Contact us</Link></button>
                    </div>
                </div>
        </div>
        </div>
    )
}