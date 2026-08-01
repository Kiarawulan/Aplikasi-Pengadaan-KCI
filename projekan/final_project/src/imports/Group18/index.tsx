import svgPaths from "./svg-zqlnv503ga";
import imgImage6 from "./a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

function Logo() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame46 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame47 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame48 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TaskApprovalRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">{`List Kontrak <500jt`}</p>
    </div>
  );
}

function TaskApprovalWrap() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval__wrap">
      <TaskApprovalRow />
    </div>
  );
}

function ListTimelineRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">{`List Kontrak >500jt`}</p>
    </div>
  );
}

function ListTimelineWrap() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Timeline__wrap">
      <ListTimelineRow />
    </div>
  );
}

function TimelineChildren() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalWrap />
          <ListTimelineWrap />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TimelineWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow />
      <TimelineChildren />
    </div>
  );
}

function NppRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Request Pengujian</p>
    </div>
  );
}

function NppWrap() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow />
    </div>
  );
}

function TopLevelChildren() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap />
        <NppWrap />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame49 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <TopLevelChildren />
      <Frame4 />
    </div>
  );
}

function AsideSidebarComponent() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo />
      <Frame />
    </div>
  );
}

function Frame35() {
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

function Logo1() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame35 />
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
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg />
      <Container />
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

function Container2() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container2 />
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container1 />
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

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container3 />
    </div>
  );
}

function Svg4() {
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

function Container5() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg4 />
      <Container5 />
    </div>
  );
}

function Svg5() {
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

function LinkMasterData() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive />
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

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay />
    </div>
  );
}

function UserCard() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container6 />
    </div>
  );
}

function UserCardMargin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard />
    </div>
  );
}

function AsideSidebarComponent1() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo1 />
      <Navigation />
      <UserCardMargin />
    </div>
  );
}

function Requestion() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent />
      <Requestion />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">{`Pengujian > Kontrak > `}</span>
          <span className="leading-[24px]">{`List Kontrak <500jt`}</span>
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <DatePicker />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label1 />
        <DatePicker1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Unit</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label2 />
        <Dropdown />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label3 />
        <Dropdown1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[129.575px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__534px_534px] grid-rows-[__57.59px_55.99px] relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d="M2.70833 6.5H10.2917" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 2.70833V10.2917" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c00] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Tambah Kontrak</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#252271] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cari</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p3bd12900} id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 1.625V4.33333H4.33333" id="Vector_2" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[35px] items-center px-[10.8px] py-[6.8px] relative rounded-[15px] shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Icon2 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-[271px]" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start pt-[16px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function FilterSection() {
  return (
    <div className="bg-[#f5f7fd] relative rounded-[15px] shrink-0 w-full" data-name="FilterSection">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container8 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function FilterSectionMargin() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <FilterSection />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Show</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[54.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">entries</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text />
        <Container16 />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Search:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Type to filter...</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[29.587px] relative rounded-[4px] shrink-0 w-[175.987px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] py-[1.2px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text2 />
        <Container18 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13.2px] pt-[12px] px-[14px] relative size-full">
          <Container15 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">No. SP3</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text4 />
      <Icon3 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text5 />
      <Icon4 />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text6 />
      <Icon5 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Departement</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text7 />
      <Icon6 />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Aksi</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Search</p>
      </div>
    </div>
  );
}

function ActionBtn() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text16 />
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge1 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Search</p>
      </div>
    </div>
  );
}

function ActionBtn1() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn1 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text18 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge2 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Search</p>
      </div>
    </div>
  );
}

function ActionBtn2() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn2 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[194.981px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] overflow-clip relative rounded-[inherit] size-full">
        <HeaderCell />
        <HeaderCell1 />
        <HeaderCell2 />
        <HeaderCell3 />
        <HeaderCell4 />
        <HeaderCell5 />
        <TableCell />
        <TableCell1 />
        <TableCell2 />
        <TableCell3 />
        <TableCell4 />
        <TableCell5 />
        <TableCell6 />
        <TableCell7 />
        <TableCell8 />
        <TableCell9 />
        <TableCell10 />
        <TableCell11 />
        <TableCell12 />
        <TableCell13 />
        <TableCell14 />
        <TableCell15 />
        <TableCell16 />
        <TableCell17 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Showing 1 to 3 of 3 entries</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#252271] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] pt-[13.2px] px-[14px] relative size-full">
          <Text23 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[305.362px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container19 />
        <Container27 />
      </div>
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7px]" />
    </div>
  );
}

function ListViewMargin() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start pt-[20px] relative shrink-0 w-[1123px]" data-name="ListView:margin">
      <Container13 />
    </div>
  );
}

function Requestion1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container7 />
      <FilterSectionMargin />
      <ListViewMargin />
    </div>
  );
}

function UserDashboard() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Frame53 />
      <Requestion1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame50 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame51 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame52 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TimelineWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow1 />
    </div>
  );
}

function NppRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Request Pengujian</p>
    </div>
  );
}

function ListNppRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">List Request Pengujian</p>
    </div>
  );
}

function ListNppWrap() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow />
    </div>
  );
}

function ListNppRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Pengujian</p>
    </div>
  );
}

function ListNppWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow1 />
    </div>
  );
}

function NppChildren() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="NPP__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <ListNppWrap />
          <ListNppWrap1 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NppWrap1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow1 />
      <NppChildren />
    </div>
  );
}

function TopLevelChildren1() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap1 />
        <NppWrap1 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame55 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <TopLevelChildren1 />
      <Frame9 />
    </div>
  );
}

function AsideSidebarComponent2() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo2 />
      <Frame5 />
    </div>
  );
}

function Frame36() {
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

function Logo3() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame36 />
    </div>
  );
}

