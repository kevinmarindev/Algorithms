const missing = require('./index');

test('missing is a function', () => {
  expect(typeof missing).toEqual('function');
});

test('Long sentence', () => {
  const str1 = "Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing";
  const str2 = "Python is an easy to learn powerful programming language";
  const missingWord = missing(str1, str2);

  expect(missingWord).toEqual(['It', 'has', 'efficient', 'high-level', 'data', 'structures', 'and', 'a', 'simple', 'but', 'effective', 'approach', 'to', 'objectoriented', 'programming', 'Python', 'elegant', 'syntax', 'and', 'dynamic', 'typing']);
});

test('short word and  testing caps', () => {
  const missingWord = missing('I love it', 'Love');

  expect(missingWord).toEqual(['I', 'love', 'it']);
});
