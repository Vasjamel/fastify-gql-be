const resolvers = require('../src/resolvers/index.js');

describe('Resolvers', () => {
  test('should have Query and Mutation fields', () => {
    expect(resolvers).toHaveProperty('Query');
    expect(resolvers).toHaveProperty('Mutation');
  });

  test('Query should contain the correct fields', () => {
    const queryFields = ['pupils', 'lessons', 'teachers', 'users'];
    queryFields.forEach((field) => {
      expect(resolvers.Query).toHaveProperty(field);
      expect(typeof resolvers.Query[field]).toBe('function');
    });
  });

  test('Mutation should contain the correct fields', () => {
    const mutationFields = [
      'createTeacher',
      'createLesson',
      'createPupil',
      'deletePupil',
      // 'deleteLesson',
      'deleteTeacher',
      'updateLesson',
      'updateTeacher',
      'updatePupil',
    ];

    Object.keys(resolvers.Mutation).forEach((mutation) => {
      expect(mutationFields.some(method => method === mutation)).toBe(true)
      expect(typeof resolvers.Mutation[mutation]).toBe('function');
    })
    
    mutationFields.forEach((field) => {
      expect(resolvers.Mutation).toHaveProperty(field);
      expect(typeof resolvers.Mutation[field]).toBe('function');
    });
  });
});