import axios from 'axios'
import apiService from './ApiService'

export default {
  detect (sentence, cues) {
    let url = apiService.getDetectEndpoint()
    return axios.post(url, {
      sentence: sentence,
      cues: cues
    })
  }
}
