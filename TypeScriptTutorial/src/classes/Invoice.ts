import { HasFormatter } from '../interfaces/HasFormatter.js';
// classes
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format(){
    // this.client = 'else'; // CANT
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}