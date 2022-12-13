import api from "./api" // default import export
import * as componets from "./components" // named import export

console.log("hello webpack")

let data = api.httpGet()
componets.createTitle(data)
componets.createP(data)