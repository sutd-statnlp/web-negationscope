import negationService from './NegationService'

describe('ServerService.js', () => {
  it('should return endpoint', () => {
    let sentence = 'This is sample sentence'
    let cues = ['', '', '', '']
    let result = negationService.detect(sentence, cues)
    expect(result).not.toBeNull()
  })
})
