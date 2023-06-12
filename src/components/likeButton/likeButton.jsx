"use client";

import { useState } from "react";

export function likeButton({ id }) {
  const [like, setLike] = useState(false);

  return (
    <button onClick={() => setLike(!like)}>{like ?  : "Like"}</button>
  );
}
