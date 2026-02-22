import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();
  
  return (
    <div className="h-[95px] overflow-clip sticky top-0 w-full bg-[rgba(255,255,255,0.9)] backdrop-blur-sm z-10">
      <div className="relative h-full">
        <div className="absolute bottom-0 h-[83px] left-[40px] top-[12px]">
          <Link to="/">
            <p className="font-['Palette_Mosaic:Regular',sans-serif] leading-[normal] not-italic text-[40px] text-black hover:opacity-70 transition-opacity cursor-pointer">
              Kittygram
            </p>
          </Link>
        </div>
        <div className="absolute bottom-0 h-[6.5px] left-[-72px] top-[88.5px]">
          <div className="flex h-0 items-center justify-center w-[1647.008px]">
            <div className="flex-none rotate-180">
              <div className="h-0 relative w-[1647.008px]">
                <div className="absolute inset-[-4px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1647.01 4">
                    <line stroke="black" strokeDasharray="10 10" strokeWidth="4" x2="1647.01" y1="2" y2="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-[22px] left-[312px] flex gap-8">
          <Link to="/map">
            <p className="font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[28px] text-black hover:opacity-70 transition-opacity cursor-pointer" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
              [map]
            </p>
          </Link>
          <Link to="/baby">
            <p className={`font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] text-[28px] hover:opacity-70 transition-opacity cursor-pointer ${location.pathname === '/baby' ? 'text-[#2b9eb3]' : 'text-black'}`}>
              baby
            </p>
          </Link>
          <Link to="/tenders">
            <p className={`font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] text-[28px] hover:opacity-70 transition-opacity cursor-pointer ${location.pathname === '/tenders' ? 'text-[#dfb018]' : 'text-black'}`}>
              tenders
            </p>
          </Link>
          <Link to="/burgerham">
            <p className={`font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[28px] hover:opacity-70 transition-opacity cursor-pointer ${location.pathname === '/burgerham' ? 'text-[#2bb31a]' : 'text-black'}`} style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
              burger + ham
            </p>
          </Link>
          <Link to="/jobeth">
            <p className={`font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] text-[28px] hover:opacity-70 transition-opacity cursor-pointer ${location.pathname === '/jobeth' ? 'text-[#f8333c]' : 'text-black'}`} style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
              jo + beth
            </p>
          </Link>
          <Link to="/other">
            <p className={`font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] text-[28px] hover:opacity-70 transition-opacity cursor-pointer ${location.pathname === '/other' ? 'text-[#70566d]' : 'text-black'}`}>
              other
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
