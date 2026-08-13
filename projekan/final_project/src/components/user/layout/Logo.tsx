import logoImg from "@/imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";


export function Logo({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className={`relative flex h-[96px] w-full shrink-0 items-center justify-center overflow-hidden border-b border-white/15 ${collapsed ? "px-2" : "px-5"}`}>
      <img
        src={logoImg}
        alt="Logo KAI Commuter"
        className={`block w-auto object-contain transition-all duration-300 ${collapsed ? "h-[42px] max-w-[48px]" : "h-[76px] max-w-[190px]"}`}
      />
    </div>
  );
}
