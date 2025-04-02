import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className="navContainer">
                <h2>API MASTER</h2>
                <ol className="tabs" style={{ listStyle: "none" }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </div>
        </>
    )
}
export default Nav;