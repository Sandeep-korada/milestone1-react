import React from 'react';
import DashBoard from './Dashboard';
import { Pie } from 'react-chartjs-2';

import axios from 'axios';

class ParentDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Product_category: '',
            selectedData: [],
            charData: {
            }
        }
       
    }
    componentWillMount() {
        if (localStorage.getItem('loggedIn') === null) {
            this.props.history.push('/login');
        }
    }
    getDashBoardForm = (Product_category) => {
                  
        axios.get('http://localhost:3000/allproducts/?q=' + Product_category).then((res) => {
            let titles = []
            var stocks = []
            console.log(res.data)
            this.setState({ selectedData: res.data })
            this.state.selectedData.map((category) => {
                return (
                    console.log(category.Product_name),
                    titles.push(category.Product_name)
                )
            });
            this.state.selectedData.map((category) => {
                return (
                    stocks.push(parseInt(category.Stock_available))
                )
            });
            console.log(titles)
            this.setState({
                charData:
                {
                    labels: [...titles],
                    datasets: [{
                        label: 'Stock Availability',
                        data: [
                            ...stocks
                        ],
                        backgroundColor: [
                            'rgba(225,99,132,0.6)',
                            'rgba(225,206,86,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(225,159,64,0.6)',
                            'rgba(225,99,132,0.6)'
                        ]
                    }],
                }
            });
        })
        console.log(Product_category)
        console.log(this.state.charData)
    }
    render() {
        return (
            <div style={{ display: "inline" }}>
               
                <div>
                    <DashBoard parentCategory={this.getDashBoardForm} ></DashBoard>
                </div>
                <div>
                    <h1>Chart</h1>
                    <Pie
                        data={this.state.charData}
                        height={80}
                        options={{
                            title: {
                                display: true,
                                text: 'Stock Availability of selected Category'
                            },
                            legend: {
                                display: true,
                                position: "top"
                            }
                        }}>

                    </Pie>
                </div>
            </div>
        );
    }
}

export default ParentDashBoard;