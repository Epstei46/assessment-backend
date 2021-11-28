const express = require("express");
const cors = require("cors");
const ctrl = require("./controller")
const app = express();


app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());
app.use(express.static("client"))

// If a change is made on the page, but lost when I refresh the page, then I have an issue in my server folder or server is just not receiving/sending to the client folder. If a change is not made visible until I refresh the page, then the server/client connection is good, just need to look at how main.js in client folder is handling the invoked functions. After making a change on the page, that change should be not be lost when I refresh the page. Can go to http://http://localhost:4000/api/compliment to see what favCompliment is currently saved in my db.json (will not load if it is empty).
app.get("/api/compliments", ctrl.getCompliments);
app.get("/api/fortune", ctrl.getFortunes);
app.get("/api/compliment", ctrl.getFavCompliment)
app.post("/api/compliment", ctrl.addFavCompliment)
app.put("/api/compliment", ctrl.updateFavCompliment)
app.delete("/api/compliment", ctrl.deleteCompliment)

app.listen(4000, () => console.log("Server running on port: 4000"));
