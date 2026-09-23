import './InfoKunjungan.css';

const assetPathPrefix = "/assets"
const imgIconHeroiconsOutlineFire = `${assetPathPrefix}/75326.svg`
const imgContainer = `${assetPathPrefix}/ab505.svg`
const imgContainer1 = `${assetPathPrefix}/59a09.svg`
const imgMargin = `${assetPathPrefix}/fd4a1.svg`
const imgContainer2 = `${assetPathPrefix}/4ffe8.svg`
const imgContainer3 = `${assetPathPrefix}/79bd8.svg`
const imgContainer4 = `${assetPathPrefix}/5dd2d.svg`
const imgContainer5 = `${assetPathPrefix}/7d1be.svg`
const imgContainer6 = `${assetPathPrefix}/31dcd.svg`
const imgShadow = `${assetPathPrefix}/669c8.svg`
const imgMargin1 = `${assetPathPrefix}/aaff8.svg`
const imgMargin2 = `${assetPathPrefix}/71346.svg`
const imgMargin3 = `${assetPathPrefix}/42434.svg`
const imgContainer7 = `${assetPathPrefix}/75154.svg`
const imgContainer8 = `${assetPathPrefix}/8807b.svg`
const imgContainer9 = `${assetPathPrefix}/19b83.svg`
const imgSvg = `${assetPathPrefix}/dfd0c.svg`
const imgSvg1 = `${assetPathPrefix}/2781e.svg`
const imgSvg2 = `${assetPathPrefix}/3de6e.svg`

function IconHeroiconsOutlineFire({ className }: { className?: string }) {
  return (
    <div
      className={className || "relative size-[23px]"}
      data-node-id="1:2"
      data-name="icon / heroicons / Outline / fire"
    >
      <img
        alt=""
        className="absolute block inset-0 max-w-none size-full"
        src={imgIconHeroiconsOutlineFire}
      />
    </div>
  )
}

