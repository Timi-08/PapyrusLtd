import React, { useEffect, useState, useRef } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const hasCounted = useRef(false);

  useEffect(() => {
    if (!hasCounted.current) {
      let visits = localStorage.getItem("visits");
      visits = visits ? parseInt(visits, 10) : 0;
      const newVisit = visits + 1;
      localStorage.setItem("visits", newVisit);
      setCount(newVisit);
      hasCounted.current = true;
    }
  }, []);

  return <div className="visitor-counter">Visitors: {count}</div>;
};

export default VisitorCounter;
