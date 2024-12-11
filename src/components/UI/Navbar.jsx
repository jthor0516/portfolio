export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <h3 className=" h3 text-light px-4">Jayce Thoreson</h3>
                    <ul className="navbar-nav">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}