import { useEffect } from 'react';
import NxWelcome from '../nx-welcome';

export default function Index() {

  useEffect(() => {
    if ('serviceWorker' in (navigator ?? {})) {
      console.log('root - navigator.serviceWorker...');
      navigator.serviceWorker.register("../../serviceworker.js");
      console.log('root - navigator.serviceWorker=', navigator.serviceWorker);
    }
  })
  return (
    <div>
      <NxWelcome title={'flashcards'} />
    </div>
  );
}
