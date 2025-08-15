import { useEffect, useState } from "react";

function NavBar() {
  const letters = ["N", "O", "T", "E", "S"];
  const colors = [
    "#a1e63c",
    "#e63c9e",
    "#3ce6e4",
    "#a33ce6",
    "#e6b53c",
    "#3ce65c",
    "#5c3ce6",
  ];

  const [shift, setShift] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShift((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-[1] flex bg-dynamic justify-center items-center mr-auto">
      <h1 className="text-8xl font-extrabold font-gumball tracking-widest">
        {letters.map((char, i) => {
          const colorIndex = (i + shift) % colors.length;
          return (
            <span key={i} style={{ color: colors[colorIndex] }}>
              {char}
            </span>
          );
        })}
      </h1>
    </div>
  );
}

export default NavBar;
