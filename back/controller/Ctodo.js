const { Todo } = require("../models/index");
console.log(Todo);

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  res.render("todo");
  console.log(readAll);
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  console.log(readOne);
  Visitor.sequelize(req.params.id, (result) => {
    console.log("Todo", result);
    res.send(result);
  });
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  console.log(req.body);
  Visitor.sequelize(req.body, () => {
    res.send("수정");
  });
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  if (err) throw err;
  console.log("데이터 삭제", rows);
};
