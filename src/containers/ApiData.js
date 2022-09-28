import React, { useState, useEffect } from "react";
import TimeInfo from "../components/TimeInfo";
import API from "../api/api";

function ApiData() {
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
      <div
        className="post-wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {productsTest?.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              margin: "10px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "100%" }}>
              <TimeInfo post={post} />
            </div>
            <div
              style={{
                display: "flex",
                margin: "10px",
                flexDirection: "column-reverse",
                marginBottom: "1px",
              }}
            >
              <button>ST 0</button>
              <button>WA 0</button>
              <button>AV 0</button>
              <button
                className="btn btn-danger"
                onClick={(e) => deleteRow(post.id, e)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiData;
