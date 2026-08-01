import svgPaths from "./svg-2ak2ybu2ge";
import imgImage6 from "./a1d658a5f37b0b6b958626283ef2524233d0a35d.png";
import imgError from "./f10b06af0f91117201f71584d07124785c860741.png";

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] w-full">
          <p className="leading-[normal]">Cari nama atau email...</p>
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

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.61px] py-px relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">
          <p className="leading-[15px]">Semua Departemen</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center pl-[17px] pr-[29px] py-[9px] relative rounded-[12px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center max-w-[448px] min-w-px relative" data-name="Container">
      <Container1 />
      <Options />
    </div>
  );
}

function Frame2() {
  return <div className="h-[37px] relative shrink-0 w-[210px]" />;
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
    <div className="bg-gradient-to-b from-[#e6251c] relative rounded-[10px] shrink-0 to-[#c20f06]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Tambah User</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function SearchFilters() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Search & Filters">
      <Container />
      <Frame2 />
      <Container4 />
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
    <div className="content-stretch flex flex-col items-start pl-[22px] pr-[12px] py-[12px] relative shrink-0 w-[365.31px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[239px]">
        <p className="leading-[16px]">User</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-[176.59px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Departemen</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-[260.84px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Role</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-[147.45px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Status</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[12px] pr-[67px] py-[12px] relative shrink-0 w-[159.8px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-right text-white whitespace-nowrap">
        <p className="leading-[16px]">Aksi</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
        <Cell4 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header">
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">User name</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">emailuser@mail.co.id</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[110px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[341.31px]" data-name="Data">
      <Background />
      <Container5 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[10px] py-[3px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">CTIT</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] pr-[12px] py-[17.5px] relative shrink-0 w-[188.59px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-start px-[10px] py-[3px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Admin Full Access</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[17.5px] relative shrink-0 w-[260.84px]" data-name="Data">
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#22c55e] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Aktif</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[16.5px] relative shrink-0 w-[147.45px]" data-name="Data">
      <Background3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p3bede980} id="Vector" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p303162f0} id="Vector_2" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d="M1.625 3.25H11.375" id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p35588d00} id="Vector_2" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p1ca4b600} id="Vector_3" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M5.41667 5.95833V9.20833" id="Vector_4" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M7.58333 5.95833V9.20833" id="Vector_5" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center pl-[41px] pr-[36px] py-[14.5px] relative shrink-0 w-[159.8px]" data-name="Data">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e0e7ff] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">B</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">User name</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">emailuser@mail.co.id</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[110px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[341.31px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background4 />
        <Container8 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[10px] py-[3px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Logistik</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[188.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[24px] pr-[12px] py-[17.5px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start px-[10px] py-[3px] relative rounded-[6px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4338ca] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Staff Logistik</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[260.84px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[17.5px] relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#c00] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c00] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Tidak Aktif</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[147.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16.5px] relative size-full">
        <Background7 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p3bede980} id="Vector" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p303162f0} id="Vector_2" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d="M1.625 3.25H11.375" id="Vector" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p35588d00} id="Vector_2" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p1ca4b600} id="Vector_3" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M5.41667 5.95833V9.20833" id="Vector_4" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M7.58333 5.95833V9.20833" id="Vector_5" stroke="var(--stroke-0, #CC0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[159.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center justify-center pl-[41px] pr-[35px] py-[14.5px] relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] pt-px relative size-full">
          <Data5 />
          <Data6 />
          <Data7 />
          <Data8 />
          <Data9 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
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

function FilterTableCard() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] justify-self-stretch relative rounded-[24px] self-stretch shrink-0" data-name="Filter & Table Card">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <SearchFiltersMargin />
        <UsersTable />
      </div>
    </div>
  );
}

function Requestion() {
  return (
    <div className="absolute grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__55px_minmax(0,1fr)] h-[780px] left-[249px] overflow-clip px-[20px] py-[69px] top-0 w-[1191px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-self-stretch leading-[normal] not-italic relative self-start shrink-0 text-[36px] text-black">Manajemen User</p>
      <FilterTableCard />
    </div>
  );
}

function Frame3() {
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
      <Frame3 />
    </div>
  );
}

function Svg1() {
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

function Container11() {
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
      <Svg1 />
      <Container11 />
    </a>
  );
}

function Svg2() {
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

function Container14() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[140.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[9.75px] w-[154px]">
        <p className="leading-[18.75px]">{`Manajemen User & Role`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg2 />
      <Container14 />
    </div>
  );
}

function Svg3() {
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

function Container12() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] from-[#ff4545] relative rounded-[8px] shrink-0 to-[#ff7272] w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container13 />
          <Svg3 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[17.25px]">Manajemen User</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,99,99,0.51)] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0)] w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[17.25px]">Manajemen Role</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container16 />
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
      <Container12 />
      <VerticalBorder />
    </div>
  );
}

function Svg4() {
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

function Container19() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[54.3px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[54.174px]">
        <p className="leading-[18.75px]">Verifikasi</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg4 />
      <Container19 />
    </div>
  );
}

function Svg5() {
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

function Container17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container18 />
          <Svg5 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Group: Verifikasi">
      <Container17 />
    </div>
  );
}

function Svg6() {
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

function Container20() {
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
          <Svg6 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Svg7() {
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

function Container21() {
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
          <Svg7 />
          <Container21 />
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

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[14.38px]">Administrator</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[15px]">admin@sipro.co.id</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container23 />
    </div>
  );
}

function UserCard() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col items-start p-[10px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[221px]" data-name="User Card">
      <Container22 />
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

function Frame() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0">
      <div className="h-[115px] relative shrink-0 w-full" data-name="Error">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgError} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[35px] left-[32px] overflow-clip top-[6px] w-[356px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] left-0 not-italic text-[15px] text-white top-[19.5px] w-[216px]">
        <p className="leading-[normal]">Delete User</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#252271] col-1 h-[48px] justify-self-center overflow-clip relative row-1 self-start shrink-0 w-[591px]">
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-start shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">Delete Role</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white content-stretch flex h-[38px] items-center justify-center left-[238px] px-[48px] py-[10px] rounded-[15px] top-0 w-[146px]">
      <div aria-hidden className="absolute border border-[#252271] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#252271] text-[15px] whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#252271] h-[38px] left-[389px] rounded-[15px] top-0 w-[146px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[73px] not-italic text-[15px] text-center text-white top-[10px] w-[66px]">Delete</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="col-1 h-[53px] justify-self-stretch overflow-clip relative row-5 self-end shrink-0" data-name="button">
      <Frame7 />
      <Frame4 />
    </div>
  );
}

function PopUpAddPengadaanBaru() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white gap-x-[16px] gap-y-[9px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____63px_130px_29px_34px_68px] h-[373px] left-[calc(50%+0.5px)] overflow-clip px-[28px] rounded-[15px] top-[calc(50%+45.5px)] w-[591px]" data-name="POP UP ADD PENGADAAN BARU">
      <Frame />
      <Frame5 />
      <Frame1 />
      <Button5 />
      <p className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal justify-self-stretch leading-[normal] not-italic relative row-4 self-start shrink-0 text-[14px] text-black text-center">Kamu akan menghapus role secara permanen?</p>
    </div>
  );
}

export default function UserDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="User - Dashboard">
      <Requestion />
      <Requestion1 />
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[780px] left-0 top-0 w-[1440px]" />
      <PopUpAddPengadaanBaru />
    </div>
  );
}