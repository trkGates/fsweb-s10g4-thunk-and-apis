import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/catFactSlice";

function FavItem() {
  const favs = useSelector((state) => state.catFact.favs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const newList = favs.filter((_, i) => i !== id);
    dispatch(addFavorite(newList));
  };
  console.log("favs", favs);

  return (
    <div className="flex flex-col gap-3">
      {favs.length > 0 ? (
        favs.map((item, index) => (
          <div
            key={index} // Added key prop to fix the missing key warning
            className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all"
          >
            <div className="flex-1 pr-4">{item}</div>
            <button
              className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
              onClick={() => handleDelete(index)} // Pass the index instead of id
            >
              Çıkar
            </button>
          </div>
        ))
      ) : (
        <div className="bg-white p-6 text-center shadow-md">
          Henüz bir favoriniz yok
        </div>
      )}
    </div>
  );
}

export default FavItem;
