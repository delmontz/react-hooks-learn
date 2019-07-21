import React, { useState, useEffect } from 'react';

const App = props => {
   const [state, setState] = useState(props);

   const reset = () => setState(props);

   useEffect(() => {
      console.log('レンダリングのあとに毎回useEffect発動したぜ！！ ');
   });

   useEffect(() => {
      console.log('初回レンダリングのみuseEffect発動したぜ！！ ');
   }, []);

   useEffect(() => {
      console.log('nameステートが変化したから発動したぜ！！ ');
   }, [state.name]);

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
