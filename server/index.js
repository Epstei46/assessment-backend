const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Your ideals are well within your reach.",
            "To the world you may be one person, but to one person you may be the world.",
            "The philosophy of one century is the common sense of the next.",
            "Your dreams are worth your best efforts to achieve them.",
            "Success is a journey, not a destination.",
            "All your hard work will soon pay off.",
            "A short pencil is usually better than a long memory any day.",
            "Don’t be discouraged, because every wrong attempt discarded is another step forward.",
  ];
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
})

app.listen(4000, () => console.log("Server running on 4000"));
