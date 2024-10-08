import React, { useRef, useEffect, useState } from 'react';

const CardComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Nowy stan
  const cardRef = useRef(null);
  const inputRef = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const input = inputRef.current;
    const line2 = line2Ref.current;

    const handleFormSubmit = (e) => {
      e.preventDefault();
      input.blur();
      card.classList.add('saving');
    };

    const handleAnimationEnd = () => {
      setTimeout(() => {
        card.classList.add('done');
        setIsSubmitted(true); // Ustawia stan na true po zakończeniu animacji
      }, 500);
    };

    // Nasłuchujemy na submit form
    const form = document.querySelector('.form');
    form.addEventListener('submit', handleFormSubmit);

    // Nasłuchujemy na zakończenie animacji
    if (line2) {
      line2.addEventListener('animationend', handleAnimationEnd);
    }

    // Cleanup: usuwamy event listenery przy odmontowaniu komponentu
    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
      if (line2) {
        line2.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <main className='main-info'>
        <section>
            <h3>Jakis tytul czegos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dictum magna, sed congue justo. Nulla tincidunt ornare felis, nec ultrices felis tristique id. Integer at mauris ut lectus elementum interdum non nec lorem. Nam condimentum, dui vel varius dictum, ligula ligula vehicula purus, id elementum nisl sem ac sem. Etiam in elit et lectus blandit iaculis vel quis lorem. Duis quis tortor eget massa mollis lacinia in et lectus. Cras ultricies urna vitae velit egestas pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam at arcu id sem pellentesque malesuada. Mauris luctus arcu vel augue ultrices, et laoreet eros convallis. Vivamus auctor nisi at nunc cursus aliquam sed ac erat. Fusce quis cursus elit, at mollis lectus. Morbi imperdiet dictum diam in fringilla. Cras ante neque, rhoncus dignissim sollicitudin ac, ultricies ac leo. Donec dapibus odio molestie hendrerit tincidunt. Praesent bibendum consequat ante et pharetra. </p>
        </section>
        <section className='subscribe'>
        <div className="card" ref={cardRef}>
            <h2 className="title">Dołącz do naszego newslettera</h2>
            <p className='text'>Otrzymuj najświeższe informacje, porady i aktualności dla Polaków w Szwajcarii bezpośrednio na swoją skrzynkę e-mail.</p>
            <p className="text">Proszę wprowadź swój e-mail i naciśnij Enter</p>
            <svg className="line" viewBox="0 0 340 110">
                <path d="M 20,62 H 300" />
            </svg>
            <svg className="line2" viewBox="0 0 50 52" ref={line2Ref}>
                <path style={{ fill: 'none', stroke: '#000000', strokeWidth: 2 }} d="m 38.391765,17.110953 -16.66751,16.667516 -7.81073,-7.201053 c -2.56639,-2.366065 -3.80148,-3.574166 -6.56097,-5.722314 l -4.6426304,-1.736535" />
            </svg>
            <form className="form">
                <input className="input" type="email" ref={inputRef} />
            </form>
            {isSubmitted && <p className="thank-you">Dziękujemy!</p>}
        </div>
        {/* <img src="/envelope.png" alt="Ikona koperty" /> */}
        </section>
    </main>
  );
};

export default CardComponent;
