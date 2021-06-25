import simpleRestProvider from "ra-data-simple-rest";

const restProvider = simpleRestProvider("http://localhost:8080")

const delayedDataProvider = new Proxy(restProvider, {
    get: (target, name, self) =>
        name === 'then' ? self : (resource, params) => new Promise(
            resolve => setTimeout(
                () => resolve(restProvider(resource, params)), 500
            ))
})

export default delayedDataProvider;