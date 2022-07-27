import './Home.css';
import Search from '../Search'

function Home() {
  return (
    <div className="home">
      <h1 className="heading">twitter <span className="heading-sentiment">sentiment</span></h1>
      <Search />
    </div>
  );
}

export default Home;
