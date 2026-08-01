import svgPaths from "./svg-5x126p6m4m";
import imgImage6 from "./a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[353px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.4607deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container6 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(82.0853deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Draft Kontrak
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button1 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container9 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container10() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button2 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container12 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button3 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container15 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button4 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container18 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button5 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container21 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button6 />
        <ContainerMargin5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container24 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container25() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button7 />
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container27 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container28() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button8 />
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container29 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container5 />
        <Container8 />
        <Container11 />
        <Container14 />
        <Container17 />
        <Container20 />
        <Container23 />
        <Container26 />
        <Button9 />
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function KvGrid() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__791.81px_791.81px] grid-rows-[_38.49px] h-[38.494px] relative shrink-0 w-full" data-name="KVGrid">
      <Container32 />
      <Container33 />
    </div>
  );
}

function KvGridMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Draft Contract</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon1 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text11 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function AttachSection() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph6 />
        <Container34 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container31 />
      <KvGridMargin />
      <AttachSectionMargin />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="opacity-30 relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar />
        <ContainerMargin8 />
        <ContainerMargin9 />
      </div>
    </div>
  );
}

function ContractPanel() {
  return (
    <div className="bg-white h-[485px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container1 />
        <Container3 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin() {
  return (
    <div className="content-stretch flex flex-col h-[589px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel />
    </div>
  );
}

function Requestion() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container />
      <FilterSectionMargin />
    </div>
  );
}

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
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame47 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow />
        </div>
      </div>
    </div>
  );
}

function NppRow() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow />
        </div>
      </div>
    </div>
  );
}

function Sp3Row() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row />
    </div>
  );
}

function PbjRow() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow />
    </a>
  );
}

function ContractRow() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow />
    </div>
  );
}

function ListContractRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow />
    </div>
  );
}

function ContractChildren() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap />
          <ListContractWrap />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow />
      <ContractChildren />
    </div>
  );
}

function JaminanPelaksanaanRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow1 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow2 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow3 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap />
        <NppWrap />
        <Sp3Wrap />
        <PbjWrap />
        <ContractWrap />
        <JaminanPelaksanaanWrap />
        <WarehouseWrap />
        <VendorManagementWrap />
        <HargaSatuanWrap />
        <UplaodImportInklaringWrap />
        <UplaodImportInklaringWrap1 />
        <UplaodImportInklaringWrap2 />
        <UplaodImportInklaringWrap3 />
        <UplaodImportInklaringRow4 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame48 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
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
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame1 />
      <Frame2 />
      <TopLevelChildren />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function AsideSidebarComponent() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container36() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg />
      <Container36 />
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

function Container38() {
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

function Container37() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container38 />
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container37 />
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

function Container40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container39 />
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

function Container41() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg4 />
      <Container41 />
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

function Container42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay />
    </div>
  );
}

function UserCard() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container42 />
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

function Requestion1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent1 />
    </div>
  );
}

function SideBar() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent />
      <Requestion1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion />
      <SideBar />
    </div>
  );
}

function Contract() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[354px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container45 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container49 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container50() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin10() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button15 />
        <ContainerMargin10 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container52 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(85.6077deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Performance Bond
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin11() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button16 />
        <ContainerMargin11 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container55 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container56() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin12() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button17 />
        <ContainerMargin12 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container58 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container59() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin13() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button18 />
        <ContainerMargin13 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container61 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container62() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin14() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button19 />
        <ContainerMargin14 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text16 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container64 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container65() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin15() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container65 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button20 />
        <ContainerMargin15 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container67 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container68() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin16() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button21 />
        <ContainerMargin16 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text18 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container70 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container71() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin17() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button22 />
        <ContainerMargin17 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container72 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container48 />
        <Container51 />
        <Container54 />
        <Container57 />
        <Container60 />
        <Container63 />
        <Container66 />
        <Container69 />
        <Button23 />
      </div>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Performance Bond</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">KAI Group (Ya/Tidak)</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Bank</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Cabang</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Tanggal Penerimaan</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">No. Bank Garansi</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Minimum Jaminan</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Masa Berlaku — Start Date</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Masa Berlaku — End Date</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="col-2 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Jumlah Hari Kalender</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="col-1 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Nilai Jaminan</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="col-2 justify-self-stretch relative row-5 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Tanggal Terbit Jamlak</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-1 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Performance</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="col-2 justify-self-stretch relative row-6 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function KvGrid1() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__524px_524px] grid-rows-[______38.49px_38.49px_38.49px_38.49px_38.49px_38.49px] h-[310.931px] relative shrink-0 w-full" data-name="KVGrid">
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function KvGridMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid1 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Jaminan Pelaksanaan</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon4 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text22 />
          <Button24 />
        </div>
      </div>
    </div>
  );
}

function AttachSection1() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph33 />
        <Container87 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection1 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container74 />
      <KvGridMargin1 />
      <AttachSectionMargin1 />
    </div>
  );
}

function ContainerMargin18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container73 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">Riwayat Proses Kontrak</p>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#252271] gap-x-[65px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] h-[32px] left-[-0.4px] px-[16px] py-[8px] top-[0.06px] w-[1075px]" data-name="Table Row">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold justify-self-stretch leading-[15.714px] not-italic relative self-stretch shrink-0 text-[11px] text-white">No</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold justify-self-stretch leading-[15.714px] not-italic relative self-stretch shrink-0 text-[11px] text-white">Proses</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold justify-self-stretch leading-[15.714px] not-italic relative self-stretch shrink-0 text-[11px] text-white">Tanggal</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold justify-self-stretch leading-[15.714px] not-italic relative self-stretch shrink-0 text-[11px] text-white">Status</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #252271)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-self-stretch relative self-stretch shrink-0" data-name="Text">
      <Icon5 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#252271] text-[12px] whitespace-nowrap">Selesai</p>
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute gap-x-[45px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] h-[40px] left-[-0.4px] px-[16px] py-[10px] top-[32.06px] w-[1075px]" data-name="Table Body">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium justify-self-stretch leading-[20px] not-italic relative self-stretch shrink-0 text-[#252271] text-[14px]">-</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium justify-self-stretch leading-[20px] not-italic relative self-stretch shrink-0 text-[#252271] text-[14px]">-</p>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium justify-self-stretch leading-[20px] not-italic relative self-stretch shrink-0 text-[#252271] text-[14px]">-</p>
      <Text23 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[72.881px] relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TableRow />
        <TableBody />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[75.281px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function ContainerMargin20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container89 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Paragraph34 />
      <ContainerMargin20 />
    </div>
  );
}

function ContainerMargin19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container88 />
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button25 />
      <Button26 />
      <Button27 />
    </div>
  );
}

function ContainerMargin21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar1 />
        <ContainerMargin18 />
        <ContainerMargin19 />
        <ContainerMargin21 />
      </div>
    </div>
  );
}

function ContractPanel1() {
  return (
    <div className="bg-white h-[907px] relative rounded-[16px] shrink-0 w-[1127px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container44 />
        <Container46 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[937px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel1 />
    </div>
  );
}

function Requestion2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1063px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container43 />
      <FilterSectionMargin1 />
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
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame51 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow1() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow1 />
        </div>
      </div>
    </div>
  );
}

function NppRow1() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap1() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow1 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row1() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row1 />
    </div>
  );
}

function PbjRow1() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap1() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow1 />
    </a>
  );
}

function ContractRow1() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow1 />
    </div>
  );
}

function ListContractRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow1 />
    </div>
  );
}

function ContractChildren1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap1 />
          <ListContractWrap1 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow1 />
      <ContractChildren1 />
    </div>
  );
}

function JaminanPelaksanaanRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow1 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow1 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow1 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow1 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow5 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow6 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow7 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow8 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren1() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap1 />
        <NppWrap1 />
        <Sp3Wrap1 />
        <PbjWrap1 />
        <ContractWrap1 />
        <JaminanPelaksanaanWrap1 />
        <WarehouseWrap1 />
        <VendorManagementWrap1 />
        <HargaSatuanWrap1 />
        <UplaodImportInklaringWrap4 />
        <UplaodImportInklaringWrap5 />
        <UplaodImportInklaringWrap6 />
        <UplaodImportInklaringWrap7 />
        <UplaodImportInklaringRow9 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame52 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame53() {
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
      <Frame53 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame6 />
      <Frame7 />
      <TopLevelChildren1 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function AsideSidebarComponent2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container91() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive1() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg6 />
      <Container91 />
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

function Container93() {
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

function Container92() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container93 />
          <Svg8 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container92 />
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

function Container95() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container94() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container94 />
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

function Container96() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg10 />
      <Container96 />
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

function Container97() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay1 />
    </div>
  );
}

function UserCard1() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container97 />
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

function Requestion3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent3 />
    </div>
  );
}

function SideBar1() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent2 />
      <Requestion3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion2 />
      <SideBar1 />
    </div>
  );
}

function Contract1() {
  return (
    <div className="absolute bg-white h-[1079px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-[365px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[358px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph35 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container100 />
          <Button28 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container104 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container105() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin22() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container105 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button29 />
        <ContainerMargin22 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container107 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container108() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin23() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container108 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button30 />
        <ContainerMargin23 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text24 />
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container110 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(85.6077deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Verifikasi Jamlak
        </p>
      </div>
    </div>
  );
}

function Container111() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin24() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container111 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button31 />
        <ContainerMargin24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text25 />
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container113 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container114() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin25() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container114 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button32 />
        <ContainerMargin25 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text26 />
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container116 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container117() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin26() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container117 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button33 />
        <ContainerMargin26 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text27 />
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container119 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container120() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin27() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container120 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button34 />
        <ContainerMargin27 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container122 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container123() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin28() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container123 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button35 />
        <ContainerMargin28 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text29 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container125 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container126() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin29() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container126 />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button36 />
        <ContainerMargin29 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text30 />
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container127 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container103 />
        <Container106 />
        <Container109 />
        <Container112 />
        <Container115 />
        <Container118 />
        <Container121 />
        <Container124 />
        <Button37 />
      </div>
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container102 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text31 />
        <Text32 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph37 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph39 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Tanggal Penyerahan</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Verifikasi</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph43 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function KvGrid2() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__500px_541px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
    </div>
  );
}

function KvGridMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid2 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Performance Bond</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon9 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(229,229,229,0.6)] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[11.2px] pt-[10px] px-[16px] relative size-full">
          <Text33 />
          <Button38 />
        </div>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Verifikasi Jaminan</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon10 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text34 />
          <Button39 />
        </div>
      </div>
    </div>
  );
}

function AttachSection2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph45 />
        <Container134 />
        <Container135 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection2 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container129 />
      <KvGridMargin2 />
      <AttachSectionMargin2 />
    </div>
  );
}

function ContainerMargin30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container128 />
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#69696a] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button40 />
      <Button41 />
      <Button42 />
    </div>
  );
}

function ContainerMargin31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container136 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar2 />
        <ContainerMargin30 />
        <ContainerMargin31 />
      </div>
    </div>
  );
}

function ContractPanel2() {
  return (
    <div className="bg-white h-[580px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container99 />
        <Container101 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel2 />
    </div>
  );
}

function Requestion4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container98 />
      <FilterSectionMargin2 />
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

function Frame54() {
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
      <Frame54 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame55 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow2() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow2 />
        </div>
      </div>
    </div>
  );
}

function NppRow2() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap2() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow2 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row2() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row2 />
    </div>
  );
}

function PbjRow2() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap2() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow2 />
    </a>
  );
}

function ContractRow2() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow2 />
    </div>
  );
}

function ListContractRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow2 />
    </div>
  );
}

function ContractChildren2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap2 />
          <ListContractWrap2 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow2 />
      <ContractChildren2 />
    </div>
  );
}

function JaminanPelaksanaanRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow2 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow2 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow2 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow2 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow10 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow11 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow12() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow12 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow13() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow13 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren2() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap2 />
        <NppWrap2 />
        <Sp3Wrap2 />
        <PbjWrap2 />
        <ContractWrap2 />
        <JaminanPelaksanaanWrap2 />
        <WarehouseWrap2 />
        <VendorManagementWrap2 />
        <HargaSatuanWrap2 />
        <UplaodImportInklaringWrap8 />
        <UplaodImportInklaringWrap9 />
        <UplaodImportInklaringWrap10 />
        <UplaodImportInklaringWrap11 />
        <UplaodImportInklaringRow14 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame56 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame57() {
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
      <Frame57 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame11 />
      <Frame12 />
      <TopLevelChildren2 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function AsideSidebarComponent4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container137() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive2() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg12 />
      <Container137 />
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

function Container139() {
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

function Container138() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container139 />
          <Svg14 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container138 />
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

function Container141() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Container140() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container141 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container140 />
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

function Container142() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg16 />
      <Container142 />
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

function Container143() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay2 />
    </div>
  );
}

function UserCard2() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container143 />
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

function Requestion5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent5 />
    </div>
  );
}

function SideBar2() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent4 />
      <Requestion5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion4 />
      <SideBar2 />
    </div>
  );
}

function Contract2() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[372px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph46 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button43() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container146 />
          <Button43 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container150() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container150 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container151() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin32() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button44 />
        <ContainerMargin32 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container153() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container153 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container154() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin33() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container154 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button45 />
        <ContainerMargin33 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container156() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container156 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container157() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin34() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container157 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button46 />
        <ContainerMargin34 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          4
        </p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container159 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(82.2075deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Review Legal
        </p>
      </div>
    </div>
  );
}

function Container160() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin35() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container160 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button47 />
        <ContainerMargin35 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text36 />
      </div>
    </div>
  );
}

function Button48() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container162 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container163() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin36() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container163 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button48 />
        <ContainerMargin36 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text37 />
      </div>
    </div>
  );
}

function Button49() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container165 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container166() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin37() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container166 />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button49 />
        <ContainerMargin37 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container168 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container169() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin38() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container169 />
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button50 />
        <ContainerMargin38 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text39 />
      </div>
    </div>
  );
}

function Button51() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container171 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container172() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin39() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container172 />
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button51 />
        <ContainerMargin39 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text40 />
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container173 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container149 />
        <Container152 />
        <Container155 />
        <Container158 />
        <Container161 />
        <Container164 />
        <Container167 />
        <Container170 />
        <Button52 />
      </div>
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container148 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text41 />
        <Text42 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph48 />
        <Paragraph49 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph50 />
        <Paragraph51 />
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Review</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph52 />
        <Paragraph53 />
      </div>
    </div>
  );
}

function KvGrid3() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__612px_429px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container176 />
      <Container177 />
      <Container178 />
    </div>
  );
}

function KvGridMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid3 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Review Legal</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button53() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon15 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text43 />
          <Button53 />
        </div>
      </div>
    </div>
  );
}

function AttachSection3() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph54 />
        <Container179 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection3 />
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container175 />
      <KvGridMargin3 />
      <AttachSectionMargin3 />
    </div>
  );
}

function ContainerMargin40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container174 />
      </div>
    </div>
  );
}

function Button54() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button55() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button56() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button54 />
      <Button55 />
      <Button56 />
    </div>
  );
}

function ContainerMargin41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container180 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar3 />
        <ContainerMargin40 />
        <ContainerMargin41 />
      </div>
    </div>
  );
}

function ContractPanel3() {
  return (
    <div className="bg-white h-[539px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container145 />
        <Container147 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel3 />
    </div>
  );
}

function Requestion6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container144 />
      <FilterSectionMargin3 />
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

function Frame58() {
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
      <Frame58 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame59 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow3() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow3 />
        </div>
      </div>
    </div>
  );
}

function NppRow3() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap3() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow3 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row3() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row3 />
    </div>
  );
}

function PbjRow3() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap3() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow3 />
    </a>
  );
}

function ContractRow3() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow3 />
    </div>
  );
}

function ListContractRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow3 />
    </div>
  );
}

function ContractChildren3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap3 />
          <ListContractWrap3 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow3 />
      <ContractChildren3 />
    </div>
  );
}

function JaminanPelaksanaanRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow3 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow3 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow3 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow3 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow15() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow15 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow16() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow16 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow17() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow17 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow18() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap15() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow18 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren3() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap3 />
        <NppWrap3 />
        <Sp3Wrap3 />
        <PbjWrap3 />
        <ContractWrap3 />
        <JaminanPelaksanaanWrap3 />
        <WarehouseWrap3 />
        <VendorManagementWrap3 />
        <HargaSatuanWrap3 />
        <UplaodImportInklaringWrap12 />
        <UplaodImportInklaringWrap13 />
        <UplaodImportInklaringWrap14 />
        <UplaodImportInklaringWrap15 />
        <UplaodImportInklaringRow19 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame60 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame61() {
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
      <Frame61 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame16 />
      <Frame17 />
      <TopLevelChildren3 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function AsideSidebarComponent6() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container181() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive3() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg18 />
      <Container181 />
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

function Container183() {
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

function Container182() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container183 />
          <Svg20 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container182 />
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

function Container185() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg21 />
    </div>
  );
}

function Container184() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container185 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container184 />
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

function Container186() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg22 />
      <Container186 />
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

function Container187() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay3 />
    </div>
  );
}

function UserCard3() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container187 />
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
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent7 />
    </div>
  );
}

function SideBar3() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent6 />
      <Requestion7 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion6 />
      <SideBar3 />
    </div>
  );
}

function Contract3() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[354px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph55 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button57() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container190 />
          <Button57 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container194() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container194 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container195() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin42() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container195 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button58 />
        <ContainerMargin42 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container197() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Button59() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container197 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container198() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin43() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container198 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button59 />
        <ContainerMargin43 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container200() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container200 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container201() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin44() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container201 />
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button60 />
        <ContainerMargin44 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container203() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Button61() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container203 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container204() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin45() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container204 />
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button61 />
        <ContainerMargin45 />
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          5
        </p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text44 />
      </div>
    </div>
  );
}

function Button62() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container206 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(85.6077deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Approval Logistik
        </p>
      </div>
    </div>
  );
}

function Container207() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin46() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container207 />
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button62 />
        <ContainerMargin46 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text45 />
      </div>
    </div>
  );
}

function Button63() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container209 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container210() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin47() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container210 />
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button63 />
        <ContainerMargin47 />
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text46 />
      </div>
    </div>
  );
}

function Button64() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container212 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container213() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin48() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container213 />
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button64 />
        <ContainerMargin48 />
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text47 />
      </div>
    </div>
  );
}

function Button65() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container215 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container216() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin49() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container216 />
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button65 />
        <ContainerMargin49 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text48 />
      </div>
    </div>
  );
}

function Button66() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container217 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container193 />
        <Container196 />
        <Container199 />
        <Container202 />
        <Container205 />
        <Container208 />
        <Container211 />
        <Container214 />
        <Button66 />
      </div>
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container192 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text49 />
        <Text50 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph57 />
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph59 />
        <Paragraph60 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Approval Logistik</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container222() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph61 />
        <Paragraph62 />
      </div>
    </div>
  );
}

function KvGrid4() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__521px_521px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container220 />
      <Container221 />
      <Container222 />
    </div>
  );
}

function KvGridMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid4 />
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Dokumen Approval Logistik</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button67() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon21 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container223() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text51 />
          <Button67 />
        </div>
      </div>
    </div>
  );
}

function AttachSection4() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph63 />
        <Container223 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection4 />
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container219 />
      <KvGridMargin4 />
      <AttachSectionMargin4 />
    </div>
  );
}

function ContainerMargin50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container218 />
      </div>
    </div>
  );
}

function Button68() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button69() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button70() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button68 />
      <Button69 />
      <Button70 />
    </div>
  );
}

function ContainerMargin51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container224 />
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar4 />
        <ContainerMargin50 />
        <ContainerMargin51 />
      </div>
    </div>
  );
}

function ContractPanel4() {
  return (
    <div className="bg-white h-[539px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container189 />
        <Container191 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel4 />
    </div>
  );
}

function Requestion8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container188 />
      <FilterSectionMargin4 />
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

