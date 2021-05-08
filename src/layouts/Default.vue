<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title> goSUP </v-toolbar-title>
      <v-text-field
        placeholder = "Search"
        class = "ml-8"
        style="max-width: 350px"
        prepend-inner-icon = "mdi-magnify"
        outlined
        rounded
        dense
        hide-details
      />
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <slot/>
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

 