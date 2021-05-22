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
      v-for="(item, i) in list.arr" 
      :key="item.title"
      >
        <li 
        :class="list.active === i ? 'grey--text' : ''"
        @click="goToRouter({
          url: item.url,
          i: i
        })"
        >
          {{item.title}}
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
    list: { 
      arr: [
        {title: 'Погода', url: '/'},
        {title: 'Время', url: '/time'}
      ],
      active: 0
    }
  }),
  mounted() {
    this.time = setInterval(() => this.date = new Date(), 1000)
  },
  methods: {
    goToRouter(obj) {
      this.$router.push(obj.url)
      this.list.active = obj.i
    }
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