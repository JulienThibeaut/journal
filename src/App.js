import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import dayjs from "dayjs";
import "./App.css";

function App() {
  return (
    <Layout className="app-container">
      <button>
        <Link
          className="link-card"
          to={`calendar/${dayjs().month()}/${dayjs().date()}`}
        >
          Start writing!
        </Link>
      </button>
      <button>
        <Link className="link-card" to={`calendar`}>
          Calendar
        </Link>
      </button>
    </Layout>
  );
}

export default App;
