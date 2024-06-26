export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#242424] text-center font-semibold text-slate-300 customSm:h-40 customSm:p-4 lg:h-auto lg:p-12">
      Copyright © {currentYear} Storeyfy All rights reserve.
    </footer>
  );
}
