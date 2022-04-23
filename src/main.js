import App from "./App.svelte";
import { setup } from "svelte-match-media";

setup({
  desktop: "screen and (min-width: 769px)",
  half: "screen and (min-width: 769px) and (max-width: 1240px)",
  mobile: "screen and (max-width: 768px)",
  vertical: "screen and (max-height: 678px)",
});

const app = new App({
  target: document.body,
});

export default app;
