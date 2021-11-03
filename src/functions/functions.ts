import { v4 } from "uuid";

/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */
export function output(rowCount: number): string[][] {
  const result: string[][] = [];

  for (let i = 0; i < rowCount; ++i) {
    let row: string[] = [];

    for (let j = 0; j < 20; ++j) {
      row.push(v4());
    }

    result.push(row);
  }

  return result;
}
