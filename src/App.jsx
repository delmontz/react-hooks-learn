import React, { useState } from 'react';

const App = props => {
   const [state, setState] = useState(props);

   const reset = () => setState(props);

   const { price, name } = state;
   return (
      <>
         <p>現在の{ name }は、{ state.price }円です。</p>
         <button onClick={ () => setState({...state, price: price + 1}) }>+1</button>
         <button onClick={ () => setState({...state, price: price - 1}) }>-1</button>
         <button onClick={ reset }>RESET</button>
         <input value={ name } onChange={e => setState({ ...state, name: e.target.value })}/>
      </>
   );
}

App.defaultProps = {
   name: 'ほげほげ',
   price: 1000
}

export default App;
