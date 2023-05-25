import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Item from "./components/Item";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavorite, fetchCatFact } from "./store/catFactSlice";
import { useSelector } from "react-redux";
import FavItem from "./components/FavItem";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatFact());
  }, [dispatch]);

  const favs = useSelector((state) => state.catFact.favs);
  const catFact = useSelector((state) => state.catFact.fact);

  return (
    <div className="wrapper max-w-xl mx-auto px-4">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Rastgele
        </NavLink>
        <NavLink
          to="/favs"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Favoriler
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/">
          <Item />

          <div className="flex gap-3 justify-end py-3">
            <button
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              onClick={() => dispatch(fetchCatFact())}
            >
              Başka bir tane
            </button>
            <button
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              onClick={() => {
                dispatch(addFavorite([...favs, catFact]));
              }}
            >
              Favorilere ekle
            </button>
          </div>
        </Route>

        <Route path="/favs">
          <FavItem />
        </Route>
      </Switch>
    </div>
  );
}
