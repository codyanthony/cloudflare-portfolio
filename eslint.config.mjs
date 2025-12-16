import js from "@eslint/js";

export default [
  // ✅ Ignore generated / build artifacts
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      'public/pagefind/**',
      '**/pagefind*.js',
      '.functions/**',
      'functions/.output/**',
    ],
  },

  {
  files: ['functions/**/*.js'],
  languageOptions: {
    globals: {
      fetch: 'readonly',
      Request: 'readonly',
      Response: 'readonly',
      Headers: 'readonly',
      URL: 'readonly',
      URLSearchParams: 'readonly',
      ReadableStream: 'readonly',
      TextEncoder: 'readonly',
      TextDecoder: 'readonly',
      crypto: 'readonly',
      caches: 'readonly',
    },
  },
},

  js.configs.recommended,
  {
    files: ["**/*.mjs"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
