import { update, get } from "../settings";

update("colors", {
  main: "#e9e9e9",
  primary: "#45ae70"
});

export default get("colors");
