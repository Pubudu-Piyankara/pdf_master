"use client";
import React, { useRef, useState } from "react";

const UploadPage = () => {
  const [file, setFile] = useState<File>();
  const ref = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("No file selected");
      return;
    }
    try {
      const data = new FormData();
      data.set("file", file);
      const res = await fetch("/api/files/upload", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert("File uploaded");
      }
      ref.current && (ref.current.value = "");
      console.log(" File uploaded")
    } catch (error) {
      console.error(error, " Error uploading file");
    }
  };
  return (
    <div className="flexCenter h-screen">
      <form onSubmit={submit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
          ref={ref}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPage;
