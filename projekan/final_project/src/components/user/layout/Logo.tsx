import logoImg from "@/imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";


export function Logo({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gpx-2 py-2 border-b border-white/15">
      <img src={logoImg} alt="KCI Logo" className="h-25 w-auto object-contain shrink-0" />
  
    </div>
  );
}