function Frame21() {
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
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame63 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow4() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow4 />
        </div>
      </div>
    </div>
  );
}

function NppRow4() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap4() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow4 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row4() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row4 />
    </div>
  );
}

function PbjRow4() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap4() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow4 />
    </a>
  );
}

function ContractRow4() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow4 />
    </div>
  );
}

function ListContractRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow4 />
    </div>
  );
}

function ContractChildren4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap4 />
          <ListContractWrap4 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow4 />
      <ContractChildren4 />
    </div>
  );
}

function JaminanPelaksanaanRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow4 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow4 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow4 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow4 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow20() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow20 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow21() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap17() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow21 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow22() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap18() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow22 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow23() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow23 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow24() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren4() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap4 />
        <NppWrap4 />
        <Sp3Wrap4 />
        <PbjWrap4 />
        <ContractWrap4 />
        <JaminanPelaksanaanWrap4 />
        <WarehouseWrap4 />
        <VendorManagementWrap4 />
        <HargaSatuanWrap4 />
        <UplaodImportInklaringWrap16 />
        <UplaodImportInklaringWrap17 />
        <UplaodImportInklaringWrap18 />
        <UplaodImportInklaringWrap19 />
        <UplaodImportInklaringRow24 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame64 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
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

function Frame24() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame65 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame21 />
      <Frame22 />
      <TopLevelChildren4 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function AsideSidebarComponent8() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container225() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive4() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg24 />
      <Container225 />
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

function Container227() {
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

function Container226() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container227 />
          <Svg26 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container226 />
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

function Container229() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg27 />
    </div>
  );
}

function Container228() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container229 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container228 />
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

function Container230() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg28 />
      <Container230 />
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

function Container231() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay4 />
    </div>
  );
}

function UserCard4() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container231 />
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
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent9 />
    </div>
  );
}

function SideBar4() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent8 />
      <Requestion9 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion8 />
      <SideBar4 />
    </div>
  );
}

function Contract4() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[421px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph64 />
        <Paragraph65 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button71() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container234 />
          <Button71 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container238() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Button72() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container238 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container239() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin52() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container239 />
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button72 />
        <ContainerMargin52 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container241() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Button73() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container241 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container242() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin53() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container242 />
      </div>
    </div>
  );
}

function Container240() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button73 />
        <ContainerMargin53 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container244() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Button74() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container244 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container245() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin54() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container245 />
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button74 />
        <ContainerMargin54 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container247() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Button75() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container247 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container248() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin55() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container248 />
      </div>
    </div>
  );
}

function Container246() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button75 />
        <ContainerMargin55 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container250() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Button76() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container250 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container251() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin56() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container251 />
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button76 />
        <ContainerMargin56 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          6
        </p>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text52 />
      </div>
    </div>
  );
}

function Button77() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container253 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(81.5975deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Approval User
        </p>
      </div>
    </div>
  );
}

function Container254() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin57() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container254 />
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button77 />
        <ContainerMargin57 />
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text53 />
      </div>
    </div>
  );
}

function Button78() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container256 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container257() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin58() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container257 />
      </div>
    </div>
  );
}

function Container255() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button78 />
        <ContainerMargin58 />
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text54 />
      </div>
    </div>
  );
}

function Button79() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container259 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container260() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin59() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container260 />
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button79 />
        <ContainerMargin59 />
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text55 />
      </div>
    </div>
  );
}

function Button80() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container261 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container236() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container237 />
        <Container240 />
        <Container243 />
        <Container246 />
        <Container249 />
        <Container252 />
        <Container255 />
        <Container258 />
        <Button80 />
      </div>
    </div>
  );
}

function ProgressBar5() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container236 />
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Approval User</p>
      </div>
    </div>
  );
}

function Container263() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text56 />
        <Text57 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph66 />
        <Paragraph67 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph68 />
        <Paragraph69 />
      </div>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Approval User</p>
      </div>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph70 />
        <Paragraph71 />
      </div>
    </div>
  );
}

function KvGrid5() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__522px_522px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container264 />
      <Container265 />
      <Container266 />
    </div>
  );
}

function KvGridMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid5 />
      </div>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Approval User</p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button81() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon28 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text58 />
          <Button81 />
        </div>
      </div>
    </div>
  );
}

function AttachSection5() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph72 />
        <Container267 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection5 />
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container263 />
      <KvGridMargin5 />
      <AttachSectionMargin5 />
    </div>
  );
}

function ContainerMargin60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container262 />
      </div>
    </div>
  );
}

function Button82() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button83() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Button84() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button82 />
      <Button83 />
      <Button84 />
    </div>
  );
}

function ContainerMargin61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container268 />
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar5 />
        <ContainerMargin60 />
        <ContainerMargin61 />
      </div>
    </div>
  );
}

function ContractPanel5() {
  return (
    <div className="bg-white h-[539px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container233 />
        <Container235 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel5 />
    </div>
  );
}

function Requestion10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container232 />
      <FilterSectionMargin5 />
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

function Frame66() {
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
      <Frame66 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame67 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow5() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow5 />
        </div>
      </div>
    </div>
  );
}

function NppRow5() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap5() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow5 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row5() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row5 />
    </div>
  );
}

function PbjRow5() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap5() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow5 />
    </a>
  );
}

function ContractRow5() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow5 />
    </div>
  );
}

function ListContractRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow5 />
    </div>
  );
}

function ContractChildren5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap5 />
          <ListContractWrap5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow5 />
      <ContractChildren5 />
    </div>
  );
}

function JaminanPelaksanaanRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow5 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow5 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow5 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow5 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow25() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap20() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow25 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow26() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap21() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow26 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow27() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap22() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow27 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow28() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap23() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow28 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren5() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap5 />
        <NppWrap5 />
        <Sp3Wrap5 />
        <PbjWrap5 />
        <ContractWrap5 />
        <JaminanPelaksanaanWrap5 />
        <WarehouseWrap5 />
        <VendorManagementWrap5 />
        <HargaSatuanWrap5 />
        <UplaodImportInklaringWrap20 />
        <UplaodImportInklaringWrap21 />
        <UplaodImportInklaringWrap22 />
        <UplaodImportInklaringWrap23 />
        <UplaodImportInklaringRow29 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame68 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame69() {
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
      <Frame69 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame26 />
      <Frame27 />
      <TopLevelChildren5 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function AsideSidebarComponent10() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container269() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive5() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg30 />
      <Container269 />
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

function Container271() {
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

function Container270() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container271 />
          <Svg32 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container270 />
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

function Container273() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg33 />
    </div>
  );
}

function Container272() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container273 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container272 />
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

function Container274() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg34 />
      <Container274 />
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

function Container275() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay5 />
    </div>
  );
}

function UserCard5() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container275 />
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

function Requestion11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent11 />
    </div>
  );
}

function SideBar5() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent10 />
      <Requestion11 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion10 />
      <SideBar5 />
    </div>
  );
}

function Contract5() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[350px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph73 />
        <Paragraph74 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button85() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container278 />
          <Button85 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container282() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Button86() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container282 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container283() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin62() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container283 />
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button86 />
        <ContainerMargin62 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container285() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Button87() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container285 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container286() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin63() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container286 />
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button87 />
        <ContainerMargin63 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container288() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Button88() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container288 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container289() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin64() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container289 />
      </div>
    </div>
  );
}

function Container287() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button88 />
        <ContainerMargin64 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container291() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Button89() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container291 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container292() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin65() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container292 />
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button89 />
        <ContainerMargin65 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container294() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Button90() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container294 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container295() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin66() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container295 />
      </div>
    </div>
  );
}

function Container293() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button90 />
        <ContainerMargin66 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container297() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Button91() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container297 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container298() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin67() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container298 />
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button91 />
        <ContainerMargin67 />
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.3528deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          7
        </p>
      </div>
    </div>
  );
}

function Container300() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text59 />
      </div>
    </div>
  );
}

function Button92() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container300 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(85.6077deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Approval Legal
        </p>
      </div>
    </div>
  );
}

function Container301() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin68() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container301 />
      </div>
    </div>
  );
}

function Container299() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button92 />
        <ContainerMargin68 />
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container303() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text60 />
      </div>
    </div>
  );
}

function Button93() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container303 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container304() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin69() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container304 />
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button93 />
        <ContainerMargin69 />
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container305() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text61 />
      </div>
    </div>
  );
}

function Button94() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container305 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container281 />
        <Container284 />
        <Container287 />
        <Container290 />
        <Container293 />
        <Container296 />
        <Container299 />
        <Container302 />
        <Button94 />
      </div>
    </div>
  );
}

function ProgressBar6() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container280 />
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Approval Legal</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text62 />
        <Text63 />
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container308() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph75 />
        <Paragraph76 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph77 />
        <Paragraph78 />
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Approval Legal</p>
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph79 />
        <Paragraph80 />
      </div>
    </div>
  );
}

function KvGrid6() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__523px_523px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container308 />
      <Container309 />
      <Container310 />
    </div>
  );
}

function KvGridMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid6 />
      </div>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Approval Legal</p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button95() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon36 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container311() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text64 />
          <Button95 />
        </div>
      </div>
    </div>
  );
}

function AttachSection6() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph81 />
        <Container311 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection6 />
      </div>
    </div>
  );
}

function Container306() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container307 />
      <KvGridMargin6 />
      <AttachSectionMargin6 />
    </div>
  );
}

function ContainerMargin70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container306 />
      </div>
    </div>
  );
}

function Button96() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button97() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container312() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button96 />
      <Button97 />
    </div>
  );
}

function ContainerMargin71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container312 />
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar6 />
        <ContainerMargin70 />
        <ContainerMargin71 />
      </div>
    </div>
  );
}

function ContractPanel6() {
  return (
    <div className="bg-white h-[539px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container277 />
        <Container279 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel6 />
    </div>
  );
}

function Requestion12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container276 />
      <FilterSectionMargin6 />
    </div>
  );
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

function Frame70() {
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
      <Frame70 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame71 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow6() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow6 />
        </div>
      </div>
    </div>
  );
}

function NppRow6() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap6() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow6 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row6() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row6 />
    </div>
  );
}

