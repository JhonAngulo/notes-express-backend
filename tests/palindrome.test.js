const { palindrome } = require('../utils/for_testing')

test('palindrome of manuel', () => {
  const result = palindrome('manuel')
  expect(result).toBe('leunam')
})

test('palindrome of empty string', () => {
  const result = palindrome('')
  expect(result).toBe('')
})

test('palindrome of undefined', () => {
  const result = palindrome()
  expect(result).toBeUndefined()
})