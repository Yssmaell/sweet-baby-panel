import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ProductDetalle = (props) => {

    const[product, setProduct] = useState([]);
    const[imagen, setImagen] = useState('')
    const[categoria, setCategoria] = useState({})

    async function fechdataProduct (){
        const respuesta = await fetch(`http://localhost:3001/api/products/${props.id}`)
        respuesta.json().then(res => {
            setProduct(res);
            setImagen(res.imgs[0].img) 
            setCategoria(res.categ);
            console.log(res)
        }).catch(error => console.log (error));
    }

    useEffect(()=>{
        fechdataProduct();
    },[])

    return (
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Product detail</h1>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h3 className="m-0 font-weight-bold text-primary">{product.name}</h3>
                        <h3 className="m-0 font-weight-bold text-primary">({categoria.name})</h3>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={imagen} alt="image dummy" />
                        </div>
                        
                        <div className="row">
                            <div className="col-4">
                                <h6>Precio Compra:</h6>
                                <p>$ {product.price_compra}</p>
                            </div>

                            <div className="col-4">
                                <h6>Precio Venta:</h6>
                                <p>$ {product.price_venta}</p>
                            </div>

                            <div className="col-4">
                                <h6>Stock:</h6>
                                <p>$ {product.stock}</p>
                            </div>
                        </div>
                        
                        <hr/>
                        <p>{product.description}</p>
                        <br/>
                        <p>{product.adicional_info}</p>
                        {/* <Link rel="nofollow" className="nav-link" to={`/products/${product.id}`}>
                            {link}
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetalle;