const resolvers = require('../../../src/resolvers/index.js');

const QUERY_FIELDS = ['pupils', 'lessons', 'teachers', 'users', 'lessonContents'];

describe('Query', () => {
  test('should contain the correct fields', () => {
    Object.keys(resolvers.Query).forEach((query) => {
      expect(QUERY_FIELDS.some((method) => method === query)).toBe(true);
      expect(typeof resolvers.Query[query]).toBe('function');
    });

    QUERY_FIELDS.forEach((field) => {
      expect(resolvers.Query).toHaveProperty(field);
      expect(typeof resolvers.Query[field]).toBe('function');
    });
  });
});
