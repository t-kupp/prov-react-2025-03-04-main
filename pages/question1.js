// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.
//
// Create a "view" button on the page. When the button is clicked, a popup should appear.
// The popup displays the title "A popup" and a close button in a box.
// When the close button is clicked, the popup should be removed.

import { useState } from 'react';

export default function Question1() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <h1>Question 1</h1>
      <button className='border rounded p-2 hover:bg-slate-200' onClick={() => setShowPopup(true)}>
        Show Popup
      </button>
      {showPopup && (
        <div className='fixed top-0 left-0 h-screen w-screen backdrop-brightness-50 flex items-center justify-center'>
          <div className='bg-white rounded p-4'>
            <p>A popup</p>
            <button className='border rounded p-2 hover:bg-slate-200 mt-4' onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
