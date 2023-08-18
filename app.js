import express from "express";
import session from "express-session";
import morgan from "morgan";
import nunjucks from "nunjucks";
import ViteExpress from "vite-express";
import ctrl from "./controller.js";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", ctrl.homepage);
app.get("/get-name", ctrl.getName);
app.get("/top-fossils", ctrl.topFossils);
app.post("/like-fossil", ctrl.liker);
app.post("/random-fossil.json", ctrl.randomFossil);

ViteExpress.listen(app, port, () => {
  console.log(`Server running on http://localhost:${port}...`);
});
