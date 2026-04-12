import styles from './page.module.css';

export default function AboutPage() {
    return (
        <>
        <div className={styles["heroSection"]}>
            <img src="/Media/Droid.png" alt="" />
            <h1>About</h1>
        </div>
        <div className={styles["part1"]}>
            <h2>My name is Chaim Mendes.</h2>
            <h1>I am Web Developer and Blender artist who believes in making beautiful digital experiences and seamless functionality.</h1>
        </div>
        </>
    )
}