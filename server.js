const { list } = require("./contributors/index");

const express = require("express");
const app = express();
const reload = require("reload");
const http = require("http");

const server = http.createServer(app);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { List: list });
});

const port = process.env.PORT || 5000;

reload(app)
  .then(function(reloadReturned) {
    server.listen(port, function() {
      console.log(`Server connected at port ${port}`);
    });
  })
  .catch(function(err) {
    console.err("Reload error occured: ", err);
  });
