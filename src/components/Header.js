const Header = () => {
    return (
        <header className="App-header">
            <div className="header-text">
                <h1>Informacje dla Polaków w Szwajcarii</h1>
                <p className="header-p">Twoje źródło najważniejszych informacji o życiu w Szwajcarii. Praktyczne porady, aktualności i wsparcie dla polskiej społeczności</p>
                <form action="/search" method="GET" className="search-form">
                    <input className="search-input" type="text" name="q" placeholder="Wyszukaj informacje" required />
                    <button className="search-button" type="submit">Szukaj</button>
                </form>
            </div>

            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </header>
    );
}

export default Header;
