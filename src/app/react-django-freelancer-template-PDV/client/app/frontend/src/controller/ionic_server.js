// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import axios from 'axios';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Erro ao buscar agendamentos:', error));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agendamentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {appointments.map(app => (
              <IonCol size="12" size-md="6" size-lg="4" key={app.id}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{app.name}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{app.date} {app.start_time} - {app.end_time}</p>
                    <p>{app.description}</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default App;
