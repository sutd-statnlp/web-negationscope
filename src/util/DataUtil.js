export const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>]/

class DataUtil {
  isOrContainSpecialChar (word) {
    return word.match(SPECIAL_CHAR_REGEX)
  }
  seperateSpecialChar (words) {
    let sentence = ''
    words.forEach(word => {
      sentence += this.convertWordBySpecialChar(word) + ' '
    })
    return sentence.trim().split(' ')
  }
  convertWordBySpecialChar (word) {
    if (!this.isOrContainSpecialChar(word)) {
      return word
    }
    let result = ''
    let chars = word.split('')
    for (let index = 0; index < chars.length; index++) {
      const char = chars[index]
      if (this.isOrContainSpecialChar(char)) {
        result += ` ${char}`
        continue
      }
      result += char
    }
    return result
  }
  convertWordByScope (word, scope, startTag, endTag) {
    if (!scope) {
      return `${word} `
    }
    return `${startTag}${word} ${endTag}`
  }
  convertWordByCue (word, cue, startTag, endTag) {
    if (!word.includes(cue) || !word || !cue) {
      return word
    }
    let result = ''
    let wordChars = word.split('')
    let cueChars = cue.split('')
    let isMatched = false
    for (let index = 0; index < wordChars.length; index++) {
      let char = wordChars[index]
      if (cueChars[index] && !isMatched) {
        isMatched = true
        result += `${startTag}${char}`
      } else if (!cueChars[index] && isMatched) {
        isMatched = false
        result += `${endTag}${char}`
      } else {
        result += char
      }
    }
    return result
  }
}

export default new DataUtil()
