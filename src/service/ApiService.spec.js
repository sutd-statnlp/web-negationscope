import apiService from './ApiService'

describe('ApiService.js', () => {
  it('should return api endpoint', () => {
    let result = apiService.getApiEndpoint()
    expect(result).not.toBeNull()
    expect(result.length).toBeGreaterThan(0)
  })
  it('should return detect endpoint', () => {
    let result = apiService.getDetectEndpoint()
    expect(result).not.toBeNull()
    expect(result.length).toBeGreaterThan(0)
  })
})
