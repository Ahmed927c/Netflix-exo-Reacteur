import '../Main.css';
import data from '../assets/data/movies.json';
import Category from './Category';
const Main = () => {
  return (
    <main>
        {data.map(({category,images}, index) => {
            return <Category key={index} name={category} images={images} />
        })}
    </main>
  );
};

export default Main