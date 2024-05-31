var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/:respostasId", function (req, res) {
  quizController.buscarRespostas(req, res);
});

router.post("/cadastrar", function (req, res) {
  quizController.cadastrar(req, res);
})

module.exports = router;