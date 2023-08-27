/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList } from "react";
import { useEffect, useRef } from "react";

const useScroll = (dependencies: DependencyList) => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(
      ()=>{
          if (appRef && appRef.current){
              appRef.current.scrollIntoView();
          }
      },
      dependencies,
  );

  return appRef;
}

export default useScroll;