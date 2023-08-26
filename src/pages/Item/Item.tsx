import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store";
import { loadingItem } from "../../store/item/itemAction";
import { itemToInitialState } from "../../store/item/itemReducer";
import { loadingProfile } from "../../store/profile/profileAction";
import { profileToInitialState } from "../../store/profile/profileReducer";
import "./Item.css";

const Item = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const item = useSelector((state: RootState) => state.item);

  useEffect((): any => {
    if (id) dispatch(loadingItem(id));
    return () => {
      dispatch(itemToInitialState());
      dispatch(profileToInitialState());
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (item.data?.creator) dispatch(loadingProfile(item.data?.creator));
  }, [item.data, dispatch]);

  if (item.isLoading) {
    return <>Loading</>;
  }

  if (!item.data && !item.isLoading) {
    return <div>Not found</div>;
  }

  return <>{id}</>;
};

export default Item;