export default function InfoKunjungan() {
  return (
    <div
      className="content-stretch flex min-h-dvh w-full flex-col gap-[23px] items-center relative"
      data-node-id="1:4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(243, 238, 241) 0%, rgb(243, 238, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Info Kunjungan"
    >
      <div
        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:5"
      >
        <div
          className="backdrop-blur-[12px] bg-[rgba(243,238,241,0.95)] border border-[rgba(213,105,137,0.15)] border-solid content-stretch flex flex-col items-start p-px relative shrink-0 w-full"
          data-node-id="1:6"
          data-name="Header"
        >
          <div
            className="h-[64px] relative shrink-0 w-full"
            data-node-id="1:7"
            data-name="Container"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[16px] relative size-full">
              <div
                className="content-stretch flex h-[48px] max-w-full items-center justify-between py-[8px] relative shrink-0 w-[358px] md:w-full"
                data-node-id="1:8"
                data-name="Interactive Header Nav for In-Store Navigation"
              >
                <button
                  type="button"
                  aria-label="Kembali"
                  onClick={() => window.history.back()}
                  className="bg-white content-stretch cursor-pointer drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                  data-node-id="1:9"
                  data-name="Button - Kembali"
                >
                  <div
                    className="relative shrink-0 size-[13.333px]"
                    data-node-id="1:10"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer}
                    />
                  </div>
                </button>
                <div
                  className="content-stretch flex flex-1 flex-col items-start relative min-w-0"
                  data-node-id="1:12"
                  data-name="Title & Subtitle"
                >
                  <div
                    className="content-stretch flex flex-col items-center mb-[-0.5px] relative shrink-0 w-full"
                    data-node-id="1:13"
                    data-name="Heading 1"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] text-center tracking-[-0.4px] whitespace-nowrap"
                      data-node-id="1:14"
                    >
                      <p className="leading-[24px]">Info Kunjungan</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full"
                    data-node-id="1:15"
                    data-name="Container"
                  >
                    <div
                      className="h-[11.489px] relative shrink-0 w-[9.57px]"
                      data-node-id="1:16"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer1}
                      />
                    </div>
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#de3b75] text-[12px] text-center whitespace-nowrap"
                      data-node-id="1:18"
                    >
                      <p className="leading-[16px]">
                        Pasar Oro-Oro Dowo, Malang
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-stretch grid w-full grid-cols-1 gap-[16px] items-start pt-[12px] px-[16px] relative shrink-0 md:grid-cols-2 xl:grid-cols-3"
          data-node-id="1:19"
          data-name="Scrollable Content Area"
        >
          <div
            className="border border-[rgba(254,205,211,0.6)] border-solid content-stretch flex flex-col items-start overflow-clip p-[17px] relative rounded-[24px] shadow-[0px_10px_25px_-3px_rgba(180,70,100,0.05)] shrink-0 w-full md:col-span-2 xl:col-span-1"
            data-node-id="1:20"
            style={{
              backgroundImage:
                "linear-gradient(148.01689292178452deg, rgb(255, 255, 255) 0%, rgb(255, 247, 249) 50%, rgb(250, 230, 238) 100%)",
            }}
            data-name="Section - HeroCard"
          >
            <div
              className="absolute bg-[rgba(222,59,117,0.1)] blur-[12px] bottom-[-23.95px] right-[-24px] rounded-[9999px] size-[112px]"
              data-node-id="1:21"
              data-name="Background decorative blossom petals"
            />
            <div
              className="absolute bg-[rgba(251,191,36,0.1)] blur-[8px] left-[-16px] rounded-[9999px] size-[80px] top-[-16px]"
              data-node-id="1:22"
              data-name="Overlay+Blur"
            />
            <div
              className="relative shrink-0 w-full"
              data-node-id="1:23"
              data-name="Container"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.3px] items-start relative size-full">
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="1:24"
                  data-name="Status pill and Heritage Tag"
                >
                  <div
                    className="bg-[rgba(194,220,128,0.5)] border border-[#a7f3d0] border-solid content-stretch flex gap-[6px] items-center px-[11px] py-[5px] relative rounded-[9999px] shrink-0"
                    data-node-id="1:25"
                    data-name="Background+Border"
                  >
                    <div
                      className="bg-[#4b6515] relative rounded-[9999px] shrink-0 size-[8px]"
                      data-node-id="1:26"
                      data-name="Background"
                    />
                    <div
                      className="relative shrink-0"
                      data-node-id="1:27"
                      data-name="Container"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b6515] text-[12px] whitespace-nowrap"
                          data-node-id="1:28"
                        >
                          <p className="leading-[16px]">Buka Sekarang</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-[#fecdd3] border-solid content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] shrink-0"
                    data-node-id="1:29"
                    data-name="Background+Border"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#de3b75] text-[11px] tracking-[0.275px] whitespace-nowrap"
                      data-node-id="1:30"
                    >
                      <p className="leading-[16.5px]">Cagar Budaya SNI</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                  data-node-id="1:31"
                  data-name="Market Name & Brief Desc"
                >
                  <div
                    className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full"
                    data-node-id="1:32"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#111827] text-[18px] w-full"
                      data-node-id="1:33"
                    >
                      <p className="leading-[22.5px] mb-0">{`Pasar Tradisional & Wisata Cagar`}</p>
                      <p className="leading-[22.5px]">Budaya</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full"
                    data-node-id="1:34"
                    data-name="Container"
                  >
                    <div
                      className="h-[13.489px] relative shrink-0 w-[9.57px]"
                      data-node-id="1:35"
                      data-name="Margin"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgMargin}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pr-[23.87px] relative shrink-0"
                      data-node-id="1:37"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap"
                        data-node-id="1:38"
                      >
                        <p className="leading-[16px] mb-0">
                          Jl. Guntur No. 20, Oro-oro Dowo, Kec. Klojen, Kota
                        </p>
                        <p className="leading-[16px]">
                          Malang, Jawa Timur 65119
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="border-[#ffe4e6] border-solid border-t content-stretch flex gap-[8px] items-start justify-center pt-[9.7px] relative shrink-0 w-full"
                  data-node-id="1:39"
                  data-name="Quick Metrics Bar"
                >
                  <div
                    className="bg-[rgba(255,255,255,0.8)] border border-[rgba(255,228,230,0.7)] border-solid relative rounded-[16px] min-w-0 flex-1"
                    data-node-id="1:40"
                    data-name="Overlay+Border"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.5px] items-center pb-[11.5px] pt-[9px] px-[9px] relative size-full">
                      <div
                        className="relative shrink-0 w-full"
                        data-node-id="1:41"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap"
                            data-node-id="1:42"
                          >
                            <p className="leading-[15px]">JAM BUKA</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] text-center whitespace-nowrap"
                        data-node-id="1:43"
                      >
                        <p className="leading-[16px]">06.00 - 17.00</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.8)] border border-[rgba(255,228,230,0.7)] border-solid relative rounded-[16px] min-w-0 flex-1"
                    data-node-id="1:44"
                    data-name="Overlay+Border"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.5px] items-center pb-[11.5px] pt-[9px] px-[9px] relative size-full">
                      <div
                        className="relative shrink-0 w-full"
                        data-node-id="1:45"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap"
                            data-node-id="1:46"
                          >
                            <p className="leading-[15px]">PEDAGANG</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] text-center whitespace-nowrap"
                        data-node-id="1:47"
                      >
                        <p className="leading-[16px]">± 251 Kios</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.8)] border border-[rgba(255,228,230,0.7)] border-solid relative rounded-[16px] min-w-0 flex-1"
                    data-node-id="1:48"
                    data-name="Overlay+Border"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.5px] items-center pb-[11.5px] pt-[9px] px-[9px] relative size-full">
                      <div
                        className="relative shrink-0 w-full"
                        data-node-id="1:49"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap"
                            data-node-id="1:50"
                          >
                            <p className="leading-[15px]">EST. BERDIRI</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#de3b75] text-[12px] text-center whitespace-nowrap"
                        data-node-id="1:51"
                      >
                        <p className="leading-[16px]">Tahun 1932</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white border border-[#ffe4e6] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="1:52"
            data-name="Section1_OperationalHours"
          >
            <div
              className="absolute bg-[rgba(255,255,255,0)] inset-[-1px_-1px_-0.5px_-1px] rounded-[24px] shadow-[0px_4px_20px_-2px_rgba(222,59,117,0.08),0px_2px_6px_-1px_rgba(0,0,0,0.02)]"
              data-node-id="1:53"
              data-name="Section1_OperationalHours:shadow"
            />
            <div
              className="border-[#f3f4f6] border-b border-solid relative shrink-0 w-full"
              data-node-id="1:54"
              data-name="HorizontalBorder"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] relative size-full">
                <div
                  className="relative shrink-0"
                  data-node-id="1:55"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                    <div
                      className="bg-[#fdf2f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]"
                      data-node-id="1:56"
                      data-name="Background"
                    >
                      <div
                        className="relative shrink-0 size-[17.005px]"
                        data-node-id="1:57"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer2}
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:59"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full"
                        data-node-id="1:60"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap"
                          data-node-id="1:61"
                        >
                          <p className="leading-[20px]">Jam Operasional</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:62"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap"
                          data-node-id="1:63"
                        >
                          <p className="leading-[16.5px]">
                            Jadwal transaksi harian pasar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[rgba(194,220,128,0.5)] relative rounded-[8px] shrink-0"
                  data-node-id="1:64"
                  data-name="Overlay"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b6515] text-[12px] whitespace-nowrap"
                      data-node-id="1:65"
                    >
                      <p className="leading-[16px]">Tutup 17.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 w-full"
              data-node-id="1:66"
              data-name="Timetable Items"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                <div
                  className="bg-[#faf6f3] content-stretch flex items-center justify-between pl-[10px] pr-[9.99px] py-[10px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="1:67"
                  data-name="Weekday"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="1:68"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#c2dc80] relative rounded-[9999px] shrink-0 size-[8px]"
                      data-node-id="1:69"
                      data-name="Background"
                    />
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:70"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap"
                        data-node-id="1:71"
                      >
                        <p className="leading-[16px]">Senin - Jumat</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:72"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap"
                      data-node-id="1:73"
                    >
                      <p className="leading-[16px]">06.00 - 17.00 WIB</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[rgba(253,242,245,0.7)] border border-[rgba(222,59,117,0.1)] border-solid content-stretch flex items-center justify-between p-[11px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="1:74"
                  data-name="Weekend"
                >
                  <div
                    className="relative shrink-0"
                    data-node-id="1:75"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                      <div
                        className="bg-[#de3b75] relative rounded-[9999px] shrink-0 size-[8px]"
                        data-node-id="1:76"
                        data-name="Background"
                      />
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:77"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          data-node-id="1:78"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#c22860] text-[12px] whitespace-nowrap"
                            data-node-id="1:79"
                          >
                            <p className="leading-[16px]">
                              Sabtu - Minggu (Weekend)
                            </p>
                          </div>
                        </div>
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(222,59,117,0.8)] whitespace-nowrap"
                          data-node-id="1:80"
                        >
                          <p className="leading-[16px]">
                            Buka lebih lama untuk wisata kuliner
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0"
                    data-node-id="1:81"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#c22860] text-[12px] whitespace-nowrap"
                        data-node-id="1:82"
                      >
                        <p className="leading-[16px]">05.00 - 17.00 WIB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#faf6f3] content-stretch flex items-center justify-between p-[10px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="1:83"
                  data-name="Evening Street Food Corner"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="1:84"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#f59e0b] relative rounded-[9999px] shrink-0 size-[8px]"
                      data-node-id="1:85"
                      data-name="Background"
                    />
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:86"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:87"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap"
                          data-node-id="1:88"
                        >
                          <p className="leading-[16px]">{`Jajanan Sore & Kuliner Luar`}</p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[10px] whitespace-nowrap"
                        data-node-id="1:89"
                      >
                        <p className="leading-[16px]">{`Kios teras luar & foodcourt tertentu`}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:90"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap"
                      data-node-id="1:91"
                    >
                      <p className="leading-[16px]">06.00 - 17.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[rgba(255,251,235,0.6)] border border-[rgba(253,230,138,0.5)] border-solid relative rounded-[12px] shrink-0 w-full"
              data-node-id="1:92"
              data-name="Overlay+Border"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center p-[11px] relative size-full">
                <div
                  className="h-[13.938px] relative shrink-0 w-[14.528px]"
                  data-node-id="1:93"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer3}
                  />
                </div>
                <div
                  className="h-[33px] relative shrink-0 w-[278px]"
                  data-node-id="1:95"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-0 text-[#92400e] text-[11px] top-[15.75px] whitespace-nowrap"
                      data-node-id="1:96"
                    >
                      <p className="leading-[16.5px] mb-0">
                        Pasar terakreditasi SNI Pasar Rakyat dengan
                      </p>
                      <p className="leading-[16.5px]">{`kebersihan lorong & sirkulasi udara optimal.`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white border border-[#ffe4e6] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="1:97"
            data-name="Section2_CrowdDensity"
          >
            <div
              className="absolute bg-[rgba(255,255,255,0)] inset-[-1px_-1px_-0.5px_-1px] rounded-[24px] shadow-[0px_4px_20px_-2px_rgba(222,59,117,0.08),0px_2px_6px_-1px_rgba(0,0,0,0.02)]"
              data-node-id="1:98"
              data-name="Section2_CrowdDensity:shadow"
            />
            <div
              className="relative shrink-0 w-full"
              data-node-id="1:99"
              data-name="Container"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="1:100"
                  data-name="Container"
                >
                  <div
                    className="bg-[#fdf2f5] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]"
                    data-node-id="1:101"
                    data-name="Background"
                  >
                    <div
                      className="relative shrink-0 size-[15.339px]"
                      data-node-id="1:102"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer4}
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:104"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full"
                      data-node-id="1:105"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap"
                        data-node-id="1:106"
                      >
                        <p className="leading-[20px]">{`Hari Pasaran & Kepadatan`}</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:107"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap"
                        data-node-id="1:108"
                      >
                        <p className="leading-[16.5px]">
                          Estimasi kepadatan pengunjung pasar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#fff1f2] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:109"
                  data-name="Background"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#de3b75] text-[11px] whitespace-nowrap"
                    data-node-id="1:110"
                  >
                    <p className="leading-[16.5px]">Live Tren</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 w-full"
              data-node-id="1:111"
              data-name="Crowd Chart / Days List"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[4px] relative size-full">
                <div
                  className="bg-[#faf6f3] content-stretch flex flex-col gap-[6px] items-start p-[12px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="1:112"
                  data-name="Mon - Thu"
                >
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                    data-node-id="1:113"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:114"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap"
                        data-node-id="1:115"
                      >
                        <p className="leading-[16px]">Senin - Kamis</p>
                      </div>
                    </div>
                    <div
                      className="bg-[rgba(194,220,128,0.5)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0"
                      data-node-id="1:116"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b6515] text-[11px] whitespace-nowrap"
                        data-node-id="1:117"
                      >
                        <p className="leading-[16px]">Rendah - Nyaman</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#e5e7eb] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full"
                    data-node-id="1:118"
                    data-name="Background"
                  >
                    <div
                      className="absolute bg-[#c2dc80] h-[8px] left-0 right-[65%] rounded-[9999px] top-0"
                      data-node-id="1:119"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:120"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] w-full"
                      data-node-id="1:121"
                    >
                      <p className="leading-[15px] mb-0">
                        Sangat kondusif belanja sayuran segar harian,
                        rempah-rempah,
                      </p>
                      <p className="leading-[15px]">
                        dan daging tanpa antrean.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#faf6f3] content-stretch flex flex-col gap-[6px] items-start p-[12px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="1:122"
                  data-name="Friday"
                >
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                    data-node-id="1:123"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:124"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap"
                        data-node-id="1:125"
                      >
                        <p className="leading-[16px]">Jumat</p>
                      </div>
                    </div>
                    <div
                      className="bg-[#fffbeb] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0"
                      data-node-id="1:126"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#d97706] text-[11px] whitespace-nowrap"
                        data-node-id="1:127"
                      >
                        <p className="leading-[16px]">Sedang</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#e5e7eb] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full"
                    data-node-id="1:128"
                    data-name="Background"
                  >
                    <div
                      className="absolute bg-[#fbbf24] h-[8px] left-0 right-[40%] rounded-[9999px] top-0"
                      data-node-id="1:129"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:130"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[10px] w-full"
                      data-node-id="1:131"
                    >
                      <p className="leading-[15px] mb-0">
                        Ramai di pagi hari (06.30 - 09.30 WIB) menjelang
                        persiapan
                      </p>
                      <p className="leading-[15px]">ibadah salat Jumat.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[rgba(255,241,242,0.6)] border border-[rgba(222,59,117,0.2)] border-solid content-stretch flex flex-col gap-[6px] items-start p-[13px] relative rounded-[16px] shrink-0 w-full"
                  data-node-id="1:132"
                  data-name="Weekend"
                >
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:133"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                      <div
                        className="content-stretch flex gap-[6px] items-center relative shrink-0"
                        data-node-id="1:134"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="1:135"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap"
                            data-node-id="1:136"
                          >
                            <p className="leading-[16px]">{`Sabtu & Minggu`}</p>
                          </div>
                        </div>
                        <div
                          className="bg-[#de3b75] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0"
                          data-node-id="1:137"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[9px] text-white uppercase whitespace-nowrap"
                            data-node-id="1:138"
                          >
                            <p className="leading-[16px]">PUNCAK</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-white border border-[rgba(222,59,117,0.3)] border-solid content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:139"
                        data-name="Background+Border"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#c22860] text-[11px] whitespace-nowrap"
                          data-node-id="1:140"
                        >
                          <p className="leading-[16px]">Ramai Wisatawan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffe4e6] h-[8px] relative rounded-[9999px] shrink-0 w-full"
                    data-node-id="1:141"
                    data-name="Background"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                      <div
                        className="absolute bg-[#de3b75] h-[8px] left-0 right-[8%] rounded-[9999px] top-0"
                        data-node-id="1:142"
                        data-name="Background"
                      />
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:143"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[10px] w-full"
                        data-node-id="1:144"
                      >
                        <p className="leading-[15px] mb-0">{`Penuh pemburu jajanan legendaris seperti Serabi Solo & Kue`}</p>
                        <p className="leading-[15px]">Lumpur 27.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white border border-[#ffe4e6] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="1:145"
            data-name="Section3_AccessTransport"
          >
            <div
              className="absolute bg-[rgba(255,255,255,0)] inset-[-1px_-1px_-0.5px_-1px] rounded-[24px] shadow-[0px_4px_20px_-2px_rgba(222,59,117,0.08),0px_2px_6px_-1px_rgba(0,0,0,0.02)]"
              data-node-id="1:146"
              data-name="Section3_AccessTransport:shadow"
            />
            <div
              className="border-[#f3f4f6] border-b border-solid relative shrink-0 w-full"
              data-node-id="1:147"
              data-name="HorizontalBorder"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[9px] relative size-full">
                <div
                  className="bg-[#fdf2f5] relative rounded-[12px] shrink-0 size-[32px]"
                  data-node-id="1:148"
                  data-name="Background"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div
                      className="h-[14.988px] relative shrink-0 w-[14.987px]"
                      data-node-id="1:149"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer5}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative shrink-0"
                  data-node-id="1:151"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div
                      className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full"
                      data-node-id="1:152"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap"
                        data-node-id="1:153"
                      >
                        <p className="leading-[20px]">{`Akses & Pilihan Transportasi`}</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:154"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap"
                        data-node-id="1:155"
                      >
                        <p className="leading-[16.5px]">
                          Rute mudah menuju Pasar Oro-Oro Dowo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#ebf3f2] border border-[#ffe4e6] border-solid h-[128px] relative rounded-[16px] shrink-0 w-full"
              data-node-id="1:156"
              data-name="Simulated Map Box"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
                <div
                  className="absolute inset-0 opacity-40"
                  data-node-id="1:157"
                  data-name="Background stylized map elements"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
                    <div
                      className="flex-[1_0_0] min-h-px relative w-full"
                      data-node-id="1:158"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 334 126' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(23.617 0 0 8.9095 167 63)'><stop stop-color='rgba(147,197,253,1)' offset='0.088388'/><stop stop-color='rgba(147,197,253,0)' offset='0.088388'/></radialGradient></defs></svg>\")",
                      }}
                      data-name="Gradient"
                    />
                    <div
                      className="-translate-y-1/2 absolute flex h-[49.57px] items-center justify-center left-[0.05px] right-[0.04px] top-1/2"
                      data-node-id="1:159"
                      style={{ containerType: "size" }}
                    >
                      <div className="flex-none h-[hypot(0.519541cqw,32.1005cqh)] rotate-[-5.79deg] skew-x-[0.44deg] w-[hypot(99.4805cqw,-67.8995cqh)]">
                        <div
                          className="bg-[rgba(253,230,138,0.8)] relative size-full"
                          data-name="Overlay"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bottom-[-0.28px] flex items-center justify-center left-[94.4px] top-[-0.29px] w-[41.847px]"
                      data-node-id="1:160"
                      style={{ containerType: "size" }}
                    >
                      <div className="flex-none h-[hypot(-62.6012cqw,97.3718cqh)] rotate-12 w-[hypot(37.3988cqw,2.6282cqh)]">
                        <div
                          className="bg-[#d1d5db] relative size-full"
                          data-name="Background"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative shrink-0"
                  data-node-id="1:161"
                  data-name="Centered Pin Indicator"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                    <div
                      className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0"
                      data-node-id="1:162"
                      data-name="Margin"
                    >
                      <div
                        className="bg-white border border-[#fecdd3] border-solid h-[30px] relative rounded-[9999px] shrink-0 w-[157.7px]"
                        data-node-id="1:163"
                        data-name="Background+Border"
                      >
                        <div
                          className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                          data-node-id="1:164"
                          data-name="Overlay+Shadow"
                        />
                        <div
                          className="-translate-y-1/2 absolute h-[10.779px] left-[12px] top-1/2 w-[11.95px]"
                          data-node-id="1:165"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer6}
                          />
                        </div>
                        <div
                          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] left-[30.02px] text-[#de3b75] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap"
                          data-node-id="1:167"
                        >
                          <p className="leading-[16.5px]">Pasar Oro-Oro Dowo</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-[24.62px] relative shrink-0 w-[20.508px]"
                      data-node-id="1:168"
                      data-name="Shadow"
                    >
                      <div className="absolute inset-[0_-14.63%_-28.43%_-14.63%]">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={imgShadow}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 w-full"
              data-node-id="1:170"
              data-name="Transport Options List"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                <div
                  className="bg-[#faf6f3] content-stretch flex gap-[10px] items-start p-[8px] relative rounded-[12px] shrink-0 w-full"
                  data-node-id="1:171"
                  data-name="Private Vehicle"
                >
                  <div
                    className="h-[12.938px] relative shrink-0 w-[12.271px]"
                    data-node-id="1:172"
                    data-name="Margin"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgMargin1}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] pr-[5.11px] relative shrink-0 whitespace-nowrap"
                    data-node-id="1:174"
                    data-name="Paragraph"
                  >
                    <div
                      className="flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#1f2937] text-[12px]"
                      data-node-id="1:175"
                    >
                      <p className="leading-[16px]">Kendaraan Pribadi</p>
                    </div>
                    <div
                      className="flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center relative shrink-0 text-[#6b7280] text-[11px]"
                      data-node-id="1:176"
                    >
                      <p className="leading-[16px] mb-0">
                        Akses nyaman dari arah Jl. Ijen melalui Jl. Guntur atau
                        Jl.
                      </p>
                      <p className="leading-[16px] mb-0">{`Buring. Lahan parkir mobil tersedia di sisi utara &`}</p>
                      <p className="leading-[16px]">selatan.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#faf6f3] content-stretch flex gap-[10px] items-start p-[8px] relative rounded-[12px] shrink-0 w-full"
                  data-node-id="1:177"
                  data-name="Public Angkot"
                >
                  <div
                    className="h-[14.986px] relative shrink-0 w-[10.938px]"
                    data-node-id="1:178"
                    data-name="Margin"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgMargin2}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] pr-[1.08px] relative shrink-0 whitespace-nowrap"
                    data-node-id="1:180"
                    data-name="Paragraph"
                  >
                    <div
                      className="flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#1f2937] text-[12px]"
                      data-node-id="1:181"
                    >
                      <p className="leading-[16px]">Angkutan Kota (Mikrolet)</p>
                    </div>
                    <div
                      className="flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center relative shrink-0 text-[#6b7280] text-[11px]"
                      data-node-id="1:182"
                    >
                      <p className="mb-0">
                        <span className="leading-[16px]">{`Jalur angkot kode `}</span>
                        <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[16px]">
                          AL
                        </span>
                        <span className="leading-[16px]">{` (Arjosari - Landungsari), `}</span>
                        <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[16px]">
                          ABG
                        </span>
                        <span className="leading-[16px]">, dan</span>
                      </p>
                      <p>
                        <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[16px]">
                          MM
                        </span>
                        <span className="leading-[16px]">{` melintas di dekat perempatan Jl. Guntur.`}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#faf6f3] content-stretch flex gap-[10px] items-start p-[8px] relative rounded-[12px] shrink-0 w-full"
                  data-node-id="1:183"
                  data-name="Online Ride Hailing"
                >
                  <div
                    className="h-[14.331px] relative shrink-0 w-[12.271px]"
                    data-node-id="1:184"
                    data-name="Margin"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgMargin3}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] pr-[19.48px] relative shrink-0 whitespace-nowrap"
                    data-node-id="1:186"
                    data-name="Paragraph"
                  >
                    <div
                      className="flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#1f2937] text-[12px]"
                      data-node-id="1:187"
                    >
                      <p className="leading-[16px]">{`Ojek & Taksi Online (Grab / Gojek)`}</p>
                    </div>
                    <div
                      className="flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center relative shrink-0 text-[#6b7280] text-[11px]"
                      data-node-id="1:188"
                    >
                      <p className="mb-0">
                        <span className="leading-[16px]">{`Pilih titik penurunan/jemput di `}</span>
                        <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[16px] text-[#de3b75]">{`"Lobby Utama Timur`}</span>
                      </p>
                      <p className="mb-0">
                        <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[16px] text-[#de3b75]">{`Pasar Oro-Oro Dowo"`}</span>
                        <span className="leading-[16px]">{` agar mudah dijangkau`}</span>
                      </p>
                      <p className="leading-[16px]">pengemudi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pasar+Oro-Oro+Dowo+Malang"
              target="_blank"
              rel="noreferrer"
              className="bg-[#de3b75] cursor-pointer drop-shadow-[0px_4px_2px_#c2dc80] relative rounded-[16px] shrink-0 w-full"
              data-node-id="1:189"
              data-name="Link - Navigation Button"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative size-full">
                <div
                  className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                  data-node-id="1:190"
                  data-name="Link - Navigation Button:shadow"
                />
                <div
                  className="relative shrink-0 size-[13.576px]"
                  data-node-id="1:191"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer7}
                  />
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="1:193"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap"
                    data-node-id="1:194"
                  >
                    <p className="leading-[16px]">Buka di Google Maps</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            className="bg-white border border-[#ffe4e6] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="1:195"
            data-name="Section5_BestTimeToVisit"
          >
            <div
              className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[24px] shadow-[0px_4px_20px_-2px_rgba(222,59,117,0.08),0px_2px_6px_-1px_rgba(0,0,0,0.02)]"
              data-node-id="1:196"
              data-name="Section5_BestTimeToVisit:shadow"
            />
            <div
              className="border-[#f3f4f6] border-b border-solid relative shrink-0 w-full"
              data-node-id="1:197"
              data-name="HorizontalBorder"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[9px] relative size-full">
                <div
                  className="bg-[#fdf2f5] relative rounded-[12px] shrink-0 size-[32px]"
                  data-node-id="1:198"
                  data-name="Background"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div
                      className="h-[16.39px] relative shrink-0 w-[17.438px]"
                      data-node-id="1:199"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer8}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative shrink-0"
                  data-node-id="1:201"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div
                      className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full"
                      data-node-id="1:202"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap"
                        data-node-id="1:203"
                      >
                        <p className="leading-[20px]">
                          Waktu Terbaik Berkunjung
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:204"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[11px] whitespace-nowrap"
                        data-node-id="1:205"
                      >
                        <p className="leading-[16.5px]">
                          Sesuaikan waktu dengan kebutuhan Anda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 w-full"
              data-node-id="1:206"
              data-name="3 Time-slots recommendation"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                <div
                  className="bg-gradient-to-r border-[#de3b75] border-b border-l-4 border-r border-solid border-t content-stretch flex flex-col from-[#faf5f8] gap-[2px] items-start pl-[16px] pr-[13px] py-[13px] relative rounded-[16px] shrink-0 to-white w-full"
                  data-node-id="1:207"
                  data-name="Slot 1"
                >
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:208"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:209"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#de3b75] text-[10px] uppercase whitespace-nowrap"
                          data-node-id="1:210"
                        >
                          <p className="leading-[16px]">06.00 - 08.30 WIB</p>
                        </div>
                      </div>
                      <div
                        className="bg-[rgba(222,59,117,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:211"
                        data-name="Overlay"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#c22860] text-[10px] whitespace-nowrap"
                          data-node-id="1:212"
                        >
                          <p className="leading-[16px]">Bahan Pokok Segar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:213"
                    data-name="Heading 4"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full"
                        data-node-id="1:214"
                      >
                        <p className="leading-[16px]">
                          Belanja Dapur Segar Petani
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:215"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full"
                        data-node-id="1:216"
                      >
                        <p className="leading-[16px] mb-0">
                          Waktu terbaik mendapatkan sayuran hijau renyah, daging
                        </p>
                        <p className="leading-[16px] mb-0">
                          segar baru potong, dan bumbu dapur langsung dari
                        </p>
                        <p className="leading-[16px]">petani Batu/Malang.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r border-[#fbbf24] border-b border-l-4 border-r border-solid border-t content-stretch flex flex-col from-[rgba(255,251,235,0.5)] gap-[2px] items-start pl-[16px] pr-[13px] py-[13px] relative rounded-[16px] shrink-0 to-white w-full"
                  data-node-id="1:217"
                  data-name="Slot 2"
                >
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:218"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:219"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#b45309] text-[10px] uppercase whitespace-nowrap"
                          data-node-id="1:220"
                        >
                          <p className="leading-[16px]">08.30 - 11.00 WIB</p>
                        </div>
                      </div>
                      <div
                        className="bg-[#fef3c7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:221"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#92400e] text-[10px] whitespace-nowrap"
                          data-node-id="1:222"
                        >
                          <p className="leading-[16px]">Wisata Kuliner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:223"
                    data-name="Heading 4"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full"
                        data-node-id="1:224"
                      >
                        <p className="leading-[16px]">{`Jajanan Tradisional & Santai`}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:225"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full"
                        data-node-id="1:226"
                      >
                        <p className="leading-[16px] mb-0">
                          Nikmati jajanan legendaris seperti kue lumpur hangat,
                        </p>
                        <p className="leading-[16px] mb-0">
                          onde-onde, dan serabi kuah kental sambil menikmati
                        </p>
                        <p className="leading-[16px]">kopi santai.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-gradient-to-r border-[#c2dc80] border-b border-l-4 border-r border-solid border-t content-stretch flex flex-col from-[rgba(194,220,128,0.5)] gap-[2px] items-start pl-[16px] pr-[13px] py-[13px] relative rounded-[16px] shrink-0 to-[rgba(194,220,128,0.2)] w-full"
                  data-node-id="1:227"
                  data-name="Slot 3"
                >
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:228"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:229"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4b6515] text-[10px] uppercase whitespace-nowrap"
                          data-node-id="1:230"
                        >
                          <p className="leading-[16px]">14.00 - 16.00 WIB</p>
                        </div>
                      </div>
                      <div
                        className="bg-[rgba(194,220,128,0.5)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:231"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4b6515] text-[10px] whitespace-nowrap"
                          data-node-id="1:232"
                        >
                          <p className="leading-[16px]">{`Lengang & Cepat`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:233"
                    data-name="Heading 4"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] w-full"
                        data-node-id="1:234"
                      >
                        <p className="leading-[16px]">{`Belanja Praktis & Tenang`}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 w-full"
                    data-node-id="1:235"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[11px] w-full"
                        data-node-id="1:236"
                      >
                        <p className="leading-[16px] mb-0">
                          Lorong pasar jauh lebih sepi. Cocok untuk Anda yang
                        </p>
                        <p className="leading-[16px]">
                          ingin belanja kilat tanpa antre di kasir atau lapak.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#fdf2f5] border border-[rgba(222,59,117,0.2)] border-solid relative rounded-[16px] shrink-0 w-full"
              data-node-id="1:237"
              data-name="Local Tip Card"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[13px] relative size-full">
                <div
                  className="bg-[#de3b75] relative rounded-[12px] shrink-0 size-[36px]"
                  data-node-id="1:238"
                  data-name="Background"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div
                      className="h-[13.075px] relative shrink-0 w-[13.098px]"
                      data-node-id="1:239"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer9}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="relative shrink-0"
                  data-node-id="1:241"
                  data-name="Container"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div
                      className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full"
                      data-node-id="1:242"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[12px] whitespace-nowrap"
                        data-node-id="1:243"
                      >
                        <p className="leading-[16px]">Tips Ramah Lingkungan</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:244"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[11px] whitespace-nowrap"
                        data-node-id="1:245"
                      >
                        <p className="mb-0">
                          <span className="leading-[16.5px]">{`Bawa `}</span>
                          <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[16.5px] text-[#de3b75]">
                            kantong belanja kain (totebag)
                          </span>
                          <span className="leading-[16.5px]">{` sendiri`}</span>
                        </p>
                        <p className="leading-[16.5px] mb-0">
                          untuk mendukung program pasar bersih bebas
                        </p>
                        <p className="leading-[16.5px]">sampah plastik!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] border border-[rgba(234,156,175,0.3)] border-solid content-stretch flex gap-[53px] items-center px-[25px] py-[11px] relative rounded-[9999px] shadow-[0px_-4px_25px_0px_rgba(213,105,137,0.08)] shrink-0"
        data-node-id="1:246"
        data-name="Background+Border+Shadow+OverlayBlur"
      >
        <div
          className="content-stretch flex flex-col items-center relative shrink-0"
          data-node-id="1:247"
          data-name="Link - Tab 1: Home (Active)"
        >
          <div
            className="bg-[rgba(234,156,175,0.25)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]"
            data-node-id="1:248"
            data-name="Overlay"
          >
            <div
              className="relative shrink-0 size-[16px]"
              data-node-id="1:249"
              data-name="SVG"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgSvg}
              />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0"
            data-node-id="1:252"
            data-name="Margin"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d56989] text-[9.5px] whitespace-nowrap"
              data-node-id="1:253"
            >
              <p className="leading-[14.25px]">Home</p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col items-center relative shrink-0"
          data-node-id="1:254"
          data-name="Link - Tab 2: Toko"
        >
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-node-id="1:255"
            data-name="Container"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:256"
              data-name="SVG"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgSvg1}
              />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0"
            data-node-id="1:260"
            data-name="Margin"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[9.5px] whitespace-nowrap"
              data-node-id="1:261"
            >
              <p className="leading-[14.25px]">Toko</p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col isolate items-center relative shrink-0"
          data-node-id="1:262"
          data-name="Link - Tab 3: Keranjang"
        >
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px] z-[2]"
            data-node-id="1:263"
            data-name="Container"
          >
            <IconHeroiconsOutlineFire className="relative shrink-0 size-[23px]" />
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 z-[1]"
            data-node-id="1:265"
            data-name="Margin"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[9.5px] whitespace-nowrap"
              data-node-id="1:266"
            >
              <p className="leading-[14.25px]">Promo</p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0"
          data-node-id="1:267"
          data-name="Button - Nav Item 4: Profil"
        >
          <div
            className="content-stretch flex flex-col items-start p-[4px] relative shrink-0"
            data-node-id="1:268"
            data-name="Container"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="1:269"
              data-name="SVG"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgSvg2}
              />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-center relative shrink-0"
            data-node-id="1:271"
            data-name="Container"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center whitespace-nowrap"
              data-node-id="1:272"
            >
              <p className="leading-[15px]">Review Pasar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
