import { Button } from "../../../../../components/Button";

export const getButton = (
  visible: "not-mobile" | "only-mobile",
  src: string,
): JSX.Element => {
  return (
    <Button
      src={src}
      svg="arrowRight"
      text="Go To Artist Page"
      visible={visible}
    />
  );
};
