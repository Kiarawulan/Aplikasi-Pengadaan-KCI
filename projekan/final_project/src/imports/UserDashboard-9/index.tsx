import svgPaths from "./svg-jrhm39ikyt";
import imgImage6 from "./a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262px] top-[28px] w-[913.2px]" data-name="Heading 1">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[0px] whitespace-nowrap">
        <span className="leading-[22.5px] text-[15px]">{`Manajemen Role >`}</span>
        <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[22.5px] text-[15px]">{` Tambah Role`}</span>
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#252271] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[28px] py-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Menambahkan Role Baru</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(82,82,82,0.6)] whitespace-nowrap">Nama Role</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[37px] relative rounded-[15px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[16.8px] py-[0.8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full">Masukkan nama role...</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_2.5px_-1px_rgba(0,0,0,0.25)]" />
      <div aria-hidden className="absolute border-[#d3d3d3] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label />
        <TextInput />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(82,82,82,0.6)] whitespace-nowrap">User / Admin</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute h-[37px] left-0 pointer-events-none rounded-[15px] top-0 w-[418.6px]" data-name="Dropdown">
      <div aria-hidden className="absolute bg-white inset-0 rounded-[15px]" />
      <div aria-hidden className="absolute border-[#d3d3d3] border-[0.8px] border-solid inset-0 rounded-[15px]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2.5px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[390.6px] size-[12px] top-[12.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[37px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown />
        <Icon />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label1 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[20px] gap-y-[20px] grid grid-cols-[__418.60px_418.60px] grid-rows-[_61px] px-[28px] py-[20px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] flex flex-col items-start relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262px] pt-[20px] top-[51px] w-[913.2px]" data-name="Container:margin">
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Hak Akses</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.65)] whitespace-nowrap">4 izin aktif</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[28px] py-[12px] relative size-full">
          <Text />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d={svgPaths.p1f744480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#c00] relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#252271] relative rounded-[6px] shrink-0 size-[22px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] not-italic relative shrink-0 text-[#252271] text-[13px] whitespace-nowrap">Pengajuan Dana</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Checkbox />
        <Button />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">Action</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-3 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_22px] px-[28px] py-[11px] relative size-full">
        <Container11 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-1 h-[24px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[56px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(37,34,113,0.5)] tracking-[0.5px] uppercase whitespace-nowrap">Pilih Semua</p>
      </div>
    </div>
  );
}

function Text5() {
  return <div className="absolute bg-white left-[21px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-[3px]" data-name="Text" />;
}

