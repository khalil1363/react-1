
import { Form,Row,Col,Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className='body'>
      <h1>Ajoute un pilote</h1>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         <span className='aa' > Matricule </span>
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="number" placeholder="ajouter un  Matricule" />
        </Col>
      </Form.Group>






      <Form.Group as={Row} className="mb-3" controlId="form" >
        <Form.Label column sm={2}>
        <span className='aa' > nom</span>
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" placeholder="ajouter un nom" />
        </Col>
      </Form.Group>





      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
        <span className='aa' >  Prénom </span>
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" placeholder="ajouter un prénom" />
        </Col>
      </Form.Group>




      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
        <span className='aa' >  Mot de passe </span>
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="password" placeholder="ajouter un mot de passe" />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          <span className='aa' >  Genre </span> 
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Homme"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Famme"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />

          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
      <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>

      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit"> <span className='aa' >ajouter </span></Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default App;