function PbjRow6() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap6() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow6 />
    </a>
  );
}

function ContractRow6() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow6 />
    </div>
  );
}

function ListContractRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow6 />
    </div>
  );
}

function ContractChildren6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap6 />
          <ListContractWrap6 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow6 />
      <ContractChildren6 />
    </div>
  );
}

function JaminanPelaksanaanRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow6 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow6 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow6 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow6 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow30() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap24() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow30 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow31() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap25() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow31 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow32() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap26() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow32 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow33() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap27() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow33 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow34() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren6() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap6 />
        <NppWrap6 />
        <Sp3Wrap6 />
        <PbjWrap6 />
        <ContractWrap6 />
        <JaminanPelaksanaanWrap6 />
        <WarehouseWrap6 />
        <VendorManagementWrap6 />
        <HargaSatuanWrap6 />
        <UplaodImportInklaringWrap24 />
        <UplaodImportInklaringWrap25 />
        <UplaodImportInklaringWrap26 />
        <UplaodImportInklaringWrap27 />
        <UplaodImportInklaringRow34 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame72 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame73() {
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
      <Frame73 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame31 />
      <Frame32 />
      <TopLevelChildren6 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function AsideSidebarComponent12() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
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

function Container313() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive6() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg36 />
      <Container313 />
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

function Container315() {
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

function Container314() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container315 />
          <Svg38 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container314 />
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

function Container317() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg39 />
    </div>
  );
}

function Container316() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container317 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container316 />
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

function Container318() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg40 />
      <Container318 />
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

function Container319() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay6 />
    </div>
  );
}

function UserCard6() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container319 />
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

function Requestion13() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent13 />
    </div>
  );
}

function SideBar6() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent12 />
      <Requestion13 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion12 />
      <SideBar6 />
    </div>
  );
}

function Contract6() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[352px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container320() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading7 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph82 />
        <Paragraph83 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button98() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Container321() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container322 />
          <Button98 />
        </div>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container326() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Button99() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container326 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container327() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin72() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container327 />
      </div>
    </div>
  );
}

function Container325() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button99 />
        <ContainerMargin72 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container329() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Button100() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container329 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container330() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin73() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container330 />
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button100 />
        <ContainerMargin73 />
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container332() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Button101() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container332 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container333() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin74() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container333 />
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button101 />
        <ContainerMargin74 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container335() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Button102() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container335 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container336() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin75() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container336 />
      </div>
    </div>
  );
}

function Container334() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button102 />
        <ContainerMargin75 />
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container338() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon42 />
      </div>
    </div>
  );
}

function Button103() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container338 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container339() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin76() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container339 />
      </div>
    </div>
  );
}

function Container337() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button103 />
        <ContainerMargin76 />
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container341() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon43 />
      </div>
    </div>
  );
}

function Button104() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container341 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container342() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin77() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container342 />
      </div>
    </div>
  );
}

function Container340() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button104 />
        <ContainerMargin77 />
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container344() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon44 />
      </div>
    </div>
  );
}

function Button105() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container344 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container345() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin78() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container345 />
      </div>
    </div>
  );
}

function Container343() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button105 />
        <ContainerMargin78 />
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          8
        </p>
      </div>
    </div>
  );
}

function Container347() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text65 />
      </div>
    </div>
  );
}

function Button106() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container347 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(85.6077deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Tanda Tangan Vendor
        </p>
      </div>
    </div>
  );
}

function Container348() {
  return <div className="bg-[#e5e5e5] h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" data-name="Container" />;
}

function ContainerMargin79() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container348 />
      </div>
    </div>
  );
}

function Container346() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button106 />
        <ContainerMargin79 />
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.6)] text-center whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container349() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text66 />
      </div>
    </div>
  );
}

function Button107() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container349 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] text-center w-[68px]">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container324() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container325 />
        <Container328 />
        <Container331 />
        <Container334 />
        <Container337 />
        <Container340 />
        <Container343 />
        <Container346 />
        <Button107 />
      </div>
    </div>
  );
}

function ProgressBar7() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container324 />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container351() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text67 />
        <Text68 />
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container352() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph84 />
        <Paragraph85 />
      </div>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container353() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph86 />
        <Paragraph87 />
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container354() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph88 />
        <Paragraph89 />
      </div>
    </div>
  );
}

function KvGrid7() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__521px_521px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container352 />
      <Container353 />
      <Container354 />
    </div>
  );
}

function KvGridMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid7 />
      </div>
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button108() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon45 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container355() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text69 />
          <Button108 />
        </div>
      </div>
    </div>
  );
}

function AttachSection7() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph90 />
        <Container355 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection7 />
      </div>
    </div>
  );
}

function Container350() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container351 />
      <KvGridMargin7 />
      <AttachSectionMargin7 />
    </div>
  );
}

function ContainerMargin80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container350 />
      </div>
    </div>
  );
}

function Button109() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button110() {
  return (
    <div className="bg-[#252271] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container356() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button109 />
      <Button110 />
    </div>
  );
}

function ContainerMargin81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container356 />
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar7 />
        <ContainerMargin80 />
        <ContainerMargin81 />
      </div>
    </div>
  );
}

function ContractPanel7() {
  return (
    <div className="bg-white h-[539px] relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container321 />
        <Container323 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel7 />
    </div>
  );
}

function Requestion14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container320 />
      <FilterSectionMargin7 />
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

function Frame74() {
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
      <Frame74 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame75 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow7() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow7 />
        </div>
      </div>
    </div>
  );
}

function NppRow7() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap7() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow7 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row7() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row7 />
    </div>
  );
}

function PbjRow7() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap7() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow7 />
    </a>
  );
}

function ContractRow7() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow7 />
    </div>
  );
}

function ListContractRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow7 />
    </div>
  );
}

function ContractChildren7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap7 />
          <ListContractWrap7 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow7 />
      <ContractChildren7 />
    </div>
  );
}

function JaminanPelaksanaanRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow7 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow7 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow7 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow7() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow7 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow35() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow35 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow36() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow36 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow37() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap30() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow37 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow38() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap31() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow38 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow39() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren7() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap7 />
        <NppWrap7 />
        <Sp3Wrap7 />
        <PbjWrap7 />
        <ContractWrap7 />
        <JaminanPelaksanaanWrap7 />
        <WarehouseWrap7 />
        <VendorManagementWrap7 />
        <HargaSatuanWrap7 />
        <UplaodImportInklaringWrap28 />
        <UplaodImportInklaringWrap29 />
        <UplaodImportInklaringWrap30 />
        <UplaodImportInklaringWrap31 />
        <UplaodImportInklaringRow39 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame76 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame78() {
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

function Frame77() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame78 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame43 />
      <Frame44 />
      <TopLevelChildren7 />
      <Frame45 />
      <Frame77 />
    </div>
  );
}

function AsideSidebarComponent14() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo14 />
      <Frame42 />
    </div>
  );
}

function Frame79() {
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
      <Frame79 />
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

function Container357() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive7() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg42 />
      <Container357 />
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

function Container359() {
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

function Container358() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container359 />
          <Svg44 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container358 />
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

function Container361() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg45 />
    </div>
  );
}

function Container360() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container361 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container360 />
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

function Container362() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg46 />
      <Container362 />
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

function Container363() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay7 />
    </div>
  );
}

function UserCard7() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container363 />
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

function Requestion15() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent15 />
    </div>
  );
}

function SideBar7() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent14 />
      <Requestion15 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion14 />
      <SideBar7 />
    </div>
  );
}

function Contract7() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] w-[341px]">
          <span className="leading-[24px]">{`Contract >`}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px]">{` Task Approval > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Proses Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading8 />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Proses Contract</p>
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[22px] relative shrink-0 w-[479.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container366() {
  return (
    <div className="relative shrink-0 w-[479.325px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph91 />
        <Paragraph92 />
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9937" preserveAspectRatio="none" viewBox="0 0 15.9937 15.9937" width="15.9937">
        <g id="Icon">
          <path d={svgPaths.p15da2270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
          <path d={svgPaths.p108aee80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33281" />
        </g>
      </svg>
    </div>
  );
}

function Button111() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon46 />
      </div>
    </div>
  );
}

function Container365() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17.2px] pt-[16px] px-[24px] relative size-full">
          <Container366 />
          <Button111 />
        </div>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container370() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon47 />
      </div>
    </div>
  );
}

function Button112() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container370 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Draft Kontrak</p>
      </div>
    </div>
  );
}

function Container371() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin82() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container371 />
      </div>
    </div>
  );
}

function Container369() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button112 />
        <ContainerMargin82 />
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container373() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon48 />
      </div>
    </div>
  );
}

function Button113() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container373 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Performance Bond</p>
      </div>
    </div>
  );
}

function Container374() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin83() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container374 />
      </div>
    </div>
  );
}

function Container372() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button113 />
        <ContainerMargin83 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container376() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon49 />
      </div>
    </div>
  );
}

function Button114() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container376 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Verifikasi Jamlak</p>
      </div>
    </div>
  );
}

function Container377() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin84() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container377 />
      </div>
    </div>
  );
}

function Container375() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button114 />
        <ContainerMargin84 />
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container379() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon50 />
      </div>
    </div>
  );
}

function Button115() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container379 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center whitespace-nowrap">Review Legal</p>
      </div>
    </div>
  );
}

function Container380() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin85() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container380 />
      </div>
    </div>
  );
}

function Container378() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button115 />
        <ContainerMargin85 />
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container382() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon51 />
      </div>
    </div>
  );
}

function Button116() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container382 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval Logistik</p>
      </div>
    </div>
  );
}

function Container383() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin86() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container383 />
      </div>
    </div>
  );
}

function Container381() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button116 />
        <ContainerMargin86 />
      </div>
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container385() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon52 />
      </div>
    </div>
  );
}

function Button117() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container385 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval User</p>
      </div>
    </div>
  );
}

function Container386() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin87() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container386 />
      </div>
    </div>
  );
}

function Container384() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button117 />
        <ContainerMargin87 />
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container388() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon53 />
      </div>
    </div>
  );
}

