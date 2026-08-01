import svgPaths from "./svg-woqat1w78o";
import imgImage6 from "./a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

function Frame2() {
  return (
    <div className="h-[97px] overflow-clip relative shrink-0 w-[215px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-[calc(50%+0.46px)] top-[calc(50%-0.5px)] w-[143.913px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[274.37%] left-[-10.59%] max-w-none top-[-86.88%] w-[124.95%]" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3230b400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[66.103px]">
        <p className="leading-[18.75px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkDashboardActive() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] from-[#f44] relative rounded-[8px] shrink-0 to-[#ff7272] w-full" data-name="Link - Dashboard (Active)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Svg />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[17.25px]">Pengajuan Dana</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,99,99,0.51)] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0)] w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[17.25px]">Pengadaan</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[17.25px]">Pengujian</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[17.25px]">Pembayaran</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[111px] items-start left-[16px] pl-[11px] right-[-3px] top-[0.25px]" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[116px] overflow-clip relative shrink-0 w-[221px]">
      <VerticalBorder />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p20d9c000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[140.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[141.109px]">
        <p className="leading-[18.75px]">{`Manajemen User & Role`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg1 />
      <Container7 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <g id="SVG">
              <path d="M9.5 4.5L6 8L2.5 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container6 />
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Group: User & Role">
      <Container5 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2141ee80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[54.3px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[54.174px]">
        <p className="leading-[18.75px]">Verifikasi</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg3 />
      <Container10 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.151px]">
      <div className="flex-none rotate-[-89.28deg]">
        <div className="relative size-[12px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <g id="SVG">
              <path d="M9.5 4.5L6 8L2.5 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container9 />
          <Svg4 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Group: Verifikasi">
      <Container8 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3e07e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[115.172px]">
        <p className="leading-[18.75px]">Template Dokumen</p>
      </div>
    </div>
  );
}

function LinkTemplateDokumen() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Template Dokumen">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Svg5 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p271cfb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[71.61px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[73.101px]">
        <p className="leading-[18.75px]">Master Data</p>
      </div>
    </div>
  );
}

function LinkMasterData() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Master Data">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative size-full">
          <Svg6 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive />
      <Frame1 />
      <GroupUserRole />
      <GroupVerifikasi />
      <LinkTemplateDokumen />
      <LinkMasterData />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[14.38px]">Administrator</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[15px]">admin@sipro.co.id</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container14 />
    </div>
  );
}

function UserCard() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col items-start p-[10px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[221px]" data-name="User Card">
      <Container13 />
    </div>
  );
}

function UserCardMargin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] px-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard />
    </div>
  );
}

function AsideSidebarComponent() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 from-[#e6251c] left-0 overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] to-[#c20f06] top-0 w-[242px]" data-name="Aside - Sidebar Component">
      <Logo />
      <Navigation />
      <UserCardMargin />
    </div>
  );
}

function Requestion() {
  return (
    <div className="bg-white justify-self-start overflow-clip relative self-stretch shrink-0 w-[242px]" data-name="Requestion">
      <AsideSidebarComponent />
    </div>
  );
}

function Frame3() {
  return <div className="h-[625px] relative shrink-0 w-[1119px]" />;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[694px] items-start justify-self-start relative self-center shrink-0 w-[1119px]">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#252271] text-[36px] w-[225px]">Dashboard</p>
      <Frame3 />
    </div>
  );
}

export default function UserDashboard() {
  return (
    <div className="bg-white grid grid-cols-[__282px_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] relative size-full" data-name="User - Dashboard">
      <Requestion />
      <Frame />
    </div>
  );
}