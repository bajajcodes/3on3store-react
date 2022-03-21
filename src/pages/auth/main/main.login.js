import {Link} from "react-router-dom";

function AuthLogin(){
    return(
        <main className="main">
        <form className="dgrid-section">
          <div className="flex-nowrap input-group dgrid-fieldset">
            <span className="input-group-text">Email</span>
            <input type="text" className="input" />
          </div>
  
          <div className="flex-nowrap input-group dgrid-fieldset">
            <div className="dflex">
              <span className="input-group-text">Password</span>
              <Link to="#">
                <span className="input-group-text text-decoration-underline">
                  Forgot your password?
                </span>
              </Link>
            </div>
            <input type="text" className="input" />
          </div>
  
          <button className="btn btn-secondary" to="/login"> Login </button>
        </form>
      </main>
    )
}

export {AuthLogin};