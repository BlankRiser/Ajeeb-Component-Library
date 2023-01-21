# import/export

## Importing UI Components

- The path of **ui** folder in `tsconfig.json` is set to `./src/ui` so you can import components from `ui` folder like below, so you have to ensure that all the components are exported in `index.ts` file in the root of `ui` folder.

```tsx
import { Button } from '@ui';
```
