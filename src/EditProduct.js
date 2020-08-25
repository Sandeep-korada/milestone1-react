import React from 'react';
import axios from 'axios';
import './editproduct.css';
class EditProduct extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
       
        this.state={
            name:'',
            image:'',
            Price:'',
            description:'',
            stock:0,
            category:'',
            id: 0,

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
  
        if(event==='name' && this.state.name===''){
          productNameError=<p style={{color:'red'}}>Product Name is required</p>
        }
  
        else if(event==='Price' && this.state.Price===''){
          productPriceError=<p style={{color:'red'}}>Product Price is required</p>
        }
  
        else if(event==='description' && this.state.description===''){
          productDescriptionError=<p style={{color:'red'}}>Product Description is required</p>
        }
  
        else if(event==='stock' && this.state.stock===''){
          productStockError=<p style={{color:'red'}}>Product Stock is required</p>
        }
  
        else if(event==='category' && this.state.category===''){
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
    
    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allproducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                    
                        name: response.data.Product_name,
                        Price:response.data.Price,
                        description:response.data.Descrition,
                        stock:response.data.Stock_available,
                        image:response.data.image,
                        category:response.data.Product_category,
                        id: response.data.id
                    })
                    console.log(this.state.name)

                }, error=>{
                    console.error(error);
                })
        }
    }
    getName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
           
    }
    getProductNameError=(event)=>{
        this.setState({name:event.target.value})
        this.checkValidation('name')
    }
  
    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({Price: event.target.value})

    }
    getProductPriceError=(event)=>{
        this.setState({Price:event.target.value})
        this.checkValidation('Price')
    }
   
  
    getDescription=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({description: event.target.value})

    }
    getProductDescriptionError=(event)=>{
        this.setState({description:event.target.value})
        this.checkValidation('description')
    }
  
    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock: event.target.value})

    }
    getProductStockError=(event)=>{
        this.setState({stock:event.target.value})
        this.checkValidation('stock')
    }
    getCategory=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({category: event.target.value})

    }
    getProductCategoryError=(event)=>{
        this.setState({category:event.target.value})
        this.checkValidation('category')
    }
  
  
    EditProduct=()=>{
        console.log('Edit product via axios and put')
        if(this.state.name === '' || this.state.Price ===''|| this.state.description===''|| this.state.stock===''|| this.state.category===''){
            this.setState({ buttonstatus:false})
        }
        else{
        let productRequestBody = {
            "Product_name": this.state.name,
            "Price": this.state.Price,
            "image":this.state.image,
            "Descrition": this.state.description,
            "Stock_available": this.state.stock,
            "Product_category": this.state.category
        }
        axios.put('http://localhost:3000/allproducts/'+this.state.id, productRequestBody)
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
            
            <div className="editpbg">
           <div className="transbox">
            <form>
                 <h2>Edit/Update</h2><hr></hr>
                <label>Id: </label>
                <input type="text" value={this.state.id} readOnly></input>
                <br></br><br></br>
                <label>Name: </label>
                <input type='text' id="productName" value={this.state.name}  onChange={this.getName} onBlur={this.getProductNameError} ></input>
                {this.state.productnameerror}
                <br></br><br></br>
                <label>Price: </label>
                <input type='number' id="productPrice" value={this.state.Price}  onChange={this.getPrice} onBlur={this.getProductPriceError}></input>
                {this.state.productpriceerror}
                <br></br><br></br>
                <label>Description: </label>
                <input type='text' id="productDescription" value={this.state.description}  onChange={this.getDescription} onBlur={this.getProductDescriptionError}></input>
                {this.state.productdescriptionerror}
                <br></br><br></br>
                <label>Stock: </label>
                <input type='number' id="productStock" value={this.state.stock}  onChange={this.getStock}  onBlur={this.getProductStockError}></input>
                {this.state.productstockerror}
                <br></br><br></br>
                <label>Category</label>
                <select name='category' id="productCategory" onChange={this.getCategory} onBlur={this.getProductCategoryError}>
                    <option value=''> Select Category</option>
                    <option value='Electronics' onChange={this.getCategory}>Electronics</option>
                    <option value='Perfumes' onChange={this.getCategory}>Perfumes</option>
                    <option value='clothing' onChange={this.getCategory}>clothing</option>
                </select>
               
                <br></br><br></br>
                
                <button type="button" onClick={this.EditProduct} disabled={this.state.buttonstatus}>Edit Product</button>
                <br></br>
                              
            </form>
            </div>
            </div>
        
        
         
         );
    }
}
 
export default EditProduct;