const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/task/api", (req, res) => {
  console.log(req.query);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[new Date().getDay()];

  res.status(200).json({
    // time: req.query.time,
    slack_name: req.query.slack_name,
    track: req.query.track,
    current_day: currentDay,
    utc_time: new Date(),
    github_file_url: "https://github.com/dorcax/",
    github_repo_url: "https://github.com/dorcax/Zuri-task1",
    status_code: res.statusCode,
  });
  //  console.log(res.statusCode);
  // res.status(200).send({})
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
