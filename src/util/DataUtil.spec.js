import dataUtil from './DataUtil'

describe('DataUtil.js', () => {
  describe('isOrContainSpecialChar', () => {
    it('should return not null', () => {
      let result = dataUtil.isOrContainSpecialChar('sample.')
      expect(result).not.toBeNull()

      result = dataUtil.isOrContainSpecialChar('.')
      expect(result).not.toBeNull()

      result = dataUtil.isOrContainSpecialChar('?')
      expect(result).not.toBeNull()

      result = dataUtil.isOrContainSpecialChar(':')
      expect(result).not.toBeNull()
    })
    it('should return null', () => {
      let result = dataUtil.isOrContainSpecialChar('sample')
      expect(result).toBeNull()

      result = dataUtil.isOrContainSpecialChar('')
      expect(result).toBeNull()
    })
  })
  describe('seperateSpecialChar', () => {
    it('should return words', () => {
      let result = dataUtil.seperateSpecialChar('Hello word.'.split(' '))
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result.length).toEqual(3)
    })
  })
  describe('convertWordBySpecialChar', () => {
    it('should return word', () => {
      let result = dataUtil.convertWordBySpecialChar('Hello')
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result).toEqual('Hello')
    })
    it('should return word with space', () => {
      let result = dataUtil.convertWordBySpecialChar('Hello.')
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result).toEqual('Hello .')
    })
  })
  describe('convertWordByMatching', () => {
    it('should return converted word', () => {
      let result = dataUtil.convertWordByMatching('Hello', true, '<span>', '</span>')
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result).toEqual('<span>Hello </span>')

      result = dataUtil.convertWordByMatching('Hello', false, '<span>', '</span>')
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result).toEqual('Hello ')
    })
  })
  describe('convertWordByCue', () => {
    it('should return converted word', () => {
      let result = dataUtil.convertWordByCue('Hello', 'He', '<span>', '</span>')
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result).toEqual('<span>He</span>llo')

      result = dataUtil.convertWordByCue('Hello', '', '<span>', '</span>')
      expect(result).not.toBeNull()
      expect(result.length).toBeGreaterThan(0)
      expect(result).toEqual('Hello')
    })
  })
})
