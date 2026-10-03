import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getReviews, type MarketReview } from '../../../../backend/src/clients/reviewApi';

const assetPathPrefix = "/assets";
const oliveIconFilter = 'brightness(0) saturate(100%) invert(35%) sepia(37%) saturate(1125%) hue-rotate(35deg) brightness(91%) contrast(89%)';
const lightOliveIconFilter = 'brightness(0) saturate(100%) invert(79%) sepia(37%) saturate(600%) hue-rotate(34deg) brightness(94%) contrast(86%)';
const orangeIconFilter = 'brightness(0) saturate(100%) invert(68%) sepia(89%) saturate(1475%) hue-rotate(359deg) brightness(102%) contrast(102%)';
const yellowOrangeIconFilter = 'brightness(0) saturate(100%) invert(77%) sepia(58%) saturate(964%) hue-rotate(359deg) brightness(102%) contrast(101%)';
const imgIconHeroiconsOutlineFire = `${assetPathPrefix}/75326.svg`;
const imgPasarKotaGateAndEntrance = `${assetPathPrefix}/204f2.png`;
const imgAb6AXuCpo95GlxG3Zb5NODkeyg7YTl6B2ThD9SFwNy43Y6C7AnkoJd23VsqPxeIj62Vebilr730DtrFnCaFf8PQhLRhXt6BBYbSdVekfTlg70CflWcrY5Cc0KiUMrdJptOuAXfNo11F7EVkBkrgI4Qvlj3XfZkLZcjiO4Tmczi2525UHfxsOvkSutFtFgje7NJaZKku8Is7UrkDpT6Hs9CcW8OYa60GrTq6Ch7XT7CPmHmqrXjzQx2 = `${assetPathPrefix}/2312e.png`;
const imgAb6AXuD70MSjDsiFl9I7O7L1Ed0NtI83H1Au3E1Lu0GtUuJ8MjmQfzHWnh7CrpvFhbxARmRJtmHSueK9Yzgu54PiUDrreVxZJvg7L9UF3CZOqiVwG2DtNvctCsGmuwJn2ZaMovgVw8ZfcCnEok787T7AqvH8RCAa1FXpfHiKrPG3F7T29YRrHQkgXqjrFghs7Sc0KO8WxszjpihnrhnyEoVjoA27NsfjBdS1Otw4ObBfgm2VAl = `${assetPathPrefix}/e576e.png`;
const imgSvgFlowerIconShape = `${assetPathPrefix}/c03df.svg`;
const imgSvg = `${assetPathPrefix}/14528.svg`;
const imgContainer = `${assetPathPrefix}/01fc8.svg`;
const imgContainer1 = `${assetPathPrefix}/fb93e.svg`;
const imgIcon = `${assetPathPrefix}/8d9c7.svg`;
const imgIcon1 = `${assetPathPrefix}/c237c.svg`;
const imgContainer2 = `${assetPathPrefix}/e35f6.svg`;
const imgContainer3 = `${assetPathPrefix}/b30dc.svg`;
const imgContainer4 = `${assetPathPrefix}/52236.svg`;
const imgContainer5 = `${assetPathPrefix}/53582.svg`;
const imgContainer6 = `${assetPathPrefix}/f9034.svg`;
const imgContainer7 = `${assetPathPrefix}/5f20a.svg`;
const imgContainer8 = `${assetPathPrefix}/3cc8f.svg`;
const imgContainer9 = `${assetPathPrefix}/9283d.svg`;
const imgContainer10 = `${assetPathPrefix}/a1e38.svg`;
const imgIcon2 = `${assetPathPrefix}/6e97d.svg`;
const imgContainer11 = `${assetPathPrefix}/51986.svg`;
const imgContainer12 = `${assetPathPrefix}/c8e84.svg`;
const imgContainer13 = `${assetPathPrefix}/1ef7c.svg`;
const imgIcon3 = `${assetPathPrefix}/f22de.svg`;
const imgContainer14 = `${assetPathPrefix}/b4bb2.svg`;
const imgSvg1 = `${assetPathPrefix}/d27ed.svg`;
const imgSvg2 = `${assetPathPrefix}/2781e.svg`;

function IconHeroiconsOutlineFire({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[23px]"} data-node-id="1:5" data-name="icon / heroicons / Outline / fire">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHeroiconsOutlineFire} style={{ filter: 'grayscale(1) brightness(0.72) contrast(0.8)', opacity: 0.9 }} />
    </div>
  );
}

type ReviewFilter = 'all' | 'photo' | '5' | '4' | 'low';

function matchesReview(
  filter: ReviewFilter,
  query: string,
  review: { name: string; rating: number; hasPhoto: boolean; text: string }
) {
  const matchesFilter =
    filter === 'photo'
      ? review.hasPhoto
      : filter === '5'
        ? review.rating === 5
        : filter === '4'
          ? review.rating >= 4 && review.rating < 5
          : filter === 'low'
            ? review.rating < 4
            : true;
  return `${review.name} ${review.text}`
    .toLocaleLowerCase('id')
    .includes(query.trim().toLocaleLowerCase('id')) && matchesFilter;
}

export default function ReviewToko() {
  const navigate = useNavigate();
  const [marketReviews, setMarketReviews] = useState<MarketReview[]>([]);
  const [reviewLoadError, setReviewLoadError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>('all');
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const [helpfulCounts, setHelpfulCounts] = useState([34, 19, 8]);

  const fetchReviews = () => {
    let active = true;
    getReviews()
      .then((loadedReviews) => {
        if (active) setMarketReviews(loadedReviews);
      })
      .catch((error: unknown) => {
        if (active) {
          setReviewLoadError(error instanceof Error ? error.message : 'Gagal memuat ulasan pasar.');
        }
      });
    return () => { active = false; };
  };

  useEffect(() => {
    const cleanup = fetchReviews();

    const handleRefresh = () => { fetchReviews(); };
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') fetchReviews();
    });
    window.addEventListener('popstate', handleRefresh);

    return () => {
      cleanup();
      document.removeEventListener('visibilitychange', handleRefresh);
      window.removeEventListener('popstate', handleRefresh);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const photoReviewCount = marketReviews.filter(({ photos }) => photos.length > 0).length;
  const fiveStarReviewCount = marketReviews.filter(({ rating }) => rating === 5).length;
  const fourStarReviewCount = marketReviews.filter(({ rating }) => rating >= 4 && rating < 5).length;
  const lowerStarReviewCount = marketReviews.filter(({ rating }) => rating < 4).length;
  const addedMarketReviews = marketReviews
    .filter(({ id }) => id > 3)
    .sort((first, second) => sortNewestFirst ? second.id - first.id : first.id - second.id);

  const incrementHelpful = (index: number) => {
    setHelpfulCounts((counts) =>
      counts.map((count, currentIndex) => (currentIndex === index ? count + 1 : count))
    );
  };

  return (
    <div className="relative mx-auto grid min-h-dvh w-full max-w-[402px] grid-cols-1 grid-rows-[64px_43px_38px_auto] gap-y-[8px] overflow-x-hidden pb-[18px] shadow-[4px_0_12px_rgba(0,0,0,0.10),-4px_0_12px_rgba(0,0,0,0.06),0_6px_14px_rgba(0,0,0,0.08)]" data-node-id="1:7" style={{ backgroundImage: "linear-gradient(90deg, rgba(194, 220, 128, 0.25) 0%, rgba(194, 220, 128, 0.25) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Review Toko">
      <div className="backdrop-blur-[12px] bg-[rgba(194,220,128,0)] border-0 border-[#c2dc80] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="1:8" data-name="Header">
        <div className="relative mx-auto h-[64px] w-full max-w-[402px] shrink-0" data-node-id="1:9" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13px] items-center max-w-[inherit] px-[16px] relative size-full">
            <div className="content-stretch drop-shadow-[0px_4px_2px_#c2dc80] flex items-center justify-center relative rounded-[16px] shrink-0 size-[36px]" data-node-id="1:10" style={{ backgroundImage: "linear-gradient(45.00000000000001deg, rgb(251, 191, 36) 0%, rgb(194, 220, 128) 100%)" }} data-name="Background">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:11" data-name="SVG - Flower icon shape">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvgFlowerIconShape} />
              </div>
              <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(213,105,137,0.25),0px_2px_4px_-2px_rgba(213,105,137,0.25)] size-[36px] top-1/2" data-node-id="1:13" data-name="Overlay+Shadow" />
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="1:14" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:15" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[20px] tracking-[-0.5px] whitespace-nowrap" data-node-id="1:16">
                  <p className="leading-[20px]">Pasar Oro-Oro Dowo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label className="col-1 relative row-3 w-[calc(100%-32px)] max-w-[370px] justify-self-center self-stretch shrink-0" data-node-id="1:17" data-name="Search Bar">
        <span className="absolute bottom-0 left-0 z-10 flex items-center pl-[14px] top-0" data-node-id="1:24" data-name="Container">
          <div className="relative shrink-0 size-[16px]" data-node-id="1:25" data-name="SVG">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg} />
          </div>
        </span>
        <span className="sr-only">Cari review pasar</span>
        <input
          className="h-[38px] w-full rounded-[9999px] border border-[rgba(251,191,36,0.25)] bg-[rgba(255,255,255,0.9)] pl-[40px] pr-[20px] font-['Plus_Jakarta_Sans:Regular'] text-[12px] text-[#594045] outline-none placeholder:text-[#8c7075] focus:border-[#fbbf24]"
          data-node-id="1:18"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Cari review pasar..."
          type="search"
        />
      </label>
      <div className="col-1 h-[43px] relative row-2 w-[calc(100%-32px)] max-w-[370px] justify-self-center self-start shrink-0" data-node-id="1:28" data-name="Sub-Header / Back & Actions Navigation">
        <div className="-translate-y-1/2 absolute h-[38px] left-0 top-[calc(50%+0.5px)] w-[142.78px]" data-node-id="1:29" data-name="Container">
          <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-node-id="1:30" data-name="Heading 1">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[18px] text-center whitespace-nowrap" data-node-id="1:31">
              <p className="leading-[24px]">{`Review & Ulasan`}</p>
            </div>
          </div>
          <div className="absolute h-[14px] left-0 right-0 top-[24px]" data-node-id="1:32" data-name="Container">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] left-[calc(50%-0.08px)] text-[#594045] text-[10px] text-center top-[7px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:33">
              <p className="leading-[14px]">Pasar Oro-Oro Dowo, Malang</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(194,220,128,0)] col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-4 mx-auto w-full max-w-[402px] self-start shrink-0 px-[10px]" data-node-id="1:34" data-name="Main">
        <div className="content-stretch flex flex-col gap-px items-start pb-[24px] relative shrink-0 w-full" data-node-id="1:35" data-name="Container">
          <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full mb-[8px]" data-node-id="1:36" data-name="Hero Market Scorecard:margin">
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[24px] shadow-[0px_6px_6px_0px_#594045] shrink-0 w-full" data-node-id="1:37" data-name="Hero Market Scorecard">
              <div className="absolute bg-[#fbbf24] blur-[20px] opacity-40 right-[-48px] rounded-[9999px] size-[128px] top-[-48px]" data-node-id="1:38" data-name="Decorative background glow" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:39" data-name="Container">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:40" data-name="Title & Location Badge">
                  <div className="content-stretch flex flex-col gap-[1.5px] items-start relative shrink-0" data-node-id="1:41" data-name="Container">
                    <div className="bg-[rgba(251,191,36,0.5)] border border-[#f59e0b] border-solid content-stretch flex gap-[4px] items-center px-[11px] py-[5px] relative rounded-[9999px] shrink-0" data-node-id="1:42" data-name="Overlay+Border">
                      <div className="h-[12.25px] relative shrink-0 w-[12.833px]" data-node-id="1:43" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} style={{ filter: oliveIconFilter }} />
                      </div>
                      <div className="relative shrink-0" data-node-id="1:45" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:46">
                            <p className="leading-[14px]">Pasar Wisata Cagar Budaya</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[2.5px] relative shrink-0 w-full" data-node-id="1:47" data-name="Heading 2">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#594045] text-[20px] tracking-[-0.5px] whitespace-nowrap" data-node-id="1:48">
                        <p className="leading-[28px]">Pasar Oro-Oro Dowo</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:49" data-name="Container">
                      <div className="h-[12.5px] relative shrink-0 w-[10px]" data-node-id="1:50" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} style={{ filter: oliveIconFilter }} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#594045] text-[12px] whitespace-nowrap" data-node-id="1:52">
                        <p className="leading-[16px]">Klojen, Kota Malang, Jawa Timur</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[16px] shrink-0 size-[56px]" data-node-id="1:53" data-name="Pasar Kota Gate and Entrance">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPasarKotaGateAndEntrance} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="1:54" data-name="Rating Main Numbers & Star Highlights:margin">
                  <div className="bg-[#c2dc80] content-stretch flex items-center p-[12px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:55" data-name="Rating Main Numbers & Star Highlights">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:56" data-name="Container">
                      <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col items-center justify-center min-w-[68px] px-[12px] py-[8px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="1:57" data-name="Background+Shadow">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:58" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#4b6515] text-[36px] tracking-[-0.72px] whitespace-nowrap" data-node-id="1:59">
                            <p className="leading-[36px]">4.8</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-node-id="1:60" data-name="Margin">
                          <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:61" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:62" data-name="Container">
                              <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-node-id="1:63" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:64" data-name="Container">
                              <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-node-id="1:65" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:66" data-name="Container">
                              <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-node-id="1:67" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:68" data-name="Container">
                              <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-node-id="1:69" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:70" data-name="Container">
                              <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-node-id="1:71" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-node-id="1:72" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:73" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] tracking-[0.14px] whitespace-nowrap" data-node-id="1:74">
                            <p className="leading-[20px]">Sangat Direkomendasikan</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0 w-full" data-node-id="1:75" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#594045] text-[12px] whitespace-nowrap" data-node-id="1:76">
                            <p className="leading-[16px]">Dari {marketReviews.length} ulasan terverifikasi</p>
                          </div>
                        </div>
                        <div className="bg-[#c2dc80] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:77" data-name="Background">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-black tracking-[0.4px] whitespace-nowrap" data-node-id="1:78">
                            <p className="leading-[14px]">98% pengunjung puas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="1:79" data-name="Assessment Aspect Bars:margin">
                  <div className="content-stretch flex flex-col gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:80" data-name="Assessment Aspect Bars">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:81" data-name="Aspect 1">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:82" data-name="Container">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:83" data-name="Container">
                          <div className="h-[12.833px] relative shrink-0 w-[10.5px]" data-node-id="1:84" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} style={{ filter: lightOliveIconFilter }} />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:86">
                            <p className="leading-[14px]">{`Kebersihan & Kerapian`}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:87" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:88">
                            <p>
                              <span className="leading-[14px]">{`4.9 `}</span>
                              <span className="[word-break:break-word] font-['WenQuanYi_Zen_Hei:Medium'] leading-[14px] not-italic text-[#f59e0b]">★</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#dee8ff] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:89" data-name="Background">
                        <div className="absolute bg-[#c2dc80] inset-[0_2%_0_0] rounded-[9999px]" data-node-id="1:90" data-name="Background" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:91" data-name="Aspect 2">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:92" data-name="Container">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:93" data-name="Container">
                          <div className="relative shrink-0 size-[11.667px]" data-node-id="1:94" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} style={{ filter: orangeIconFilter }} />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:96">
                            <p className="leading-[14px]">Kelengkapan Komoditas</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:97" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:98">
                            <p>
                              <span className="leading-[14px]">{`4.8 `}</span>
                              <span className="[word-break:break-word] font-['WenQuanYi_Zen_Hei:Medium'] leading-[14px] not-italic text-[#f59e0b]">★</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#dee8ff] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:99" data-name="Background">
                        <div className="absolute bg-[#f59e0b] inset-[0_6%_0_0] rounded-[9999px]" data-node-id="1:100" data-name="Background" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:101" data-name="Aspect 3">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:102" data-name="Container">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:103" data-name="Container">
                          <div className="relative shrink-0 size-[11.667px]" data-node-id="1:104" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} style={{ filter: yellowOrangeIconFilter }} />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:106">
                            <p className="leading-[14px]">Keramahan Pedagang</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:107" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:108">
                            <p>
                              <span className="leading-[14px]">{`4.9 `}</span>
                              <span className="[word-break:break-word] font-['WenQuanYi_Zen_Hei:Medium'] leading-[14px] not-italic text-[#f59e0b]">★</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#dee8ff] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:109" data-name="Background">
                        <div className="absolute bg-[#fbbf24] inset-[0_3%_0_0] rounded-[9999px]" data-node-id="1:110" data-name="Background" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:111" data-name="Aspect 4">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:112" data-name="Container">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:113" data-name="Container">
                          <div className="h-[10.5px] relative shrink-0 w-[7.583px]" data-node-id="1:114" data-name="Container">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:116">
                            <p className="leading-[14px]">{`Keamanan & Parkir`}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:117" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:118">
                            <p>
                              <span className="leading-[14px]">{`4.6 `}</span>
                              <span className="[word-break:break-word] font-['WenQuanYi_Zen_Hei:Medium'] leading-[14px] not-italic text-[#f59e0b]">★</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#dee8ff] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:119" data-name="Background">
                        <div className="absolute bg-[#594045] inset-[0_12%_0_0] rounded-[9999px]" data-node-id="1:120" data-name="Background" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="1:121" data-name="Action Button: Write Review:margin">
                  <button type="button" onClick={() => navigate('/tulis-ulasan-pasar')} className="bg-[#fbbf24] content-stretch cursor-pointer drop-shadow-[6px_6px_8px_#c2dc80] flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-full border-0" data-node-id="1:122" data-name="Action Button: Write Review">
                    <div className="relative shrink-0 size-[15px]" data-node-id="1:123" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:125" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap" data-node-id="1:126">
                        <p className="leading-[20px]">+ Tulis Ulasan Pasar</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="1:127" data-name="Interactive Community Guidance Banner:margin">
            <div className="bg-[rgba(194,220,128,0.22)] border border-[#c2dc80] border-solid content-stretch flex gap-[8px] items-center p-[13px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:128" data-name="Interactive Community Guidance Banner">
              <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 size-[36px]" data-node-id="1:129" data-name="Background+Shadow">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[17.083px] relative shrink-0 w-[17.5px]" data-node-id="1:130" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} style={{ filter: oliveIconFilter }} />
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:132" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:133" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-black tracking-[0.4px] w-full" data-node-id="1:134">
                      <p className="leading-[12.5px]">Ulasan Anda Menghidupkan UMKM</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:135" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full" data-node-id="1:136">
                      <p className="leading-[15px] mb-0">Ulasan jujur membantu menjaga kebersihan dan</p>
                      <p className="leading-[15px]">mengangkat 251+ lapak pasar kita.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-node-id="1:137" data-name="Filter & Tab Chips:margin">
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:138" data-name="Filter & Tab Chips">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:139" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:140" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[18px] whitespace-nowrap" data-node-id="1:141">
                    <p className="leading-[24px]">Semua Ulasan</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Ubah urutan ulasan"
                  className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 border-0 bg-transparent p-0"
                  onClick={() => setSortNewestFirst((current) => !current)}
                  data-node-id="1:142"
                  data-name="Container"
                >
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:143">
                    <p className="leading-[14px]">Urutkan: {sortNewestFirst ? 'Terbaru' : 'Terlama'}</p>
                  </div>
                </button>
              </div>
              <div className="relative h-[32px] w-full shrink-0 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" data-node-id="1:144" data-name="Scrollable Chips">
                <button type="button" aria-pressed={activeFilter === 'all'} onClick={() => setActiveFilter('all')} className={`-translate-y-1/2 absolute content-stretch flex flex-col h-[28px] items-center justify-center left-[16px] min-w-[97.86px] px-[14px] py-[6px] rounded-[9999px] top-[calc(50%-1.58px)] cursor-pointer border-0 ${activeFilter === 'all' ? 'bg-[#ffc629] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]' : 'bg-[#c2dc80]'}`} data-node-id="1:145" data-name="Button">
                  <div className={`[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap ${activeFilter === 'all' ? 'text-white' : 'text-[#3f2930]'}`} data-node-id="1:146">
                    <p className="leading-[16px]">Semua ({marketReviews.length})</p>
                  </div>
                </button>
                <button type="button" aria-pressed={activeFilter === 'photo'} onClick={() => setActiveFilter('photo')} className={`-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[129.86px] min-w-[151.86px] px-[14px] py-[6px] rounded-[9999px] top-[calc(50%-2px)] cursor-pointer border-0 ${activeFilter === 'photo' ? 'bg-[#ffc629]' : 'bg-[#c2dc80]'}`} data-node-id="1:147" data-name="Button">
                  <div className="h-[11.25px] relative shrink-0 w-[12.5px]" data-node-id="1:148" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} style={activeFilter === 'photo' ? { filter: 'brightness(0) invert(1)' } : undefined} />
                  </div>
                  <div className={`[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap ${activeFilter === 'photo' ? 'text-white' : 'text-black'}`} data-node-id="1:150">
                    <p className="leading-[16px]">Dengan Foto ({photoReviewCount})</p>
                  </div>
                </button>
                <button type="button" aria-pressed={activeFilter === '5'} onClick={() => setActiveFilter('5')} className={`-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[297.72px] min-w-[130.89px] px-[14px] py-[6px] rounded-[9999px] top-[calc(50%-2px)] cursor-pointer border-0 ${activeFilter === '5' ? 'bg-[#ffc629]' : 'bg-[#c2dc80]'}`} data-node-id="1:151" data-name="Button">
                  <div className="h-[11.875px] relative shrink-0 w-[12.5px]" data-node-id="1:152" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} style={activeFilter === '5' ? { filter: 'brightness(0) invert(1)' } : undefined} />
                  </div>
                  <div className={`[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap ${activeFilter === '5' ? 'text-white' : 'text-black'}`} data-node-id="1:154">
                    <p className="leading-[16px]">Bintang 5 ({fiveStarReviewCount})</p>
                  </div>
                </button>
                <button type="button" aria-pressed={activeFilter === '4'} onClick={() => setActiveFilter('4')} className={`-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-[444.61px] min-w-[128.39px] px-[14px] py-[6px] rounded-[9999px] top-[calc(50%-2px)] cursor-pointer border-0 ${activeFilter === '4' ? 'bg-[#ffc629]' : 'bg-[#c2dc80]'}`} data-node-id="1:155" data-name="Button">
                  <div className="h-[11.875px] relative shrink-0 w-[12.5px]" data-node-id="1:156" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} style={activeFilter === '4' ? { filter: 'brightness(0) invert(1)' } : undefined} />
                  </div>
                  <div className={`[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap ${activeFilter === '4' ? 'text-white' : 'text-black'}`} data-node-id="1:158">
                    <p className="leading-[16px]">Bintang 4 ({fourStarReviewCount})</p>
                  </div>
                </button>
                <button type="button" aria-pressed={activeFilter === 'low'} onClick={() => setActiveFilter('low')} className={`-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[589px] px-[14px] py-[6px] rounded-[9999px] top-[calc(50%-2px)] cursor-pointer border-0 ${activeFilter === 'low' ? 'bg-[#ffc629]' : 'bg-[#c2dc80]'}`} data-node-id="1:159" data-name="Button">
                  <div className={`[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap ${activeFilter === 'low' ? 'text-white' : 'text-black'}`} data-node-id="1:160">
                    <p className="leading-[16px]">Bintang 1-3 ({lowerStarReviewCount})</p>
                  </div>
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="1:161" data-name="Review Cards Stream:margin">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:162" data-name="Review Cards Stream">
              {reviewLoadError && <p role="alert" className="w-full rounded-[16px] bg-white p-4 text-[12px] text-[#594045]">{reviewLoadError}</p>}
              {addedMarketReviews
                .filter((review) => matchesReview(activeFilter, searchQuery, {
                  name: review.name,
                  rating: review.rating,
                  hasPhoto: review.photos.length > 0,
                  text: review.text,
                }))
                .map((review) => (
                  <article key={review.id} style={{ order: sortNewestFirst ? 0 : review.id }} className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full">
                    <div className="flex w-full items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate font-['Plus_Jakarta_Sans:Bold'] text-[14px] font-bold leading-5 text-[#111c2d]">{review.name}</h3>
                        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[12px] leading-4 text-[#594045]">{review.status}</p>
                      </div>
                      <span className="shrink-0 font-['Plus_Jakarta_Sans:Regular'] text-[12px] leading-4 text-[#594045]">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] leading-4 text-[#f59e0b]" aria-label={`${review.rating} dari 5 bintang`}>
                      <span aria-hidden="true">{"★".repeat(Math.round(review.rating))}</span>
                      <span className="pl-1 font-['Plus_Jakarta_Sans:Bold'] text-[10px] font-bold text-[#111c2d]">{review.rating.toFixed(1)}</span>
                    </div>
                    <p className="w-full font-['Plus_Jakarta_Sans:Regular'] text-[14px] leading-[22.75px] text-[#111c2d]">{review.text}</p>
                    {review.photos.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {review.photos.map((photo, index) => (
                          <img key={`${review.id}-${index}`} src={photo} alt={`Foto ulasan ${review.name}`} className="size-[72px] rounded-xl object-cover" />
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              <div style={{ display: matchesReview(activeFilter, searchQuery, { name: 'ZALFAA', rating: 5, hasPhoto: true, text: 'Pasar tradisional paling bersih dan estetik di Malang! Lorongnya luas, tidak becek sama sekali, dan belanja sayur segar sampai jajanan di sini nyaman banget. Pedagangnya juga ramah-ramah.' }) ? 'flex' : 'none', order: sortNewestFirst ? 1 : 3 }} className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-node-id="1:163" data-name="Card 1: Ratna Dewi (With Photos)">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:164" data-name="User Profile Row">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="1:165" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:166" data-name="Container">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:167" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:168" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] tracking-[0.14px] whitespace-nowrap" data-node-id="1:169">
                            <p className="leading-[20px]">ZALFAA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-node-id="1:170" data-name="Button - Opsi Lain">
                    <div className="h-[12px] relative shrink-0 w-[3px]" data-node-id="1:171" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full" data-node-id="1:173" data-name="Rating & Date">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:174" data-name="Container">
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:175" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:176" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:177" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:178" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:179" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:180" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:181" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:182" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:183" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:184" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:185" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0" data-node-id="1:186" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:187">
                        <p className="leading-[14px]">5.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:188" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#594045] text-[12px] whitespace-nowrap" data-node-id="1:189">
                      <p className="leading-[16px]">Kemarin</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] h-[26.5px] items-start relative shrink-0 w-full" data-node-id="1:190" data-name="Highlighted Tags">
                  <div className="bg-[rgba(194,220,128,0.28)] border border-[#c2dc80] border-solid h-full relative rounded-[12px] shrink-0 w-[158.94px]" data-node-id="1:191" data-name="Overlay+Border">
                    <div className="-translate-y-1/2 absolute left-[10px] size-[10.833px] top-1/2" data-node-id="1:192" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
                    </div>
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] left-[27.02px] text-[#354b0e] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap" data-node-id="1:194">
                      <p className="leading-[16.5px]">Kebersihan: Luar Biasa</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(251,191,36,0.5)] border border-[#f59e0b] border-solid h-full relative rounded-[12px] shrink-0 w-[110.06px]" data-node-id="1:195" data-name="Background">
                    <div className="-translate-y-1/2 absolute h-[9.75px] left-[9px] top-1/2 w-[7.042px]" data-node-id="1:196" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} style={{ filter: oliveIconFilter }} />
                    </div>
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] left-[26.01px] text-[#111c2d] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap" data-node-id="1:198">
                      <p className="leading-[16.5px]">Parkir: Tertata</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:199" data-name="Review Text Content">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] w-full" data-node-id="1:200">
                    <p className="leading-[22.75px] mb-0">Pasar tradisional paling bersih dan estetik di</p>
                    <p className="leading-[22.75px] mb-0">Malang! Lorongnya luas, tidak becek sama sekali,</p>
                    <p className="leading-[22.75px] mb-0">dan belanja sayur segar sampai jajanan di sini</p>
                    <p className="leading-[22.75px] mb-0">nyaman banget. Pedagangnya juga ramah-</p>
                    <p className="leading-[22.75px]">ramah.</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-node-id="1:201" data-name="Review Photo Gallery">
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col h-[112px] items-start justify-center min-w-px overflow-clip relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-node-id="1:202" data-name="Overlay+Shadow">
                    <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="1:203" data-name="AB6AXuCpo95glxG3ZB5nO__dkeyg-7yTL6b2thD9sFWNy43Y6c7AnkoJd23vsqPXEIj62VEBILR730DtrFnCAFf8pQhLRhXT6B_bYbSdVekfTLG70cflWcrY5CC0KiUMrdJptOuAXfNO11f7eVKBkrgI4Qvlj3xfZK-LZcjiO4TMCZI2525-UHfxsOvkSutFtFgje7nJaZKku8Is7urkDpT6HS9ccW8OYa60GRTq6CH7xT7CPmHmqrXjzQX2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAb6AXuCpo95GlxG3Zb5NODkeyg7YTl6B2ThD9SFwNy43Y6C7AnkoJd23VsqPxeIj62Vebilr730DtrFnCaFf8PQhLRhXt6BBYbSdVekfTlg70CflWcrY5Cc0KiUMrdJptOuAXfNo11F7EVkBkrgI4Qvlj3XfZkLZcjiO4Tmczi2525UHfxsOvkSutFtFgje7NJaZKku8Is7UrkDpT6Hs9CcW8OYa60GrTq6Ch7XT7CPmHmqrXjzQx2} />
                    </div>
                  </div>
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col h-[112px] items-start justify-center min-w-px overflow-clip relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-node-id="1:204" data-name="Overlay+Shadow">
                    <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="1:205" data-name="AB6AXuD7_0mSjDsiFl9i7O7l1ed0ntI83_H1Au3E1LU0GT-uuJ8MJMQfzHWnh7Crpv_FhbxARmRJtmHSueK9YZGU54piUDrreVxZJvg7L9uF3cZ-OqiVwG2Dt_nvct_csGmuwJn2ZaMovgVW8ZfcCNEok787T7aqvH8rCAa1fXpfHi--krP_g3f7t29YRrHQkgXqjrFghs7Sc0kO8wxszjpihnrhnyEoVjoA27NSFJBdS1OTW4obBfgm2vAL">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAb6AXuD70MSjDsiFl9I7O7L1Ed0NtI83H1Au3E1Lu0GtUuJ8MjmQfzHWnh7CrpvFhbxARmRJtmHSueK9Yzgu54PiUDrreVxZJvg7L9UF3CZOqiVwG2DtNvctCsGmuwJn2ZaMovgVw8ZfcCnEok787T7AqvH8RCAa1FXpfHiKrPG3F7T29YRrHQkgXqjrFghs7Sc0KO8WxszjpihnrhnyEoVjoA27NsfjBdS1Otw4ObBfgm2VAl} />
                    </div>
                    <div className="absolute backdrop-blur-[2px] bg-[rgba(38,49,67,0.75)] bottom-[8px] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[8px] rounded-[8px]" data-node-id="1:206" data-name="Overlay+OverlayBlur">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#ecf1ff] text-[10px] whitespace-nowrap" data-node-id="1:207">
                        <p className="leading-[15px]">+ Foto Lapak</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-node-id="1:208" data-name="Helpful / Interactions Bar">
                  <button type="button" onClick={() => incrementHelpful(0)} className="bg-[#f0f3ff] content-stretch cursor-pointer flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0 border-0" data-node-id="1:209" data-name="Button">
                    <div className="h-[13.333px] relative shrink-0 w-[14px]" data-node-id="1:210" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:212" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[10px] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="1:213">
                        <p className="leading-[14px]">Membantu ({helpfulCounts[0]})</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div style={{ display: matchesReview(activeFilter, searchQuery, { name: 'Rani', rating: 5, hasPhoto: false, text: 'Sekarang makin modern, sudah banyak kios yang terima pembayaran QRIS. Kuliner legendaris di bagian belakang juga lengkap dan enak. Wajib cobain kue lumpur dan mie ayamnya!' }) ? 'flex' : 'none', order: sortNewestFirst ? 2 : 2 }} className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-node-id="1:214" data-name="Card 2: Budi Santoso (Modern payment & culinaries)">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:215" data-name="User Profile Row">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="1:216" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:217" data-name="Container">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:218" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:219" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] tracking-[0.14px] whitespace-nowrap" data-node-id="1:220">
                            <p className="leading-[20px]">Rani</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-node-id="1:221" data-name="Button - Opsi Lain">
                    <div className="h-[12px] relative shrink-0 w-[3px]" data-node-id="1:222" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full" data-node-id="1:224" data-name="Rating & Date">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:225" data-name="Container">
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:226" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:227" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:228" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:229" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:230" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:231" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:232" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:233" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:234" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:235" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:236" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0" data-node-id="1:237" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:238">
                        <p className="leading-[14px]">5.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:239" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#594045] text-[12px] whitespace-nowrap" data-node-id="1:240">
                      <p className="leading-[16px]">3 hari lalu</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:241" data-name="Review Text Content">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] w-full" data-node-id="1:242">
                    <p className="leading-[22.75px] mb-0">Sekarang makin modern, sudah banyak kios yang</p>
                    <p className="leading-[22.75px] mb-0">terima pembayaran QRIS. Kuliner</p>
                    <p className="leading-[22.75px] mb-0">legendaris di bagian belakang juga lengkap dan</p>
                    <p className="leading-[22.75px]">enak. Wajib cobain kue lumpur dan mie ayamnya!</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:243" data-name="Helpful Button">
                  <button type="button" onClick={() => incrementHelpful(1)} className="bg-[#f0f3ff] content-stretch cursor-pointer flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0 border-0" data-node-id="1:244" data-name="Button">
                    <div className="h-[13.333px] relative shrink-0 w-[14px]" data-node-id="1:245" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:247" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[10px] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="1:248">
                        <p className="leading-[14px]">Membantu ({helpfulCounts[1]})</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div style={{ display: matchesReview(activeFilter, searchQuery, { name: 'Mifta', rating: 4, hasPhoto: false, text: 'Tempatnya asri dan bersih. Parkir motor dan mobil tertata rapi. Kalau pagi hari sekitar jam 7-8 cukup ramai tapi arus belanjanya tetap teratur karena lorongnya satu arah.' }) ? 'flex' : 'none', order: sortNewestFirst ? 3 : 1 }} className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full" data-node-id="1:249" data-name="Card 3: Siti Rahmawati (Peak hours tip)">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:250" data-name="User Profile Row">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="1:251" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:252" data-name="Container">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:253" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:254" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] tracking-[0.14px] whitespace-nowrap" data-node-id="1:255">
                            <p className="leading-[20px]">Mifta</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-node-id="1:256" data-name="Button - Opsi Lain">
                    <div className="h-[12px] relative shrink-0 w-[3px]" data-node-id="1:257" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full" data-node-id="1:259" data-name="Rating & Date">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:260" data-name="Container">
                    <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:261" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:262" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:263" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:264" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:265" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:266" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:267" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:268" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:269" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-node-id="1:270" data-name="Container">
                        <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-node-id="1:271" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0" data-node-id="1:272" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[10px] tracking-[0.4px] whitespace-nowrap" data-node-id="1:273">
                        <p className="leading-[14px]">4.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:274" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#594045] text-[12px] whitespace-nowrap" data-node-id="1:275">
                      <p className="leading-[16px]">1 minggu lalu</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:276" data-name="Review Text Content">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] w-full" data-node-id="1:277">
                    <p className="leading-[22.75px] mb-0">Tempatnya asri dan bersih. Parkir motor dan mobil</p>
                    <p className="leading-[22.75px] mb-0">tertata rapi. Kalau pagi hari sekitar jam 7-8 cukup</p>
                    <p className="leading-[22.75px] mb-0">ramai tapi arus belanjanya tetap teratur karena</p>
                    <p className="leading-[22.75px]">lorongnya satu arah.</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:278" data-name="Helpful Button">
                  <button type="button" onClick={() => incrementHelpful(2)} className="bg-[#f0f3ff] content-stretch cursor-pointer flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0 border-0" data-node-id="1:279" data-name="Button">
                    <div className="h-[13.333px] relative shrink-0 w-[14px]" data-node-id="1:280" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:282" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#594045] text-[10px] text-center tracking-[0.4px] whitespace-nowrap" data-node-id="1:283">
                        <p className="leading-[14px]">Membantu ({helpfulCounts[2]})</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {marketReviews.length > 10 && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:284" data-name="End of List / Load More Pill:margin">
            <div className="content-stretch flex items-start justify-center relative w-full shrink-0 items-start justify-center pb-[12px] pt-[8px]" data-node-id="1:285" data-name="End of List / Load More Pill">
              <div className="bg-white border border-[#fbbf24] border-solid content-stretch drop-shadow-[0px_1px_1px_#c2dc80] flex gap-[6px] items-center px-[21px] py-[11px] relative rounded-[9999px] shrink-0" data-node-id="1:286" data-name="Button">
                <div className="relative shrink-0" data-node-id="1:287" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f59e0b] text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-node-id="1:288">
                      <p className="leading-[16px]">Muat Ulasan Lainnya</p>
                    </div>
                  </div>
                </div>
                <div className="h-[4.933px] relative shrink-0 w-[8px]" data-node-id="1:289" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer14} style={{ filter: oliveIconFilter }} />
                </div>
              </div>
            </div>
          </div>
        )}
        <nav aria-label="Navigasi utama" className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] border border-[rgba(194,220,128,0.8)] border-solid content-stretch fixed bottom-[12px] left-[max(15px,calc((100vw-402px)/2+15px))] right-[max(15px,calc((100vw-402px)/2+15px))] z-40 flex h-[71px] items-center justify-between px-[25px] py-[11px] rounded-[9999px] shadow-[0_-4px_25px_rgba(75,101,21,0.08)]" data-node-id="1:291" data-name="Background+Border+Shadow+OverlayBlur">
          <button type="button" aria-label="Home" onClick={() => navigate('/home')} className="relative min-w-[38px] shrink-0 cursor-pointer border-0 bg-transparent p-0" data-node-id="1:292" data-name="Link - Tab 1: Home (Active)">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
              <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="1:293" data-name="Overlay">
                <div className="relative shrink-0 size-[22px]" data-node-id="1:294" data-name="SVG">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg1} style={{ filter: 'grayscale(1) brightness(0.72) contrast(0.8)', opacity: 0.9 }} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="1:297" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[9.5px] whitespace-nowrap" data-node-id="1:298">
                  <p className="leading-[14.25px]">Home</p>
                </div>
              </div>
            </div>
          </button>
          <button type="button" aria-label="Toko" onClick={() => navigate('/toko')} className="relative min-w-[38px] shrink-0 cursor-pointer border-0 bg-transparent p-0" data-node-id="1:299" data-name="Link - Tab 2: Toko">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-node-id="1:300" data-name="Container">
                <div className="relative shrink-0 size-[20px]" data-node-id="1:301" data-name="SVG">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg2} style={{ filter: 'grayscale(1) brightness(0.72) contrast(0.8)', opacity: 0.9 }} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="1:305" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[9.5px] whitespace-nowrap" data-node-id="1:306">
                  <p className="leading-[14.25px]">Toko</p>
                </div>
              </div>
            </div>
          </button>
          <button type="button" aria-label="Promo" onClick={() => navigate('/promo')} className="relative min-w-[38px] shrink-0 cursor-pointer border-0 bg-transparent p-0" data-node-id="1:307" data-name="Link - Tab 3: Keranjang">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-center relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px] z-[2]" data-node-id="1:308" data-name="Container">
                <IconHeroiconsOutlineFire className="relative shrink-0 size-[23px]" />
              </div>
              <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 z-[1]" data-node-id="1:310" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[9.5px] whitespace-nowrap" data-node-id="1:311">
                  <p className="leading-[14.25px]">Promo</p>
                </div>
              </div>
            </div>
          </button>
          <button type="button" aria-label="Review Pasar" onClick={() => navigate('/review-pasar')} className="relative min-w-[38px] shrink-0 cursor-pointer border-0 bg-transparent p-0" data-node-id="1:312" data-name="Link - Tab 1: Home (Active)">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
              <div className="bg-[#e2f0c2] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="1:313" data-name="Overlay">
                <div className="relative shrink-0 size-[20px]" data-node-id="1:314" data-name="SVG">
                  <svg aria-hidden="true" className="block size-full text-[#4f6818]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.96672 12H8.76255L13.3459 7.41667C13.4834 7.27917 13.5865 7.12257 13.6553 6.94688C13.724 6.77118 13.7584 6.59931 13.7584 6.43125C13.7584 6.26319 13.7202 6.09896 13.6438 5.93854C13.5674 5.77813 13.4681 5.62917 13.3459 5.49167L12.5209 4.62083C12.3834 4.48333 12.2306 4.38021 12.0625 4.31146C11.8945 4.24271 11.7188 4.20833 11.5355 4.20833C11.3674 4.20833 11.1955 4.24271 11.0198 4.31146C10.8441 4.38021 10.6875 4.48333 10.55 4.62083L5.96672 9.20417V12V12M12.3834 6.43125V6.43125L11.5355 5.58333V5.58333L12.3834 6.43125V6.43125M7.34172 10.625V9.75417L9.6563 7.43958L10.1146 7.85208L10.5271 8.31042L8.21255 10.625H7.34172V10.625M10.1146 7.85208L10.5271 8.31042V8.31042L9.6563 7.43958V7.43958L10.1146 7.85208V7.85208M10.7105 12H16.9667V10.1667H12.5438L10.7105 12V12M2.30005 19.3333V2.83333C2.30005 2.32917 2.47956 1.89757 2.83859 1.53854C3.19762 1.17951 3.62922 1 4.13338 1H18.8C19.3042 1 19.7358 1.17951 20.0948 1.53854C20.4539 1.89757 20.6334 2.32917 20.6334 2.83333V13.8333C20.6334 14.3375 20.4539 14.7691 20.0948 15.1281C19.7358 15.4872 19.3042 15.6667 18.8 15.6667H5.96672L2.30005 19.3333V19.3333M5.18755 13.8333H18.8V13.8333V13.8333V2.83333V2.83333V2.83333H4.13338V2.83333V2.83333V14.8646L5.18755 13.8333V13.8333M4.13338 13.8333V13.8333V2.83333V2.83333V2.83333V2.83333V2.83333V2.83333V13.8333V13.8333V13.8333V13.8333" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="1:316" data-name="Margin">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f6818] text-[9px] whitespace-nowrap" data-node-id="1:317">
                  <p className="leading-[14.25px]">Review Pasar</p>
                </div>
              </div>
            </div>
          </button>
        </nav>
      </div>
  );
}
