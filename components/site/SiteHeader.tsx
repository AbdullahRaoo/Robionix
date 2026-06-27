import HeaderInner from "./HeaderInner";

export default function SiteHeader() {
  return (
    <header className="cine-header sticky top-0 z-50" style={{ transform: "none", opacity: 1 }}>
      <HeaderInner />
    </header>
  );
}
