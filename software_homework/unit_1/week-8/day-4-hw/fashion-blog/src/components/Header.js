function Header() {
    return (
        <header>
            <h1 style={{fontSize: '8vw'}} className="blog-title"> Sarte's List</h1>
            <h2>Better-Dressed People</h2> 
            <nav> 
                <ul className= "nav-header" aria-label="Main Navigation" role="navigation">
                    <li>
                        {/* eslint-disable */}
                        <a href="#"> Women's</a>
                        {/* eslint-enable */}
                    </li>
                     <li>
                        {/* eslint-disable */}
                        <a href="#"> Men's</a>
                        {/* eslint-enable */}
                    </li>
                    <li>
                        {/* eslint-disable */}
                        <a href="#"> On the Street</a>
                        {/* eslint-enable */}
                    </li>
                    <li>
                        {/* eslint-disable */}
                        <a href="#"> The Catwalk</a>
                        {/* eslint-enable */}
                    </li>
                    <li>
                        {/* eslint-disable */}
                        <a href="#"> AdWatch</a>
                        {/* eslint-enable */}
                    </li>
                    <li>
                       {/* eslint-disable */}
                       <a href="#"> About</a>
                        {/* eslint-enable */}
                    </li>
                </ul>    
            </nav>
        </header>
    );
}


export default Header ; 