import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Words of Sages` : "Words of Sages";
  }, [title]);
}
