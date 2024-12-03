export interface ABTest {
  name: string;
  type: 'boolean' | 'number' | 'string';
  default: boolean | number | string;
}
