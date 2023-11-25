const bodyParser = require("body-parser")
const express = require("express")
const ejs = require("ejs")
const _ = require("lodash")
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://admin-precious:Test123@cluster3.mycwkzo.mongodb.net/gdmoviesdb")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

const moviesSchema = new mongoose.Schema({
    name: String,
    description: String,
    link: String
})

const List = mongoose.model("list", moviesSchema)

const list1 = new List({
    name: "wednesday",
    description: "Wednesday is an American coming-of-age supernatural comedy horror television series based upon the character Wednesday Addams from The Addams Family. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the title character, with Catherine Zeta-Jones, Luis Guzmán, Isaac Ordonez, Gwendoline Christie, Riki Lindhome, Jamie McShane, Fred Armisen, and Christina Ricci appearing in supporting roles. Four out of the eight episodes are directed by Tim Burton, who also serves as executive producer. It revolves around the titular character, who attempts to solve a monster mystery at her school.Burton was previously associated with two Addams Family-related projects: the 1991 film, which he passed on, and a cancelled stop-motion animated film. In October 2020, he was reported to be helming a television series, which was later given a series order by Netflix. Filming took place in Romania between September 2021 and March 2022. Wednesday premiered on November 16, 2022, and was released on Netflix on November 23 to generally positive reviews by critics, who praised Ortega's performance,[1] but criticized it for its similarities to CW dramas",
    link: "https://drive.google.com/drive/folders/15EhXeUbXNnSf5nVuxDxnNwjL9iAoP_op?usp=share_link"
})
const list2 = new List({
    name: "vengeance",
    description: "A journalist and podcaster travels from New York City to Texas to investigate the death of a woman whom he hooked up with.",
    link: "https://drive.google.com/file/d/1QAYXGPbVoZ8WoXYL_ee3onuKQUYYRcrK/view?usp=sharing"
})
const list3 = new List({
    name: "vesper",
    description: "Struggling to survive with her father after the collapse of Earth's ecosystem, 13-year-old Vesper must use her wits, strength and bio-hacking abilities to fight for the future.",
    link: "https://drive.google.com/file/d/1nJ17-pXBMO2NfL0uVqp2nyNO7yjHeQDE/view?usp=sharing"
})
// list1.save()
// list2.save()
// list3.save()

app.get("/", function(req, res){
    res.render("home")
})
app.get("/movies", function(req, res){
    res.render("movie")
})

app.get("/:topic", function(req, res){
    const topic = _.lowerCase(req.params.topic)

    List.findOne({name: topic})
    .then((doc) => {
        if(!doc){
            res.send("404 Not FOund HAAHha")
        } else {
        res.render("movie", {theName: doc.name, theDescription: doc.description, dLink: doc.link})
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post("/submit", function(req, res){
    const searchInput = req.body.searchContent;
    res.redirect("/"+searchInput)
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started on port 3000");
});
