import React from "react";
import UseAlbum from "./UseAlbum";
import UseDetailAlbum from "./UseDetailAlbum";
import SelectAlbum from "./SelectAlbum";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <UseAlbum />
      <hr />
      <UseDetailAlbum />
      <hr />
      <SelectAlbum />
    </div>
  );
}