function Svg6() {
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

function Container29() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive1() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg6 />
      <Container29 />
    </div>
  );
}

function Svg7() {
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

function Container31() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container31 />
          <Svg8 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container30 />
    </div>
  );
}

function Svg9() {
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

function Container33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container32 />
    </div>
  );
}

function Svg10() {
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

function Container34() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg10 />
      <Container34 />
    </div>
  );
}

function Svg11() {
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

function LinkMasterData1() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg11 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive1 />
      <GroupUserRole1 />
      <GroupVerifikasi1 />
      <LinkTemplateDokumen1 />
      <LinkMasterData1 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay1 />
    </div>
  );
}

function UserCard1() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container35 />
    </div>
  );
}

function UserCardMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard1 />
    </div>
  );
}

function AsideSidebarComponent3() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo3 />
      <Navigation1 />
      <UserCardMargin1 />
    </div>
  );
}

function Requestion2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent3 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent2 />
      <Requestion2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">{`Pengujian > Request Pengujian > `}</span>
          <span className="leading-[24px]">List request Pengujian</span>
        </p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function DatePicker2() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label4 />
        <DatePicker2 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function DatePicker3() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label5 />
        <DatePicker3 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Unit</p>
      </div>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label6 />
        <Dropdown2 />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label7 />
        <Dropdown3 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[129.575px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__534px_534px] grid-rows-[__57.59px_55.99px] relative size-full">
        <Container38 />
        <Container39 />
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#252271] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon7 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cari</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p3bd12900} id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 1.625V4.33333H4.33333" id="Vector_2" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex h-[35px] items-center px-[10.8px] py-[6.8px] relative rounded-[15px] shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Icon8 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0 w-[271px]" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start pt-[16px] relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function FilterSection1() {
  return (
    <div className="bg-[#f5f7fd] relative rounded-[15px] shrink-0 w-full" data-name="FilterSection">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container37 />
        <ButtonMargin1 />
      </div>
    </div>
  );
}

function FilterSectionMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <FilterSection1 />
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Show</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[54.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">entries</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8.2px] py-[2.95px] relative rounded-[3.5px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Filter aktif</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[10.5px] relative size-full">
        <Text26 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text24 />
        <Container45 />
        <Text25 />
        <TextMargin />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Search:</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Type to filter...</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[29.587px] relative rounded-[4px] shrink-0 w-[175.987px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] py-[1.2px] relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text27 />
        <Container47 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13.2px] pt-[12px] px-[14px] relative size-full">
          <Container44 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nomor Kontrak</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[243.506px]" data-name="Container">
      <Text29 />
      <Icon9 />
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[243.506px]" data-name="Container">
      <Text30 />
      <Icon10 />
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[243.506px]" data-name="Container">
      <Text31 />
      <Icon11 />
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container51 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Departemen</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[243.506px]" data-name="Container">
      <Text32 />
      <Icon12 />
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Jadwal Pengujian</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[243.506px]" data-name="Container">
      <Text33 />
      <Icon13 />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Timeline</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[243.506px]" data-name="Container">
      <Text34 />
      <Icon14 />
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Aksi</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text36 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text37 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text39 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text40 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p126ce980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionBtn3() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn3 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text41 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text42 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text43 />
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text44 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text45 />
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text46 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p126ce980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionBtn4() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn4 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text47 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text48 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text49 />
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text50 />
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text51 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[245.531px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text52 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p126ce980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionBtn5() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn5 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[194.981px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] overflow-clip relative rounded-[inherit] size-full">
        <HeaderCell6 />
        <HeaderCell7 />
        <HeaderCell8 />
        <HeaderCell9 />
        <HeaderCell10 />
        <HeaderCell11 />
        <HeaderCell12 />
        <TableCell18 />
        <TableCell19 />
        <TableCell20 />
        <TableCell21 />
        <TableCell22 />
        <TableCell23 />
        <TableCell24 />
        <TableCell25 />
        <TableCell26 />
        <TableCell27 />
        <TableCell28 />
        <TableCell29 />
        <TableCell30 />
        <TableCell31 />
        <TableCell32 />
        <TableCell33 />
        <TableCell34 />
        <TableCell35 />
        <TableCell36 />
        <TableCell37 />
        <TableCell38 />
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Showing 1 to 3 of 3 entries</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#252271] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] pt-[13.2px] px-[14px] relative size-full">
          <Text53 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white h-[306px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container43 />
        <Container48 />
        <Container58 />
      </div>
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7px]" />
    </div>
  );
}

function ListViewMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start pt-[20px] relative shrink-0 w-[1123px]" data-name="ListView:margin">
      <Container42 />
    </div>
  );
}

function Requestion3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container36 />
      <FilterSectionMargin1 />
      <ListViewMargin1 />
    </div>
  );
}

function UserDashboard1() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Frame54 />
      <Requestion3 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame57 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame58 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame59 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TimelineWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow2 />
    </div>
  );
}

function NppRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Request Pengujian</p>
    </div>
  );
}

function ListNppRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Request Pengujian</p>
    </div>
  );
}

function ListNppWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow2 />
    </div>
  );
}

function ListNppRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">List Pengujian</p>
    </div>
  );
}

function ListNppWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow3 />
    </div>
  );
}

function NppChildren1() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="NPP__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <ListNppWrap2 />
          <ListNppWrap3 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NppWrap2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow2 />
      <NppChildren1 />
    </div>
  );
}

function TopLevelChildren2() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap2 />
        <NppWrap2 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame60 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <TopLevelChildren2 />
      <Frame14 />
    </div>
  );
}

function AsideSidebarComponent4() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo4 />
      <Frame10 />
    </div>
  );
}

