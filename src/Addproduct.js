import React from 'react';
import axios from 'axios';
import './addproduct.css';
class AddProduct extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            Price:'',
            description:'',
            stock:'',
            category:'',
            image:'',

            productnameerror:'',
            productpriceerror:'',
            productstockerror:'',
            productdescriptionerror:'',
            productcategoryerror:'',
            buttonstatus:true
          
        }
    }
  checkValidation=(event)=>{
      let productNameError=''
      let productPriceError=''
      let productStockError=''
      let productDescriptionError=''
      let productCategoryError=''

      if(event==='productName' && this.state.productName===''){
        productNameError=<p style={{color:'red'}}>Product Name is required</p>
      }

      else if(event==='productPrice' && this.state.productPrice===''){
        productPriceError=<p style={{color:'red'}}>Product Price is required</p>
      }

      else if(event==='productDescription' && this.state.productDescription===''){
        productDescriptionError=<p style={{color:'red'}}>Product Description is required</p>
      }

      else if(event==='productStock' && this.state.productStock===''){
        productStockError=<p style={{color:'red'}}>Product Stock is required</p>
      }

      else if(event==='productCategory' && this.state.productCategory===''){
        productCategoryError=<p style={{color:'red'}}>Product Category is required</p>
      }

    
      if(productNameError||productPriceError||productDescriptionError||productStockError||productCategoryError){
          this.setState({
              productnameerror:productNameError,
              productpriceerror:productPriceError,
              productstockerror:productStockError,
              productcategoryerror:productCategoryError,
              productdescriptionerror:productDescriptionError,
              buttonstatus:true
          })
          return false
      }
      this.setState({
        productnameerror:'',
        productpriceerror:'',
        productstockerror:'',
        productcategoryerror:'',
        productdescriptionerror:'',
        buttonstatus:false
      })



  }
  
  
   
    getName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productName: event.target.value})
        
           
    }
    getProductNameError=(event)=>{
        this.setState({productName:event.target.value})
        this.checkValidation('productName')
    }
    getprice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productPrice: event.target.value})
        

    }
    getProductPriceError=(event)=>{
        this.setState({productPrice:event.target.value})
        this.checkValidation('productPrice')
    }
    getDescription=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productDescription: event.target.value})
        
    }
    getProductDescriptionError=(event)=>{
        this.setState({productDescription:event.target.value})
        this.checkValidation('productDescription')
    }
    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productStock: event.target.value})
     
    }
    getProductStockError=(event)=>{
        this.setState({productStock:event.target.value})
        this.checkValidation('productStock')
    }
    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productCategory: event.target.value})
      
    }
    getProductCategoryError=(event)=>{
        this.setState({productCategory:event.target.value})
        this.checkValidation('productCategory')
    }
    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({productimage: event.target.value.substr(12)})
    }
    AddProduct=()=>{
        console.log('Add product via axios and post')
        if(this.state.productName === '' || this.state.productPrice ===''|| this.state.productDescription===''|| this.state.productStock===''|| this.state.productCategory===''||this.state.productimage===''){
            this.setState({ buttonstatus:false})
        }
        else {
        let productRequestBody = {

            "Product_name": this.state.productName,
            "Price": this.state.productPrice,
            "Descrition":this.state.productDescription,
            "Stock_available":this.state.productStock,
            "Product_category":this.state.productCategory,
            "image":this.state.productimage
        }

        
        axios.post('http://localhost:3000/allproducts', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/')
                }, error=>{
                    console.error(error); 
                })
            }
    }
    render() { 
        return (
        
            <div className="addpbg">
                <div className="transbox">
            <form>
                <h2>ADD</h2><hr></hr>
                <label> Name </label>
                <input type='text' id="productName" placeholder="Enter Name" onChange={this.getName} onBlur={this.getProductNameError}></input>
                {this.state.productnameerror}
                <br></br>
                <br></br>
                <label>price</label>
                <input type='number' id="productPrice" placeholder="Enter Price" onChange={this.getprice} onBlur={this.getProductPriceError}/>
                {this.state.productpriceerror}
                 <br></br>
                 <br></br>
                 <label>Description</label>
                <input type='text' id="productDescription" placeholder="Enter Description" onChange={this.getDescription} onBlur={this.getProductDescriptionError}></input>
                {this.state.productdescriptionerror}
                 <br></br>
                 <br></br>
                 <label>Stock</label>
                <input type='number' id="productStock" placeholder="Enter Stock" onChange={this.getStock} onBlur={this.getProductStockError}></input>
                {this.state.productstockerror}
                 <br></br>
                 <br></br>
                 <label>Category</label>
                <select name='category' id="productCategory" onChange={this.getCategory} onBlur={this.getProductCategoryError}>
                    <option value=''> Select Category</option>
                    <option value='Electronics' onChange={this.getCategory}>Electronics</option>
                    <option value='Perfumes' onChange={this.getCategory}>Perfumes</option>
                    <option value='clothing' onChange={this.getCategory}>clothing</option>
                </select>
                {this.state.productcategoryerror}
                 <br></br>
                 <br></br>
                 <label> &nbsp;Product Image: </label>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' onBlur={this.getProductNameError} />
                    <br></br>
                    <br></br>
                <button type="button" onClick={this.AddProduct} disabled={this.state.buttonstatus}>Add Product</button>
            
                
            </form>
            </div>
        </div>
         );
    }
}
 
export default AddProduct;