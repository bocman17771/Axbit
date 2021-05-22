<template>
  <div>
    <Loading v-if="loading"/>
    <v-container v-else>
      <Header
      @changeData="changeData"
      />
      <Body
      :data="data"
      />
    </v-container>
  </div>
</template>

<script>
import Header from './Header'
import Body from './Body'
import db from '@/mixins/axios.mixins.js'
import Loading from '@/components/app/Loading'

export default {
  data: () => ({
    loading: true,
    data: []
  }),
  components: {
    Header,
    Body,
    Loading
  },
  mixins: [db],
  methods: {
    changeData(obj) {
      this.data = obj.data
    }
  },
  async created() {
    const api = await this.getAxios({
      id: 499099
    })
    this.data = api.data
    this.loading = false
  }
}
</script>

<style>

</style>