function Frame37() {
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

function Logo5() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame37 />
    </div>
  );
}

function Svg12() {
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

function Container60() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive2() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg12 />
      <Container60 />
    </div>
  );
}

function Svg13() {
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

function Container62() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container62 />
          <Svg14 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container61 />
    </div>
  );
}

function Svg15() {
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

function Container64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Container63() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container63 />
    </div>
  );
}

function Svg16() {
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

function Container65() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg16 />
      <Container65 />
    </div>
  );
}

function Svg17() {
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

function LinkMasterData2() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg17 />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive2 />
      <GroupUserRole2 />
      <GroupVerifikasi2 />
      <LinkTemplateDokumen2 />
      <LinkMasterData2 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay2 />
    </div>
  );
}

function UserCard2() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container66 />
    </div>
  );
}

function UserCardMargin2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard2 />
    </div>
  );
}

function AsideSidebarComponent5() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo5 />
      <Navigation2 />
      <UserCardMargin2 />
    </div>
  );
}

function Requestion4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent5 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent4 />
      <Requestion4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">{`Pengujian > Request Pengujian > `}</span>
          <span className="leading-[24px]">List Pengujian</span>
        </p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function DatePicker4() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label8 />
        <DatePicker4 />
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function DatePicker5() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label9 />
        <DatePicker5 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Unit</p>
      </div>
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container71() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label10 />
        <Dropdown4 />
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container72() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label11 />
        <Dropdown5 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[129.575px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__534px_534px] grid-rows-[__57.59px_55.99px] relative size-full">
        <Container69 />
        <Container70 />
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#252271] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon18 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cari</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p3bd12900} id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 1.625V4.33333H4.33333" id="Vector_2" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex h-[35px] items-center px-[10.8px] py-[6.8px] relative rounded-[15px] shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Icon19 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0 w-[271px]" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start pt-[16px] relative size-full">
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function FilterSection2() {
  return (
    <div className="bg-[#f5f7fd] relative rounded-[15px] shrink-0 w-full" data-name="FilterSection">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container68 />
        <ButtonMargin2 />
      </div>
    </div>
  );
}

function FilterSectionMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <FilterSection2 />
    </div>
  );
}

function Text54() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Show</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[54.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text55() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">entries</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text54 />
        <Container76 />
        <Text55 />
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Search:</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Type to filter...</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[29.587px] relative rounded-[4px] shrink-0 w-[175.987px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] py-[1.2px] relative size-full">
        <Text57 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text56 />
        <Container78 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13.2px] pt-[12px] px-[14px] relative size-full">
          <Container75 />
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nomor Kontrak</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text58 />
      <Icon20 />
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container80 />
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text59 />
      <Icon21 />
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container81 />
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text60 />
      <Icon22 />
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container82 />
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Departement</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text61 />
      <Icon23 />
    </div>
  );
}

function HeaderCell16() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container83 />
      </div>
    </div>
  );
}

function HeaderCell17() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function HeaderCell18() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Aksi</p>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text62 />
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text63 />
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text64 />
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text65 />
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">Review Hasil Pengujian</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge3 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p126ce980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionBtn6() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn6 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container84 />
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text66 />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text67 />
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text68 />
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text69 />
      </div>
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">Review Hasil Pengujian</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge4 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p126ce980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionBtn7() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn7 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container85 />
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text70 />
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text71 />
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text72 />
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text73 />
      </div>
    </div>
  );
}

function StatusBadge5() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">Review Hasil Pengujian</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge5 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p126ce980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionBtn8() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn8 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container86 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[194.981px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] overflow-clip relative rounded-[inherit] size-full">
        <HeaderCell13 />
        <HeaderCell14 />
        <HeaderCell15 />
        <HeaderCell16 />
        <HeaderCell17 />
        <HeaderCell18 />
        <TableCell39 />
        <TableCell40 />
        <TableCell41 />
        <TableCell42 />
        <TableCell43 />
        <TableCell44 />
        <TableCell45 />
        <TableCell46 />
        <TableCell47 />
        <TableCell48 />
        <TableCell49 />
        <TableCell50 />
        <TableCell51 />
        <TableCell52 />
        <TableCell53 />
        <TableCell54 />
        <TableCell55 />
        <TableCell56 />
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Showing 1 to 3 of 3 entries</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#252271] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] pt-[13.2px] px-[14px] relative size-full">
          <Text74 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white h-[306px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container74 />
        <Container79 />
        <Container87 />
      </div>
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7px]" />
    </div>
  );
}

function ListViewMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start pt-[20px] relative shrink-0 w-[1123px]" data-name="ListView:margin">
      <Container73 />
    </div>
  );
}

function Requestion5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container67 />
      <FilterSectionMargin2 />
      <ListViewMargin2 />
    </div>
  );
}

function UserDashboard2() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Frame56 />
      <Requestion5 />
    </div>
  );
}

function Requestion6() {
  return (
    <div className="absolute h-[780px] left-[249px] overflow-clip top-[-8px] w-[1191px]" data-name="Requestion">
      <p className="[word-break:break-word] absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[68px] not-italic text-[36px] text-black top-[71px] whitespace-nowrap">Verification</p>
    </div>
  );
}

