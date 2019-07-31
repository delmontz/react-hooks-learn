import React from 'react'
import { DELETE_EVENT } from '../actions';

const  Event = ({event, dispatch}) => {
   const id = event.id;
   const handleClickDeleteButton = () => {
      const result = window.confirm(`イベントID:${id}を削除してもよいかのぉ？`);
      if(result)dispatch({
         type: DELETE_EVENT,
         id
      });
   };
   return (
      <tr key={ id }>
         <td>{ id }</td>
         <td>{ event.title }</td>
         <td>{ event.body }</td>
         <td>
            <button type="button" className="btn btn-danger" onClick={ handleClickDeleteButton }>削除</button>
         </td>
      </tr>
   )
}

export default Event;