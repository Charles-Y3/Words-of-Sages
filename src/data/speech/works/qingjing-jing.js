import shared from "./taoistShared.js";
export default {
  phrases: [
    ...shared.phrases,
    { from: "觀空", to: "觀空" },
    { from: "夫道", to: "扶道" },
    { from: "夫人神", to: "扶人神" }
  ].filter((r) => r.from !== r.to),
  contexts: [...shared.contexts]
};
