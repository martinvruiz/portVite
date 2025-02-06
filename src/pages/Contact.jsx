import ContactContainer from "../components/ContactContainer/ContactContainer"


const Contact = ()=>{



    return <>
    
        <div className="bg-black">
            <h4 className="text-white p-4 text-center lg:text-3xl font-semibold">Networks</h4>
            <span className={`flex min-h-screen flex-col items-center p-4`}>
                <ContactContainer text="LinkedIn" link="https://www.linkedin.com/in/martin-villalo-ruiz/" logo="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_in-512.png"/>
                <ContactContainer text="Instagram" link="https://www.instagram.com/martinvruiz/" logo="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-256.png"/>
                <ContactContainer text="Gmail" logo="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png" mail="martinevruiz10@gmail.com" showLink={false} showMail={true}/>
            </span>
        </div>
    
    </>
}

export default Contact;