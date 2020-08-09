import React, {useState, useEffect} from 'react'
import ContentCard from './ContentCard'
import ContentDescript from './ContentDescript'
import CategoriesContent from './CategoriesContent'
import ProductTable from './ProductTable'

const contentsCards = [
    {
        icon:"fas fa-clipboard-list fa-2x text-gray-300",
        title:"Products in Data Base",
        value:"135",
        type:"primary"
    },
    {
        icon:"fas fa-dollar-sign fa-2x text-gray-300",
        title:"Amount in products",
        value:"$546.456",
        type:"success"
    },
    {
        icon:"fas fa-user-check fa-2x text-gray-300",
        title:"Users quantity",
        value:"38",
        type:"warning"
    }
]

const PageContent = (props) => {

    const[products, setProducts] = useState([]);
    const[lastProducts, setLastProducts] = useState({});
    const[users, setUsers] = useState([]);
    const[categories, setCategories] = useState([]);

    async function fechdataProducts (){
        const respuesta = await fetch("http://localhost:3001/api/products/")
        respuesta.json().then(res => {
            setProducts(res.data.products);
            setCategories(res.data.countByCategory);
            setLastProducts(res.data.products[res.data.products.length - 1])
        }).catch(error => console.log (error));
    }

    async function fechUsers() {
        const respuesta = await fetch("http://localhost:3001/api/users/")
        respuesta.json().then(res => {
            setUsers(res);
        }).catch(error => console.log (error));
    }

    useEffect(()=> {
        fechdataProducts();
        fechUsers();
    },[]);

    // const {products, users, categories} = props;
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {(products) &&
                <React.Fragment>
                    <div className="row">
                        <ContentCard 
                            icon="fas fa-clipboard-list fa-2x text-gray-300"
                            title="Productos en DB"
                            value={products.length}
                            type="primary"
                        />

                        <ContentCard 
                            icon="fas fa-user-check fa-2x text-gray-300"
                            title="Usuarios registrados"
                            value={users.count}
                            type="warning"
                        />

                        <ContentCard 
                            icon="fas fa-clipboard-list fa-2x text-gray-300"
                            title="Total categorias"
                            value={categories.length}
                            type="success"
                        />
                    </div>

                    <div className="row">
                        <ContentDescript 
                            id={lastProducts.id}

                            title="Ultimo producto registrado en DB"
                            link="View product detail"
                        />

                        <CategoriesContent 
                            categories={categories}
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default PageContent;