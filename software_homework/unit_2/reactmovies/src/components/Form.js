// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import {useState} from 'react'

export default function Form (props) {

    const [formData, setFormData] = useState({
        searchterm: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.moviesearch(formData.searchterm)
    }

    //The component must return some JSX
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"  
            name="searchterm"
            onChange = {handleChange}
            value={formData.searchterm} 
        />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  };