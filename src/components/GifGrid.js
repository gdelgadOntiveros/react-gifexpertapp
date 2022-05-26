import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifGirdItem } from './GifGirdItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__animated animate__flash animate__faster'>Cargando...</p> }
            <div className='card-grid animate__animated animate__fadeIn animate__faster'>
                {
                    images.map(img => (
                        <GifGirdItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
