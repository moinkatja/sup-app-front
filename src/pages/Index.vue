<template>
  <Layout v-slot="{searchText}">
    <v-tabs v-model="tab" grow slider-color="yellow" color="white" background-color="cyan">
      <v-tab>All spots</v-tab>
      <v-tab>Courses</v-tab>
      <v-tab>Rental</v-tab>
      <v-tab>Shop</v-tab>
    </v-tabs>
    <v-row class="justify-space-around"> 
      <v-card
        v-for = "edge in getSpots(searchText)" :key="edge.node.id"
        width="280"
        class = "mt-5"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="`http://localhost:1337${edge.node.thumbnail}`"
        >
        <v-card-title>{{edge.node.title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{edge.node.address}}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div> {{edge.node.description}}</div>
        </v-card-text>

        <v-card-actions>
          
          <v-btn
            @click="$router.push(`/spots/${edge.node.id}`)"
            color="cyan darken-4"
            text
          >
            Info
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-row>
  </Layout>
</template>

<page-query>
  query {
    spots:  
      allSpot {
        edges {
          node {
            id
            duration
            title
            image  
            description
            address
            thumbnail
            category
        }
  	  }
	  }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'goSUP'
  },
  data() {
    return {
      tab: 0,
      spots: []

    }
  }, 
  mounted() {
    this.spots = this.$page.spots.edges

  },
  watch: {
    tab(val) {
      if(this.tab === 0) {
        this.showAllSpots()
      } else {
        this.showSpotsByType(val)
      }

    }
  },
  methods: {
    showAllSpots() {
      this.spots = this.$page.spots.edges
    },
    showSpotsByType(val) {
      this.spots = this.$page.spots.edges.filter((edge)=> {
        return  edge.node.category === val
      })
    },
    getSpots(searchText) {
      return this.spots.filter((edge) => {
        return edge.node.description.toLowerCase().includes(searchText.toLowerCase())
      })
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

 .v-application--wrap {
   background-color: #4DD0E1;
 }

 .v-card {
   margin-bottom: 20px;
 }

 .v-card__title {
   background-color: rgb(25, 138, 153);
   opacity: 0.8;
   font-size: 14px;
   line-height: 16px;
   
 }

 .v-image__image {
      filter:grayscale(0.3);
 }



</style>
