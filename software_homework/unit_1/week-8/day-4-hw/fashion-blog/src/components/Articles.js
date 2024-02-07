import brooklynImage from "./images/brooklyn.jpg" ;
import vintageVogue from "./images/vintagevogue.jpg" ;

function Articles(){
    return (
        <main>
            <section>
                <article className="App-articles">
                    <h2>11/12/20</h2>
                    <h1 className="blog-title"> On the Street in Brooklyn</h1>
                    <img src={brooklynImage} alt="on the street in brooklyn"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem quod facilis omnis est, possimus sequi laborum placeat a odio minima nostrum doloremque numquam assumenda alias quasi dolor consequuntur reprehenderit.</p>
                    <a className='continues' href="">Continues...</a>
                </article>
                <article className="App-articles">
                    <h2>11/11/20</h2>
                    <h1 className="blog-title" >Vintage in Vogue</h1>
                    <img src={vintageVogue} alt="vintage in vogue"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aliquid porro deserunt accusantium, aut sint incidunt illo neque mollitia necessitatibus corporis, ex voluptas quidem iusto corrupti, architecto fugiat ab doloribus.</p>
                    <a className='continues' href="">Continues...</a>
                </article>
            </section>
        </main>
    )
}

export default Articles ; 