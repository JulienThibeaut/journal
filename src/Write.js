import React, { useState, useEffect } from "react";
import Mood from "./Mood";
import dayjs from "dayjs";

const Write = ({ db }) => {
  const [post, setPost] = useState({ title: "", content: "", mood: "" });
  const moods = ["😄", "😊", "😌", "🙁", "😞", "😪"];
  const date = dayjs().format("DD/MM/YYYY");

  const updateField = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const storeName = "store1";

    const tx = db.transaction(storeName, "readwrite");
    const store = await tx.objectStore(storeName);

    const data = await store.put(post, date);

    console.log("DATA STORED =>", data);

    await tx.done;
  };

  useEffect(() => {
    const storeName = "store1";

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

  console.log("post", post);

  return (
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
  );
};

export default Write;
