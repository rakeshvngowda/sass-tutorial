import axios from "axios";
import { useEffect, useState } from "react";
import './styles/Flexbox.scss';

const FlexBox = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async (page) => {
        const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);
        const usersList = data.data;
        // console.log(usersList);
        return usersList;
    }

    const setUsersList = async () => {
        const pages = [1,2,3,4,5];
        let allUsersList = (await Promise.allSettled(pages.map(each=> getUsers(each))));
        allUsersList = allUsersList.map(each=> each.value).flat();
        setUsers(allUsersList);
        console.log(allUsersList);
    }

    useEffect(()=> {
        // getUsers();
        setUsersList();
    },[]);

    return ( 
        <div>
            <h2 className="flex-heading">This is flexbox tutorial</h2>
            <ul className="flex-container">
                {users.map((user,index)=> (
                    <li key={index}>
                        <h2>{user.first_name}</h2>
                        <img src={user.avatar} alt="" />
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default FlexBox;