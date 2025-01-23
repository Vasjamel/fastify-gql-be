export const pupils = [
  { id: 1, name: 'John Doe', age: 10, grade: 5, lessons: [1,4,5] },
  { id: 2, name: 'Jane Smith', age: 11, grade: 6, lessons: [2,5,7,] },
  { id: 3, name: 'Sam Brown', age: 9, grade: 4 , lessons: [3]},
  { id: 4, name: 'Emily Johnson', age: 12, grade: 7, lessons: [3] },
  { id: 5, name: 'Michael White', age: 10, grade: 5, lessons: [9,6,3] },
  { id: 6, name: 'Chris Green', age: 11, grade: 6 , lessons: [2,3]},
  { id: 7, name: 'Patricia Black', age: 10, grade: 5, lessons: [7,8,9,6,3] },
  { id: 8, name: 'Robert Brown', age: 12, grade: 7 , lessons: [2,5,7,8,9,6,3]},
  { id: 9, name: 'Linda White', age: 9, grade: 4 , lessons: [2,5,7,8,9]},
  { id: 10, name: 'David Harris', age: 11, grade: 6 , lessons: [2,5,9,6,3]},
  { id: 11, name: 'Barbara Clark', age: 10, grade: 5, lessons: [2,5,7,8,9,6,3] },
  { id: 12, name: 'James Lewis', age: 12, grade: 7, lessons: [2,5,7,8,9,6,3] },
  { id: 13, name: 'Susan Walker', age: 9, grade: 4 , lessons: [2,5,7,6,3]},
  { id: 14, name: 'Joseph Hall', age: 11, grade: 6 , lessons: [6,3]},
  { id: 15, name: 'Karen Allen', age: 10, grade: 5 , lessons: [2,5,7,8]}
]

export const lessons = [
  { id: 1, subject: 'Math', teacher: 1, pupils: [1, 2, 3, 4, 5] },
  { id: 2, subject: 'Science', teacher: 2, pupils: [6, 7, 8, 9, 10] },
  { id: 3, subject: 'History', teacher: 3, pupils: [11, 12, 13, 14, 15] },
  { id: 4, subject: 'English', teacher: 4, pupils: [1, 3, 5, 7, 9] },
  { id: 5, subject: 'Art', teacher: 5, pupils: [2, 4, 6, 8, 10] },
  { id: 6, subject: 'Physical Education', teacher: 6, pupils: [11, 13, 15, 1, 2] },
  { id: 7, subject: 'Music', teacher: 7, pupils: [3, 4, 5, 6, 7] },
  { id: 8, subject: 'Geography', teacher: 8, pupils: [8, 9, 10, 11, 12] },
  { id: 9, subject: 'Computer Science', teacher: 9, pupils: [13, 14, 15, 1, 2] },
  { id: 10, subject: 'Biology', teacher: 10, pupils: [3, 4, 5, 6, 7] }
]

export const teachers = [
  { id: 1, name: 'Mr. Smith', lesson: 1 },
  { id: 2, name: 'Mrs. Johnson', lesson: 2 },
  { id: 3, name: 'Mr. Brown', lesson: 3 },
  { id: 4, name: 'Ms. Davis', lesson: 4 },
  { id: 5, name: 'Mrs. Wilson', lesson: 5 },
  { id: 6, name: 'Mr. Taylor', lesson: 6 },
  { id: 7, name: 'Ms. Anderson', lesson: 7 },
  { id: 8, name: 'Mr. Thomas', lesson: 8 },
  { id: 9, name: 'Mrs. Martinez', lesson: 9 },
  { id: 10, name: 'Mr. Robinson', lesson: 10 }
]



export default { pupils, lessons, teachers }