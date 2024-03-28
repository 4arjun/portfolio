import './Home.css'
import Main from './Main'
import Main_bottom from './Main_bottom'
import Nav from './Nav'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-initial-display'>
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
        </div>
       
    )
}

export default Home