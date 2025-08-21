# POKEAPP

Aplicacion para listar pokemons, obtenidos de pokeapi. Implementa la busqueda de pokemones, paginacion local, y persistencia local de la data.

## Instrucciones para ejecucion local

### Dependencias
- Node 22
- Go 1.24.5

### Front-end
- Clonar repo
```
git clone https://github.com/Edax97/pokeApp
cd pokeApp
```
- Instalar dependencias
```
npm i
```
- Iniciar el servidor de desarrollo:
```
npm run dev
```
- La URL del back apuntara por defecto a `http://localhost:8000`

### Back-end
- Clonar repo
```
git clone https://github.com/Edax97/api
cd api
```
- Instalar dependencias
```
go mod tidy
```
- Ejecutar servidor en `http://localhost:8000`
```
go run .
```

## Stack

### Front-end
- React levantado con Vite
- Tailwind v3 para estilos
- Vercel para el despliegue continuo: [app](https://poke-app-ashen.vercel.app/)

### Back-end
- Cliente en go del API pokeapi: [pokeapi-go](https://github.com/mtslzr/pokeapi-go/tree/master)
- Router con la libreria estandar net/http
- Geneacion de imagen con docker
- Despliegue como Azure Webapp desde un Azure Container Registry

## Desiciones de diseño

### Metodos del API
```
GET URL/pokelist/
JSON [{ "url", "name"}]
```
```
GET URL/poke/:name
JSON {
  name: string
  abilities: string[]
  sprite: string
  stats: {
    hp: number
    attack: number
    defense: number
    special_attack: number
    special_defense: number
    speed: number
  }
}

```

- Se opto por exponer dos metodos en el API y realizar la busqueda y paginacion enteramente desde el front-end. Debido a ello, la data (`/pokelist/`, solo incluye `url` y `name`) no es tan grande y se puede realizar el filtrado con eficiencia.

- Las alternativa de enviar la lista de pokemones paginada desde el back complejiza el filtrado (se tendria que incluir un metodo de busqueda) y el guardado local de la data.

- La gran cantidad de llamadas al API (una por cada `/poke/:name`) se ve mitigada por la persistencia local de datos en el cliente, y por los mecanismos de cache en el servidor (implementados en `pokeapi-go`).

- De esta manera tambien se reduce la codependencia entre el cliente y la API.


