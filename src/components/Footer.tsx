export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-12 bg-[#242424] text-center text-slate-300 font-semibold">
      Copyright © {currentYear} Storeyfy All rights reserve.
    </footer>
  );
}
