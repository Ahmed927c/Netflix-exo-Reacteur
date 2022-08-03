import ItemFilm from './ItemFilm'

const Category = ({name,images}) => {
  return (
    <div className="category">
        <h2>{name}</h2>
        <ul className="carousel">
            {images.map((image,index) => {
                return <ItemFilm key={index} image={image} />
            })}
            
        </ul>
    </div>
  )
}

export default Category