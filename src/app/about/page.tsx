import styles from './page.module.css';

export default function AboutPage() {
    return (
        <>
            <div className={styles["heroSection"]}>
                <img src="/Media/Droid.jpg" alt="" />
                <h1>About</h1>
            </div>
            <div className={styles["part1"]}>
                <div>
                    <h1>My name is <br /> Chaim Mendes.</h1>
                </div>
                <div className={styles["secondCircle"]}>
                    <h2>Unprofessionally, I am a web developer and a Blender artist who believes in making beautiful digital experiences and seamless functionality. Professionally? I am nothing. Yet. (It's called education.)</h2>
                </div>
            </div>
            <div className={styles["part2"]}>
                <div>
                    <div style={{ backgroundImage: "url('/Media/MarsMissions/Spirit.jpg')" }}>
                        <h3>in the</h3>
                        <h2>SPIRIT</h2>
                        <p className={styles["missionLabel"]}>Mars Rover 1</p>
                    </div>
                    <div style={{ backgroundImage: "url('/Media/MarsMissions/Ingenuity.jpg')" }}>
                        <h3>of</h3>
                        <h2>INGENUITY</h2>
                        <p className={styles["missionLabel"]}>The Original Mars Helicopter</p>
                    </div>

                </div>
                <div>
                    <div style={{ backgroundImage: "url('/Media/MarsMissions/Dart.jpg')" }}>
                        <h2>DART</h2>
                        <h3>ing</h3>
                        <p className={styles["missionLabel"]}>Double Asteroid Redirection Test</p>
                    </div>
                    <div style={{ backgroundImage: "url('/Media/MarsMissions/Curiosity.jpg')" }}>
                        <h3>with</h3>
                        <h2>CURIOSITY</h2>
                        <p className={styles["missionLabel"]}>The Small Big Brother</p>
                    </div>

                </div>
                <div>
                    <div style={{ backgroundImage: "url('/Media/MarsMissions/odessy.jpg')" }}>
                        <h3>the</h3>
                        <h2>ODYSSEY</h2>
                        <p className={styles["missionLabel"]}>The Oldest Mars Orbiter</p>
                    </div>
                    <div style={{ backgroundImage: "url('/Media/MarsMissions/Voyager.jpg')" }}>
                        <h3>and the</h3>
                        <h2>VOYAGER</h2>
                        <p className={styles["missionLabel"]}>The Furthest We Ever Went</p>
                    </div>

                </div>

            </div>
            <div className={styles["part3"]}>
                <div>
                    <h2>Get In Touch</h2>
                    <h3>Our (sole) developer is currently undergoing a fairly long process known as education. This should take under a decade. In case you are interested in any of the assets/3D models on this site, feel free to reach out!</h3>
                    <address className={styles["address"]}>
                        Visit my <a href="https://www.turbosquid.com/Search/Artists/Codebotix" >Turbosquid Store.</a> <br />
                        Visit my <a href="https://www.cgtrader.com/designers/help-codebotix">CGTrader Store.</a> <br />
                        Or Contact me at <a href="mailto:chaimthemendes@gmail.com">chaimthemendes@gmail.com</a>
                    </address>
                </div>

            </div>
        </>
    )
}