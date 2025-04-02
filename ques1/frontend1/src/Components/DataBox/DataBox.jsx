import { useState, useEffect } from "react"
import "./DataBox.css"

const DataBox = () => {

    const [list, setList] = useState([]);
    const [items, setItem] = useState(10);
    const [errorBug, setErrorBug] = useState(false);

    const handleMoreItemClick=()=>{
        setItem((prevVal)=>prevVal+10);
    }

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${items}`);
                if (!response.ok) throw new Error("Error Occured");
                const data = await response.json();
                console.log(data);
                setList(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [items]);


    return (
        <div className="boxContainer">
            {list.map((item) => {
                return (
                    <div key={item.id} className="boxes">
                        <p>User iD : <span>{item.id}</span></p>
                        <p>Title : <span>{item.title}</span></p>
                        <p>Content : <span>{item.body}</span></p>
                    </div>
                )
            })}
            <button className="btn" onClick={handleMoreItemClick}>get More data</button>
        </div>
    )
}

export default DataBox;