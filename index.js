const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const courses = require("./data/courses.json");
const course = require("./data/course.json");
app.get("/", (req, res) => {
  res.send("hello server");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const requestedCourse = course.find((c) => c.id == id);
  res.send(requestedCourse);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});
