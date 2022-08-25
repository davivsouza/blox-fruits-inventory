import { Fruit } from "../../../types/types";

type FruitTabProps = {
  fruit?: Fruit[];
};

export function Fruits({ fruit }: FruitTabProps) {
  return (
    <main className="text-center flex flex-col items-center gap-5">
      <div className="grid grid-cols-5 w-full  border border-black rounded p-5 gap-2 bg-zinc-900">
        {fruit?.map((fruitData) => (
          <div key={fruitData._id} className=" w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-400 border border-black rounded p-6 flex flex-col overflow-hidden relative">
            <div className="text-sm w-full text-center absolute top-0 bg-green-500 right-[50%] translate-x-[50%]">
              {fruitData.name}
            </div>
            <div className="h-full flex items-center justify-center">
              <img src={fruitData.imageURL} alt={fruitData.name} />
            </div>
            <div className=" text-sm w-full text-center absolute bottom-0 bg-pink-500 right-[50%] translate-x-[50%]">
              {fruitData.price}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
