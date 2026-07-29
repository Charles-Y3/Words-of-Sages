import shared from "./taoistShared.js";
export default {
  phrases: [
    ...shared.phrases,
    { from: "樂人之善", to: "勒人之善" },
    { from: "樂人之惡", to: "勒人之惡" },
    { from: "挫人所長", to: "挫人所掌" }
  ],
  contexts: [...shared.contexts]
};
