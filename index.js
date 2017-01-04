// Native
const path = require('path')

module.exports = mainModule => {
  const modulePaths = []

  for (const moduleInfo of mainModule.children) {
    const pathParts = moduleInfo.filename.split(path.sep)
    let where = ''

    for (const part of pathParts) {
      const index = pathParts.indexOf(part)

      if (part === 'node_modules') {
        const position = index + 2

        for (let step = 0; step < position; step++) {
          where += pathParts[step] + '/'
        }

        break
      }
    }

    modulePaths.push(path.resolve(where))
  }

  return modulePaths
}
