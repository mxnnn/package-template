import type { JestConfigWithTsJest } from 'ts-jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.spec.ts'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules'],
} satisfies JestConfigWithTsJest;
