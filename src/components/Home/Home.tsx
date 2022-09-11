import './Home.css';
import Search from '../Search'

function Home() {
  return (
    <div className="home">
      <h1 className="heading">Twitter <span className="heading-sentiment">Sentiment</span></h1>
      <Search />
    </div>
  );
}

export default Home;
