

import PropTypes from 'prop-types';

const ItemContainer = ({title,img,plataform})=>{

    return <>

        <div className="border-2 rounded-md p-3 flex flex-col items-center text-center">
            <img src={img} alt={img} className="w-16 h-20"/>
            <h3 className="my-1">{title}</h3>
            <div className="my-1">
                <p>{plataform}</p>
                </div>
        </div>

    </>
}
ItemContainer.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    plataform: PropTypes.string.isRequired,
};

export default ItemContainer;
