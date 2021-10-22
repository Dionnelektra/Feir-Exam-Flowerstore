<template>
  <div>
      <h1>Edit Product </h1>
      <div>
        <form @submit.prevent="submitButtonClick(product.id)"><!--  @submit.prevent="submitButtonClick" -->
            <label for="product_name">Product Name:</label>
            <input type="text" v-model="product.product_name"  /><br /><br />
            <label for="product_description">Description:</label>
            <textarea v-model="product.product_description"></textarea><br /><br />
            <label for="quantity">Quantity:</label>
            <input type="text" v-model="product.quantity" /><br /><br />
            <label for="price">Price:</label>
            <input type="text" v-model="product.price" /><br /><br />
            
           
            <input type="submit" value="Edit" />
        </form>
      </div>

  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: "Edit",

  data(){
      return{
          product:[

          ]
      };
  },

  mounted(){
    const id = this.$route.params.id;
    axios.get(`http://localhost:9000/product/${id}`)
        .then((res)=>{
              console.log(res)
              if (res.status === 200) {
                this.product = res.data[0];
                // console.log(res.data[0].product_name)
                }
                console.log(this.product)
        }).catch((err)=>{
            console.log(err)
        })
  },
  methods:{
      submitButtonClick(a){
        const body = {
            product_name: this.product.product_name,
            product_description: this.product.product_description,
            quantity: this.product.quantity,
            price: this.product.price
        }
        axios.put(`http://localhost:9000/edit/${a}`,body)
        .then((response) =>{
            if(response.status === 200){
                console.log("success");
            }
            this.$router.push("/");
        }).catch((err)=> console.log(err));
        
      }
  }
//   methods: {
//     submitButtonClick() {
//         const body = {
//             product_name: this.product.product_name,
//             product_description: this.product.product_description,
//             quantity: this.product.quantity,
//             price: this.product.price
//         }
//         console.log(body);
//         // axios.post("http://localhost:9000/addProduct",body)
//         // .then((response) =>{
//         //     if(response.status === 200){
//         //         console.log("success");
//         //     }
//         //     this.$router.push("/");
//         // }).catch((err)=> console.log(err));

//     }
//   }
};
</script>

<style scoped>
</style>