function StatusBadge6() {
  return (
    <div className="absolute bg-[#f3f4f6] bottom-[-0.49px] content-stretch flex h-[17.494px] items-center left-0 px-[7px] py-[1.75px] rounded-[3.5px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative self-stretch shrink-0 w-[1132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge6 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nomor Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Total Hari MPPL</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">No PR</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nomor Contract</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Metode</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Status Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="col-2 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Tanggal Permohonan Pengujian</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="col-1 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">PIC Penguji</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="col-2 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Catatan Hasil Pengujian</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="col-1 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Tanggal Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="col-2 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Vendor Name</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="col-1 justify-self-stretch relative row-7 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[466.463px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[__567px_567px] grid-rows-[_______66.64px_66.64px_66.64px_66.64px_66.64px_66.64px_66.64px] relative size-full">
        <Container92 />
        <Container93 />
        <Container94 />
        <Container95 />
        <Container96 />
        <Container97 />
        <Container98 />
        <Container99 />
        <Container100 />
        <Container101 />
        <Container102 />
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-white h-[468.862px] relative rounded-[12.75px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container91 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative self-start shrink-0 w-[1132px]" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.5px] relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="relative shrink-0 w-[1668.037px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white tracking-[1.05px] uppercase whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
        <Paragraph26 />
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen KAK</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text75 />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen Kontrak</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text76 />
          <Button17 />
        </div>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen Amandemen</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text77 />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Surat Permohonan Pengujian</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text78 />
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Text79() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen MI</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text79 />
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen BAHP</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text80 />
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen BAST</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[17.5px] py-[10.5px] relative size-full">
          <Text81 />
          <Button22 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-white h-[315.112px] justify-self-stretch relative rounded-[12.75px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container106 />
        <Container107 />
        <Container108 />
        <Container109 />
        <Container110 />
        <Container111 />
        <Container112 />
        <Container113 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___24px_486px_minmax(0,1fr)] h-[848px] left-[292px] overflow-clip top-[131px] w-[1132px]" data-name="Main Content">
      <Container89 />
      <ContainerMargin />
      <Container105 />
    </div>
  );
}

function Logo6() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame62 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame63 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame64 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TimelineWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow3 />
    </div>
  );
}

function NppRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Request Pengujian</p>
    </div>
  );
}

function ListNppRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Request Pengujian</p>
    </div>
  );
}

function ListNppWrap4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow4 />
    </div>
  );
}

function ListNppRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">List Pengujian</p>
    </div>
  );
}

function ListNppWrap5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow5 />
    </div>
  );
}

function NppChildren2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="NPP__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <ListNppWrap4 />
          <ListNppWrap5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NppWrap3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow3 />
      <NppChildren2 />
    </div>
  );
}

function TopLevelChildren3() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap3 />
        <NppWrap3 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame65 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <TopLevelChildren3 />
      <Frame19 />
    </div>
  );
}

function AsideSidebarComponent6() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.792deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo6 />
      <Frame15 />
    </div>
  );
}

function Frame38() {
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

function Logo7() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame38 />
    </div>
  );
}

function Svg18() {
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

function Container114() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive3() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg18 />
      <Container114 />
    </div>
  );
}

function Svg19() {
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

function Container116() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container116 />
          <Svg20 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container115 />
    </div>
  );
}

function Svg21() {
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

function Container118() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg21 />
    </div>
  );
}

function Container117() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container118 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container117 />
    </div>
  );
}

function Svg22() {
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

function Container119() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg22 />
      <Container119 />
    </div>
  );
}

function Svg23() {
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

function LinkMasterData3() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg23 />
    </div>
  );
}

function Navigation3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive3 />
      <GroupUserRole3 />
      <GroupVerifikasi3 />
      <LinkTemplateDokumen3 />
      <LinkMasterData3 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay3 />
    </div>
  );
}

function UserCard3() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container120 />
    </div>
  );
}

function UserCardMargin3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard3 />
    </div>
  );
}

function AsideSidebarComponent7() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo7 />
      <Navigation3 />
      <UserCardMargin3 />
    </div>
  );
}

function Requestion7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent7 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent6 />
      <Requestion7 />
    </div>
  );
}

function UserDashboard3() {
  return (
    <div className="absolute bg-white h-[1110px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Requestion6 />
      <MainContent />
      <Frame61 />
    </div>
  );
}

function Requestion8() {
  return (
    <div className="absolute h-[780px] left-[249px] overflow-clip top-[-8px] w-[1191px]" data-name="Requestion">
      <p className="[word-break:break-word] absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[68px] not-italic text-[36px] text-black top-[71px] whitespace-nowrap">Verification</p>
    </div>
  );
}

function StatusBadge7() {
  return (
    <div className="absolute bg-[#f3f4f6] bottom-[-0.49px] content-stretch flex h-[17.494px] items-center left-0 px-[7px] py-[1.75px] rounded-[3.5px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">Status</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative self-stretch shrink-0 w-[1132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge7 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nomor Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Total Hari MPPL</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">No PR</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nomor Contract</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph33 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph35 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Metode</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph37 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph39 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Status Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="col-2 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Tanggal Permohonan Pengujian</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="col-1 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph43 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">PIC Penguji</p>
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="col-2 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph45 />
        <Paragraph46 />
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Catatan Hasil Pengujian</p>
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="col-1 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph47 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Tanggal Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="col-2 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph49 />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Vendor Name</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="col-1 justify-self-stretch relative row-7 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph51 />
        <Paragraph52 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[466.463px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[__567px_567px] grid-rows-[_______66.64px_66.64px_66.64px_66.64px_66.64px_66.64px_66.64px] relative size-full">
        <Container124 />
        <Container125 />
        <Container126 />
        <Container127 />
        <Container128 />
        <Container129 />
        <Container130 />
        <Container131 />
        <Container132 />
        <Container133 />
        <Container134 />
        <Container135 />
        <Container136 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-white h-[468.862px] relative rounded-[12.75px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container123 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative self-start shrink-0 w-[1132px]" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.5px] relative size-full">
        <Container122 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="relative shrink-0 w-[1668.037px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white tracking-[1.05px] uppercase whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen KAK</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text82 />
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen Kontrak</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text83 />
          <Button24 />
        </div>
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen Amandemen</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text84 />
          <Button25 />
        </div>
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Surat Permohonan Pengujian</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text85 />
          <Button26 />
        </div>
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen MI</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text86 />
          <Button27 />
        </div>
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen BAHP</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
          <Text87 />
          <Button28 />
        </div>
      </div>
    </div>
  );
}

function Text88() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Dokumen BAST</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[17.5px] py-[10.5px] relative size-full">
          <Text88 />
          <Button29 />
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-white h-[315.112px] justify-self-stretch relative rounded-[12.75px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container138 />
        <Container139 />
        <Container140 />
        <Container141 />
        <Container142 />
        <Container143 />
        <Container144 />
        <Container145 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___24px_486px_minmax(0,1fr)] h-[848px] left-[292px] overflow-clip top-[131px] w-[1132px]" data-name="Main Content">
      <Container121 />
      <ContainerMargin1 />
      <Container137 />
    </div>
  );
}

function Logo8() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame67 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame68 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame69 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TimelineWrap4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow4 />
    </div>
  );
}

function NppRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Request Pengujian</p>
    </div>
  );
}

function ListNppRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Request Pengujian</p>
    </div>
  );
}

function ListNppWrap6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow6 />
    </div>
  );
}

function ListNppRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">List Pengujian</p>
    </div>
  );
}

function ListNppWrap7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow7 />
    </div>
  );
}

function NppChildren3() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="NPP__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <ListNppWrap6 />
          <ListNppWrap7 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NppWrap4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow4 />
      <NppChildren3 />
    </div>
  );
}

function TopLevelChildren4() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap4 />
        <NppWrap4 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame70 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <TopLevelChildren4 />
      <Frame24 />
    </div>
  );
}

function AsideSidebarComponent8() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.792deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo8 />
      <Frame20 />
    </div>
  );
}

function Frame39() {
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

function Logo9() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame39 />
    </div>
  );
}

function Svg24() {
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

function Container146() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive4() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg24 />
      <Container146 />
    </div>
  );
}

function Svg25() {
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

function Container148() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg25 />
    </div>
  );
}

function Svg26() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container148 />
          <Svg26 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container147 />
    </div>
  );
}

function Svg27() {
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

function Container150() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg27 />
    </div>
  );
}

function Container149() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container150 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container149 />
    </div>
  );
}

function Svg28() {
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

function Container151() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg28 />
      <Container151 />
    </div>
  );
}

function Svg29() {
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

function LinkMasterData4() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg29 />
    </div>
  );
}

function Navigation4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive4 />
      <GroupUserRole4 />
      <GroupVerifikasi4 />
      <LinkTemplateDokumen4 />
      <LinkMasterData4 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay4 />
    </div>
  );
}

function UserCard4() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container152 />
    </div>
  );
}

function UserCardMargin4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard4 />
    </div>
  );
}

function AsideSidebarComponent9() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo9 />
      <Navigation4 />
      <UserCardMargin4 />
    </div>
  );
}

function Requestion9() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent9 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent8 />
      <Requestion9 />
    </div>
  );
}

function UserDashboard4() {
  return (
    <div className="absolute bg-white h-[1110px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Requestion8 />
      <MainContent1 />
      <Frame66 />
    </div>
  );
}

function Logo10() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame72 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame73 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame74 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TaskApprovalRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">{`List Kontrak <500jt`}</p>
    </div>
  );
}

function TaskApprovalWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval__wrap">
      <TaskApprovalRow1 />
    </div>
  );
}

function ListTimelineRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">{`List Kontrak >500jt`}</p>
    </div>
  );
}

function ListTimelineWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Timeline__wrap">
      <ListTimelineRow1 />
    </div>
  );
}

function TimelineChildren1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalWrap1 />
          <ListTimelineWrap1 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TimelineWrap5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow5 />
      <TimelineChildren1 />
    </div>
  );
}

function NppRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">{`Request Pengujian `}</p>
    </div>
  );
}

function NppWrap5() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow5 />
    </div>
  );
}

function TopLevelChildren5() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap5 />
        <NppWrap5 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame75 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <TopLevelChildren5 />
      <Frame29 />
    </div>
  );
}

function AsideSidebarComponent10() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo10 />
      <Frame25 />
    </div>
  );
}

function Frame40() {
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

function Logo11() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame40 />
    </div>
  );
}

function Svg30() {
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

function Container153() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive5() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg30 />
      <Container153 />
    </div>
  );
}

function Svg31() {
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

function Container155() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg31 />
    </div>
  );
}

function Svg32() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container155 />
          <Svg32 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container154 />
    </div>
  );
}

function Svg33() {
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

function Container157() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg33 />
    </div>
  );
}

function Container156() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container157 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container156 />
    </div>
  );
}

function Svg34() {
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

function Container158() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg34 />
      <Container158 />
    </div>
  );
}

function Svg35() {
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

function LinkMasterData5() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg35 />
    </div>
  );
}

function Navigation5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive5 />
      <GroupUserRole5 />
      <GroupVerifikasi5 />
      <LinkTemplateDokumen5 />
      <LinkMasterData5 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay5 />
    </div>
  );
}

function UserCard5() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container159 />
    </div>
  );
}

function UserCardMargin5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard5 />
    </div>
  );
}

function AsideSidebarComponent11() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo11 />
      <Navigation5 />
      <UserCardMargin5 />
    </div>
  );
}

