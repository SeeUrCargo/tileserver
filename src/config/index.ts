import { DOMAIN, MBTILES_PATH, MBTILES_FILENAME } from '~/env'

import defaultConfig from './template'
import type { TileServerGlConfig } from './types'

const config: TileServerGlConfig = {
	...defaultConfig,
	options: {
		...defaultConfig.options,
		domains: [DOMAIN],
		paths: {
			...defaultConfig.options.paths,
			mbtiles: MBTILES_PATH,
		},
	},
	headers: {
		...defaultConfig.headers,
		'Access-Control-Allow-Origin': '*',
	},
	data: {
		[MBTILES_FILENAME]: {
			mbtiles: `${MBTILES_FILENAME}.mbtiles`,
		},
	},
}

export default config
