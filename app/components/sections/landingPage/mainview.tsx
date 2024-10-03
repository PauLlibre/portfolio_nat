import Image from "next/image";
import mainImg from "../../../public/images/mainImg.jpg";

export default function MainView() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-2/3 gap-10 pb-20">
            <Image src={mainImg} alt="Natalia Bertran" className="w-full h-full object-cover" />
        </div>
    );
}