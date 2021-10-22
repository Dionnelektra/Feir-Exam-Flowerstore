var Product = require('../model/product');
var express= require('express');



//RETURNS ALL PRODUCTS
exports.product_list = function(req,res){
    Product.getAllProducts(function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
    })
}

//RETURNS PRODUCT INFORMATION BY ID
exports.get_product = function(req,res){

    var id = req.params.id;
    Product.getProduct(id,function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
    })
}


//ADDING NEW PRODUCTS
exports.add_product = function(req,res){

    var data ={
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        quantity: req.body.quantity,
        price: req.body.price,
        // created_at: req.body.created_at,
        // updated_at: req.body.updated_at,
        // status: req.body.status
    }
    // console.log(data)
    Product.addProduct(data,function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
    })
}


//EDIT PRODUCT INFO
exports.edit_product = function(req,res){
    var id = req.params.id;
    var data ={
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        quantity: req.body.quantity,
        price: req.body.price,
        // created_at: req.body.created_at,
        // updated_at: req.body.updated_at,
        // status: req.body.status
    }
    // console.log(data);
    Product.editProduct(id,data,function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
    })
}


//UPDATE PRODUCT STATUS
exports.status_product = function(req,res){
    var id = req.params.id;
    var status = req.body.status
    Product.statusProduct(id,status,function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
    })
}



//RETURNS ALL ORDERS
exports.order_list = function(req,res){
    Product.getAllOrders(function(err,result){
        if(err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
    })
}

