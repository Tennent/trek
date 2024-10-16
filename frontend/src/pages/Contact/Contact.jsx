export default function Contact() {
    return (
        <div className='contact-container'>
            <h1 className="contact-title">
                Contact us!
            </h1>
            <div className="location-container">
                <h2 className="location-city">
                    Budapest
                </h2>
                <pre className="location-address">
                    trek. Kft,
                    Váci Road 187,
                    1138 Budapest, Hungary
                </pre>
            </div>
            <div className="contact-list-container">
                <ul className="contact-list-">
                    <li className="list-item">
                        Email: trek@trek.com
                    </li>
                    <li className="list-item">
                        Phone: +36 (30) 123 4567
                    </li>
                </ul>
            </div>
        </div>
    )
}