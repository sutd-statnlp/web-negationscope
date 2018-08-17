import axios from 'axios'
import apiService from './ApiService'

export default {
  detect (words, cues) {
    let url = apiService.getDetectEndpoint()
    return axios.post(url, {
      words: words,
      cues: cues
    })
  }
}
