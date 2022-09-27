import React, { useEffect, useState } from "react";
import API from "./api";

import axios from "axios";

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
    API.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (res) => {
        console.log(res);
        console.log(res.data);

        const posts = productsTest.filter((item) => item.id !== id);
        setProducts(posts);
      }
    );
  }

  return (
    <div>
      <h1> Example of React Axios Delete Request </h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Site Name</th>
            <th>Wind speed</th>
            <th>Wind Direction</th>
            <th>Status</th>
            <th>Active Power</th>
            <th>Percentage active max power</th>
          </tr>
        </thead>

        <tbody>
          {productsTest?.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.siteName}</td>
              <td>{post.windSpeed}</td>
              <td>{post.windDirection}</td>
              <td>{post.status}</td>
              <td>{post.activePower}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => deleteRow(post.id, e)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
