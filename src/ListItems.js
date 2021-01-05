import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';
// const people=["Sarah","Jessy","Elyan","Lilly"]
export default (props)=>{
     const listt= props.items.map(item=>
           {
               console.log(props);
               return <div className="list" key={item.key}>
                         <p>
                             {/* {people.filter(person=>person.includes('l')).map(filtredname=>
                                <li>{filtredname}</li>
                                )} */}
                            <input type="text" value={item.noteText} id={item.key}
                            onChange={
                                (e)=>props.updateNote(e.target.value, item.key)
                            }
                            />  
                            <span class="fa fa-trash my-icon"
                             aria-hidden="true" 
                             onClick={()=>props.deleteItem(item.key)}></span>
                         </p>
                      </div>
           }
      )
    return(
        <div>
            <FlipMove duration={400} easing="ease-in-out">
                {listt}
            </FlipMove>
        </div>
    )
}