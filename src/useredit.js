import {useEffect} from "react";

export default function UserEdit(props){

    useEffect(async ()=>{
        let user = await  fetch(`https://60926a0185ff510017212b19.mockapi.io/users/${props.match.params.id}`);
        let userData = await user.json();
        console.log(userData);
      }, [])

    return <>
    <h1>UserEdit {props.match.params.id}</h1>
    </>
}