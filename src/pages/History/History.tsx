import "./History.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

const History = (): JSX.Element => {
  const navigate = useNavigate();

  const history = useSelector(
    (state: RootState) => state.auth.profileData.profile?.history
  );

  const handleClick = (e: string): void => {
    navigate("/marketplace", { state: { search: e } });
  };

  return (
    <div className="history wrapper">
      <div className="history-headline work-sans">History</div>
      <div className="history-body">
        {history
          ? history.map((e) => (
              <div
                onClick={(): void => handleClick(e)}
                className="history-body-item space-mono"
              >
                {e}
              </div>
            ))
          : "No history"}
      </div>
    </div>
  );
};

export default History;
