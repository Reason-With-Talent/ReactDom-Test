import { Link } from 'react-router-dom'
const HomePage = () => {
    
    return(
        <>
        <h1>This is an HomePage</h1>
        <Link to={"/aboutpage"}><button>Go To About Page</button></Link>
        </>
    )
}
export default HomePage;
