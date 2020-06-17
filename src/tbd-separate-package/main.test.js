import path from 'path'

test('path resolved', () => {
  expect(path.resolve('./foo')).toContain(__dirname)
})
