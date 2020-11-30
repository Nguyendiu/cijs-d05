import { CharityList } from "./CharityList";
// api url : https://sandbox.api.video
// key_api : d4DqLvkGu1MOanHf8wZzTTQkO0QXzXhihXI0fjmoB5V

export function Main(props){
    return(
        <div>
            <CharityList charity ={props.charity}/>
        </div>
    )
}