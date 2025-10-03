import { users } from '../data/sampleData.js'

function UserList() {
    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <div className="px-3 mb-2 border" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))}
        </div>
    );
}

export default UserList