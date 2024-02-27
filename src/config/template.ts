import type { TileServerGlConfig } from './types'

const config: TileServerGlConfig = {
	options: {
		paths: {
			root: 'assets',
			fonts: 'fonts',
			styles: 'styles',
			sprites: 'sprites',

			mbtiles: 'data',
		},
		domains: ['127.0.0.1:8080'],
		formatQuality: {
			webp: 90,
		},
		maxScaleFactor: 3,
		maxSize: 2048,
		pbfAlias: 'pbf',
		serveAllFonts: false,
		serveAllStyles: false,
		serveStaticMaps: true,
		tileMargin: 0,
	},
	styles: {
		basic: {
			style: 'basic.json',
			tilejson: {
				type: 'overlay',
				bounds: [-6.3, 41.27688, 9.8, 51.32937],
			},
		},
		brand: {
			style: 'brand.json',
			tilejson: {
				type: 'overlay',
				bounds: [-6.3, 41.27688, 9.8, 51.32937],
			},
		},
	},
	data: {},
}

export default config
