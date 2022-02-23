import type { Employee } from '../employee/employee.ts';
import {Designer} from '../employee/designer.ts';
import {Programmer} from '../employee/programmer.ts';
import { Tester } from '../employee/tester.ts';

export class Company {
  #employees: Array<Employee> = [];

  getEmployees() { 
    return this.#employees;
  }

  createSoftware() {
    this.#employees.push(new Tester());
    this.#employees.push(new Designer());
    this.#employees.push(new Programmer());

    this.#employees.forEach(employee => employee.doWork());
  }
}