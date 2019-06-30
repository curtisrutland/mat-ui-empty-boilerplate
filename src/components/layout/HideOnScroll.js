import React, { useState } from "react";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

export default function HideOnScroll({ children, target }) {
  const trigger = useScrollTrigger({ target });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function useScrollTarget() {
  const [scrollTarget, setScrollTarget] = useState(undefined);

  return {
    scrollTarget,
    scrollTargetRef: ref => setScrollTarget(ref)
  };
}