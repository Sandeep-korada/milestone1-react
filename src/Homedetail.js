import React from 'react';
import './homedetail.css';
class Homedetail extends React.Component {

    deleteCurrentProduct=()=>{
        
            console.log("delete product with id: " + this.props.id);
            this.props.deleteId(this.props.id)
        
    }
    EditProduct=()=>{
        console.log("Edit Product With id: "+this.props.id);
        this.props.editId(this.props.id)
    }

    
    render() { 
        let imgStyle={
            width:'200px',
            height:'200px',
            borderRadius:'10px'
            
        }
        let loggedIn=localStorage.getItem("loggedIn")

        return ( 
            <div className="column">
            <div className="card">
          
           
            <img src={this.props.image} style={imgStyle}></img>
            <h4>Product Name : {this.props.name}</h4>
            <h4>Price:{this.props.price}</h4>
            <h4>Description:{this.props.description}</h4>
            <h4>Stock Available:{this.props.stockavailability}</h4>
             <h4>Product Category:{this.props.category}</h4>
             { loggedIn && 
              <div>
                    <button onClick={this.EditProduct}>Edit</button>
               &emsp;&emsp;&emsp;&emsp;
               
                    <button className="delete" onClick={this.deleteCurrentProduct}>Delete</button>
                    </div>}
                    </div>
             
                    </div>
         );
    }
}
 
export default Homedetail;