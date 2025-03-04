// 3. Buttons (3p)
// Skapa två komponenter: Button och ButtonWithChildren.
// Button ska ha en prop `title` som anger rubriken på knappen.
// ButtonWithChildren ska använda children för att visa texten i knappen.
// Båda komponenter ska ha en prop `onClick` som kallas när man klickar på knappen.
// Använd båda komponenterna på sidan. När man klickar på Button-knappen ska
// det skrivas ut "klick på Button" på sidan.
// När man klickar på ButtonWithChildren-knappen
// ska det skrivas ut "klick på ButtonWithChildren".
//
// Create two components: Button and ButtonWithChildren.
// Button should have a prop `title` that specifies the title of the button.
// ButtonWithChildren should use children to display the text in the button.
// Both components must have a prop `onClick` which is called when the button is clicked.
// Use both components on the page. When clicking the Button button shall
// "click Button" is printed on the page.
// When clicking the ButtonWithChildren button
// should it print "click on ButtonWithChildren".

import { useState } from 'react';

export default function Question3() {
  const [print, setPrint] = useState('');

  return (
    <div>
      <h1>Question 3</h1>
      <div className='flex gap-4'>
        <Button onClick={() => setPrint('click on Button')} title={'Button'} />
        <ButtonWithChildren onClick={() => setPrint('click on ButtonWithChildren')}>
          ButtonWithChildren
        </ButtonWithChildren>
      </div>
      <p>{print}</p>
    </div>
  );
}

function Button({ title, onClick }) {
  return (
    <button className='border rounded p-2 hover:bg-slate-200' onClick={onClick}>
      {title}
    </button>
  );
}

function ButtonWithChildren({ children, onClick }) {
  return (
    <button className='border rounded p-2 hover:bg-slate-200' onClick={onClick}>
      {children}
    </button>
  );
}