function Toggle() {
  return (
    <div className="bg-[#5d6596] h-[22px] relative rounded-[26843500px] shrink-0 w-[40px]" data-name="Toggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Toggle />
      </div>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-white left-[21px] rounded-[26843500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-[3px]" data-name="Text" />;
}

function Toggle1() {
  return (
    <div className="bg-[#5d6596] h-[22px] relative rounded-[26843500px] shrink-0 w-[40px]" data-name="Toggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Toggle1 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(37,34,113,0.04)] relative shrink-0 w-[913.2px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_24px] pb-[8.8px] pt-[8px] px-[28px] relative size-full">
        <Container16 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[637.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#c00] text-[10px] whitespace-nowrap">(Melihat ringkasan / summary Pengajuan Dana)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 h-[32.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[56px] pr-[20px] relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d={svgPaths.p1f744480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#c00] relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Checkbox1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d={svgPaths.p1f744480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[#c00] relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Checkbox2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative shrink-0 w-[913.2px]" data-name="Container">
      <div aria-hidden className="absolute border-[#efefef] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_32.50px] pb-[10.8px] pt-[10px] px-[28px] relative size-full">
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Verifikasi</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[637.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#c00] text-[10px] whitespace-nowrap">(Park Document, Purchase Requisition)</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-1 h-[32.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[56px] pr-[20px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d={svgPaths.p1f744480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#c00] relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Checkbox3 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d={svgPaths.p1f744480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-[#c00] relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Checkbox4 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(248,248,248,0.7)] relative shrink-0 w-[913.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_32.50px] px-[28px] py-[10px] relative size-full">
        <Container24 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f8f8f8] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container15 />
        <Container19 />
        <Container23 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f0f0f0] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <Container10 />
        <Container14 />
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[6px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden className="absolute border-[#d3d3d3] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] not-italic relative shrink-0 text-[#252271] text-[13px] whitespace-nowrap">Pengadaan</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Checkbox5 />
        <Button1 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-2 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">Action</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-3 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_22px] px-[28px] py-[11px] relative size-full">
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f0f0f0] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[6px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden className="absolute border-[#d3d3d3] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] not-italic relative shrink-0 text-[#252271] text-[13px] whitespace-nowrap">Pengujian</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Checkbox6 />
        <Button2 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="col-2 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">Action</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-3 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_22px] px-[28px] py-[11px] relative size-full">
        <Container34 />
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f0f0f0] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[6px] shrink-0 size-[22px]" data-name="Button">
      <div aria-hidden className="absolute border-[#d3d3d3] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] not-italic relative shrink-0 text-[#252271] text-[13px] whitespace-nowrap">Pembayaran</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Checkbox7 />
        <Button3 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-2 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[#252271] text-[11px] whitespace-nowrap">Action</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-3 h-[16.5px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___713.20px_72px_72px] grid-rows-[_22px] px-[28px] py-[11px] relative size-full">
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container9 />
        <Container27 />
        <Container32 />
        <Container37 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(82,82,82,0.6)] whitespace-nowrap">4 izin aktif dari 76 total tersedia</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M9 3L3 9" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          <path d="M3 3L9 9" id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <a className="bg-white relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d3d3d3] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[20.8px] py-[7.8px] relative size-full">
        <Icon10 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(82,82,82,0.8)] text-center whitespace-nowrap">Batal</p>
      </div>
    </a>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.pc94000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9812d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2ad810a0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <a className="bg-gradient-to-r from-[#252271] relative rounded-[10px] shrink-0 to-[#3a37a0]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[24px] py-[7px] relative size-full">
        <Icon11 />
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Simpan Role</p>
      </div>
    </a>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch cursor-pointer flex gap-[12px] items-center relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[16.8px] px-[28px] relative size-full">
          <Paragraph4 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[433.4px] items-start overflow-clip relative rounded-[24px] shadow-[0px_0px_10.9px_0px_rgba(0,0,0,0.09)] shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container41 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262px] pt-[20px] top-[214px] w-[913.2px]" data-name="Container:margin">
      <Container6 />
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

function Container43() {
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
      <Svg />
      <Container43 />
    </a>
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

function Container46() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[140.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[9.75px] w-[154px]">
        <p className="leading-[18.75px]">{`Manajemen User & Role`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg1 />
      <Container46 />
    </div>
  );
}

function Svg2() {
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

function Container44() {
  return (
    <div className="bg-gradient-to-r drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] from-[#ff4545] relative rounded-[8px] shrink-0 to-[#ff7272] w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container45 />
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[17.25px]">Manajemen User</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[6px] pt-[5px] px-[8px] relative size-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
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
          <Container48 />
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
      <Container44 />
      <VerticalBorder />
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

function Container51() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[54.3px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[8.5px] w-[54.174px]">
        <p className="leading-[18.75px]">Verifikasi</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <Svg3 />
      <Container51 />
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

function Container49() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container50 />
          <Svg4 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Group: Verifikasi">
      <Container49 />
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

function Container52() {
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
          <Container52 />
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

function Container53() {
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
          <Container53 />
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

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white w-full">
        <p className="leading-[14.38px]">Administrator</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[15px]">admin@sipro.co.id</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container55 />
    </div>
  );
}

function UserCard() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col items-start p-[10px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[221px]" data-name="User Card">
      <Container54 />
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
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[242px]" data-name="Requestion">
      <AsideSidebarComponent />
    </div>
  );
}

export default function UserDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="User - Dashboard">
      <Heading />
      <ContainerMargin />
      <ContainerMargin1 />
      <Requestion />
    </div>
  );
}