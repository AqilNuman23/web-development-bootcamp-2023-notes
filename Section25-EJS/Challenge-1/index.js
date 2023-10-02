import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
 
const app = express();
const port = 3000;
const date = new Date();
const dayOfWeek = date.getDay();
let advice = "";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayOfWeek];

const setWeek = (req, res, next) => {
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        advice = "Its time to rest";
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        advice = "Its time to work hard";
    }
    next();
};

app.use(setWeek);

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs",
    { dayName, dayOfWeek, advice });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});