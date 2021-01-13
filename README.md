# is-development-mode

Determine whether Node is running in development mode.

🤯 Mind blowing stuff 🤯

## Motivation

Everyone else has a silly one-liner in NPM with 8,000,000,000 downloads a week that eventually ends up getting compromised and a security exploit infects the entire internet - so I figured _why not me too_ ¯\\\_(ツ)\_/¯

## Installation

NPM: `npm install is-development-mode`

Yarn: `yarn add is-development-mode`

## Usage

```typescript
import { isDevelopmentMode } from 'is-development-mode';

if (isDevelopmentMode()) {
  console.log('We are in development mode 👍');
}
```
