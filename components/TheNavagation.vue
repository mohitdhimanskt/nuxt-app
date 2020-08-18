<template>
  <nav>
    <template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <nuxt-link to="/">
          <v-img
            alt="Far Out Himalayas Logo"
            class="shrink mr-2"
            contain
            src="https://farout.herokuapp.com/static/FOH.PNG"
            transition="scale-transition"
            width="40"
          />
        </nuxt-link>

        <v-app-title class="headline text-uppercase">
          <span class="font-weight-light red--text">Far Out Himalayas</span>
        </v-app-title>
      </div>

      <v-spacer></v-spacer>

      <nuxt-link to="/about">
        <v-btn>
          <span class="mr-2">ABOUT US</span>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/login">
        <v-btn>
          <span class="mr-2">Login</span>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/sign up">
        <v-btn>
          <span class="mr-2">SIGN UP</span>
        </v-btn>
      </nuxt-link>
    </v-app-bar>
  </v-app>
</template>
  </nav>

</template>

<style scoped>
nav {
  padding: 0 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}
</style>
