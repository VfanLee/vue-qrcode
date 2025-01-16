const { execSync } = require('child_process')

const version = process.argv[2]

function main() {
  console.log(`Publishing version: ${version} to npm...`)

  let tag = ''

  // 判断版本号类型，设置发布标签
  if (version.includes('-alpha')) {
    tag = 'alpha'
    console.log('Publishing as alpha tag...')
  } else if (version.includes('-beta')) {
    tag = 'beta'
    console.log('Publishing as beta tag...')
  } else {
    console.log('Publishing as latest stable version...')
  }

  try {
    const publishCommand = tag ? `npm publish --tag ${tag}` : 'npm publish'
    execSync(publishCommand, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Error while publishing: ${error.message}`)
    process.exit(1)
  }
}

main()
