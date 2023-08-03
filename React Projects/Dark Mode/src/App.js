import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => localStorage.getItem("theme") ?? "light-theme";

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = function () {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => (
          <Article key={item.id} {...item}></Article>
        ))}
      </section>
    </main>
  );
}

export default App;
