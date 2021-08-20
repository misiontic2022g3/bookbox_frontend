import { Link } from 'react-router-dom'

function BookCard(props) {
    const { _id, title, cover, description } = props.book
    return (
        <article className='col d-flex justify-content-center'>
            <div className='card bg-dark text-light mb-5'>
                <div className='card-body container-fluid m-0 p-0'>
                    <div className='row'>
                        <div className='col-12 col-lg-5'>
                            <img
                                src={cover}
                                className='card-img-top'
                                alt={title}
                            />
                        </div>
                        <div className='col-12 col-lg-7'>
                            <div className=' card-body'>
                                <h4 className='card-title text-warning'>
                                    <strong>{title}</strong>
                                </h4>
                                <p className='card-text'>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer d-flex justify-content-center'>
                    <Link
                        to={'/book/' + _id}
                        className='btn btn-warning mx-3 w-100'
                        style={{ maxHeight: '40px' }}
                    >
                        Ver mas
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default BookCard
