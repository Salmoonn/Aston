import "./History.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { historyAPI } from "../../store/api/slice/history";
import { removeHistory } from "../../store/slices/authSlice";
import { useGetHistory } from "../../hooks/useGetHistory";

export const History = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const history = useGetHistory();

  const [deleteHistory, { isLoading }] = historyAPI.useDeleteHistoryMutation();

  const handleClickItem = (elem: string): void => {
    navigate(`/marketplace?search=${elem}`);
  };

  const handleClickClear = (): void => {
    if (!isLoading) {
      deleteHistory();
      dispatch(removeHistory());
    }
  };

  return (
    <div className="history wrapper">
      <div className="history-headline">
        <h1 className="work-sans">History</h1>
        <button
          className="history-button work-sans smart"
          onClick={handleClickClear}
          style={isLoading ? { cursor: "not-allowed" } : {}}
        >
          clear history
        </button>
      </div>
      <ul className="history-body">
        {history
          ? history.map((elem, index) => (
              <li
                key={index}
                onClick={(): void => handleClickItem(elem)}
                className="history-body-item space-mono"
              >
                {elem}
              </li>
            ))
          : "No history"}
      </ul>
    </div>
  );
};
