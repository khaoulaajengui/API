import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from "react";

const userCard=()=> {
    const [users, setUsers] = useState([]);
    const getdataUser= async()=>{
        try {
            const{data}=await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(data)
        } catch (error) {
            
        }
    };
    useEffect(()=>{getdataUser()},[]);

  return (
    <>
    {users.map((user,i)=>(<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>Email:{user.email}
        Adress: {user.adress}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
    
      </Card.Body>
    </Card>))}
    
    </>
  );
}

export default userCard;