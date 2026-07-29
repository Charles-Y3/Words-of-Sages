import shared from "./taoistShared.js";

export default {
  phrases: [
    ...shared.phrases,
    { from: "夫道", to: "扶道" },
    { from: "夫人神", to: "扶人神" },
    { from: "神好清", to: "神耗清" },
    { from: "心好靜", to: "心耗靜" },
    { from: "好爭", to: "耗爭" }
  ],
  contexts: [...shared.contexts]
};
