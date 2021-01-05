import React, {useState} from 'react';
import ListItems  from './ListItems';
export default ()=>{
  const [state, setstate] = useState(
      {listItems:[],
        currentItem:{
             noteText:'',
             key: '',
      }});

             //   ---------------- hundelInput---------------------------

     function  hundelInput(e){
          setstate({
              ...state,
              currentItem:{
                  noteText:e.target.value,
                  key: Date.now(),
                }
          });
      }
            //   ---------------- addItem---------------------------

      function addItem(e){
        e.preventDefault();
        const newItem=state.currentItem;
        console.log(newItem);
        if(newItem.noteText!==''){
            console.log('LIST ITEMS'+state.listItems)
            const newItems =[...state.listItems, newItem]
            setstate({
                listItems:newItems,
                currentItem:{
                    noteText:'',
                    key:'',
                }
            })
            console.log(state);
        }
      }    
        
      //   ---------------- deleteItem---------------------------
  
      function deleteItem(key){
          const filteredItems = state.listItems.filter(item => item.key!==key)
          setstate({
            ...state,
            listItems:filteredItems,
          })
      }

    //   ---------------- updateNote---------------------------

      function updateNote(text,key) {
          const newlist=state.listItems.map(item=>
           { 
               if(item.key===key) 
               {
                item.noteText=text;
               }
               return item
            })
            setstate({
                ...state,
                listItems:newlist   
            })
      }
    return(
<div className="container">
     <form className="form-inline to-do-form" onSubmit={addItem}>
          <input type="text" placeholder="what to do" maxlength="35" value={state.currentItem.noteText} onChange={hundelInput}/>
           <button type="submit" >Add</button>
      </form>
      <ListItems items={state.listItems} 
      deleteItem={deleteItem}
      updateNote={updateNote}
      />
</div>
    );
}