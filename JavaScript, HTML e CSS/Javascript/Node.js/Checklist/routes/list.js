const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/tarefas")
const tarefa = mongoose.model("tarefas")

router.get('/',(req,res)=>{
    res.render("list/index")
})

router.get("/tarefas", (req, res) => {
    tarefa.find().then((tarefas) => {
        console.log("Tarefas encontradas:", tarefas);
        res.render("list/tarefas", {tarefas: tarefas});
    }).catch((err) => {
        console.error("Erro ao buscar tarefas:", err);
        req.flash("error_msg", "Houve um erro ao listar as tarefas");
        res.redirect("/list");
    });
});
module.exports = router