<template>
  <v-app>
    <v-app-bar 
      app
      color="cyan"
      dark
      flat
    >
      <v-toolbar-title> 
        <g-link to="/" >goSUP
        </g-link>
      </v-toolbar-title>
      <v-text-field
        v-model = "searchText"
        @click:clear = "searchText = ''"
        placeholder = "Search"
        class = "ml-8"
        style="max-width: 350px"
        prepend-inner-icon = "mdi-magnify"
        outlined
        rounded
        dense
        hide-details
        clearable
      />
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col sm="8" offset-sm="2">
            <slot :searchText="searchText"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
 
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>

export default ({
  data() {
    return {
      searchText: ""
    }
  }

})
</script>


<style scoped>
 .v-toolbar__title a {
   text-decoration: none;
   color: yellow;
 }

</style>

 