import './App.css';
import User from "./components/User";

function App() {
    const users = [
        {id: 1, name: "James", age: 15},
        {id: 2, name: "Alan", age: 40}
    ]
    return (
        <div className="App">
            {/*<User/>*/}
            {
                users.map(user => {
                    return <User user={user}/>
                })
            }
        </div>
    );
}

export default App;
