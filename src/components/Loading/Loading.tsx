import { useIsLoading } from "../../hooks/useGetIsLoading";
import { AnimLoading } from "../AnimLoading/AnimLoading";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Loading = ({ children }: Props): JSX.Element => {
  const isLoading = useIsLoading();

  if (isLoading) return <AnimLoading />;

  return <>{children}</>;
};
