import Logo from '../../(assets)/love-vision.svg'
import Link from 'next/link'
export default function LogoWithName(){
    return (<div className="flex items-center gap-3">
                <Link href='/' className="cursor-pointer">
                    <Logo />
                </Link>
                <Link href='/' className="cursor-pointer">
                    <div className="flex flex-col leading-none">
                        <span className="text-lg font-bold text-[#af3d6e]">LOVE VISION</span>
                        <span className={`text-md font-bold tracking-wider`}>FOUNDATION</span>
                    </div>
                </Link>
            </div>)
}