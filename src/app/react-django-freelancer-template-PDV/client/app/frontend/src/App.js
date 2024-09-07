import logo from './logo.svg';
import './App.css';

import {React, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MaterialList from './components/MaterialList';
import './App.css';


function AppReact() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



const App = () => (
    <IonPage>
        <IonHeader>
        <AppReact></AppReact>
            

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </CardContent>
            <CardFooter>
              Card Footer
            </CardFooter>
          </Card>

            <IonToolbar>
                <IonTitle>My Ionic App</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <MaterialList />
        </IonContent>
    </IonPage>
);

export default App;


