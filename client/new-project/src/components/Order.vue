<template>
  <div>
      <h1>Orders</h1>
      <div class="orders">
            <table width="100%">
                <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody v-if="orders">
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.product_name }}</td>
                    <td>{{ order.price }}</td>
                </tr>
                </tbody>
            </table>

      </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: "Order",

  data(){
      return{
          orders:[]
      };
  },
    
  mounted(){
    axios.get("http://localhost:9000/orders")
        .then((res)=>{
              console.log(res)
              if (res.status === 200) {
                this.orders = res.data;
                }
        }).catch((err)=>{
            console.log(err)
        })
  },
};
</script>

<style scoped>
</style>