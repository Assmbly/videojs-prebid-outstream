# Contributing
## Requirements

-   [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)
-   [docker compose](https://docs.docker.com/compose/install/)

1. Copy `docker-compose.override.example.yml` into `docker-compose.override.yml` and adjust overrides as required.
2. Run `docker-compose run --rm plugin npm ci` (this step is optional, but will provide types if your editor does not automatically resolve type defs.)
3. Run `docker-compose up`

## Plugin

### Build
```
docker-compose run --rm plugin npm run build
```

### Release
Excerpt about how to release


### Test
```
docker-compose run --rm plugin npm run test
```

### Linting
```
docker-compose run --rm plugin npm run lint
```
