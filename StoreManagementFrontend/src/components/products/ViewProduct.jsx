import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewProduct(){

    const[products,setProducts]=useState([]);

       let getProducts=()=>{
        axios.get("http://localhost:9090/products").then(response=>{
        setProducts(response.data);
       }).catch(err=>console.log(err)) ;
    }
    useEffect(getProducts,[]);

    function deleteProduct(id){

        axios.delete(`http://localhost:9090/products/${id}`).then(reponse=>{
            if(reponse.status==200){
                alert("Product deleted successfully");
                getProducts();
            }
        }).catch(err=>console.log(err));
    }

    return(
    <>
        <div className="container w-50 mt-5">
            <table className="table table-bordered">
                <thead> 
                    <tr>
                        <th className="bg-dark text-white">ID</th>
                        <th className="bg-dark text-white">ProductName</th>
                        <th className="bg-dark text-white">ProductPrice</th>
                        <th className="bg-dark text-white">ProductCategory</th>
                        <th className="bg-dark text-white">Availability</th>
                        <th className="bg-dark text-white">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p,i)=><tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.productName}</td>
                            <td>{p.productPrice}</td>
                            <td>{p.productCategory}</td>
                            <td>{p.available? "Yes" : "No"}</td>
                            <td><button className="btn btn-danger" onClick={()=>deleteProduct(p.id)}>Delete</button>
                                <Link className="btn btn-primary" to={`/editproduct/${p.id}`}>Edit</Link>
                            </td>
                            

                        </tr>)
                    }
                        



                </tbody>
            </table>





        </div>
    </>
    )
}

export default ViewProduct;