import type { Employee } from './employee.ts'

export class Programmer implements Employee {
  doWork(): void {
    console.log('Programming stuff...')
  }
}