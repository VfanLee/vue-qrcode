const { execSync } = require('child_process')

const playground = process.argv[2] || 'es'
const command = `pnpm -C playgrounds/${playground} dev`

try {
  execSync(command, { stdio: 'inherit' })
} catch (error) {
  console.error(`Failed to run dev for playground: ${playground}`)
  process.exit(1)
}
