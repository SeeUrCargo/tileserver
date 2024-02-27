# map.tiles

### Setup

Download data `planet.mbtiles`:

```shell
wget https://cdn.tilea.io/free-downloads/200106/planet-200106.mbtiles
```

Configure `.env`

```shell
NODE_ENV=

CORS="CORS_HEADER_VALUE"
DOMAIN=
MBTILES_PATH=
MBTILES_FILENAME=
```

### Usage

Run server:

```shell
bun run start
```

and stop:

```shell
bun run stop
```

### Useful Links

-   [bun](https://bun.sh/)
-   [pm2](https://pm2.keymetrics.io/)
-   [tileserver-gl-light](https://github.com/jdesboeufs/tileserver-gl-light/blob/master/README.md)
