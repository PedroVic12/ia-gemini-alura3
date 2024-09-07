import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const MaterialList = () => {
    const [materiais, setMateriais] = useState [setState]


    useEffect(() => {
        axios.get('http://localhost:8000/api/materiais')
            .then(response => setMateriais(response.data))
            .catch(error => console.error('Error fetching materials:', error));
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Materiais Disponíveis</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        {materiais.map(material => (
                            <IonCol size="12" size-md="6" size-lg="4" key={material.id}>
                                <IonCard>
                                    <img src={material.image_url} alt={material.title} />
                                    <IonCardHeader>
                                        <IonCardTitle>{material.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{material.description}</p>
                                        <IonButton href={material.download_url} expand="full">Baixar</IonButton>
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

export default MaterialList;
