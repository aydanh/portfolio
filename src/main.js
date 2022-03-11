import App from "./App.svelte";
import { setup } from "svelte-match-media";

setup({
  desktop: "screen and (min-width: 769px)",
  mobile: "screen and (max-width: 768px)",
});

const app = new App({
  target: document.body,
});

export default app;
