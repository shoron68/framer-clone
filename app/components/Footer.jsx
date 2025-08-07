import Link from "next/link";

export default function () {
    return (
        <div className="bg-[#8D493A]">
            <div className="max-w-[1905px] mx-auto px-[50px]">
                <div className="lg:py-[140px] py-[80px]">
                    <div className="lg:hidden block">
                        <h3 className="text-[20px] font-inter text-[#8D493A] font-bold">
                            <Link href="/">Troscán</Link>
                        </h3>
                    </div>
                    <div className="lg:flex justify-center gap-x-[100px]">
                        <div className="">
                            <h2 className="text-[14px] text-[#f8ede3b9] font-archivo font-normal text-center ">Sitemap</h2>
                            <ul className="lg:mt-[20px] mt-[10px] text-center">
                                <li className="text-[22px] font-inter font-normal text-[#F8EDE3] "><Link href="/about">About</Link></li>
                                <li className="text-[22px] font-inter font-normal text-[#F8EDE3] "><Link href="/project">Projects</Link></li>
                                <li className="text-[22px] font-inter font-normal text-[#F8EDE3] "><Link href="/link">News</Link></li>
                                <li className="text-[22px] font-inter font-normal text-[#F8EDE3] "><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="">
                            <h2 className="text-[14px] text-[#f8ede3b9] font-archivo font-normal  text-center">Socials</h2>
                            <ul className="lg:mt-[20px] mt-[10px] text-center">
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3] ">Facebook</a></li>
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3] ">Instagram</a></li>
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3]">LinkedIn</a></li>
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3] ">Twitter</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h2 className="text-[14px] text-[#f8ede3b9] font-archivo font-normal  text-center">More</h2>
                            <ul className="lg:mt-[20px] mt-[10px] text-center">
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3]">License</a></li>
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3]">Grainient</a></li>
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3]">Inspirux</a></li>
                                <li><a href="" className="text-[22px] font-inter font-normal text-[#F8EDE3]">Store</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="border-t-[1px] border-[#f8ede3a1]">
                    <div className="py-[30px]">
                        <p className="text-[14px] font-archivo font-normal text-[#f8ede3c0] leading-[100%] text-center">© 2025, All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}