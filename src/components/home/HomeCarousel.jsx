import { Carousel } from 'react-bootstrap'
// import Image1 from 'assets/carousel/image1.jpg'
// import Image2 from 'assets/carousel/image2.jpg'
// import Image3 from 'assets/carousel/image3.jpg'
// import Image4 from 'assets/carousel/image4.jpg'

// const images = [
//     { src: Image1, title: 'Libro recomendado', text: 'Un buen libro' },
//     { src: Image2, title: 'Libro recomendado', text: 'Un buena lectura' },
//     { src: Image3, title: 'Libro recomendado', text: 'Una frase de libros' },
//     { src: Image4, title: 'Libro recomendado', text: 'Otra frase de libros' },
// ]

const images = [
    {
        src: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/317/original/portada_el-arte-de-los-buenos-habitos_nathalie-w-herrman_202010281704.jpg',
        title: 'El arte de los buenos hábitos',
        text: 'Aprende el arte de hacer y estar al mismo tiempo. Experimenta de forma plena una sola cosa a la vez.',
    },
    {
        src: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/original/portada_habitos-atomicos_james-clear_202002111200.jpg',
        title: 'Hábitos atómicos',
        text: 'Más de 4 millones de ejemplares vendidos en todo el mundo. Un libro fascinante que cambiará el modo en que vivimos nuestro día a día.',
    },
    {
        src: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/267/original/portada_el-poder-de-los-5-segundos_mel-robbins_201803161125.jpg',
        title: 'El poder de los 5 segundos',
        text: 'El libro que ya ha transformado las vidas de millones de lectores.',
    },
    {
        src: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/319/original/portada_ahora-te-toca-ser-feliz_curro-canete_202007070849.jpg',
        title: 'Ahora te toca ser feliz',
        text: 'Hoy es un día importante. El único momento del que dispones, tu única herramienta, es el presente. Tras el éxito de El poder de confiar en ti, Curro Cañete vuelve con más fuerza que nunca para recordarte que Ahora te toca ser feliz.',
    },
    // {
    //     src: '',
    //     title: '',
    //     text: '',
    // },
    // {
    //     src: '',
    //     title: '',
    //     text: '',
    // }
]

export default function HomeCarousel() {
    return (
        <Carousel variant='light'>
            {images.map((item, index) => (
                <Carousel.Item key={index}>
                    <figure className='carousel-container-img'>
                        <img
                            // className='d-block carousel-img'
                            className='carousel-img bg-warning'
                            // style={{
                            //     height: '60vh',
                            //     width: '50%',
                            //     objectFit: 'repeat',
                            // }}
                            src={item.src}
                            alt={item.text}
                        />
                    </figure>
                    <Carousel.Caption>
                        <div
                            className='card text-white bg-dark mb-3 rounded-3'
                            style={{ maxWidth: '25rem' }}
                        >
                            <div className='card-header h3 text-warning'>
                                {item.title}
                            </div>
                            <div className='card-body'>
                                <p className='card-text h6 text-warning'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
