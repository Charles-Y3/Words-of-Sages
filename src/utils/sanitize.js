// Tiny allowlist sanitizer for the `application` field, the only place in the
// app that renders chapter data via dangerouslySetInnerHTML. Strips every tag
// except the handful the authored content actually uses, and drops all
// attributes so no markup beyond plain emphasis/line-breaks can slip through.
const ALLOWED_TAGS = new Set(["br", "b", "strong", "em", "i"]);

export function sanitizeHtml(html) {
  if (!html) return "";
  return html.replace(/<\/?([a-zA-Z0-9]+)[^>]*>/g, (match, tag) => {
    const lower = tag.toLowerCase();
    if (!ALLOWED_TAGS.has(lower)) return "";
    if (lower === "br") return "<br />";
    return match.startsWith("</") ? `</${lower}>` : `<${lower}>`;
  });
}
