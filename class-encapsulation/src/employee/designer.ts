import type { Employee } from './employee.ts'

export class Designer implements Employee {
  doWork(): void {
    console.log('Designing stuff...')
  }
}