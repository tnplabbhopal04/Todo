let connection = require("./dbconfig");
let express = require("express");
// const bodyParser = ('body-parser');
let cors = require("cors");

let app = express();
// app.use(bodyParser.json());
app.use(express.json());
let port = 5500;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.get("/view", function (req, res) {
  let SQLquery = "SELECT * FROM todo";
  connection.query(SQLquery, function (error, result) {
    if (error) {
      console.log("Error", error.sqlMessage);
    } else {
      res.send(result.rows);
    }
  });
});

app.post("/add", function (req, res) {
  let { sno_id, task, status, due_date, complication_date } = req.body;
  let sqlquery = "INSERT INTO todo VALUES ($1,$2,$3,$4,$5)";
  connection.query(sqlquery,[sno_id, task, status, due_date, complication_date], function (error, result) {
      if (error) {
        console.log("Error", error.message);
      } else {
        res.send(result);
      }
    }
  );
});

// app.put("/sno/:id", function (req, res) {
//   let { name, email } = req.body;

//   let id = req.params.id;

//   let sqlquery = "UPDATE todo SET sno_id=$1,task =$2 WHERE id =$2";
//   connection.query(sqlquery, [sno_id, task, ], function (error, result) {
//     if (error) {
//       console.log("Error", error.sqlMessage);
//       res.send(error);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.delete("/delete", (req, res) => {
  let id = req.query.sno_id;
  console.log(id);
  let sqlquery = "DELETE FROM todo WHERE sno_id= $1 ";
  connection.query(sqlquery, [id], (error, result) => {
    if (error) {
      console.log("Error", error.sqlMessage);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  let sno_id = req.query.sno_id;
  let { status, complication_date } = req.body;
  let sqlquery =
    "UPDATE todo SET  status=$1,complication_date=$2 WHERE sno_id =$3";
  connection.query(
    sqlquery,
    [status, complication_date, sno_id],
    function (error, result) {
      if (error) {
        console.log("Error", error.sqlMessage);
        res.status(404).json({ message: "item not found" });
      } else {
        res.send(`${result.rows} data update`);
      }
    }
  );
});

app.patch("/", (req, res) => {
  let id = req.body.sno_id;
  let { task } = req.body;
  let query = "UPDATE todo SET task = $1 WHERE sno_id=$2";
  connection.query(query, [task, id], (error, result) => {
    if (error) {
      console.log("error", error.sqlMessage);
      res.status(404).json({ message: "item not found" });
    } else {
      res.send(`${result.rows}data update`);
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
