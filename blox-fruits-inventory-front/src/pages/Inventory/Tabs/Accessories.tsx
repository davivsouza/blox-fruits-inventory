import axios from "axios";
import { useQuery } from "react-query";
import { Fruit } from "../../../types/types";

export function Accessories() {
  const { data, isFetching } = useQuery<Fruit[]>(
    "accessories",
    async () => {
      const response = await axios.get(
        "http://localhost:3003/api/allAccessories"
      );
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
    <main className="text-center flex flex-col items-center gap-5">
      <div className="m-auto  grid grid-cols-5 w-full  border border-black rounded p-5 gap-2 bg-zinc-900">
        {data?.map((accessorie) => (
          <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-400 border border-black rounded p-6 flex flex-col overflow-hidden relative ">
            <div
              key={accessorie._id}
              className="text-sm w-full text-center absolute top-0 bg-yellow-500 right-[50%] translate-x-[50%]"
            >
              {accessorie.name}
            </div>
            <div className="h-full flex items-center justify-center">
              <img src={accessorie.imageURL} alt={accessorie.name} />
            </div>
            <div className="w-full  text-center absolute bottom-0 bg-pink-500 right-[50%] translate-x-[50%] text-sm">
              {accessorie.price}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
