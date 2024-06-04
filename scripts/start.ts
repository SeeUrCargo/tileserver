import { $ } from 'bun'

import { PORT } from '~/env'
import config from '~/config'

const run = () => $`npx tileserver-gl-light --config config.json --port ${PORT}`
const configure = () => Bun.write('config.json', JSON.stringify(config))

await configure()
await run()
