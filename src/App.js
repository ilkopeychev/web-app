import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import API from "./api/api";

import TimeInfo from "./components/TimeInfo";

function App() {
  const [productsTest, setProducts] = useState([]);

  useEffect(() => {
    API.get(`http://localhost:3001/posts`).then((res) => {
      console.log("RESS", res);
      const posts = res.data;
      console.log(posts);
      setProducts(posts);
    });
  }, []);

  function deleteRow(id, e) {
    API.delete(`http://localhost:3001/posts/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = productsTest.filter((item) => item.id !== id);
      setProducts(posts);
    });
  }

  return (
    <div>
      <Header />
      <h1> Example of React Axios Delete Request </h1>

      <div className="table table-bordered">
        <div>
          {productsTest?.map((post) => (
            <>
              <TimeInfo post={post} key={post.name + post.id} />
              <div key={post.id}>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteRow(post.id, e)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
