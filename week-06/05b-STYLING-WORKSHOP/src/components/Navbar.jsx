export function Navbar() {
  return (
    <nav className="flex justify-evenly flex-row-reverse">
      <a href="#" className="bg-amber-700 text-red-500 text-[3rem]">
        UN
      </a>
      <a href="#" className="bg-green-700 text-white text-[5rem]">
        DEUX
      </a>
      <p className="bg-blue-700 text-black text-[7rem]">TROIS</p>
    </nav>
  );
}

export default Navbar;
