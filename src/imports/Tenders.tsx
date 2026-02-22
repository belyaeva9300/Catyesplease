import svgPaths from "./svg-yfx78rqbhf";
import imgImage3 from "figma:asset/28eb05ac180088e6593a479c5260e41a09421a7e.png";

function ExPost() {
  return (
    <div className="absolute bg-[#e0e0e0] bottom-[356px] content-stretch flex flex-col gap-[30px] items-start pb-[30px] pt-[20px] px-[20px] right-[106px] rounded-[5px] w-[840px]" data-name="Ex post">
      <p className="font-['Gaussian_Blur:Regular',sans-serif] h-[36px] leading-[normal] not-italic relative shrink-0 text-[40px] text-black w-[354px] whitespace-pre-wrap">@username</p>
      <p className="font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        i saw tenders the other day isn’t she so cute
      </p>
      <div className="bg-[#747474] h-[270px] rounded-[5px] shrink-0 w-[549px]" />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="absolute bottom-[6px] h-[887px] overflow-x-clip overflow-y-auto right-0 w-[1512px]" data-name="content container">
      <ExPost />
      <div className="absolute bg-[#e0e0e0] bottom-[33px] h-[265px] right-[104px] rounded-[5px] w-[840px]" />
      <div className="absolute bg-[#e0e0e0] bottom-[-470px] h-[445px] right-[106px] rounded-[5px] w-[840px]" />
      <div className="absolute bg-[#e0e0e0] bottom-[-973px] h-[445px] right-[106px] rounded-[5px] w-[840px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[95px] overflow-clip pointer-events-auto sticky top-0 w-[1512px]">
      <div className="absolute bottom-0 h-[83px] left-[40px] pointer-events-none top-[12px]">
        <p className="font-['Palette_Mosaic:Regular',sans-serif] leading-[normal] not-italic pointer-events-auto sticky text-[40px] text-black top-0">Kittygram</p>
      </div>
      <div className="absolute bottom-0 h-[6.5px] left-[-72px] pointer-events-none top-[88.5px]">
        <div className="flex h-0 items-center justify-center pointer-events-auto sticky top-0 w-[1647.008px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[1647.008px]">
              <div className="absolute inset-[-4px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1647.01 4">
                  <line id="Line 1" stroke="var(--stroke-0, black)" strokeDasharray="10 10" strokeWidth="4" x2="1647.01" y1="2" y2="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] left-[478px] not-italic text-[40px] text-black top-[22px]">baby</p>
      <div className="absolute bottom-0 h-[73px] left-[312px] pointer-events-none top-[22px]">
        <p className="font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] pointer-events-auto sticky text-[40px] text-black top-0" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          [map]
        </p>
      </div>
      <p className="absolute font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] left-[1362px] not-italic text-[40px] text-black top-[22px]">other</p>
      <p className="absolute font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[1129px] text-[40px] text-black top-[22px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        jo + beth
      </p>
      <p className="absolute font-['Gaussian_Blur:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[829px] text-[40px] text-black top-[22px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        burger + ham
      </p>
      <p className="absolute font-['Gaussian_Blur:Regular',sans-serif] leading-[normal] left-[623px] not-italic text-[40px] text-black top-[22px]">tenders</p>
    </div>
  );
}

export default function Tenders() {
  return (
    <div className="bg-[#dfb018] relative size-full" data-name="tenders">
      <ContentContainer />
      <div className="absolute bottom-0 h-[982px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <div className="absolute bottom-[42px] left-[40px] size-[91px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
          <circle cx="45.5" cy="45.5" fill="var(--fill-0, black)" id="Ellipse 1" r="45.5" />
        </svg>
      </div>
      <div className="absolute left-[51px] overflow-clip size-[69px] top-[860px]" data-name="Plus">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-4.97%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.25 44.25">
              <path d={svgPaths.p250f2720} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[366px] left-0 top-[58px] w-[324px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}