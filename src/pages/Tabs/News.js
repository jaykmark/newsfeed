import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import SmallHeader from '../../components/Headers/SmallHeader';
import LargeHeader from '../../components/Headers/LargeHeader';

function News() {
  return (
    <IonPage>
      <SmallHeader title="Newsfeed" />
      <IonContent>
        <LargeHeader title="Newsfeed" />
      </IonContent>
    </IonPage>
  );
};

export default News;
