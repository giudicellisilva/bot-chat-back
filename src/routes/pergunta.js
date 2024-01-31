const express = require("express");
const router = express.Router();
const runPrompt = require("../chat/promptChatGPT");
const pergunta = [];

router.post("/pergunta", async function(req, res){
    res.status(200).json({"resposta" : await runPrompt(req.body.pergunta) });
})

module.exports = router;