<template>
    <Layout>
        <h1>{{$page.spot.title}}</h1>
        <img :src="`http://localhost:1337${$page.spot.image}`"> 
        <p>{{$page.spot.description}}</p>
        <p>Address:{{$page.spot.address}}</p>
        <p>Tour Duration: {{$page.spot.duration}}</p>
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
