import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import SmallHeader from '../../components/Headers/SmallHeader';
import LargeHeader from '../../components/Headers/LargeHeader';

function Submit() {
  return (
    <IonPage>
      <SmallHeader title="Submit" />
      <IonContent>
        <LargeHeader title="Submit" />
      </IonContent>
    </IonPage>
  );
};

export default Submit;
