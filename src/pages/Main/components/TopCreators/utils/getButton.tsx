import { Button } from "../../../../../components/Button";

export const getButton = (
  visible: "not-mobile" | "only-mobile",
): JSX.Element => {
  return (
    <Button
      src="topcreators"
      svg="rocketLaunch"
      text="View Rankings"
      visible={visible}
    />
  );
};
