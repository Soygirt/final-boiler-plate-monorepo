import styles from '../styles/LogIn.module.css'
import { Header } from '../components/Header.jsx'
import { NavBar } from '../components/NavBar.jsx'
import { Footer } from '../components/Footer.jsx'

export const LogIn = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/login')
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    return (
        <>
            <div className={styles.siteContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.headingContainer}>
                        <Header />
                        <NavBar />
                    </div>
                    <div className={styles.headerImage}>
                        <h2>LOG IN</h2>
                    </div>
                    <div className={styles.logInWrapper}>
                        <div className={styles.textWrapper}>
                        <p>This is the log in page for dog adoption organisations.</p>
                        <p>Are you representing an organisation? E-mail us at admin@rescuehelper.com to get verified.</p>
                        </div>
                        <div className={styles.formWrapper}>
                        <div className={styles.inputWrapper}>
                            <label for="username">Username</label>
                            <input name="username" id="username" type="text" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label for="password">Password</label>
                            <input name="password" id="password" type="text" />
                        </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default LogIn