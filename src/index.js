import api from "./api" // default import export
import * as componets from "./components" // named import export
import "./styles/styles.css"
import "./styles/styles2.css"
import messi from "./img/messicalvo.jpg"

console.log("hello webpack")

let data = api.httpGet()
componets.createTitle(data)
componets.createP(data)
componets.createImg(messi)