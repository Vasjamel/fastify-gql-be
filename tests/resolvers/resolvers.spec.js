const resolvers = require('../../src/resolvers/index.js');

describe('Resolvers', () => {
  test('should have Query and Mutation fields', () => {
    expect(resolvers).toHaveProperty('Query');
    expect(resolvers).toHaveProperty('Mutation');
  });
});
