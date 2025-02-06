

import PropTypes from 'prop-types';

const ContactContainer = ({logo,text,link, showLink= true, mail, showMail= false})=>{

    return <>
    
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 text-white lg:text-xl border border-white w-2/4 p-4 my-4">

            <img className="w-16 h-16" src={logo} alt={logo} />

            <h3 className="lg:text-xl">{text}</h3>

            {showLink &&
                <a href={link} target="_blank" rel="noreferrer" className="transform transition-transform duration-200 hover:scale-110 border-b border-white">Contact me</a>
                }
            {showMail &&
                <p className="transform transition-transform duration-200 hover:scale-105 text-xs lg:text-base p-1 border-white border-b">{mail}</p>
            }

        </div>

    </>
}

ContactContainer.propTypes = {
    logo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    showLink: PropTypes.bool,
    mail: PropTypes.string,
    showMail: PropTypes.bool
};

export default ContactContainer;
