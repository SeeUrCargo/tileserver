import { $ } from 'bun'

import config from '~/config'

const run = () => $`bunx tileserver-gl-light --config config.json --port 3001 --no-cors`
const configure = () => Bun.write('config.json', JSON.stringify(config))

await configure()
await run()
