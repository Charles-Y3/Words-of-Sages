import useLocalStorage from "./useLocalStorage";
import { wosKey } from "../utils/storage";

export default function useNotes() {
  const [notes, setNotes] = useLocalStorage(wosKey("notes"), []);

  const getNote = (workId, chapterId) => {
    const entry = notes.find((n) => n.workId === workId && n.chapterId === chapterId);
    return entry?.text ?? "";
  };

  const hasNote = (workId, chapterId) => {
    const entry = notes.find((n) => n.workId === workId && n.chapterId === chapterId);
    return Boolean(entry && entry.text.trim());
  };

  const setNote = (workId, chapterId, text, viewMode = "study") => {
    setNotes((list) => {
      const trimmed = text.trim();
      const without = list.filter((n) => !(n.workId === workId && n.chapterId === chapterId));
      if (!trimmed) return without;
      return [
        ...without,
        {
          workId,
          chapterId,
          text,
          viewMode: viewMode === "continuous" ? "continuous" : "study",
          updatedAt: Date.now()
        }
      ];
    });
  };

  const removeNote = (workId, chapterId) => {
    setNotes((list) => list.filter((n) => !(n.workId === workId && n.chapterId === chapterId)));
  };

  return { notes, getNote, hasNote, setNote, removeNote };
}
