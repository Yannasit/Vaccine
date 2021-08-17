import React from 'react';
import ReactDOM from 'react-dom';
import Vaccine from './components/Vaccine';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[
        {
          nameCompony:"Astrazeneca",
          nameInter:"AZD1222",
          produce:"England",
          technology:"ไวรัส Adonovirus พาหะ"
        },{
          nameCompony:"Phizer",
          nameInter:"BNT162",
          produce:"USA",
          technology:"mRNA"
        }
      ],
    };
  }

  render() {
    const itemsRendered = this.state.items.map((items) => {
      return (
       <Vaccine 
       nameCompony={items.nameCompony}
      nameInter={items.nameInter}
      produce={items.produce}
      technology={items.technology}
       />
       );
    });
      
  return <div className='vaccine'>
    {itemsRendered}
    </div>;
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
