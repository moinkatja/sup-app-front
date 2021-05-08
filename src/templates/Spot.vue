<template>

    <Layout>
        <v-card>
        <h1>{{$page.spot.title}}</h1>
        <div class="image-container">
            <img class="spot-img" :src="`http://localhost:1337${$page.spot.image}`"> 
        </div>
        <p>{{$page.spot.description}}</p>
        <p><b>Address:</b> {{$page.spot.address}}</p>
        <p><b>Tour Duration:</b> {{$page.spot.duration}}</p>
        </v-card>
    </Layout>
</template>

<page-query>
  query ($id: ID!){
   spot(id: $id) {
    id 
    address
    title
    description
    duration
    image
  }
}

</page-query>

<script>


export default  {
    metaInfo() {
        return {
            title:this.$page.spot.title
        }
    }
}
</script>

<style scoped>
    .spot-img {
        max-width: 400px;
        margin: 20px;
    }

    .v-card {
       padding: 20px;
    }

    .v-card h1 {
        text-align: center;
    }

    .image-container {
        text-align: center;
    }
    .v-application__wrap {
        background-color: #4DD0E1;
    }

</style>
