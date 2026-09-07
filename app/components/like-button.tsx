"use client";

import { useCallback, useSyncExternalStore } from "react";

const likeChangeEvent = "hope-of-harmony-like-change";

function readLike(storageKey: string) {
  try {
    return window.localStorage.getItem(storageKey) === "true";
  } catch {
    return false;
  }
}

export function LikeButton({
  slug,
  initialLikes,
}: {
  slug: string;
  initialLikes: number;
}) {
  const storageKey = `hope-of-harmony-liked-${slug}`;
  const subscribe = useCallback((onStoreChange: () => void) => {
    function handleStorage(event: StorageEvent) {
      if (event.key === storageKey) onStoreChange();
    }

    window.addEventListener("storage", handleStorage);
    window.addEventListener(likeChangeEvent, onStoreChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(likeChangeEvent, onStoreChange);
    };
  }, [storageKey]);
  const getSnapshot = useCallback(() => readLike(storageKey), [storageKey]);
  const liked = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function toggleLike() {
    try {
      window.localStorage.setItem(storageKey, String(!liked));
      window.dispatchEvent(new Event(likeChangeEvent));
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
  }

  const count = initialLikes + (liked ? 1 : 0);

  return (
    <button
      type="button"
      className={`like-button${liked ? " is-liked" : ""}`}
      aria-label={liked ? "Unlike this post" : "Like this post"}
      aria-pressed={liked}
      onClick={toggleLike}
    >
      <span className="like-button-heart" aria-hidden="true">
        {liked ? "♥" : "♡"}
      </span>
      <span>{count} {count === 1 ? "like" : "likes"}</span>
    </button>
  );
}
