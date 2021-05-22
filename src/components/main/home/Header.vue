<template>
  <v-row class="d-flex justify-center py-10">
    <v-col cols="4">
      <form 
      class="d-flex align-center" 
      @submit.prevent="onSubmit({id: city.current})"
      >
        <v-autocomplete
        class="mr-5"
        auto-select-first
        :items="city.arr"
        v-model="city.current"
        item-text="title"
        return-object
        clearable
        label="Выбери город"
        />
        <v-btn 
        class="button" 
        type="submit"
        
        >
          Показать погоду
        </v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import db from '@/mixins/axios.mixins.js'

export default {
  data:() => ({
    city: {
      arr: [
        {title: 'Самара', id: '499099'},
        {title: 'Москва', id: '524894'},
        {title: 'Санкт-Петербург', id: '498817'},
        {title: 'Саратов', id: '498677'},
        {title: 'Челябинск', id: '1508291'},
      ],
      current: {},
    }
  }),
  mixins: [db],
  methods: {
    async onSubmit(obj) {
      try {
        if(obj) {
          const id = obj.id.id
          const api = await this.getAxios({id}) 
          this.$emit('changeData', {data: api.data})
        }
      } catch {
        console.log('err')
      }
    },
  }
}
</script>