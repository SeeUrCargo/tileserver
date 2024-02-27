import { $ } from 'bun'

import config from '~/config'

const run = () => $`bunx tileserver-gl-light -c config.json`
const configure = () => Bun.write('config.json', JSON.stringify(config))

await configure()
await run()
