import useLocalStorage from "./useLocalStorage";
import { wosKey } from "../utils/storage";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage(wosKey("bookmarks"), []);

  const isBookmarked = (workId, chapterId) =>
    bookmarks.some((b) => b.workId === workId && b.chapterId === chapterId);

  const toggleBookmark = (workId, chapterId, viewMode = "study") => {
    setBookmarks((list) => {
      const exists = list.some((b) => b.workId === workId && b.chapterId === chapterId);
      if (exists) return list.filter((b) => !(b.workId === workId && b.chapterId === chapterId));
      return [
        ...list,
        {
          workId,
          chapterId,
          viewMode: viewMode === "continuous" ? "continuous" : "study",
          addedAt: Date.now()
        }
      ];
    });
  };

  const removeBookmark = (workId, chapterId) => {
    setBookmarks((list) => list.filter((b) => !(b.workId === workId && b.chapterId === chapterId)));
  };

  return { bookmarks, isBookmarked, toggleBookmark, removeBookmark };
}
