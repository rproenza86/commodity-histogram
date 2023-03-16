# Commodity Histogram

> [Check the webapp online here!](https://commodity-histogram.vercel.app)

**Commodity Histogram** is a simple Web Application that process CSV files containing agricultural data and compute its histogram.

## Demo

### CommodityType API endpoint

![app demo screenshot](docs/screenshots/comodityType-endpoint.png)

### Commodity API endpoint

![app demo screenshot](docs/screenshots/comodity-endpoint.png)

### End to End

![app demo screenshot](docs/screenshots/demo.gif)

### Unit test

![app demo screenshot](docs/screenshots/testing.png)

## Features/Technical highlights

-   Hosting : Vercel
-   Javascript Framework: ReactJS and NextJS
-   Javascript version: ES6
-   Javascript libraries: Typescript, Jest

## Setup

Create `.env` file and add the next content to run the app locally

```
API_URL=http://localhost:3000
```

```bash
$ npm i
$ npm run dev 
```

## Testing

```bash
$ npm i
$ npm run test 
```