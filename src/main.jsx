import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"

const root = createRoot(document.getElementById("root"))
function Call()
{
  return(
    <>
      <App/>
    </>
  )
}
root.render(
  <Call/>
)