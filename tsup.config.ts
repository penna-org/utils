import { defineConfig } from "tsup"

export default defineConfig({
    splitting:true,
    shims:false,
    entry:[
        "src/**/*.ts"
    ],
    dts:true,
    clean:true,
    format:["esm","cjs"]
})
