import Image from "next/image";

export default function Transforming() {
    return (
        <div className="py-[140px]">


            <div className="mx-[50px]">
                <div className="grid grid-cols-3 grid-rows-1 gap-12">
                <div >
                    <Image
                        src="https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg"
                        width={361}
                        height={410}
                        alt="image1"
                    />
                </div>
                <div >
                    <Image
                        src="https://framerusercontent.com/images/nYgQL26JA1Ioq4xVHJRlasIEC6Y.jpeg"
                        width={362}
                        height={241}
                        alt="image2" />
                </div>
                <div >
                    <Image
                        src="https://framerusercontent.com/images/rCYE8FEyC5lN6m5coOuFOOgDJ8A.jpeg"
                        width={451}
                        height={328}
                        alt="image3" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-[40px] font-archivo font-normal text-[#844436] w-[600px] text-center">Transforming spaces with style, through Troscán's exquisite design expertise.</p>
            </div>
            <div className="mt-[100px]">
                <div className="grid grid-cols-3 grid-rows-1 gap-12">
                <div >
                    <Image
                        src="https://framerusercontent.com/images/VfSDa1aOzvtIWAcGV6dtAprgM.jpeg"
                        width={361}
                        height={273}
                        alt="image4"
                    />
                </div>
                <div >
                    <Image
                        src="https://framerusercontent.com/images/5SmAeNVODUEpPeB9LOhC2baAXP4.jpeg"
                        width={361}
                        height={410}
                        alt="image5" />
                </div>
                <div >
                    <Image
                        src="https://framerusercontent.com/images/rCYE8FEyC5lN6m5coOuFOOgDJ8A.jpeg"
                        width={397}
                        height={241}
                        alt="image6" />
                </div>
            </div>
            </div>
            </div>

        </div>
    );
}