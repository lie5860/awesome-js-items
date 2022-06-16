import {useEffect, useState} from "react";
import PortalFrame from "./PortalFrame";

export default function Demo() {
  const [state, setState] = useState(false);
  const [times, setTimes] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTimes((t) => t + 1);
    }, 500);
  }, []);
  return (
    <div style={{height: 250}}>
      <span
        onMouseOver={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        鼠标放在这上面
      </span>
      <div/>
      {state && <PortalFrame>{times}</PortalFrame>}
    </div>
  );
}
