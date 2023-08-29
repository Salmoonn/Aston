import "./TabBar.css";

interface TabBarProps {
  props: { title: string; amt: number }[];
  setTabBar: React.Dispatch<React.SetStateAction<number>>;
  active?: number;
}

const TabBar = ({ props, setTabBar, active }: TabBarProps): JSX.Element => {
  return (
    <div className="tab-bar">
      <div className="tab-bar-body wrapper">
        {props.map((elem, index) => (
          <button
            key={index}
            className="tab-bar-button"
            onClick={(): void => setTabBar(index)}
            data-active={active === index}
          >
            <div className="tab-bar-text work-sans">{elem.title}</div>
            <div className="tab-bar-num space-mono not-mobile">{elem.amt}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
