<template>
  <v-app-bar
  app
  color="primary"
  dark
  >
    <div class="d-flex align-center mr-10">
      <h2 class="display-1 grey--text text--lighten-1">
        Axbit
      </h2>
    </div>
    <nav class="d-flex align-center">
      <ul 
      v-for="item in list" 
      :key="item.title"
      >
        <li>
          <router-link
          tag="li"
          active-class="grey--text"
          :to="item.url"
          :exact="item.exact"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <v-spacer/>
    <span class="headline">
      {{date | date('time')}}
    </span>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    time: null,
    list: [
      {title: 'Погода', url: '/', exact: true},
      {title: 'Время', url: '/time'}
    ],
  }),
  mounted() {
    this.time = setInterval(() => this.date = new Date(), 1000)
  }
}
</script>

<style lang="scss" scoped>
  li {
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }
</style>