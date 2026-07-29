import shared from "./buddhistShared.js";
export default {
  phrases: [
    ...shared.phrases,
    { from: "極樂", to: "極勒" }, // jílè — reinforce lè not yuè
    { from: "作天樂", to: "作天月" },
    { from: "百千種樂", to: "百千種月" }
  ],
  contexts: [...shared.contexts]
};
