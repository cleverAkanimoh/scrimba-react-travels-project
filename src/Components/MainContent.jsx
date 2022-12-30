import dome from '../images/landmark-dome.svg';

const MainContent = ({ travels }) => {
    return (
        <section id="main-content">
            {
                travels.map(travel => {
                    const { id, img, title, country, href, date, desc } = travel;

                    return <article key={id} className="travels">
                        <img src={img} alt={title} className="travel-img" />
                        <div className="travel-div">
                            <div className="travel-header">
                            <div className='travel-span'><img src={dome} alt="no alt" />&nbsp;&nbsp;{country}</div><a href={href}>View on Google Maps</a>
                            </div>
                            <h2>{title}</h2>
                            <h6>{date}</h6>
                            <p>{desc}</p>
                        </div>
                    </article>
                })
            }
        </section>
    );
}

export default MainContent;