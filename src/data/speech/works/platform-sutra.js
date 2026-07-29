import shared from "./buddhistShared.js";
export default {
  phrases: [
    ...shared.phrases,
    { from: "不思善、不思惡", to: "不思善、不思務" },
    { from: "不思善不思惡", to: "不思善不思務" },
    { from: "有何所長", to: "有何所掌" }
  ],
  contexts: [...shared.contexts]
};
