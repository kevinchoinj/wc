import React from 'react';

import {Row, Col} from 'react-bootstrap';
import Custom from '../components/Custom';
import image4 from '../images/visitors/localguy.jpg';
import woodyimage from '../images/visitors/woody.jpeg';
import damienimage from '../images/visitors/damien.jpeg';
import chasynimage from '../images/visitors/chasyn.jpg';
import salina from '../images/visitors/salina.jpg';
import vanessavilano from '../images/visitors/vanessavilano.jpeg';
import vevelane from '../images/visitors/vevelane.jpeg';

export default class Kittens extends React.Component {
constructor(props){
  super(props);
  this.state={
    opacity:"0",
  }
}
componentDidMount(){
  this.props.checkpage('kittens');
  setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 300);
}
  render(){

    const wrapper={
      opacity:this.state.opacity,
      position:"absolute",
      marginTop:"100px",
      width:"100vw",
      height:"calc(100vh - 100px)",
      WebkitTransition: ".4s ease-out",
		  MozTransition: ".4s ease-out",
		  OTransition: ".4s ease-out",
		  transition:".4s ease-out",
    }

    return(
			<div style={wrapper}>
      <Row>
        <Col md={4} mdOffset={4} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='kittens_header'>
            VISITORS
          </div>
        </Col>
      </Row>

      <Row className='kittens_body__wrapper'>
        <div className="custom_all">
          <Custom
            image={vevelane}
            title="Veve Lane"
            subtitle="May"
            position="center top"
          />
          <Custom
            image={salina}
            title="Salina De La Renta"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={vanessavilano}
            title="Vanessa Vilano"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={chasynimage}
            title="Chasyn Rance"
            subtitle="Local"
            position="$200 Minimum"
          />
          <Custom
            image={image4}
            title="Local Guy"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={woodyimage}
            title="Woody"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={damienimage}
            title="Damien"
            subtitle="Local"
            position="left top"
          />
        </div>
      </Row>
		</div>
    );
  }
}
