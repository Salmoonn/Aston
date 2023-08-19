import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { getTopCreators } from "../../../../store/topCollections/actionCreatots";
import Collection from "./components/Collection";
import CollectionSceleton from "./components/CollectionSceleton";
import "./Trending.css";

const Trending = () => {
  const dispatch = useAppDispatch();

  const arr = Array(3)
    .fill("")
    .map((e, i) => i);

  useEffect(() => {
    dispatch(getTopCreators());
  }, [dispatch]);

  const collections = useSelector(
    (state: RootState) => state.topCollections.collections
  );

  return (
    <div className="trending wrapper column">
      <div className="trending-head column">
        <h3 className="work-sans">Trending Collection</h3>
        <div className="body-work">
          Chechout our weekly update trending collection.
        </div>
      </div>
      <div className="trending-cards">
        {collections
          ? arr.map((e) => <Collection key={e} number={e} />)
          : arr.map((e) => <CollectionSceleton key={e} id={e} />)}
      </div>
    </div>
  );
};

export default Trending;
