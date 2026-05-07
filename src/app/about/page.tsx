import styles from './page.module.css';

export default function AboutPage() {
    return (
        <>
            <div className={styles["heroSection"]}>
                <img src="/Media/Droid.png" alt="" />
                <h1>About</h1>
            </div>
            <div className={styles["part1"]}>
                <div>
                    <h1>My name is <br /> Chaim Mendes.</h1>
                </div>
                <div className={styles["secondCircle"]}>
                    <h2>Unprofessionaly, I am Web Developer and Blender artist who believes in making beautiful digital experiences and seamless functionality. Professionaly, I am nothing. Yet. Its callled education.</h2>
                </div>
            </div>
            <div className={styles["part2"]}>
                <div>
                    <div style={{ backgroundImage: "url('/Media/MarsMisssions/Spirit.jpg')" }}>
                        <h3>the</h3>
                        <h2>SPIRIT</h2>
                    </div>
                    <div style={{ backgroundImage: "url('/Media/MarsMisssions/Spirit.jpg')" }}>
                        <h3>of</h3>
                        <h2>INGENUITY</h2>
                    </div>

                </div>
                <div>
                    <div style={{ backgroundImage: "url('/Media/MarsMisssions/Spirit.jpg')" }}>
                        <h2>DART</h2>
                        <h3>ing</h3></div>
                    <div style={{ backgroundImage: "url('/Media/MarsMisssions/Spirit.jpg')" }}>
                        <h3>with</h3>
                        <h2>CURIOSITY</h2>
                    </div>

                </div>
                <div>
                    <div style={{ backgroundImage: "url('/Media/MarsMisssions/Spirit.jpg')" }}>
                        <h3>the</h3>
                        <h2>ODESSEY</h2>
                    </div>
                    <div style={{ backgroundImage: "url('/Media/MarsMisssions/Spirit.jpg')" }}>
                        <h3>and the</h3>
                        <h2>VOAGE</h2>
                    </div>

                </div>
            </div>
        </>
    )
}