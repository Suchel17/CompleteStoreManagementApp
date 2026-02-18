import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct(){
    const navigate =useNavigate();

    const {register,handleSubmit,setValue}=useForm();

    const [product,setProduct]=useState({});

    const {id} = useParams();

    let getSingleProduct=()=>{
        axios.get(`http://localhost:9090/products/${id}`).then(response=>{
                
            for(let props in response.data){
                setValue(props,response.data[props])
            }

        }).catch(err=>console.log(err))
    }

    useEffect(getSingleProduct,[]);

    function updateProduct(data){

        console.log(data)
        axios.put(`http://localhost:9090/products/${data.id}`, data).then(response=>{

            navigate('/viewproduct')

        }).catch(err=>console.log(err))
    }

    return(<>
                <div className="container w-50 mt-3">
          <div className="card p-3">
                <h1 className="card-title text-center text-muted">EDIT PRODUCT</h1>
            <form onSubmit={handleSubmit(updateProduct)}>
                <div className="mb-3">
                    <input type="text" placeholder="Enter id" className="form-control" {...register("id")}/>   
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Enter Product Name" className="form-control" {...register("productName")} required/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Enter Product Price" className="form-control" {...register("productPrice")} required/>
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Enter Product Category" className="form-control" {...register("productCategory")} required/>
                </div>
                <div className="mb-3">
                    <input type="checkbox" className="form-control-check" {...register("available")}/> Is Available
                </div>
                <div className="mb-3">
                    <button className="btn btn-success w-100">EDITPRODUCT</button>
                </div>

            </form>
          </div>


        </div>
    </>)
}

export default EditProduct;