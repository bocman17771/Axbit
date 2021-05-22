<template>
  <v-card
    class="mx-auto py-10"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{data.name}}
        </v-list-item-title>
        <v-list-item-subtitle 
        v-for="item in data.weather" 
        :key="item.id"
        >
          {{item.description}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="display-3"
          cols="6"
        >
        {{getTemp}}&deg;C
        </v-col>
        <v-col cols="6">
          <div 
          :class="`bckg bckg_${weather.main}`"
          v-for="weather in data.weather"
          :key="weather.id"
          />
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{data.wind.speed}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{data.clouds.all}}%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      default: []
    }
  },
  computed: {
    getTemp() {
      let temp = this.data.main.temp - 273.15
      return Math.trunc(temp)
    }
  }
}
</script>

<style lang="scss" scoped>
  .bckg {
    height: 92px;
    width: 92px;
    background-position: center;
    background-size: cover;
    &_Rain {
      background-image: url('~@/assets/img/rain.png'),;
    }
    &_Sun {
      background-image: url('~@/assets/img/sun.png'),;
    }
    &_Clouds {
      background-image: url('~@/assets/img/clouds.jpg'),;
    }
  }
</style>