function Button118() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container388 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Approval Legal</p>
      </div>
    </div>
  );
}

function Container389() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin88() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container389 />
      </div>
    </div>
  );
}

function Container387() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button118 />
        <ContainerMargin88 />
      </div>
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #F7F7F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container391() {
  return (
    <div className="relative rounded-[40265300px] shrink-0 size-[27.994px]" style={{ backgroundImage: "linear-gradient(88.3825deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Icon54 />
      </div>
    </div>
  );
}

function Button119() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container391 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[#737373] text-[10px] text-center w-[68px]">Tanda Tangan Vendor</p>
      </div>
    </div>
  );
}

function Container392() {
  return <div className="h-[1.987px] min-w-[18px] relative shrink-0 w-[18px]" style={{ backgroundImage: "linear-gradient(75.6542deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }} data-name="Container" />;
}

function ContainerMargin89() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[14px] relative size-full">
        <Container392 />
      </div>
    </div>
  );
}

function Container390() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button119 />
        <ContainerMargin89 />
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(89.245deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          9
        </p>
      </div>
    </div>
  );
}

function Container393() {
  return (
    <div className="bg-white relative rounded-[40265300px] shrink-0 size-[27.994px]" data-name="Container">
      <div aria-hidden className="absolute border-[#8c0505] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[40265300px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.2px] relative size-full">
        <Text70 />
      </div>
    </div>
  );
}

function Button120() {
  return (
    <div className="relative shrink-0 w-[75.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Container393 />
        <p className="[word-break:break-word] bg-clip-text font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] not-italic relative shrink-0 text-[10px] text-[transparent] text-center w-[68px]" style={{ backgroundImage: "linear-gradient(85.6077deg, rgb(140, 5, 5) 11.387%, rgb(227, 0, 0) 121.12%)" }}>
          Tanda Tangan KCI
        </p>
      </div>
    </div>
  );
}

function Container368() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container369 />
        <Container372 />
        <Container375 />
        <Container378 />
        <Container381 />
        <Container384 />
        <Container387 />
        <Container390 />
        <Button120 />
      </div>
    </div>
  );
}

function ProgressBar8() {
  return (
    <div className="h-[68.944px] relative shrink-0 w-full" data-name="ProgressBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-[inherit] size-full">
        <Container368 />
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="bg-[#252271] relative rounded-[40265300px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#f7f7f7] text-[10px] whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Container395() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text71 />
        <Text72 />
      </div>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Start Date</p>
      </div>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container396() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph93 />
        <Paragraph94 />
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">End Date</p>
      </div>
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container397() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph95 />
        <Paragraph96 />
      </div>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">Catatan Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.812px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">-</p>
      </div>
    </div>
  );
}

function Container398() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph97 />
        <Paragraph98 />
      </div>
    </div>
  );
}

function KvGrid8() {
  return (
    <div className="gap-x-[32px] gap-y-[16px] grid grid-cols-[__521px_521px] grid-rows-[__38.49px_38.49px] h-[92.981px] relative shrink-0 w-full" data-name="KVGrid">
      <Container396 />
      <Container397 />
      <Container398 />
    </div>
  );
}

function KvGridMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="KVGrid:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <KvGrid8 />
      </div>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden className="absolute border-[#e5e5e5] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[9.2px] pt-[8px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] whitespace-nowrap">File Tanda Tangan KCI</p>
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button121() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon55 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container399() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Text73 />
          <Button121 />
        </div>
      </div>
    </div>
  );
}

function AttachSection8() {
  return (
    <div className="h-[76.069px] relative rounded-[16px] shrink-0 w-full" data-name="AttachSection">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Paragraph99 />
        <Container399 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function AttachSectionMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="AttachSection:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <AttachSection8 />
      </div>
    </div>
  );
}

function Container394() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Container395 />
      <KvGridMargin8 />
      <AttachSectionMargin8 />
    </div>
  );
}

function ContainerMargin90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container394 />
      </div>
    </div>
  );
}

function Button122() {
  return (
    <div className="relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17.2px] py-[9.2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#252271] text-[14px] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Button123() {
  return (
    <div className="bg-[#252271] opacity-30 relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f7f7f7] text-[14px] text-center whitespace-nowrap">{`Submit & Lanjut`}</p>
      </div>
    </div>
  );
}

function Container400() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[21.2px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e5e5] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <Button122 />
      <Button123 />
    </div>
  );
}

function ContainerMargin91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <Container400 />
      </div>
    </div>
  );
}

function Container367() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20px] px-[24px] relative size-full">
        <ProgressBar8 />
        <ContainerMargin90 />
        <ContainerMargin91 />
      </div>
    </div>
  );
}

function ContractPanel8() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[1125px]" data-name="ContractPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container365 />
        <Container367 />
      </div>
      <div aria-hidden className="absolute border-[#e5e5e5] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function FilterSectionMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[647px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <ContractPanel8 />
    </div>
  );
}

function Requestion16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[773px] items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container364 />
      <FilterSectionMargin8 />
    </div>
  );
}

function Logo16() {
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

function Frame81() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame82 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame84 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow8() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow8 />
        </div>
      </div>
    </div>
  );
}

function NppRow8() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap8() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow8 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row8() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row8 />
    </div>
  );
}

function PbjRow8() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap8() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow8 />
    </a>
  );
}

function ContractRow8() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow8 />
    </div>
  );
}

function ListContractRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow8 />
    </div>
  );
}

function ContractChildren8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap8 />
          <ListContractWrap8 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow8 />
      <ContractChildren8 />
    </div>
  );
}

function JaminanPelaksanaanRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow8 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow8 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow8 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow8() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow8 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow40() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap32() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow40 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow41() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap33() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow41 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow42() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap34() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow42 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow43() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap35() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow43 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow44() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren8() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap8 />
        <NppWrap8 />
        <Sp3Wrap8 />
        <PbjWrap8 />
        <ContractWrap8 />
        <JaminanPelaksanaanWrap8 />
        <WarehouseWrap8 />
        <VendorManagementWrap8 />
        <HargaSatuanWrap8 />
        <UplaodImportInklaringWrap32 />
        <UplaodImportInklaringWrap33 />
        <UplaodImportInklaringWrap34 />
        <UplaodImportInklaringWrap35 />
        <UplaodImportInklaringRow44 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame86 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame88() {
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

function Frame87() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame88 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame81 />
      <Frame83 />
      <TopLevelChildren8 />
      <Frame85 />
      <Frame87 />
    </div>
  );
}

function AsideSidebarComponent16() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo16 />
      <Frame80 />
    </div>
  );
}

function Frame89() {
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

function Logo17() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame89 />
    </div>
  );
}

function Svg48() {
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

function Container401() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive8() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg48 />
      <Container401 />
    </div>
  );
}

function Svg49() {
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

function Container403() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg49 />
    </div>
  );
}

function Svg50() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container402() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container403 />
          <Svg50 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container402 />
    </div>
  );
}

function Svg51() {
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

function Container405() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg51 />
    </div>
  );
}

function Container404() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container405 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container404 />
    </div>
  );
}

function Svg52() {
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

function Container406() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg52 />
      <Container406 />
    </div>
  );
}

function Svg53() {
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

function LinkMasterData8() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg53 />
    </div>
  );
}

function Navigation8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive8 />
      <GroupUserRole8 />
      <GroupVerifikasi8 />
      <LinkTemplateDokumen8 />
      <LinkMasterData8 />
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container407() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay8 />
    </div>
  );
}

function UserCard8() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container407 />
    </div>
  );
}

function UserCardMargin8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard8 />
    </div>
  );
}

function AsideSidebarComponent17() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo17 />
      <Navigation8 />
      <UserCardMargin8 />
    </div>
  );
}

function Requestion17() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent17 />
    </div>
  );
}

function SideBar8() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent16 />
      <Requestion17 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion16 />
      <SideBar8 />
    </div>
  );
}

function Contract8() {
  return (
    <div className="absolute bg-white h-[781px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group9 />
    </div>
  );
}

function MainContent() {
  return <div className="absolute h-[680px] left-[282px] top-[96px] w-[1162px]" data-name="Main Content" />;
}

