import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, TodoList } from './components';

function App() {
  return (
    <div className="vh-100" style={{'backgroundColor': '#e2d5de'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10" >

            <div className="card" style={{'borderRadius': '15px'}}>
              <div className="card-body p-5">
                <Input />

                <TodoList />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
