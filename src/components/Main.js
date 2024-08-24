const Main = () => {
    const test = true;
    // if (test) throw new Error('Blad w komponencie Main')
    if (!test) {
        return <main className="content">Czesc glowna</main>
    }
}

export default Main;