import React, { useEffect, useState } from 'react'
import logo from '../assets/product_dummy.svg';
import {Link} from 'react-router-dom';

const ContentDescript = (props) => {

    const {title, descript, link, id} = props
    const[product, setProduct] = useState({});
    const[imagen, setImagen] = useState('')

    async function fechdataProduct (id){
        const respuesta = await fetch(`http://localhost:3001/api/products/${id}`)
        respuesta.json().then(res => {
            setProduct(res);
            setImagen(res.imgs[0].img)            
        }).catch(error => console.log (error));
    }

    useEffect(() => {
        fechdataProduct(id);
    },[id])



    
    return (
        <React.Fragment>
            {(product) &&
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">{title} - {product.name}</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={imagen} alt="image dummy" />
                            </div>
                            <p>{product.description}</p>
                            <Link rel="nofollow" className="nav-link" to={`/products/${product.id}`}>
                                {link}
                            </Link>
                            {/* <a target="_blank" rel="nofollow" href="/">{link}</a> */}
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default ContentDescript;