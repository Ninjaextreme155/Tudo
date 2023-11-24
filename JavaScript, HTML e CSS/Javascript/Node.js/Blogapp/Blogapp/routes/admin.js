const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/categoria")
const categoria = mongoose.model("categorias")

router.get('/',(req, res)=>{
    res.render("admin/index")
})

router.get('/posts',(req, res) => {
    res.send("Pagina de Posts")
})

router.get('/categorias', (req,res)=> {
    categoria.find().sort({date:'desc'}).then((categorias) => {
        res.render("admin/categorias", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias")
        res.redirect("/admin")
    })
})
router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias")
})
router.post("/categorias/nova", (req, res) => {
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome  == null){
        erros.push({texto: "Nome invalido"})
    }

    if(!req.body.slug || req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug invalido"})
    }

    if(req.body.nome < 2){
        erros.push({texto: "Nome da categoria é muito pequeno"})
    }
    if(req.body.slug < 2){
        erros.push({texto: "Slug muito pequeno"})
    }

    if(erros.length > 0){
        res.render("admin/addcategorias", {erros: erros})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
           }
        
           new categoria(novaCategoria).save().then(() => {
            req.flash("success_msg","Categoria criada com sucesso")
            res.redirect("/admin/categorias")
           }).catch((err) => {
            req.flash("error_msg","Houve um erro ao salvar a categoria, tente novamente")
            res.redirect("/admin")
           })  
    }

})

router.get("/categorias/edit/:id", (req, res) => {
    categoria.findOne({_id:req.params.id}).then((categoria) => {
        res.render("admin/editcategorias", {categoria: categoria})
    }).catch((err) => {
        req.flash("error_msg", "Esta categoria não existe")
        res.redirect("/admin/categorias")
    })
    
})

router.post("/categorias/edit", (req, res) => {
    var erro = []
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
       erro.push({texto: "nome invalido"})
    }
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
       erro.push({texto: "slug invalido"})
    }
    if(req.body.nome < 2){
       erro.push({texto: "nome muito pequeno"})  
    }
    if(req.body.slug < 2){
       erro.push({texto: "slug muito pequeno"})
    }
    if(erro.length > 0){
        res.render("admin/editcategorias", {erro: erro})
    }else{
        categoria.findOne({_id: req.body.id}).then((categoria) => {

            categoria.nome = req.body.nome
            categoria.slug = req.body.slug
    
            categoria.save().then(() => {
                req.flash("success_msg", "Categoria editada com sucesso")
                res.redirect("/admin/categorias")
            }).catch((err) => {
                req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria")
                res.redirect("/admin/categorias")
            })
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao editar a categoria")
            res.redirect("/admin/categorias")
        })
    }
})

router.post("/categorias/deletar", (req, res) => {
    categoria.remove({_id:req.body.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso")
        res.redirect("/admin/categorias")
    }).catch(() => {
        req.flash("error_msg", "Categoria não conseguiu ser excluida")
        res.redirect("/admin/categorias")
    })
})

module.exports = router