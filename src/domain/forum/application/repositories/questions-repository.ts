import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  findBySlug(slyg: string): Promise<Question | null>
  create(question: Question): Promise<void>
}
