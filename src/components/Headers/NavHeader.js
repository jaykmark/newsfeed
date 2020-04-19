import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/react';

function NavHeader({ title }) {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
export default NavHeader;
