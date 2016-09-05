# module-paths

Load the paths of your dependencies:

## Usage

```js
import modulePaths from 'module-paths'

modulePaths(process.mainModule)
```

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Transpile the source code and watch for changes: `npm start`
4. Within the module you want to test your local development instance of args, just link it to the dependencies: `npm link args`. Instead of the default one from npm, node will now use your clone of args!
