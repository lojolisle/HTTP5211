const express = require("express");
const path = require("path");

const app =express();
const port = process.env.PORT || "8888";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index", { title: "Cozmo Cafe" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "Cozmo Cafe" });
});
app.get("/menu", (req, res) => {
    res.render("menu", { title: "Cozmo Cafe" });
});

app.listen(port, () => {
   // console.log(`Listenipppppng on http://localhost:${port}`);
});