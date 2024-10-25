const Header = () => {
    return (
        <header className="header-main">
        <div className="App-header"></div>
        <div className="header-text">
            <h2>Informacje dla Polaków w Szwajcarii</h2>
            <p className="header-p">Twoje źródło najważniejszych informacji o życiu w Szwajcarii. Praktyczne porady, aktualności i wsparcie dla polskiej społeczności</p>
            <button className="search-button" type="submit">Szukaj</button>
        </div>

            {/* <div>
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
            </div> */}
        
        </header>
    );
}

export default Header;
