const MainContent = ({ travels }) => {
    return (
        <section id="main-content">
            {
                travels.map(travel => {
                    const { id, img, title, country, href, date, desc } = travel;

                    return <article key={id} className="travels">
                        <img src={img} alt={title} />
                        <div className="travel-div">
                            <span>{country}</span>&nbsp;&nbsp;&nbsp;<a href={href}>View on Google Maps</a>
                            <h2>{title}</h2>
                            <h6>{date}</h6>
                            <p>{desc}</p>
                        </div>
                    </article>
                })
            };
        </section>
    );
}

export default MainContent;