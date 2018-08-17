import negationService from './NegationService'

describe('ServerService.js', () => {
  it('should return endpoint', () => {
    let words = ['', '', '', '']
    let cues = ['', '', '', '']
    let result = negationService.detect(words, cues)
    expect(result).not.toBeNull()
  })
})
