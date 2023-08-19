import "./CollectionSceleton.css";

const CollectionSceleton = ({ id }: { id: number }) => {
  let visible = "";
  id === 1 && (visible = "not-mobile");
  id === 2 && (visible = "only-desktop");

  const color = {
    "--i": "#333",
    "--j": "#393939",
  };

  return (
    <div className={"collection sceleton column " + visible}>
      <div className="collection-photos">
        <div className="collection-photo-main" data-loading={1} />
        <div className="collection-frame">
          <div className="collection-photo-other" data-loading={1} />
          <div className="collection-photo-other" data-loading={1} />
          <div className="collection-photo-other" data-loading={1} />
        </div>
      </div>
      <div className="collection-info column">
        <div className="collection-name" data-loading={1} />
        <div className="collection-artist-card">
          <div className="collection-artist-avatar" data-loading={1} />
          <div
            className="base-body-work collection-artist-name"
            data-loading={1}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionSceleton;
