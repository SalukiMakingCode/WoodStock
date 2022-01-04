import "../css/Shop.css";
import restaurant from "../assets/img/wood-restaurant.png";

const Shop = () => {
    return (
        <div className="component">
            <article id="shop">
                <h2><span id="puce">&nbsp;</span> SHOP</h2>
                Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone
                into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he
                better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                <section>
                    <span>LEARN MORE</span>
                </section>
            </article>
            <img src={restaurant} alt="chaise" id="restaurant"/>
        </div>
    );
}

export default Shop;