function Heading9() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="leading-[24px]">{`Contract > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">List Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container408() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading9 />
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Nomor Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">auto-filled</p>
      </div>
    </div>
  );
}

function Container411() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph100 />
        <Paragraph101 />
      </div>
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Tanggal Kontrak</p>
      </div>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">auto-filled</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph102 />
        <Paragraph103 />
      </div>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Total Hari Kalender</p>
      </div>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container413() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph104 />
        <Paragraph105 />
      </div>
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Hari Libur</p>
      </div>
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container414() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph106 />
        <Paragraph107 />
      </div>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Uncontroll Days</p>
      </div>
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container415() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph108 />
        <Paragraph109 />
      </div>
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Total Hari Kerja</p>
      </div>
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[816.525px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container416() {
  return (
    <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pt-[14px] px-[17.5px] relative size-full">
        <Paragraph110 />
        <Paragraph111 />
      </div>
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] not-italic relative shrink-0 text-[#656565] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">Catatan</p>
      </div>
    </div>
  );
}

function Paragraph113() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[815.325px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#656565] text-[12.25px] whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function Container417() {
  return (
    <div className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-r-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.2px] pl-[17.5px] pr-[18.7px] pt-[14px] relative size-full">
        <Paragraph112 />
        <Paragraph113 />
      </div>
    </div>
  );
}

function Container410() {
  return (
    <div className="h-[266.55px] relative shrink-0 w-[1106px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[__553px_553px] grid-rows-[____66.64px_66.64px_66.64px_66.64px] relative size-full">
        <Container411 />
        <Container412 />
        <Container413 />
        <Container414 />
        <Container415 />
        <Container416 />
        <Container417 />
      </div>
    </div>
  );
}

function Container409() {
  return (
    <div className="bg-white h-[268.95px] relative rounded-[12.75px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container410 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function Paragraph114() {
  return (
    <div className="relative shrink-0 w-[1668.037px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white tracking-[1.05px] uppercase whitespace-nowrap">Lampiran / File</p>
      </div>
    </div>
  );
}

function Container419() {
  return (
    <div className="bg-[#252271] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11.7px] pt-[10.5px] px-[17.5px] relative size-full">
        <Paragraph114 />
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#45556c] text-[12.25px] whitespace-nowrap">Upload Perjanjian</p>
      </div>
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p2752e200} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 5L6 7.5L8.5 5" id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7.5V1.5" id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button124() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon56 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">Lihat File</p>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[17.5px] py-[10.5px] relative size-full">
          <Text74 />
          <Button124 />
        </div>
      </div>
    </div>
  );
}

function Container418() {
  return (
    <div className="bg-white h-[77.062px] relative rounded-[12.75px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container419 />
        <Container420 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
    </div>
  );
}

function ContainerMargin92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17.5px] relative size-full">
        <Container418 />
      </div>
    </div>
  );
}

function Button125() {
  return (
    <div className="bg-[#252271] h-full relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12.8px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button126() {
  return (
    <div className="h-full relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[8.2px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#4a5565] text-[13px] text-center whitespace-nowrap">Submit</p>
        </div>
      </div>
    </div>
  );
}

function Container421() {
  return (
    <div className="h-[53px] relative shrink-0 w-[1106px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-start pt-[17.5px] relative size-full">
        <Button125 />
        <Button126 />
      </div>
    </div>
  );
}

function DetailView() {
  return (
    <div className="content-stretch flex flex-col h-[434px] items-start pt-[17.5px] relative shrink-0 w-[1107px]" data-name="DetailView">
      <Container409 />
      <ContainerMargin92 />
      <Container421 />
    </div>
  );
}

function FilterSectionMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[450px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <DetailView />
    </div>
  );
}

function ListViewMargin() {
  return <div className="h-[139px] relative shrink-0 w-[1123px]" data-name="ListView:margin" />;
}

function Requestion18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container408 />
      <FilterSectionMargin9 />
      <ListViewMargin />
    </div>
  );
}

function Logo18() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame92() {
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

function Frame91() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame92 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame94 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow9() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow9 />
        </div>
      </div>
    </div>
  );
}

function NppRow9() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap9() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow9 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row9() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row9 />
    </div>
  );
}

function PbjRow9() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap9() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow9 />
    </a>
  );
}

function ContractRow9() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow9 />
    </div>
  );
}

function ListContractRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow9 />
    </div>
  );
}

function ContractChildren9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap9 />
          <ListContractWrap9 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow9 />
      <ContractChildren9 />
    </div>
  );
}

function JaminanPelaksanaanRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow9 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow9 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow9 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow9() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow9 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow45() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap36() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow45 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow46() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap37() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow46 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow47() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap38() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow47 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow48() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap39() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow48 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow49() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren9() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap9 />
        <NppWrap9 />
        <Sp3Wrap9 />
        <PbjWrap9 />
        <ContractWrap9 />
        <JaminanPelaksanaanWrap9 />
        <WarehouseWrap9 />
        <VendorManagementWrap9 />
        <HargaSatuanWrap9 />
        <UplaodImportInklaringWrap36 />
        <UplaodImportInklaringWrap37 />
        <UplaodImportInklaringWrap38 />
        <UplaodImportInklaringWrap39 />
        <UplaodImportInklaringRow49 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame96 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame98() {
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

function Frame97() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame98 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame91 />
      <Frame93 />
      <TopLevelChildren9 />
      <Frame95 />
      <Frame97 />
    </div>
  );
}

function AsideSidebarComponent18() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo18 />
      <Frame90 />
    </div>
  );
}

function Frame99() {
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

function Logo19() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame99 />
    </div>
  );
}

function Svg54() {
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

function Container422() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive9() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg54 />
      <Container422 />
    </div>
  );
}

function Svg55() {
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

function Container424() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg55 />
    </div>
  );
}

function Svg56() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container423() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container424 />
          <Svg56 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container423 />
    </div>
  );
}

function Svg57() {
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

function Container426() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg57 />
    </div>
  );
}

function Container425() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container426 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container425 />
    </div>
  );
}

function Svg58() {
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

function Container427() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg58 />
      <Container427 />
    </div>
  );
}

function Svg59() {
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

function LinkMasterData9() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg59 />
    </div>
  );
}

function Navigation9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive9 />
      <GroupUserRole9 />
      <GroupVerifikasi9 />
      <LinkTemplateDokumen9 />
      <LinkMasterData9 />
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container428() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay9 />
    </div>
  );
}

function UserCard9() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container428 />
    </div>
  );
}

function UserCardMargin9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard9 />
    </div>
  );
}

function AsideSidebarComponent19() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo19 />
      <Navigation9 />
      <UserCardMargin9 />
    </div>
  );
}

function Requestion19() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent19 />
    </div>
  );
}

function SideBar9() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent18 />
      <Requestion19 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-0 top-0">
      <MainContent />
      <Requestion18 />
      <SideBar9 />
    </div>
  );
}

function Contract9() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group10 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="leading-[24px]">{`Contract > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">List Contract</span>
        </p>
      </div>
    </div>
  );
}

function Container429() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading10 />
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

function Container431() {
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

function Container432() {
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

function Container433() {
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

function Container434() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label3 />
        <Dropdown1 />
      </div>
    </div>
  );
}

function Container430() {
  return (
    <div className="h-[129.575px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__534px_534px] grid-rows-[__57.59px_55.99px] relative size-full">
        <Container431 />
        <Container432 />
        <Container433 />
        <Container434 />
      </div>
    </div>
  );
}

function Icon57() {
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

function Button127() {
  return (
    <div className="bg-[#252271] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon57 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cari</p>
    </div>
  );
}

function Icon58() {
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

function Button128() {
  return (
    <div className="content-stretch flex h-[35px] items-center px-[10.8px] py-[6.8px] relative rounded-[15px] shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Icon58 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-[271px]" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start pt-[16px] relative size-full">
        <Button127 />
        <Button128 />
      </div>
    </div>
  );
}

function FilterSection() {
  return (
    <div className="bg-[#f5f7fd] relative rounded-[15px] shrink-0 w-full" data-name="FilterSection">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container430 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function FilterSectionMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <FilterSection />
    </div>
  );
}

function Text75() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-left text-white whitespace-nowrap">No. SP3</p>
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container436() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[371.756px]" data-name="Container">
      <Text75 />
      <Icon59 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container436 />
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-left text-white whitespace-nowrap">Nama Paket Pengadaan</p>
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container437() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[371.756px]" data-name="Container">
      <Text76 />
      <Icon60 />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container437 />
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-left text-white whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container438() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[371.756px]" data-name="Container">
      <Text77 />
      <Icon61 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container438 />
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-left text-white whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[9.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.99375" preserveAspectRatio="none" viewBox="0 0 9.99375 9.99375" width="9.99375">
        <g id="Icon">
          <path d={svgPaths.p44e3580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
          <path d={svgPaths.p1d994900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832812" />
        </g>
      </svg>
    </div>
  );
}

function Container439() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[371.756px]" data-name="Container">
      <Text78 />
      <Icon62 />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container439 />
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-left text-white top-[23.8px] whitespace-nowrap">Aksi</p>
      </div>
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text79 />
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text80 />
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text81 />
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text82 />
      </div>
    </div>
  );
}

function Icon63() {
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

function ActionBtn() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon63 />
      </div>
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_8_6932)" id="Icon">
          <path d={svgPaths.p18462c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26730900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p34efd880} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8_6932">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionBtn1() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon64 />
      </div>
    </div>
  );
}

function Container440() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[13.99px] top-[11.1px] w-[68.025px]" data-name="Container">
      <ActionBtn />
      <ActionBtn1 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container440 />
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text83 />
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text84 />
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text85 />
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text86 />
      </div>
    </div>
  );
}

function Icon65() {
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

function ActionBtn2() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon65 />
      </div>
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_8_6932)" id="Icon">
          <path d={svgPaths.p18462c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26730900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p34efd880} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8_6932">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionBtn3() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon66 />
      </div>
    </div>
  );
}

function Container441() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[13.99px] top-[11.1px] w-[68.025px]" data-name="Container">
      <ActionBtn2 />
      <ActionBtn3 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container441 />
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text87 />
      </div>
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text88 />
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text89 />
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[373.781px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] text-left whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text90 />
      </div>
    </div>
  );
}

function Icon67() {
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
        <Icon67 />
      </div>
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_8_6932)" id="Icon">
          <path d={svgPaths.p18462c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26730900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p34efd880} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8_6932">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActionBtn5() {
  return (
    <div className="h-[21.394px] relative rounded-[5px] shrink-0 w-[29.887px]" data-name="ActionBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon68 />
      </div>
    </div>
  );
}

function Container442() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[13.99px] top-[11.1px] w-[68.025px]" data-name="Container">
      <ActionBtn4 />
      <ActionBtn5 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container442 />
      </div>
    </div>
  );
}

function Container435() {
  return (
    <button className="cursor-pointer grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[194.981px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
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
    </button>
  );
}

function Text91() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Showing 1 to 3 of 3 entries</p>
      </div>
    </div>
  );
}

function Button129() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button130() {
  return (
    <div className="bg-[#252271] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button131() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container444() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button129 />
        <Button130 />
        <Button131 />
      </div>
    </div>
  );
}

function Container443() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[12px] pt-[13.2px] px-[14px] relative size-full">
          <Text91 />
          <Container444 />
        </div>
      </div>
    </div>
  );
}

function ListViewMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start pt-[20px] relative shrink-0 w-[1123px]" data-name="ListView:margin">
      <Container435 />
      <Container443 />
    </div>
  );
}

function Requestion20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container429 />
      <FilterSectionMargin10 />
      <ListViewMargin1 />
    </div>
  );
}

function Logo20() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame102() {
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

function Frame101() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame102 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame104 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow10() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow10 />
        </div>
      </div>
    </div>
  );
}

function NppRow10() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap10() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow10 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row10() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row10 />
    </div>
  );
}

function PbjRow10() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap10() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow10 />
    </a>
  );
}

function ContractRow10() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow10 />
    </div>
  );
}

function ListContractRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow10 />
    </div>
  );
}

