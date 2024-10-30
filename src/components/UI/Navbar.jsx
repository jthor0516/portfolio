export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <h3 class='h3' className="text-light px-4">Jayce Thoreson</h3>
                    <ul className="navbar-nav">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}