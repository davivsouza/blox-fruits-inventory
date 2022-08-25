import axios from "axios";
import { useQuery } from "react-query";
import { Fruit } from "../../../types/types";

export function Swords(){
  const { data, isFetching } = useQuery<Fruit[]>(
    "swords",
    async () => {
      const response = await axios.get("http://localhost:3003/api/allSwords");
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
      <div className="m-auto w-full grid grid-cols-5  border border-black rounded p-5 gap-2 bg-zinc-900">
        {data?.map(sword => (
          <div key={sword._id} className="text-sm w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-400 border border-black rounded  flex flex-col overflow-hidden relative">
          <div className="w-full text-center absolute top-0 bg-blue-400 right-[50%] translate-x-[50%]">
            {sword.name}
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <img src={sword.imageURL} alt={sword.name} className="w-full h-full"/>
          </div>
          
        </div>
        ))}
      </div>
    </main>
  )
}