import Form from 'react-bootstrap/Form';

function SwitchTog() {
  return (
    <Form>
    {['checkbox'].map((type) => (
      <div key={`default-${type}`} className="mb-3">
        <Form.Check 
          type={type}
          id={`default-${type}`}
          label={``}
        />
      </div>
    ))}
  </Form>
  );
}

export default SwitchTog;