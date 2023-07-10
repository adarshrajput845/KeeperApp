import  React,{useState} from 'react'
import { IoIosAdd } from "react-icons/io";
function CreateArea({onAdd}){
    const [note,setNote]=useState({
      title:"",
      content:""
    });
    
    const [isExpanded, setExpanded] = useState(false);

    function submitButton(event) {
        onAdd(note);
        setNote({
          content: "",
          title:  "",
        });
        event.preventDefault();
      }
    
      function handleExpanded() {
        setExpanded(true);
      }

    function handleChange(e) {
        const { name, value } = e.target;
        setNote((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }
return (
<div>
    <form>
    {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
        
        <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submitButton}><IoIosAdd size={35} /></button>
    </form>
</div>
);
}
export default CreateArea;