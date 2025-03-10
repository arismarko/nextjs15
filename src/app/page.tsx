import styles from "./page.module.css";

export default function Home() {
  console.log("This is a server component");
  return (
    <div className={styles.page}>
        <h1>About me </h1>

        <p>A senior FullStack Developer with years of professional experience gained working 
          on a variety of web enterprise projects in agile environment. I am specialised
           in front and back-end web development, business applications and project management.</p>
    </div>
  );
}
