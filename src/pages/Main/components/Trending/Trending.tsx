import "./Trending.css";

import Collection from "../../../../components/Collection";
import { collectionAPI } from "../../../../store/api/slice/collection";

export const Trending = (): JSX.Element => {
  const { data: collections } = collectionAPI.useGetTopCollectionsQuery();

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
          ? collections
              .slice(0, 3)
              .map((e, i) => <Collection key={i} collection={e} />)
          : null}
      </div>
    </div>
  );
};
