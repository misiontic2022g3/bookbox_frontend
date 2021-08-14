function HeaderPage(props) {
    const { children, title } = props
    return (
        <section className='mb-5 bg-warning'>
            <div className='card-body container'>
                <h3><strong>{title}</strong></h3>
                {children}
            </div>
        </section>
    )
}

export default HeaderPage
