import React, { useState, useEffect } from "react";
import Write from "./Write";
import { openDB } from "idb";
import "./App.css";

function App() {
  const [db, setDB] = useState(null);

  useEffect(() => {
    if (!("indexedDB" in window)) {
      console.warn("IndexedDB not supported");
      return;
    }

    const connectToDb = async () => {
      const dbName = "journal";
      const storeName = "store1";
      const version = 1;

      const db = await openDB(dbName, version, {
        upgrade(db, oldVersion, newVersion, transaction) {
          db.createObjectStore(storeName);
        }
      });

      setDB(db);
    };

    connectToDb();
  }, []);

  return (
    <div className="app-container">
      <Write db={db} />
    </div>
  );
}

export default App;
