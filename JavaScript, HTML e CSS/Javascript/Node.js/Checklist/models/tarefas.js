const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tarefa = new Schema({
    list: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("tarefas", tarefa);