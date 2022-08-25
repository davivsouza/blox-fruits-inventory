import { Link } from "react-router-dom";

export function Menu() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Link
        to="/inventory"
        className="w-40 py-2 px-5 text-center text-black font-bold border-[4px] border-black  bg-gradient-to-b from-yellow-100 via-yellow-500 to-yellow-300 hover:scale-110 transition-all"
      >
        Inventory
      </Link>

      <Link
        to="/inventory"
        className="w-40 py-2 px-5 text-center text-black font-bold border-[4px] border-black bg-gradient-to-b from-pink-100 via-pink-500 to-pink-300  hover:scale-110 transition-all"
      >
        Races
      </Link>
      <Link
        to="/inventory"
        className="w-40 py-2 px-5 text-center text-black font-bold border-[4px] border-black bg-gradient-to-b from-green-100 via-green-500 to-green-300 hover:scale-110 transition-all"
      >
        Islands
      </Link>
    </main>
  );
}
