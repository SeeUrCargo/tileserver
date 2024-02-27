import { env } from 'bun'

declare module 'bun' {
	interface Env {
		CORS: string
		DOMAIN: string
		MBTILES_PATH: string
		MBTILES_FILENAME: string
	}
}

export const { CORS, DOMAIN, MBTILES_PATH, MBTILES_FILENAME } = env
