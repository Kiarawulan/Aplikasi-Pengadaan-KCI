import svgPaths from "./svg-2i83uvimnk";
import imgImage6 from "./a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-full">
          <p className="leading-[normal]">Cari nama role</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[37px] pr-[17px] pt-[9px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p18c25a00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Input />
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center max-w-[448px] relative shrink-0 w-[313px]" data-name="Container">
      <Container1 />
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
    <div className="bg-gradient-to-b content-stretch flex from-[#e6251c] gap-[6px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 to-[#c20f06]" data-name="Button">
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Tambah Role</p>
    </div>
  );
}

function SearchFilters() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Search & Filters">
      <Container />
      <Button />
    </div>
  );
}

function SearchFiltersMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Search & Filters:margin">
      <SearchFilters />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start p-[12px] relative self-start shrink-0 w-[365.31px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Role</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[12px] relative self-start shrink-0 w-[260.84px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Jumlah User</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[12px] relative self-start shrink-0 w-[147.45px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Aksees Utama</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-end p-[12px] relative self-start shrink-0 w-[159.8px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-right text-white whitespace-nowrap">
        <p className="leading-[16px]">Aksi</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative size-full">
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-self-stretch pb-px relative self-start shrink-0" data-name="Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Row />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">A</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Rolenya</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[47px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-self-stretch relative self-center shrink-0" data-name="Data">
      <Background />
      <Container3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2 User</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[38px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[17.5px] relative self-start shrink-0 w-[260.84px]" data-name="Data">
      <Container5 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0 w-[90px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[11px] text-center w-[70px]">
        <p className="leading-[16px]">Menu apa</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[16.5px] relative self-start shrink-0 w-[147.45px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.pf2db700} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="col-1 content-stretch flex items-start ml-0 mt-0 p-[6px] relative rounded-[8px] row-1" data-name="Button">
      <Svg1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button1 />
      <div className="col-1 h-[14.167px] ml-[34.82px] mt-[7.5px] relative row-1 w-[12.75px]" data-name="Vector">
        <div className="absolute inset-[-3.82%_-4.25%]">
          <svg className="block size-full" fill="none" height="15.25" preserveAspectRatio="none" viewBox="0 0 13.8333 15.25" width="13.8333">
            <path d={svgPaths.p37bd80} id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex items-center justify-self-start pl-[103px] pr-[18px] py-[14.5px] relative self-start shrink-0 w-[258px]" data-name="Data">
      <Group />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 1">
      <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pl-[12px] relative size-full">
        <Data />
        <Data1 />
        <Data2 />
        <Data3 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start justify-self-stretch relative self-start shrink-0" data-name="Body">
      <Row1 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__fit-content(100%)_214px] relative size-full">
        <Header />
        <Body />
      </div>
    </div>
  );
}

function UsersTable() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Users Table">
      <div className="content-stretch flex flex-col items-start overflow-auto p-px relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.61px] py-px relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-left whitespace-nowrap">
          <p className="leading-[15px]">Semua Menu</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start justify-center left-0 pl-[17px] pr-[29px] py-[9px] rounded-[12px] top-[3px]" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container7 />
    </div>
  );
}

function FilterTableCard() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] justify-self-stretch relative rounded-[24px] self-stretch shrink-0" data-name="Filter & Table Card">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <SearchFiltersMargin />
        <UsersTable />
        <div className="absolute bottom-0 h-[570px] left-[347px] pointer-events-none top-[17px]">
          <button className="block cursor-pointer h-[41px] overflow-clip pointer-events-auto sticky top-0 w-[121px]">
            <Options />
          </button>
        </div>
      </div>
    </div>
  );
}

function Requestion() {
  return (
    <div className="absolute grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___55px_minmax(0,1fr)_minmax(0,1fr)] h-[1367px] left-[249px] overflow-clip px-[20px] py-[69px] top-0 w-[1191px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-self-stretch leading-[normal] not-italic relative self-stretch shrink-0 text-[#252271] text-[36px]">Manajemen Role</p>
      <FilterTableCard />
    </div>
  );
}

function Frame() {
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
      <Frame />
    </div>
  );
}

function Svg2() {
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

function Container8() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-left text-white top-[8.5px] w-[66.103px]">
        <p className="leading-[18.75px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkDashboardActive() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[224px]" data-name="Link - Dashboard (Active)">
      <Svg2 />
      <Container8 />
    </a>
  );
}

function Svg3() {
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

function Container11() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[140.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[9.75px] w-[154px]">
        <p className="leading-[18.75px]">{`Manajemen User & Role`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg3 />
      <Container11 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d="M9.5 4.5L6 8L2.5 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] from-[#ff4545] relative rounded-[8px] shrink-0 to-[#ff7272] w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container10 />
          <Svg4 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(255,255,255,0.6)] text-left w-full">
        <p className="leading-[17.25px]">Manajemen User</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <a className="cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container12 />
        </div>
      </div>
    </a>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[17.25px]">Manajemen Role</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,99,99,0.51)] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0)] w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pl-[11px] relative shrink-0 w-[208px]" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.5)] border-l border-solid inset-0 pointer-events-none" />
      <Link />
      <Link1 />
    </div>
  );
}

function GroupUserRole() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0 w-[224px]" data-name="Group: User & Role">
      <Container9 />
      <VerticalBorder />
    </div>
  );
}

function Svg5() {
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

function Container16() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[54.3px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[54.174px]">
        <p className="leading-[18.75px]">Verifikasi</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg5 />
      <Container16 />
    </div>
  );
}

function Svg6() {
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

function Container14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container15 />
          <Svg6 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Group: Verifikasi">
      <Container14 />
    </div>
  );
}

function Svg7() {
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

function Container17() {
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
          <Svg7 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
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

function Container18() {
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
          <Svg8 />
          <Container18 />
        </div>
      </div>
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

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[14.38px]">Administrator</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[15px]">admin@sipro.co.id</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container20 />
    </div>
  );
}

function UserCard() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col items-start p-[10px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[221px]" data-name="User Card">
      <Container19 />
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

function Requestion1() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[242px]" data-name="Requestion">
      <AsideSidebarComponent />
    </div>
  );
}

export default function UserDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="User - Dashboard">
      <Requestion />
      <Requestion1 />
    </div>
  );
}