
class ApiService {
  constructor () {
    this.apiUrl = process.env.API_URL || 'http://127.0.0.1:8000/api'
  }
  getApiEndpoint () {
    return this.apiUrl
  }
  getDetectEndpoint () {
    return `${this.getApiEndpoint()}/detect`
  }
}

export default new ApiService()
