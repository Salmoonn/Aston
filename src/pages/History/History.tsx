import "./History.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

const History = (): JSX.Element => {
  const navigate = useNavigate();

  const history = useSelector(
    (state: RootState) => state.auth.profile?.history
  );

  const handleClick = (e: string): void => {
    navigate("/marketplace", { state: { search: e } });
  };

  return (
    <div className="history wrapper">
      <h1 className="history-headline work-sans">History</h1>
      <ul className="history-body">
        {history
          ? history.map((e, i) => (
              <li
                key={i}
                onClick={(): void => handleClick(e)}
                className="history-body-item space-mono"
              >
                {e}
              </li>
            ))
          : "No history"}
      </ul>
    </div>
  );
};

export default History;
