import React from 'react';
import './dashboard.css'


class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            buttonclicked: true
        }
    }
    componentWillMount() {
        if (localStorage.getItem('loggedIn') === null) {
            this.props.history.push('/login');
        }
    }
    getCategory = (e) => {
        console.log(e.target.value)
        this.setState({ selectedCategory: e.target.value })
    }
    getDashboard = () => {
        //e.preventDefault();

        this.setState({ buttonclicked: true })
        console.log(this.state.selectedCategory)
        console.log(this.state.buttonclicked)
        
        this.props.parentCategory(this.state.selectedCategory)
    }
    componentDidMount() {
        console.log(this.state.buttonclicked)
    }
    render() {
        return (
       
                <div className="dashBoardCss">

                    <h1>Dashboard</h1>
                    <div className="dashboard-form">
                        <form >
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><b>Select Category</b></td>
                                        <td>
                                        <select onChange={this.getCategory} required>
                                            <option value=''>Select One</option>                                        
                                            <option value="Electronics">Electronics</option>
                                            <option value="Perfumes">Perfumes</option>
                                            <option values="clothing">clothing</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td><button type="submit" onClick={this.getDashboard}>Submit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            
        );
    }
}

export default DashBoard;









 