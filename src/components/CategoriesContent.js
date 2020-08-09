import React, { useEffect } from 'react'
import Categorie from './Categorie';

const CategoriesContent = ({categories}) => {

    // const categories = ["Category 01", "Category 02", "Category 03", "Category 04", "Category 05", "Category 06", ];

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {categories.map((x,index) => {
                            return <Categorie title={x.name} value={x.cantidad_productos} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesContent;