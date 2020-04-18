import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import SmallHeader from '../../components/Headers/SmallHeader';
import LargeHeader from '../../components/Headers/LargeHeader';

function Profile() {
  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent>
        <LargeHeader title="Profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
