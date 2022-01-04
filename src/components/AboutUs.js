import chair from "../assets/img/chair.png";
import '../css/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="component">
            <img src={chair} alt="chaise" id="chair"/>
            <article id="aboutUs">
                <h2><span id="puce">&nbsp;</span> ABOUT US</h2>
                Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw
                Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that
                shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                <section>
                    <span>LEARN MORE</span>
                </section>
            </article>
        </div>
    );
}

export default AboutUs;