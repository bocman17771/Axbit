import axios from 'axios'

export default {  
  methods: {
    getAxios(obj) {
      return axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?id=${obj.id}&lang=ru&appid=2b5982fbfa53c36ec5831ef824013523`
      })
    },
  }
}  