function ContractChildren10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap10 />
          <ListContractWrap10 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow10 />
      <ContractChildren10 />
    </div>
  );
}

function JaminanPelaksanaanRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow10 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow10 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow10 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow10 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow50() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap40() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow50 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow51() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap41() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow51 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow52() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap42() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow52 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow53() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap43() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow53 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow54() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren10() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap10 />
        <NppWrap10 />
        <Sp3Wrap10 />
        <PbjWrap10 />
        <ContractWrap10 />
        <JaminanPelaksanaanWrap10 />
        <WarehouseWrap10 />
        <VendorManagementWrap10 />
        <HargaSatuanWrap10 />
        <UplaodImportInklaringWrap40 />
        <UplaodImportInklaringWrap41 />
        <UplaodImportInklaringWrap42 />
        <UplaodImportInklaringWrap43 />
        <UplaodImportInklaringRow54 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame106 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame108() {
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

function Frame107() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame108 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame101 />
      <Frame103 />
      <TopLevelChildren10 />
      <Frame105 />
      <Frame107 />
    </div>
  );
}

function AsideSidebarComponent20() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo20 />
      <Frame100 />
    </div>
  );
}

function Frame109() {
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

function Logo21() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame109 />
    </div>
  );
}

function Svg60() {
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

function Container445() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive10() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg60 />
      <Container445 />
    </div>
  );
}

function Svg61() {
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

function Container447() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg61 />
    </div>
  );
}

function Svg62() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container446() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container447 />
          <Svg62 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container446 />
    </div>
  );
}

function Svg63() {
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

function Container449() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg63 />
    </div>
  );
}

function Container448() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container449 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container448 />
    </div>
  );
}

function Svg64() {
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

function Container450() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg64 />
      <Container450 />
    </div>
  );
}

function Svg65() {
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

function LinkMasterData10() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg65 />
    </div>
  );
}

function Navigation10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive10 />
      <GroupUserRole10 />
      <GroupVerifikasi10 />
      <LinkTemplateDokumen10 />
      <LinkMasterData10 />
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container451() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay10 />
    </div>
  );
}

function UserCard10() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container451 />
    </div>
  );
}

function UserCardMargin10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard10 />
    </div>
  );
}

function AsideSidebarComponent21() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo21 />
      <Navigation10 />
      <UserCardMargin10 />
    </div>
  );
}

function Requestion21() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent21 />
    </div>
  );
}

function SideBar10() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent20 />
      <Requestion21 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion20 />
      <SideBar10 />
    </div>
  );
}

function Contract10() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group11 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252271] text-[16px] whitespace-nowrap">
          <span className="leading-[24px]">{`Contract > `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">Task Approval</span>
        </p>
      </div>
    </div>
  );
}

function Container452() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-[1024px]" data-name="Container">
      <Heading11 />
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

function Container454() {
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

function Container455() {
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

function Container456() {
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

function Container457() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label7 />
        <Dropdown3 />
      </div>
    </div>
  );
}

function Container453() {
  return (
    <div className="h-[129.575px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[__534px_534px] grid-rows-[__57.59px_55.99px] relative size-full">
        <Container454 />
        <Container455 />
        <Container456 />
        <Container457 />
      </div>
    </div>
  );
}

function Icon69() {
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

function Button132() {
  return (
    <div className="bg-[#252271] content-stretch flex gap-[8px] h-[36px] items-center px-[20px] py-[8px] relative rounded-[15px] shrink-0" data-name="Button">
      <Icon69 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Cari</p>
    </div>
  );
}

function Icon70() {
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

function Button133() {
  return (
    <div className="content-stretch flex h-[35px] items-center px-[10.8px] py-[6.8px] relative rounded-[15px] shrink-0 w-[34px]" data-name="Button">
      <div aria-hidden className="absolute border-[#c00] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Icon70 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0 w-[271px]" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start pt-[16px] relative size-full">
        <Button132 />
        <Button133 />
      </div>
    </div>
  );
}

function FilterSection1() {
  return (
    <div className="bg-[#f5f7fd] relative rounded-[15px] shrink-0 w-full" data-name="FilterSection">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container453 />
        <ButtonMargin1 />
      </div>
    </div>
  );
}

function FilterSectionMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start pt-[16px] relative shrink-0 w-[1123px]" data-name="FilterSection:margin">
      <FilterSection1 />
    </div>
  );
}

function Text92() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">No. SP3</p>
      </div>
    </div>
  );
}

function Icon71() {
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

function Container460() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[227.175px]" data-name="Container">
      <Text92 />
      <Icon71 />
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container460 />
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nama Paket Pengadaan</p>
      </div>
    </div>
  );
}

function Icon72() {
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

function Container461() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[227.175px]" data-name="Container">
      <Text93 />
      <Icon72 />
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container461 />
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Nilai Kontrak</p>
      </div>
    </div>
  );
}

function Icon73() {
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

function Container462() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[227.175px]" data-name="Container">
      <Text94 />
      <Icon73 />
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container462 />
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Departement</p>
      </div>
    </div>
  );
}

function Icon74() {
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

function Container463() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[227.175px]" data-name="Container">
      <Text95 />
      <Icon74 />
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container463 />
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">PBJ</p>
      </div>
    </div>
  );
}

function Icon75() {
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

function Container464() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[227.175px]" data-name="Container">
      <Text96 />
      <Icon75 />
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container464 />
      </div>
    </div>
  );
}

function Text97() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">Performance Bond</p>
      </div>
    </div>
  );
}

function Icon76() {
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

function Container465() {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[15px] top-[24.49px] w-[227.175px]" data-name="Container">
      <Text97 />
      <Icon76 />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container465 />
      </div>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Header Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[15px] not-italic text-[10.5px] text-white top-[23.8px] whitespace-nowrap">Status</p>
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

function TableCell15() {
  return (
    <div className="bg-[#252271] justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text98() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell16() {
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
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell17() {
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
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text100 />
      </div>
    </div>
  );
}

function Text101() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text101 />
      </div>
    </div>
  );
}

function Text102() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell20() {
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
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text103 />
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

function TableCell22() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge />
      </div>
    </div>
  );
}

function Icon77() {
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
        <Icon77 />
      </div>
    </div>
  );
}

function Container466() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn6 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container466 />
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#252271] content-stretch flex h-[17.494px] items-center left-[calc(50%+0.3px)] px-[7px] py-[1.75px] rounded-[8px] top-[calc(50%+0.85px)]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">➜ Proses Contract</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid h-[48.75px] left-[-0.09px] top-0 w-[113px]" data-name="Table Cell">
      <StatusBadge1 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TableCell25 />
      </div>
    </div>
  );
}

function Text104() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell26() {
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
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text105 />
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text106 />
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell29() {
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
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell30() {
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
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text109 />
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

function TableCell32() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge2 />
      </div>
    </div>
  );
}

function Icon78() {
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
        <Icon78 />
      </div>
    </div>
  );
}

function Container467() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn7 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container467 />
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#252271] content-stretch flex h-[17.494px] items-center left-[calc(50%+0.21px)] px-[7px] py-[1.75px] rounded-[8px] top-[calc(50%+0.51px)]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">➜ Proses Contract</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-[113px]" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge3 />
      </div>
    </div>
  );
}

function Text110() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text110 />
      </div>
    </div>
  );
}

function Text111() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text111 />
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text112 />
      </div>
    </div>
  );
}

function Text113() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text113 />
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text114 />
      </div>
    </div>
  );
}

function Text115() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.006px] items-start left-[13.99px] overflow-clip top-[14.79px] w-[229.2px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#364153] text-[10.5px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text115 />
      </div>
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="absolute bg-[#f5f3ff] content-stretch flex h-[17.494px] items-center left-[13.99px] px-[7px] py-[1.75px] rounded-[3.5px] top-[14.34px]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#6d28d9] text-[10.5px] whitespace-nowrap">Contract Release</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge4 />
      </div>
    </div>
  );
}

function Icon79() {
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
        <Icon79 />
      </div>
    </div>
  );
}

function Container468() {
  return (
    <div className="absolute content-stretch flex items-center left-[13.99px] top-[11.1px] w-[34.012px]" data-name="Container">
      <ActionBtn8 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container468 />
      </div>
    </div>
  );
}

function StatusBadge5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#252271] content-stretch flex h-[17.494px] items-center left-[calc(50%+0.21px)] px-[7px] py-[1.75px] rounded-[8px] top-[calc(50%-0.24px)]" data-name="StatusBadge">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">➜ Proses Contract</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-[113px]" data-name="Table Cell">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b-[1.2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <StatusBadge5 />
      </div>
    </div>
  );
}

function Container459() {
  return (
    <div className="bg-white h-[194.981px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(9,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] overflow-clip relative rounded-[inherit] size-full">
        <HeaderCell5 />
        <HeaderCell6 />
        <HeaderCell7 />
        <HeaderCell8 />
        <HeaderCell9 />
        <HeaderCell10 />
        <HeaderCell11 />
        <HeaderCell12 />
        <TableCell15 />
        <TableCell16 />
        <TableCell17 />
        <TableCell18 />
        <TableCell19 />
        <TableCell20 />
        <TableCell21 />
        <TableCell22 />
        <TableCell23 />
        <TableCell24 />
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
        <TableCell39 />
        <TableCell40 />
        <TableCell41 />
        <TableCell42 />
        <TableCell43 />
      </div>
    </div>
  );
}

function Text116() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Showing 1 to 3 of 3 entries</p>
      </div>
    </div>
  );
}

function Button134() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Previous</p>
      </div>
    </div>
  );
}

function Button135() {
  return (
    <div className="bg-[#252271] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#252271] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button136() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#d1d5dc] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container470() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button134 />
        <Button135 />
        <Button136 />
      </div>
    </div>
  );
}

function Container469() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t-[1.2px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] pt-[13.2px] px-[14px] relative size-full">
          <Text116 />
          <Container470 />
        </div>
      </div>
    </div>
  );
}

function Container458() {
  return (
    <div className="bg-white h-[250px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.2px] relative rounded-[inherit] size-full">
        <Container459 />
        <Container469 />
      </div>
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7px]" />
    </div>
  );
}

function ListViewMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start pt-[20px] relative shrink-0 w-[1123px]" data-name="ListView:margin">
      <Container458 />
    </div>
  );
}

function Requestion22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[251px] overflow-clip pl-[36px] pr-[67px] py-[58px] top-[2px] w-[1189px]" data-name="Requestion">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#252271] text-[36px] w-[min-content]">Verification</p>
      <Container452 />
      <FilterSectionMargin11 />
      <ListViewMargin2 />
    </div>
  );
}

function Logo22() {
  return (
    <div className="h-[69px] relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame112() {
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

function Frame111() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame112 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pengajuan Dana</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="PENGADAAN">
            <path d={svgPaths.p2b4e9500} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p460600} fill="var(--fill-0, #CC0000)" />
            <path d={svgPaths.p347b8740} fill="var(--fill-0, #CC0000)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame114 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c00] text-[12px] whitespace-nowrap">Pengadaan</p>
    </div>
  );
}

function TimelineRow11() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Timeline__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">RUP</p>
    </div>
  );
}

function TimelineWrap11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Timeline__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <TimelineRow11 />
        </div>
      </div>
    </div>
  );
}

function NppRow11() {
  return (
    <div className="content-stretch flex h-[21px] items-center overflow-clip relative shrink-0 w-full" data-name="NPP__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">NPP</p>
    </div>
  );
}

function NppWrap11() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="NPP__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <NppRow11 />
        </div>
      </div>
    </div>
  );
}

function Sp3Row11() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="SP3__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">SP3</p>
        </div>
      </div>
    </div>
  );
}

function Sp3Wrap11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="SP3__wrap">
      <Sp3Row11 />
    </div>
  );
}

function PbjRow11() {
  return (
    <div className="h-[21px] relative rounded-[8px] shrink-0 w-full" data-name="PBJ__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-left whitespace-nowrap">PBJ</p>
        </div>
      </div>
    </div>
  );
}

function PbjWrap11() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="PBJ__wrap">
      <PbjRow11 />
    </a>
  );
}

function ContractRow11() {
  return (
    <div className="h-[21px] relative rounded-[7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(241.044deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Contract__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Contract</p>
        </div>
      </div>
    </div>
  );
}

function TaskApprovalContractRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Task Approval Contract</p>
    </div>
  );
}

function TaskApprovalContractWrap11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Task Approval Contract__wrap">
      <TaskApprovalContractRow11 />
    </div>
  );
}

function ListContractRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="List Contract__row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">List Contract</p>
    </div>
  );
}

function ListContractWrap11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="List Contract__wrap">
      <ListContractRow11 />
    </div>
  );
}

function ContractChildren11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contract__children">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start pl-[16px] relative size-full">
          <TaskApprovalContractWrap11 />
          <ListContractWrap11 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContractWrap11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Contract__wrap">
      <ContractRow11 />
      <ContractChildren11 />
    </div>
  );
}

function JaminanPelaksanaanRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Jaminan Pelaksanaan</p>
    </div>
  );
}

function JaminanPelaksanaanWrap11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Jaminan Pelaksanaan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <JaminanPelaksanaanRow11 />
        </div>
      </div>
    </div>
  );
}

function WarehouseRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Warehouse__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Warehouse</p>
    </div>
  );
}

function WarehouseWrap11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Warehouse__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <WarehouseRow11 />
        </div>
      </div>
    </div>
  );
}

function VendorManagementRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Vendor Management__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Vendor Management</p>
    </div>
  );
}

function VendorManagementWrap11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Vendor Management__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <VendorManagementRow11 />
        </div>
      </div>
    </div>
  );
}

function HargaSatuanRow11() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Harga Satuan__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Harga Satuan</p>
    </div>
  );
}

function HargaSatuanWrap11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Harga Satuan__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <HargaSatuanRow11 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow55() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Adendum Kontrak</p>
    </div>
  );
}

function UplaodImportInklaringWrap44() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow55 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow56() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Evaluasi Vendor</p>
    </div>
  );
}

function UplaodImportInklaringWrap45() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow56 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow57() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">TKDN</p>
    </div>
  );
}

function UplaodImportInklaringWrap46() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow57 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow58() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring KPI</p>
    </div>
  );
}

function UplaodImportInklaringWrap47() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__wrap">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <UplaodImportInklaringRow58 />
        </div>
      </div>
    </div>
  );
}

function UplaodImportInklaringRow59() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Uplaod Import Inklaring__row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Monitoring MPPL</p>
        </div>
      </div>
    </div>
  );
}

function TopLevelChildren11() {
  return (
    <div className="justify-self-center relative self-stretch shrink-0 w-[169px]" data-name="top-level__children">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip pl-[12px] relative rounded-[inherit] size-full">
        <TimelineWrap11 />
        <NppWrap11 />
        <Sp3Wrap11 />
        <PbjWrap11 />
        <ContractWrap11 />
        <JaminanPelaksanaanWrap11 />
        <WarehouseWrap11 />
        <VendorManagementWrap11 />
        <HargaSatuanWrap11 />
        <UplaodImportInklaringWrap44 />
        <UplaodImportInklaringWrap45 />
        <UplaodImportInklaringWrap46 />
        <UplaodImportInklaringWrap47 />
        <UplaodImportInklaringRow59 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 21 15" width="21">
        <g id="Frame 86">
          <g id="Vector">
            <path d={svgPaths.p38e12d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33f68400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p117c1e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8bd07f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p11dc2c80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <a className="content-stretch cursor-pointer drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame116 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">Pengujian</p>
    </a>
  );
}

function Frame118() {
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

function Frame117() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)] flex gap-[10px] items-center justify-self-center px-[14px] py-[6px] relative rounded-[8px] self-start shrink-0 w-[179px]">
      <Frame118 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Pembayaran</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="gap-x-[10px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_____27px_27px_460px_27px_27px] h-[571px] relative shrink-0 w-[237px]">
      <Frame111 />
      <Frame113 />
      <TopLevelChildren11 />
      <Frame115 />
      <Frame117 />
    </div>
  );
}

function AsideSidebarComponent22() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[27px] overflow-clip rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] top-0 w-[224px]" style={{ backgroundImage: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }} data-name="Aside - Sidebar Component">
      <Logo22 />
      <Frame110 />
    </div>
  );
}

function Frame119() {
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

function Logo23() {
  return (
    <div className="absolute content-stretch flex h-[125px] items-center left-0 px-[12px] right-0 top-0" data-name="Logo">
      <Frame119 />
    </div>
  );
}

function Svg66() {
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

function Container471() {
  return <div className="h-[18.75px] relative shrink-0 w-[65.94px]" data-name="Container" />;
}

function LinkDashboardActive11() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] flex from-[#f44] gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#ff7272] w-[36px]" data-name="Link - Dashboard (Active)">
      <Svg66 />
      <Container471 />
    </div>
  );
}

function Svg67() {
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

function Container473() {
  return (
    <div className="content-stretch flex items-center mr-[-12.098px] relative shrink-0" data-name="Container">
      <Svg67 />
    </div>
  );
}

function Svg68() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[12.098px]">
      <div className="flex-none rotate-[-89.53deg]">
        <div className="relative size-[12px]" data-name="SVG" />
      </div>
    </div>
  );
}

function Container472() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full">
          <Container473 />
          <Svg68 />
        </div>
      </div>
    </div>
  );
}

function GroupUserRole11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: User & Role">
      <Container472 />
    </div>
  );
}

function Svg69() {
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

function Container475() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Svg69 />
    </div>
  );
}

function Container474() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative size-full">
          <Container475 />
        </div>
      </div>
    </div>
  );
}

function GroupVerifikasi11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[36px]" data-name="Group: Verifikasi">
      <Container474 />
    </div>
  );
}

function Svg70() {
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

function Container476() {
  return <div className="h-[18.75px] relative shrink-0 w-[114.2px]" data-name="Container" />;
}

function LinkTemplateDokumen11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Template Dokumen">
      <Svg70 />
      <Container476 />
    </div>
  );
}

function Svg71() {
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

function LinkMasterData11() {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Link - Master Data">
      <Svg71 />
    </div>
  );
}

function Navigation11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] inset-[125px_0_76px_0] items-start overflow-auto px-[8px] py-[4px]" data-name="Navigation">
      <LinkDashboardActive11 />
      <GroupUserRole11 />
      <GroupVerifikasi11 />
      <LinkTemplateDokumen11 />
      <LinkMasterData11 />
    </div>
  );
}

function Overlay11() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center pb-[7.5px] pt-[6.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Container477() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="Container">
      <Overlay11 />
    </div>
  );
}

function UserCard11() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex flex-col h-[46px] items-start pb-[10px] pt-[7px] px-[3px] relative rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[39px]" data-name="User Card">
      <Container477 />
    </div>
  );
}

function UserCardMargin11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[76px] items-start left-0 pb-[8px] pl-[6px] pr-[8px] right-0 top-[704px]" data-name="User Card:margin">
      <UserCard11 />
    </div>
  );
}

function AsideSidebarComponent23() {
  return (
    <div className="bg-gradient-to-b from-[#e6251c] h-[786px] overflow-clip relative rounded-br-[24px] rounded-tr-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] shrink-0 to-[#c20f06] w-[51px]" data-name="Aside - Sidebar Component">
      <Logo23 />
      <Navigation11 />
      <UserCardMargin11 />
    </div>
  );
}

function Requestion23() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-[-5px] w-[51px]" data-name="Requestion">
      <AsideSidebarComponent23 />
    </div>
  );
}

function SideBar11() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[251px]" data-name="side bar">
      <AsideSidebarComponent22 />
      <Requestion23 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-0 top-0">
      <Requestion22 />
      <SideBar11 />
    </div>
  );
}

function Contract11() {
  return (
    <div className="absolute bg-white h-[780px] left-0 overflow-clip top-0 w-[1440px]" data-name="Contract">
      <Group12 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="contents relative size-full">
      <Contract />
      <Contract1 />
      <Contract2 />
      <Contract3 />
      <Contract4 />
      <Contract5 />
      <Contract6 />
      <Contract7 />
      <Contract8 />
      <Contract9 />
      <Contract10 />
      <Contract11 />
    </div>
  );
}