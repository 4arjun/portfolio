import './Home.css'
import Main from './Main'
import Main_bottom from './Main_bottom'
import Nav from './Nav'

const Home = () => {
    return (
        <div className='home-container'>
            <div>
                <Nav />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Main_bottom />
            </div>
        </div>
       
    )
}

export default Home