function Requestion10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent11 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent10 />
      <Requestion10 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">{`Pengujian >Kontrak > `}</span>
          <span className="leading-[24px]">{`List Kontrak <500jt`}</span>
        </p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function DatePicker6() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container162() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label12 />
        <DatePicker6 />
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function DatePicker7() {
  return (
    <div className="bg-white h-[37.6px] relative rounded-[25px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container163() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label13 />
        <DatePicker7 />
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Unit</p>
      </div>
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container164() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label14 />
        <Dropdown6 />
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[430.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Dropdown7() {
  return (
    <div className="bg-white h-[36px] relative rounded-[25px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border-[#aebdd8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Container165() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label15 />
        <Dropdown7 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[129.575px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__534px_534px] grid-rows-[__57.59px_55.99px] relative size-full">
        <Container162 />
        <Container163 />
        <Container164 />
        <Container165 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d="M2.70833 6.5H10.2917" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 2.70833V10.2917" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#c00] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon27 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Tambah Kontrak</p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-[#252271] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon28 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cari</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p3bd12900} id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 1.625V4.33333H4.33333" id="Vector_2" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="content-stretch flex h-[35px] items-center px-[10.8px] py-[6.8px] relative rounded-[15px] shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Icon29 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="relative shrink-0 w-[271px]" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start pt-[16px] relative size-full">
        <Button30 />
        <Button31 />
        <Button32 />
      </div>
    </div>
  );
}

function FilterSection3() {
  return (
    <div className="bg-[#f5f7fd] relative rounded-[15px] shrink-0 w-full" data-name="FilterSection">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container161 />
        <ButtonMargin3 />
      </div>
    </div>
  );
}

function FilterSectionMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <FilterSection3 />
    </div>
  );
}

function Text89() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Show</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[54.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text90() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">entries</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text89 />
        <Container169 />
        <Text90 />
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Search:</p>
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Type to filter...</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[29.587px] relative rounded-[4px] shrink-0 w-[175.987px]" data-name="Container">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[14px] py-[1.2px] relative size-full">
        <Text92 />
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Text91 />
        <Container171 />
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13.2px] pt-[12px] px-[14px] relative size-full">
          <Container168 />
          <Container170 />
        </div>
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">No. SP3</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text93 />
      <Icon30 />
    </div>
  );
}

function HeaderCell19() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container173 />
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text94 />
      <Icon31 />
    </div>
  );
}

function HeaderCell20() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container174 />
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text95 />
      <Icon32 />
    </div>
  );
}

function HeaderCell21() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container175 />
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Departement</p>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[355.762px]" data-name="Container">
      <Text96 />
      <Icon33 />
    </div>
  );
}

function HeaderCell22() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container176 />
      </div>
    </div>
  );
}

function HeaderCell23() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function HeaderCell24() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Aksi</p>
      </div>
    </div>
  );
}

function Text97() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text97 />
      </div>
    </div>
  );
}

function Text98() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text98 />
      </div>
    </div>
  );
}

function Text99() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text99 />
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text100 />
      </div>
    </div>
  );
}

function StatusBadge8() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge8 />
      </div>
    </div>
  );
}

function Text101() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Search</p>
      </div>
    </div>
  );
}

function ActionBtn9() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text101 />
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn9 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container177 />
      </div>
    </div>
  );
}

function Text102() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text102 />
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text103 />
      </div>
    </div>
  );
}

function Text104() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text104 />
      </div>
    </div>
  );
}

function Text105() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text105 />
      </div>
    </div>
  );
}

function StatusBadge9() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge9 />
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Search</p>
      </div>
    </div>
  );
}

function ActionBtn10() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text106 />
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn10 />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container178 />
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text107 />
      </div>
    </div>
  );
}

function Text108() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text108 />
      </div>
    </div>
  );
}

function Text109() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text109 />
      </div>
    </div>
  );
}

function Text110() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[357.787px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text110 />
      </div>
    </div>
  );
}

function StatusBadge10() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge10 />
      </div>
    </div>
  );
}

function Text111() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Search</p>
      </div>
    </div>
  );
}

function ActionBtn11() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text111 />
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn11 />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container179 />
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[194.981px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] overflow-clip relative rounded-[inherit] size-full">
        <HeaderCell19 />
        <HeaderCell20 />
        <HeaderCell21 />
        <HeaderCell22 />
        <HeaderCell23 />
        <HeaderCell24 />
        <TableCell57 />
        <TableCell58 />
        <TableCell59 />
        <TableCell60 />
        <TableCell61 />
        <TableCell62 />
        <TableCell63 />
        <TableCell64 />
        <TableCell65 />
        <TableCell66 />
        <TableCell67 />
        <TableCell68 />
        <TableCell69 />
        <TableCell70 />
        <TableCell71 />
        <TableCell72 />
        <TableCell73 />
        <TableCell74 />
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Showing 1 to 3 of 3 entries</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="bg-[#252271] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button33 />
        <Button34 />
        <Button35 />
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] pt-[13.2px] px-[14px] relative size-full">
          <Text112 />
          <Container181 />
        </div>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="bg-white h-[305.362px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container167 />
        <Container172 />
        <Container180 />
      </div>
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7px]" />
    </div>
  );
}

function ListViewMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start pt-[20px] relative shrink-0 w-[1123px]" data-name="ListView:margin">
      <Container166 />
    </div>
  );
}

function Requestion11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container160 />
      <FilterSectionMargin3 />
      <ListViewMargin3 />
    </div>
  );
}

function UserDashboard5() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Frame71 />
      <Requestion11 />
    </div>
  );
}

function Requestion12() {
  return (
    <div className="absolute h-[780px] left-0 overflow-clip top-0 w-[1191px]" data-name="Requestion">
      <p className="[word-break:break-word] absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[68px] not-italic text-[36px] text-black top-[71px] whitespace-nowrap">Verification</p>
    </div>
  );
}

function Requestion13() {
  return <div className="absolute h-[780px] left-[249px] top-[-8px] w-[1191px]" data-name="Requestion" />;
}

