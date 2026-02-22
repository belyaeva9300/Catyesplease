import imgBasemapImage from "figma:asset/07185825a6a72a3f22c15d6fdcee2bfb6009d8c3.png";

function Frame() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[93px] left-0 overflow-clip top-0 w-[1512px]">
      <p className="absolute font-['Palette_Mosaic:Regular',sans-serif] h-[53px] leading-[normal] left-[38px] not-italic text-[40px] text-black top-[8px] w-[222px] whitespace-pre-wrap">Kittygram</p>
      <div className="absolute flex h-0 items-center justify-center left-[-74px] top-[84.5px] w-[1647.008px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1647.008px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1647.01 4">
                <line id="Line 2" stroke="var(--stroke-0, black)" strokeDasharray="10 10" strokeWidth="4" x2="1647.01" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-[75px] font-['Gaussian_Blur:Regular',sans-serif] h-[58px] leading-[normal] not-italic right-[1036px] text-[40px] text-black translate-x-full translate-y-full w-[115px] whitespace-pre-wrap">baby</p>
      <p className="absolute bottom-[75px] font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] h-[58px] leading-[normal] right-[1202px] text-[40px] text-black translate-x-full translate-y-full w-[117px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        [map]
      </p>
      <p className="absolute bottom-[75px] font-['Gaussian_Blur:Regular',sans-serif] h-[58px] leading-[normal] not-italic right-[152px] text-[40px] text-black translate-x-full translate-y-full w-[300px] whitespace-pre-wrap">other</p>
      <p className="absolute bottom-[75px] font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] h-[58px] leading-[normal] right-[385px] text-[40px] text-black translate-x-full translate-y-full w-[201px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        jo + beth
      </p>
      <p className="absolute bottom-[75px] font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] h-[58px] leading-[normal] right-[685px] text-[40px] text-black translate-x-full translate-y-full w-[261px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        burger + ham
      </p>
      <p className="absolute bottom-[75px] font-['Gaussian_Blur:Regular',sans-serif] h-[58px] leading-[normal] not-italic right-[891px] text-[40px] text-black translate-x-full translate-y-full w-[206px] whitespace-pre-wrap">tenders</p>
    </div>
  );
}

export default function Map() {
  return (
    <div className="bg-white relative size-full" data-name="Map">
      <div className="absolute left-[-1089px] size-[2850px] top-[-260px]" data-name="Basemap image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBasemapImage} />
      </div>
      <Frame />
    </div>
  );
}