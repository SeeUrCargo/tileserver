import { env } from 'bun'

declare module 'bun' {
	interface Env {
		PORT: number

		DOMAIN: string
		MBTILES_PATH: string
		MBTILES_FILENAME: string
	}
}

export const { DOMAIN, MBTILES_PATH, MBTILES_FILENAME, PORT = 3001 } = env
