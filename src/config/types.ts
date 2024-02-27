type TileServerGlOptions = {
	formatQuality: {
		webp: number
		jpeg?: number
	}
	paths: {
		root: string
		fonts: string
		mbtiles: string
		styles: string
		sprites: string
	}
	domains: string[]

	maxSize?: number
	pbfAlias?: string
	tileMargin?: number
	maxScaleFactor?: number
	serveAllFonts?: boolean
	serveAllStyles?: boolean
	serveStaticMaps?: boolean
}

type TileServerGlData = {
	mbtiles: string
}

type TileServerGlStyle = {
	style: string
	tilejson: {
		type: 'overlay'
		bounds: [number, number, number, number]
		format?: 'webp'
	}

	serve_rendered?: boolean
}

type TileServerGlConfig = {
	headers?: Dict<string>

	options: TileServerGlOptions
	data: Dict<TileServerGlData>
	styles: Dict<TileServerGlStyle>
}

export type { TileServerGlConfig }