function Logo12() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame77 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame78 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame79 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TaskApprovalRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">{`List Kontrak <500jt`}</p>
    </div>
  );
}

function TaskApprovalWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval__wrap">
      <TaskApprovalRow2 />
    </div>
  );
}

function ListTimelineRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">{`List Kontrak >500jt`}</p>
    </div>
  );
}

function ListTimelineWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Timeline__wrap">
      <ListTimelineRow2 />
    </div>
  );
}

function TimelineChildren2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalWrap2 />
          <ListTimelineWrap2 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TimelineWrap6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow6 />
      <TimelineChildren2 />
    </div>
  );
}

function NppRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Request Pengujian</p>
    </div>
  );
}

function NppWrap6() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow6 />
    </div>
  );
}

function TopLevelChildren6() {
  return (
    <div className="h-[78px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap6 />
        <NppWrap6 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame80 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_78px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <TopLevelChildren6 />
      <Frame34 />
    </div>
  );
}

function AsideSidebarComponent12() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo12 />
      <Frame30 />
    </div>
  );
}

function Frame41() {
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

function Logo13() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame41 />
    </div>
  );
}

function Svg36() {
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

function Container182() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive6() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg36 />
      <Container182 />
    </div>
  );
}

function Svg37() {
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

function Container184() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg37 />
    </div>
  );
}

function Svg38() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container184 />
          <Svg38 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container183 />
    </div>
  );
}

function Svg39() {
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

function Container186() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg39 />
    </div>
  );
}

function Container185() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container186 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container185 />
    </div>
  );
}

function Svg40() {
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

function Container187() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg40 />
      <Container187 />
    </div>
  );
}

function Svg41() {
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

function LinkMasterData6() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg41 />
    </div>
  );
}

function Navigation6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive6 />
      <GroupUserRole6 />
      <GroupVerifikasi6 />
      <LinkTemplateDokumen6 />
      <LinkMasterData6 />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay6 />
    </div>
  );
}

function UserCard6() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container188 />
    </div>
  );
}

function UserCardMargin6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard6 />
    </div>
  );
}

function AsideSidebarComponent13() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo13 />
      <Navigation6 />
      <UserCardMargin6 />
    </div>
  );
}

function Requestion14() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent13 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent12 />
      <Requestion14 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">{`Pengujian > `}</span>
          <span className="leading-[24px]">{`List Kontrak <500jt`}</span>
        </p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Label16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#314158] text-[12.25px] whitespace-nowrap">Judul Pengadaan</p>
      </div>
    </div>
  );
}

function FieldControl() {
  return (
    <div className="bg-[#f8fafc] h-[31.5px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function FieldControlMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl />
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label16 />
        <FieldControlMargin />
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Nominal</p>
        <p className="absolute left-[51.51px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function FieldControl1() {
  return (
    <div className="bg-[#f8fafc] h-[31.5px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function FieldControlMargin1() {
  return (
    <div className="relative shrink-0" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl1 />
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label17 />
        <FieldControlMargin1 />
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Jenis Barang</p>
        <p className="absolute left-[79.59px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function Text113() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">Pilih jenis barang</p>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[13.988px] top-0">
      <div className="flex-none rotate-90">
        <div className="relative size-[13.988px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.9875" preserveAspectRatio="none" viewBox="0 0 13.9875 13.9875" width="13.9875">
            <g id="Icon">
              <path d={svgPaths.p1422b900} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform() {
  return (
    <div className="relative shrink-0 size-[13.988px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function FieldControl2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[31.5px] items-center justify-between px-[11.7px] py-[1.2px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <Text113 />
      <IconTransform />
    </div>
  );
}

function FieldControlMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl2 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label18 />
        <FieldControlMargin2 />
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Kurs</p>
        <p className="absolute left-[30.19px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">Pilih kurs</p>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[13.988px] top-0">
      <div className="flex-none rotate-90">
        <div className="relative size-[13.988px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.9875" preserveAspectRatio="none" viewBox="0 0 13.9875 13.9875" width="13.9875">
            <g id="Icon">
              <path d={svgPaths.p1422b900} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform1() {
  return (
    <div className="relative shrink-0 size-[13.988px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function FieldControl3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[31.5px] items-center justify-between px-[11.7px] py-[1.2px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <Text114 />
      <IconTransform1 />
    </div>
  );
}

function FieldControlMargin3() {
  return (
    <div className="relative shrink-0" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl3 />
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label19 />
        <FieldControlMargin3 />
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Nomor Surat Perjanjian</p>
        <p className="absolute left-[138.51px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function FieldControl4() {
  return (
    <div className="bg-[#f8fafc] h-[31.5px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function FieldControlMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl4 />
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label20 />
        <FieldControlMargin4 />
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Tanggal Perjanjian</p>
        <p className="absolute left-[111.13px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function FieldControl5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[31.5px] items-center px-[11.7px] py-[1.2px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">dd / mm / yyyy</p>
    </div>
  );
}

function FieldControlMargin5() {
  return (
    <div className="relative shrink-0" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl5 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="col-2 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label21 />
        <FieldControlMargin5 />
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Vendor Name</p>
        <p className="absolute left-[83.29px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function FieldControl6() {
  return (
    <div className="bg-[#f8fafc] h-[31.5px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
    </div>
  );
}

function FieldControlMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl6 />
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label22 />
        <FieldControlMargin6 />
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="h-[17.475px] relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative size-full text-[12.25px] whitespace-nowrap">
        <p className="absolute left-0 text-[#314158] top-[0.2px]">Tanggal Kontrak</p>
        <p className="absolute left-[98.7px] text-[#ff6467] top-[0.2px]">*</p>
      </div>
    </div>
  );
}

function FieldControl7() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[31.5px] items-center px-[11.7px] py-[1.2px] relative rounded-[8.75px] shrink-0 w-[544.35px]" data-name="FieldControl">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#90a1b9] text-[12.25px] whitespace-nowrap">dd / mm / yyyy</p>
    </div>
  );
}

function FieldControlMargin7() {
  return (
    <div className="relative shrink-0" data-name="FieldControl:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.25px] relative size-full">
        <FieldControl7 />
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label23 />
        <FieldControlMargin7 />
      </div>
    </div>
  );
}

function FieldsGrid() {
  return (
    <div className="h-[259px] justify-self-start relative shrink-0 w-[1103px]" data-name="FieldsGrid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[14px] gap-y-[14px] grid grid-cols-[__544.35px_544.35px] grid-rows-[____54.22px_54.22px_54.22px_54.22px] relative size-full">
        <Container191 />
        <Container192 />
        <Container193 />
        <Container194 />
        <Container195 />
        <Container196 />
        <Container197 />
        <Container198 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="bg-[#252271] h-full relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12.8px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Submit</p>
        </div>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex h-[48.656px] items-start pt-[15.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button36 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="justify-self-stretch relative self-start shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.5px] relative size-full">
        <Container199 />
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12.75px] self-start shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] px-[12.2px] py-[22.2px] relative size-full">
        <FieldsGrid />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function MainContent2() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] overflow-clip relative shrink-0 w-[1132px]" data-name="Main Content">
      <Container190 />
    </div>
  );
}

