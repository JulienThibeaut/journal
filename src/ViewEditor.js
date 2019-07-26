import React, { useState, useEffect } from "react";
import Mood from "./Mood";
import Layout from "./Layout";
import { openDB } from "idb";
import dayjs from "dayjs";

const Write = ({ match }) => {
  const { month, day } = match.params;
  const [post, setPost] = useState({ title: "", content: "", mood: "" });
  const [db, setDB] = useState(null);
  const moods = ["😄", "😊", "😌", "🙁", "😞", "😪"];
  const storeName = "store1";

  const date = dayjs()
    .month(month - 1)
    .date(day)
    .format("DD/MM/YYYY");

  useEffect(() => {
    if (!("indexedDB" in window)) {
      console.warn("IndexedDB not supported");
      return;
    }

    const connectToDb = async () => {
      const dbName = "journal";
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

  const updateField = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const tx = db.transaction(storeName, "readwrite");
    const store = await tx.objectStore(storeName);

    const data = await store.put(post, date);

    console.log("DATA STORED =>", data);

    await tx.done;
  };

  useEffect(() => {
    if (!db) {
      return;
    }

    return async () => {
      const items = await db
        .transaction(storeName)
        .objectStore(storeName)
        .getAll();

      console.log("items", items);
    };
  });

  return (
    <Layout>
      <div className="write-container">
        <h2 className="write-date">{date}</h2>
        <Mood handleMood={updateField} moods={moods} />
        <form className="write-form" onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            className="write-title"
            name="title"
            value={post.title}
            onChange={updateField}
          />
          <textarea
            placeholder="Write..."
            name="content"
            className="write-textarea"
            value={post.content}
            onChange={updateField}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </Layout>
  );
};

export default Write;
