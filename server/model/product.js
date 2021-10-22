var query = require('../lib/db');

var Product = function(product){
    this.name = product.name;
    this.description = product.description;
    this.quantity = product.quantity;
    this.price = product.price;
    this.created_at = product.created_at;
    this.updated_at = product.updated_at;
    this.status = product.status;
}

Product.getAllProducts = async(result) =>{

    var sql = "SELECT id, product_name, product_description,price FROM product_table;";

    try{
        var prod = await query(sql);
        result(null,prod);

    }catch(err){
        result(err,null)
    }
}

Product.getProduct = async(id,result)=>{
    var sql = "SELECT id, product_name, product_description,price,quantity FROM product_table WHERE id = ?";

    try{
        var prod = await query(sql,id);
        result(null,prod);
    }catch(err){
        result(err,null);
    }

}

Product.addProduct = async(data, result) =>{
    var sql = "INSERT INTO product_table SET ? ";

    try{
        var prod = await query(sql,data);

        result(null,prod)
    }catch(err){
        result(err,null)
    }
}

Product.editProduct = async(id, data, result) =>{
    var sql = "UPDATE product_table SET ? WHERE id = ?";

    try{
        var prod = await query(sql,[data,id]);

        result(null,prod)
    }catch(err){
        result(err,null)
    }
}

Product.statusProduct = async(id,status,result) =>{
    var sql = "UPDATE product_table SET status = ? WHERE id = ?";

    try{
        var prod = await query(sql,[status,id]);

        result(null,prod)
    }catch(err){
        result(err,null)
    }
}



Product.getAllOrders = async(result) =>{
    var sql = "SELECT o.id as id, p.product_name as product_name, p.price as price FROM order_table o INNER JOIN product_table p on o.product_id = p.id;";

    try{
        var prod = await query(sql);

        result(null,prod)
    }catch(err){
        result(err,null)
    }
}


module.exports= Product;