function FilterSectionMargin4() {
  return <div className="h-[239px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin" />;
}

function Requestion15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container189 />
      <MainContent2 />
      <FilterSectionMargin4 />
    </div>
  );
}

function UserDashboard6() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="User - Dashboard">
      <Requestion13 />
      <Frame76 />
      <Requestion15 />
    </div>
  );
}

function Logo14() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p243f0670} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6638000} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame82 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame83 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, #252271)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, #252271)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame84 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Pengujian</p>
    </div>
  );
}

function TimelineRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Kontrak</p>
    </div>
  );
}

function TaskApprovalRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">{`List Kontrak <500jt`}</p>
    </div>
  );
}

function TaskApprovalWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval__wrap">
      <TaskApprovalRow3 />
    </div>
  );
}

function ListTimelineRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">{`List Kontrak >500jt`}</p>
    </div>
  );
}

function ListTimelineWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Timeline__wrap">
      <ListTimelineRow3 />
    </div>
  );
}

function TimelineChildren3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalWrap3 />
          <ListTimelineWrap3 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TimelineWrap7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Timeline__wrap">
      <TimelineRow7 />
      <TimelineChildren3 />
    </div>
  );
}

function NppRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function ListNppRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Request Pengujian</p>
    </div>
  );
}

function ListNppWrap8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow8 />
    </div>
  );
}

function ListNppRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List NPP__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Pengujian</p>
    </div>
  );
}

function ListNppWrap9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List NPP__wrap">
      <ListNppRow9 />
    </div>
  );
}

function NppChildren4() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="NPP__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <ListNppWrap8 />
          <ListNppWrap9 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NppWrap7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[53px] items-start overflow-clip relative shrink-0 w-full" data-name="NPP__wrap">
      <NppRow7 />
      <NppChildren4 />
    </div>
  );
}

function TopLevelChildren7() {
  return (
    <div className="h-[128px] justify-self-center relative self-start shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap7 />
        <NppWrap7 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.6)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2f214b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33e97b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23e3c200} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p6b22e00} fillRule="evenodd" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2f214b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p33e97b80} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p23e3c200} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame86 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_27px_128px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <TopLevelChildren7 />
      <Frame85 />
    </div>
  );
}

function AsideSidebarComponent14() {
  return (
    <div className="absolute bottom-[6px] content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo14 />
      <Frame42 />
    </div>
  );
}

function Frame87() {
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

function Logo15() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame87 />
    </div>
  );
}

function Svg42() {
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

function Container200() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive7() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg42 />
      <Container200 />
    </div>
  );
}

function Svg43() {
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

function Container202() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg43 />
    </div>
  );
}

function Svg44() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container201() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container202 />
          <Svg44 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container201 />
    </div>
  );
}

function Svg45() {
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

function Container204() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg45 />
    </div>
  );
}

function Container203() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container204 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container203 />
    </div>
  );
}

function Svg46() {
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

function Container205() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg46 />
      <Container205 />
    </div>
  );
}

function Svg47() {
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

function LinkMasterData7() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg47 />
    </div>
  );
}

function Navigation7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive7 />
      <GroupUserRole7 />
      <GroupVerifikasi7 />
      <LinkTemplateDokumen7 />
      <LinkMasterData7 />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay7 />
    </div>
  );
}

function UserCard7() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container206 />
    </div>
  );
}

function UserCardMargin7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard7 />
    </div>
  );
}

function AsideSidebarComponent15() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo15 />
      <Navigation7 />
      <UserCardMargin7 />
    </div>
  );
}

function Requestion16() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0 w-[51px]" data-name="Requestion">
      <AsideSidebarComponent15 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute h-[786px] left-0 top-0 w-[251px]">
      <AsideSidebarComponent14 />
      <Requestion16 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[2696px] leading-[16px] left-[1078px] not-italic text-[12px] text-center text-white top-0 w-[2156px]">KAk</p>
      <UserDashboard />
      <UserDashboard1 />
      <UserDashboard2 />
      <UserDashboard3 />
      <UserDashboard4 />
      <UserDashboard5 />
      <Requestion12 />
      <UserDashboard6 />
      <Frame81 />
    </div>
  );
}