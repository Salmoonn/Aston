import { debounce, DebouncedFunc } from "lodash";
import { useEffect, useMemo } from "react";
import useLatest from "use-latest";

export const useDebounce = (
  cb: Function,
  ms: number
): DebouncedFunc<(...args: any) => any> => {
  const lastCb = useLatest(cb);

  const debouncedFn = useMemo(
    () => debounce((...args) => lastCb.current(...args), ms),
    [ms, lastCb]
  );

  useEffect(() => (): void => debouncedFn.cancel(), [debouncedFn]);
  return debouncedFn;
};
