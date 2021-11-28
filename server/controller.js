let favCompliment = require("./db.json")

module.exports = {
    getCompliments: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
    ];
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
    },
    getFortunes: (req, res) => {
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
      },
      getFavCompliment: (req, res) => {
        try{
            let fav = favCompliment[0].str
            res.status(200).send(fav)
        }
        catch{res.status(200)}
      },
      addFavCompliment: (req, res) => {
        // console.log(req.body)
        let fav = req.body
        // push submitted favorite compliment (req.body) into db.json to be stored/saved.
        favCompliment.push(fav)
        res.status(200).send(favCompliment[0].str)
      },
      updateFavCompliment: (req, res) => {
        let newFav = req.body
        // update the currently stored favorite compliment in db.json to be the new compliment taht was just submitted (req.body)
        favCompliment.splice(0,1,newFav)
        res.status(200).send(favCompliment[0].str)
      },
      deleteCompliment: (req, res) => {
        favCompliment.splice(0,1)
        // delete favorite compliment from db.json so that nothing is being stored
        res.status(200).send(favCompliment)
      }
}