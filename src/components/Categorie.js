import React from 'react'

const Categorie = (props) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {props.title} - ({props.value})
                </div>
            </div>
        </div>
    )
}

export default Categorie;