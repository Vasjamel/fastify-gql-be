const resolvers = require('../../../src/resolvers/index.js');

describe('Mutations', () => {
  const MUTATION_FIELDS = [
    'createTeacher',
    'createLesson',
    'createPupil',
    'deletePupil',
    'deleteLesson',
    'deleteTeacher',
    'updateLesson',
    'updateTeacher',
    'updatePupil',
  ];

  test('should contain the correct fields', () => {
    Object.keys(resolvers.Mutation).forEach((mutation) => {
      expect(MUTATION_FIELDS.some((method) => method === mutation)).toBe(true);
      expect(typeof resolvers.Mutation[mutation]).toBe('function');
    });

    MUTATION_FIELDS.forEach((field) => {
      expect(resolvers.Mutation).toHaveProperty(field);
      expect(typeof resolvers.Mutation[field]).toBe('function');
    });
  });
  
});
