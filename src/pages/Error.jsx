import { NavLink } from "react-router-dom"
import '../Style/Error.css'



function Error () {
    return (
        <div className="errorText">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'éxiste pas.</h2>
          <NavLink className={"styleLien"} to="/">
          <h3>Retournez sur la page d'accueil</h3>
          </NavLink>

        </div>
    )
}
export default Error