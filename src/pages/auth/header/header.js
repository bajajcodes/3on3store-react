import {Link} from "react-router-dom";

function AuthHeader({headerInfo, logoImage, ecommerceName}){
    const {authTo, authToName, authMessage} = headerInfo;
    const {logoPath, logoDesc} = logoImage;
    return(
        <header className="header">
        <nav className="nav">
            <div className="navbar-brand">
                <Link to="/" className="nav-link">
                    <img src={logoPath} alt={logoDesc}  className="d-inline-block align-text-top logo-img" />
                    <span className="estore-name">{ecommerceName}</span>
                </Link>
            </div>

            <div className="actions">
                <Link to={`/${authTo}`}>{authToName}</Link>
            </div>

            <h1>{authMessage}</h1>
        </nav>
    </header>
    )
}

export {AuthHeader};