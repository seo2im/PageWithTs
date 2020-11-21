# Page View with Ts

> Object

This Project react Page View with typescript
Make with ts-loader / redux / sass

## Check Points

1. Webpack build with ts
 - Must write **resolve**

2. import
 - react => `import * as React from 'react'` : I don`t know why

3. cant input function value in useState. Why?
 => Always `undefined`.

```javascript
const [ func, setFunc ] = useState<Function>(() => {})

setFunc('/* some function */')

console.log(func) /* undefined */
```