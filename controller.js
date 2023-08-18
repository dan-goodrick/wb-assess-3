import { MOST_LIKED_FOSSILS, OTHER_FOSSILS } from "./objects.js";
import lodash from "lodash";

export default {
  getName: (req, res) => {
    req.session.name = req.query.name;
    res.redirect("/top-fossils");
  },
  homepage: (req, res) => {
    if (req.session.name) {
      res.render("top-fossils.html.njk", {
        fossils: MOST_LIKED_FOSSILS,
        name: req.session.name,
      });
    } else {
      res.render("homepage.html.njk", {});
    }
  },
  randomFossil: (req, res) => {
    const randomFossil = lodash.sample(OTHER_FOSSILS);
    console.log("app.js", res.json(randomFossil));
  },
  topFossils: (req, res) => {
    if (req.session.name) {
      res.render("top-fossils.html.njk", {
        fossils: MOST_LIKED_FOSSILS,
        name: req.session.name,
      });
    } else {
      res.render("homepage.html.njk", {});
    }
  },
  liker: (req, res) => {
    console.log("req.body", req.body.fossil);
    if (req.body.fossil !== 'Select your favorite') {
      MOST_LIKED_FOSSILS[req.body.fossil].num_likes += 1;
      res.render("thank-you.html.njk", { name: req.session.name });
    }
  },
};
