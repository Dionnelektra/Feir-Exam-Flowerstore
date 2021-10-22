<template>
  <div>
      <h1>Add Product </h1>
      <div>
        <form @submit.prevent="submitButtonClick"><!--  @submit.prevent="submitButtonClick" -->
            <label for="product_name">Product Name:</label>
            <input type="text" v-model="product.product_name" /><br /><br />
            <label for="product_description">Description:</label>
            <textarea v-model="product.product_description"></textarea><br /><br />
            <label for="quantity">Quantity:</label>
            <input type="text" v-model="product.quantity" /><br /><br />
            <label for="price">Price:</label>
            <input type="text" v-model="product.price" /><br /><br />
            
           
            <input type="submit" value="Create" />
        </form>
       </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: "Add",
    data() {
        return {
            product: {
                product_name: "",
                product_description: "",
                quantity: "",
                price: ""
            }
        };
    },
    methods: {
    submitButtonClick() {
        const body = {
            product_name: this.product.product_name,
            product_description: this.product.product_description,
            quantity: this.product.quantity,
            price: this.product.price
        }
        // console.log(body)
        axios.post("http://localhost:9000/addProduct",body)
        .then((response) =>{
            if(response.status === 200){
                console.log("success");
            }
            this.$router.push("/");
        }).catch((err)=> console.log(err));

    },
    }
};
</script>

<style scoped>
</style>