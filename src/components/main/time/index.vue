<template>
  <v-container>
    <v-row class="mt-10">
      <v-col>
        <h2 class="text-center display-4">
          {{date | date('time')}}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data:() => ({
    date: new Date(),
    time: null,
  }),
  mounted() {
    this.time = setInterval(() => this.date = new Date(), 1000)
  }
}
</script>