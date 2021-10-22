<template>
  <div>
      <h1>Hello World</h1>
      <button @click="getProducts">Products</button>
      <button @click="getOrders">Orders</button>
      <button @click="addProduct">Add Product</button><br /><br />
      <div class="products">
            <table width="100%">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody v-if="products">
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_description }}</td>
                    <td>{{ product.price }}</td>
                    <td><button @click="editProduct(product.id)">Edit</button><button>Enable</button></td>
                </tr>
                </tbody>
            </table>

      </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: "Home",

  data(){
      return{
          products:[]
      };
  },

  methods: {
      getProducts(){
          axios.get("http://localhost:9000/products").then((res)=>{
              console.log(res)
              if (res.status === 200) {
                this.products = res.data;
                }
          }).catch((err)=>{
              console.log(err)
          })
      },
      getOrders(){
          this.$router.push("/orders");
      },
      editProduct(a){
          this.$router.push(`/edit/${a}`);
      },
      addProduct(){
          this.$router.push(`/add`);
      }


  },
};
</script>

<style scoped>
</style>