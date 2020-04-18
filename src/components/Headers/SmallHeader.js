import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

function SmallHeader({ title }) {
  return (
    <IonHeader>
      <IonToolbar
        style={{
          background: "#f0652f",
        }}
        color="primary"
      >
        <IonTitle size="small">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default SmallHeader;
