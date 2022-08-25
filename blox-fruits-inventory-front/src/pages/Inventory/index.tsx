import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Fruit } from "../../types/types";
import { Accessories } from "./Tabs/Accessories";
import { Fruits } from "./Tabs/Fruits";
import { Swords } from "./Tabs/Swords";

export function Inventory() {
  const [whichTabIsSelected, setWhichTabIsSelected] = useState("fruits");
  const { data, isFetching } = useQuery<Fruit[]>(
    "fruits",
    async () => {
      const response = await axios.get("http://localhost:3003/api/allFruits");
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  if (isFetching && !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <header className="text-center mb-4 flex flex-col items-center gap-4">
        <strong className="text-3xl">Inventory</strong>
        <div className="flex gap-4">
          <p
            onClick={() => {
              setWhichTabIsSelected("fruits");
            }}
            className={`bg-gradient-to-b from-yellow-100 via-yellow-500 border-2 border-black px-4 w-32 cursor-pointer transition-all font-bold ${
              whichTabIsSelected == "fruits" && "scale-y-125 scale-x-110"
            }`}
          >
            Fruits
          </p>
          <p
            onClick={() => {
              setWhichTabIsSelected("swords");
            }}
            className={`bg-gradient-to-b from-pink-100 via-pink-500 to-pink-300 border-2 border-black px-4 w-32 cursor-pointer transition-all font-bold ${
              whichTabIsSelected == "swords" && "scale-y-125 scale-x-110"
            }`}
          >
            Swords
          </p>
          <p
            onClick={() => {
              setWhichTabIsSelected("accessories");
            }}
            className={`bg-gradient-to-b from-green-100 via-green-500 to-green-300 border-2 border-black  px-4 w-32 cursor-pointer transition-all font-bold ${
              whichTabIsSelected == "accessories" && "scale-y-125 scale-x-110"
            }`}
          >
            Accessories
          </p>
        </div>
      </header>
      {whichTabIsSelected == "fruits" ? (
        <Fruits fruit={data} />
      ) : whichTabIsSelected == "swords" ? (
        <Swords />
      ) : (
        <Accessories />
      )}
    </div>
  );
}
