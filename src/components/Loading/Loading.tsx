import { useIsLoading } from "../../hooks/useGetIsLoading";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Loading = ({ children }: Props): JSX.Element => {
  const isLoading = useIsLoading();

  if (isLoading) return <h3>Loading</h3>;

  return <>{children}</>;
};
