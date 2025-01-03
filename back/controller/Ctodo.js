const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  console.log(Todo());
  res.render(todo);
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  console.log(readOne);
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {};
