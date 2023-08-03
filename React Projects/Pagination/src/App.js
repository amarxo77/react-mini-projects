import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const handelPage = (index) => {
    setPage(index);
  };

  function prevPage() {
    setPage((oldValue) => (oldValue === 0 ? 0 : oldValue - 1));
  }

  const nextPage = function () {
    setPage((oldValue) =>
      oldValue === data.length - 1 ? oldValue : oldValue + 1
    );
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page, data]);

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className='underline'></div>
        <section className='followers'>
          <div className='container'>
            {followers.map((follower) => (
              <Follower key={follower.id} {...follower} />
            ))}
          </div>
          {!loading && (
            <div className='btn-container'>
              <button className='prev-btn' onClick={prevPage}>
                prev
              </button>
              {data.map((item, i) => (
                <button
                  key={i}
                  className={`page-btn ${i === page ? "active-btn" : ""}`}
                  onClick={() => handelPage(i)}
                >
                  {i + 1}
                </button>
              ))}
              <button className='next-btn' onClick={nextPage}>
                next
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
