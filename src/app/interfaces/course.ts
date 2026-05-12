export interface Course {
  id: number,
  title: string,
  subtitle: string,
  keySkill: string,
  imageUrl: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  location: string,
}