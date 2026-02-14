import React from "react";

export default function Favorite({ value }) {
  return <span style={{ fontSize: 18 }}>{value ? "❤️" : "🤍"}</span>;
}
