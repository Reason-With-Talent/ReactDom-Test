import { Link } from 'react-router-dom'
const AboutPage = () => {

    return(
        <>
        <h1>About Page</h1>
        <Link to={"/"}><button>Go To Home Page</button></Link>
        </>
    )
}
export default AboutPage;