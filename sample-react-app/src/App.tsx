import { useState } from 'react';
import './App.scss';
import Form, { ImageGeneratorRequest } from './components/Form';
import { Utils } from './components/utils';

function App() {
  const [request, setRequest] = useState<ImageGeneratorRequest>();
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Form valueChanges={(values: ImageGeneratorRequest) => setRequest(values)}></Form>
        {request && <div className="App-image" style={{backgroundImage: `url("${Utils.composeUrlFromRequest(request)}")`}}>
          {request?.label && <h1>{request.label}</h1>}
        </div>}
      </main>
    </div>
  );
}

export default App;
