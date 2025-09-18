import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            count2: 2,
        };

    }

    render() {
        const { name, location } = this?.props;
        const { count, count2 } = this.state;
        return (
            <div>
                <h1>User Details with Class Component</h1>
                <h2>name: {name}</h2>
                <h2>location: {location}</h2>
                <h3>count: {count}</h3>
                <h3>count: {count2}</h3>
                <div>
                    <button 
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}>counter</button>

                    <button onClick={() => {
                        this.setState({
                            count2: this.state.count2 + 2,
                        })
                    }}>counter*2</button>
                </div>
            </div>

        );
    }

}

export default UserClass;