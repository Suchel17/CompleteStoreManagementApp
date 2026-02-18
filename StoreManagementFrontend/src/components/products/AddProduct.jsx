import axios from "axios";
import { useForm } from "react-hook-form";

function AddProduct(){

    const {register,handleSubmit,reset,formState:{errors}}=useForm();

    function savedata(data){

        axios.post("http://localhost:9090/products", data).then(
            response=>{alert("Product added succesfully")
                reset();
            }
        ).catch(err=>console.log(err))

    }

    return(
    <>
        <div className="container w-50 mt-3">
          <div className="card p-3">
                <h1 className="card-title text-center text-muted">ADD PRODUCT</h1>
            <form onSubmit={handleSubmit(savedata)}>
                
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
                    <button className="btn btn-success w-100">ADDPRODUCT</button>
                </div>

            </form>
          </div>


        </div>
    </>
    )
}

export default AddProduct;