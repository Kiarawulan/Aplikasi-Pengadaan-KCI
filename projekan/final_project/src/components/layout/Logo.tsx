import logoImg from "../../imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

export function Logo({ collapsed }: { collapsed: boolean }) {
  return (
    <div className={`flex items-center h-[72px] shrink-0 px-3 ${collapsed ? "justify-center" : "justify-start"}`}>
      <img
        src={logoImg}
        alt="KCI Logo"
        className={`object-contain transition-all duration-200 ${collapsed ? "h-[36px] w-[36px]" : "h-[54px] w-auto"}`}
      />
    </div>
  );
}
