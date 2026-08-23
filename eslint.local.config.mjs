import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createConfig } from '@ankhorage/devtools/eslint';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  ...createConfig({
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    files: ['examples/**/*.{ts,tsx}'],
  }),
  {
    // Tests are intentionally excluded from the build config and linted through the existing test-aware project.
    files: ['src/**/*.test.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    files: ['src/ChessBoard.tsx'],
    rules: {
      // The pre-existing board component and square renderer exceed the new Devtools 1.6 size threshold.
      'max-lines-per-function': 'off',
      // The existing disabled-state opacity is a deliberate dynamic React Native style.
      'react-native/no-inline-styles': 'off',
      // The typed, constant Unicode-piece table is a closed lookup rather than untrusted object access.
      'security/detect-object-injection': 'off',
    },
  },
  {
    files: ['src/OpeningBook.tsx'],
    rules: {
      // The pre-existing presentational component exceeds the new Devtools 1.6 size threshold.
      'max-lines-per-function': 'off',
    },
  },
  {
    files: ['src/meta.test.ts'],
    rules: {
      // The existing registry-contract test exceeds the new threshold without affecting package implementation.
      'max-lines-per-function': 'off',
    },
  },
];
