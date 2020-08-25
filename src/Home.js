import React from 'react';
import HomeDetail from './Homedetail';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            originalProduct:[],
            products:[],
            searchProducts:[],
            deleteSuccess:false,
            searchValue:'',
            myid:0
           
        }
        
    }
    
    componentWillMount(){
        this.getAllProducts()
    }
    componentDidMount(){
        console.log(this.props);
    }

    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({products: response.data})
                    this.setState({originalProduct: response.data})
                    console.log(this.state.products);
                }, error=>{
                    console.error(error);
                })
    }
  
    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/allproducts/' + id)
                .then(response=>{
                     console.log(response)
                 
                     this.setState({deleteSuccess: true})
                      this.getAllProducts()
              
                })
    }
    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit Product with id: ' + id);
        this.props.history.push({
                                    pathname: '/EditProduct', 
                                    state: {myid: id}
                                })
    }
    
   
  
    renderAllProducts=()=>{
        return this.state.products.map(product=>{
            return(
                
              
                    <HomeDetail
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.Product_name}
                        price={product.Price}
                        description={product.Descrition}
                        stockavailability={product.Stock_available}
                        category={product.Product_category}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                
                    >

                    </HomeDetail>
                    
            )
        })
    }
    getSearch=(e)=>{
        let searchV = e.target.value
        if(searchV===''){
            this.getAllProducts()
        }
        this.setState({searchValue: searchV})
        console.log(searchV);
        let searchF = this.state.originalProduct.filter(f=>{
                                return f.Product_name.toLowerCase().match(searchV.toLowerCase())
                            })
        console.log(searchF);    
        this.setState({products: searchF})                

    }
    render() { 
        let loggedIn=localStorage.getItem("loggedIn")
        return ( 
            
            <div>
                  <div>
                  { loggedIn && 
                  <button className="btnbg"><Link to='/addproduct'>Add Product</Link></button>}<br></br>
                  <input type="text"className="search" placeholder="Search Here"  onChange={this.getSearch}></input> <br></br>      
                 </div><br></br>
            
                               
                        {this.renderAllProducts()}
                
            
            
              
            </div>
                
         );
    }

}
 
export default Home;