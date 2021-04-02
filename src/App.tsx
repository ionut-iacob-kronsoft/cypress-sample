import { useState } from 'react';
import './App.scss';
import Form from './Form/Form';
import { Utils } from './utils';
import { ImageGeneratorRequest } from './const';

function App() {
  const [request, setRequest] = useState<ImageGeneratorRequest>();
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Form valueChanges={(values: ImageGeneratorRequest) => setRequest({...values})}></Form>
        { request && <div className="App-image" style={{backgroundImage: `url("${Utils.composeUrlFromRequest(request)}")`}}>
          {request?.label && <h1>{request.label}</h1>}
        </div>}
      </main>
    </div>
  );
}

export default App;
