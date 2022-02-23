import type { Employee } from './employee.ts'

export class Tester implements Employee { 
  doWork(): void {
    console.log('Testing stuff...')
  }
}
