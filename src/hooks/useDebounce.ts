import { debounce } from "lodash";
import { useEffect, useMemo } from "react";
import useLatest from "use-latest";

export const useDebounce = (cb: Function, ms: number) => {
  const lastCb = useLatest(cb);

  const debouncedFn = useMemo(
    () => debounce((...args) => lastCb.current(...args), ms),
    [ms, lastCb]
  );

  useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);
  return debouncedFn;
};
