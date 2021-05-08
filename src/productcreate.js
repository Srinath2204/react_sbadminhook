import {useState} from "react";
import {useContext } from "react";
import UserContext from './userContext';

export default function ProductCreate() {

    let productData=useContext(UserContext)

    let [productname,setproductname] = useState("");
    let [productdepartment,setproductdepartment] = useState("");
    let [price,setprice] = useState("");
    let [colour,setcolour] = useState("");

    let userSubmit = async (e) => {
        e.preventDefault()
       
        productData.setproductList([...productData.productList,{
            productname,
            productdepartment,
            price,
            colour
        }])

   await fetch("https://60926a0185ff510017212b19.mockapi.io/products",{
       method : "POST",
       body : JSON.stringify({
            productname,
            productdepartment,
            price,
            colour
       }),
       headers : {
           "Content-type" : "application/json"
       }
   })
}

    return <>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <h1>Create a product</h1>
            </div>
        </div>
    </div>
        <div className="container">
            <form onSubmit={userSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Product Name</label>
                        <input className="form-control" value={productname} onChange={(e) => setproductname(e.target.value)}></input>
                    </div>
                    <div className="col-lg-6">
                        <label>Product Price</label>
                        <input className="form-control" value={productdepartment} onChange={(e) => setproductdepartment(e.target.value)}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Price</label>
                        <input className="form-control" value={price} onChange={(e) => setprice(e.target.value)}></input>
                    </div>
                    <div className="col-lg-6">
                        <label>Colour</label>
                        <input className="form-control" value={colour} onChange={(e) => setcolour(e.target.value)}></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="submit"/>
                    </div>
                </div>
            </form>
        </div>
    </>
}