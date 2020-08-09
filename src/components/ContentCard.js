import React from 'react'
import PropTypes from 'prop-types';

const ContentCard = (props) => {

    const {type, title, value, icon} = props;

    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${type} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentCard.defaultProps = {
    title: '',
    icon: '',
    value: 0,
    type: 'primary',
}

ContentCard.propTypes  = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['primary','success','warning']).isRequired,
}

export default ContentCard;