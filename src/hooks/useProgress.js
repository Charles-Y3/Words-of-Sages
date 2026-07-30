import useLocalStorage from "./useLocalStorage";
import { wosKey } from "../utils/storage";

export default function useProgress() {
  const [progress, setProgress] = useLocalStorage(wosKey("progress"), {});

  const markRead = (workId, chapterId, viewMode = "study") => {
    setProgress((p) => {
      const entry = p[workId] || { read: [], last: null, updatedAt: 0 };
      const read = entry.read.includes(chapterId) ? entry.read : [...entry.read, chapterId];
      return {
        ...p,
        [workId]: {
          read,
          last: chapterId,
          lastView: viewMode === "continuous" ? "continuous" : "study",
          updatedAt: Date.now()
        }
      };
    });
  };

  const getEntry = (workId) =>
    progress[workId] || { read: [], last: null, lastView: "study", updatedAt: 0 };

  const getContinue = () => {
    const entries = Object.entries(progress).filter(([, e]) => e.last != null);
    if (entries.length === 0) return null;
    const [workId, entry] = entries.reduce((a, b) => (b[1].updatedAt > a[1].updatedAt ? b : a));
    return {
      workId,
      chapterId: entry.last,
      viewMode: entry.lastView === "continuous" ? "continuous" : "study"
    };
  };

  const getRecentContinues = (limit = 3) => {
    const entries = Object.entries(progress).filter(([, e]) => e.last != null);
    entries.sort((a, b) => b[1].updatedAt - a[1].updatedAt);
    return entries.slice(0, limit).map(([workId, entry]) => ({
      workId,
      chapterId: entry.last,
      viewMode: entry.lastView === "continuous" ? "continuous" : "study"
    }));
  };

  return { progress, markRead, getEntry, getContinue, getRecentContinues };
}
