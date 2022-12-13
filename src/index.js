import api from "./api" // default import export
import * as componets from "./components" // named import export
import "./styles/styles.sass"
import "./styles/styles2.sass"
import messi from "./img/messicalvo.jpg"
import messi2 from "./img/messirve.jpg"

console.log("hello webpack")

let data = api.httpGet()
componets.createTitle(data)
componets.createP(data)
componets.createImg(messi)
componets.createImg(messi2)