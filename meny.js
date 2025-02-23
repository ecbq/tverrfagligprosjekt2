document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger-button');
    const dropdown = document.querySelector('.menu-content');
    const contentContainer = document.getElementById('content-container');
    const videoBtn = document.getElementById("video-btn");
    const videoModal = document.getElementById("video");
    const closeBtn = document.querySelector(".close");

    const defaultHtml = `
        <h1>Dette er hovedsiden</h1>
        <p>
            Velkommen til nettsiden vår. Her kan du lære mer om lagring og skyteknologi,
            fremtidens internett og internettets oppbygning. Bruk menyen for å se de ulike temaene.
        </p>
    `;

    const skyHtml = `
        <h1>Lagring og skyteknologi</h1>
        <p>
            Lagring og skyteknologi er en sentral del av moderne IT-infrastruktur.
            Denne artikkelen gir en oversikt over hvordan data lagres, hva
            skytjenester er, og hvordan sikkerhet og backup fungerer.
        </p>
        <h2>Servere og datasentre</h2>
        <p>
            Datasentre er store fasiliteter som huser tusenvis av servere. Disse
            serverne lagrer og behandler data for tjenester vi bruker hver dag,
            som nettsider, apper og skytjenester.
        </p>
        <h2>Skytjenester</h2>
        <p>
            Skytjenester lar deg lagre filer på eksterne servere i stedet for
            på din egen datamaskin. Du kan få tilgang til filene dine fra hvor
            som helst med en internettforbindelse.
        </p>
        <h2>Lokal lagring vs. skybasert lagring</h2>
        <p>
            Lokal lagring betyr at data lagres på din egen enhet, som en harddisk
            eller USB. Fordeler inkluderer rask tilgang, mens skybasert lagring
            gir tilgjengelighet fra flere enheter og automatisk sikkerhetskopiering.
        </p>
        <h2>Datasikkerhet og backup</h2>
        <p>
            Datasikkerhet inkluderer kryptering, backup og to-faktor-autentisering
            for å beskytte dataen din. Dette sikrer at kun autoriserte brukere får
            tilgang til informasjonen.
        </p>
    `;

    const fremtidenHtml = `
        <h1>Fremtidens internett</h1>
        <p>
            Internett er i stadig utvikling, og fremtidens digitale landskap vil bli sterkt påvirket av
            teknologier som 5G, kunstig intelligens, Big Data og Web 3.0. Disse innovasjonene vil forme
            måten vi kommuniserer, jobber og samhandler med teknologi.
        </p>
        <h2>5G og videreutvikling av nettverk</h2>
        <p>
            Med innføringen av 5G får vi høyere hastigheter, lavere forsinkelser og større kapasitet i mobilnettverk.
            Dette åpner for teknologier som selvkjørende biler, smarte byer og avansert fjernkirurgi.
        </p>
        <h2>AI og Big Data</h2>
        <p>
            Kunstig intelligens (AI) og store datamengder (Big Data) er en kritisk del av fremtidens internett.
            AI analyserer enorme mengder data for å gi bedre anbefalinger, automatisere oppgaver og forbedre
            brukeropplevelsen.
        </p>
        <h2>Web 3.0 og desentralisering</h2>
        <p>
            Web 3.0 er en ny fase av internett der desentralisering står i sentrum. Dette innebærer at data ikke
            lenger er eid av enkeltstående selskaper, men distribueres over flere nettverk via blokkjedeteknologi.
        </p>
        <h2>Personvern og sikkerhet</h2>
        <p>
            Ettersom internett blir mer avansert, blir også behovet for bedre sikkerhet større. Kryptering, kunstig
            intelligens og nye sikkerhetsprotokoller vil bli essensielle for å beskytte brukernes data og personvern.
        </p>
    `;

    const internetHtml = `
        <h1>Internettets oppbygning</h1>
        <p>
            Internett er et globalt nettverk som binder sammen milliarder av enheter over hele verden.
            Det er bygget på en kompleks infrastruktur av kabler, servere og protokoller som muliggjør rask
            og stabil kommunikasjon.
        </p>
        <h2>Historien om internett</h2>
        <p>
            Internett har sin opprinnelse i ARPANET, et nettverk utviklet av det amerikanske forsvaret på 1960-tallet.
            På 1990-tallet ble World Wide Web introdusert, noe som gjorde internett tilgjengelig for allmennheten
            gjennom nettlesere og nettsider.
        </p>
        <h2>Internettets infrastruktur</h2>
        <p>
            Internett er avhengig av et omfattende fysisk nettverk av fiberkabler, servere og knutepunkter.
            Store datasentre lagrer og behandler informasjon, mens kabler på havbunnen sørger for global forbindelse.
        </p>
        <h2>IP-adresser og DNS</h2>
        <p>
            Hver enhet som kobles til internett får en unik IP-adresse. DNS (Domain Name System) oversetter
            domenenavn til riktig IP-adresse, slik at det blir enkelt å finne og koble seg til nettsider.
        </p>
        <h2>Fremtidens internett-infrastruktur</h2>
        <p>
            Internett utvikler seg stadig med ny teknologi som raskere fiberkabler, satellittbasert internett
            og forbedrede protokoller for raskere og sikrere dataoverføring.
        </p>
    `;

    contentContainer.innerHTML = defaultHtml;
    let currentState = 'default';

    if (menuButton && dropdown) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }

    document.addEventListener('click', function() {
        if (dropdown) dropdown.classList.remove('active');
        if (menuButton) menuButton.classList.remove('active');
    });

    if (dropdown) {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    function switchContent(newState, newHtml) {
        const targetHtml = currentState === newState ? defaultHtml : newHtml;
        const nextState = currentState === newState ? 'default' : newState;
        contentContainer.classList.add('fade-out');
        setTimeout(() => {
            contentContainer.innerHTML = targetHtml;
            contentContainer.classList.remove('fade-out');
            contentContainer.classList.add('fade-in');
            setTimeout(() => {
                contentContainer.classList.remove('fade-in');
            }, 500);
            currentState = nextState;
        }, 500);
    }

    if (videoBtn) {
        videoBtn.addEventListener('click', function() {
            videoModal.style.display = "block";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            videoModal.style.display = "none";
            document.getElementById("videoSpiller").pause();
            document.getElementById("videoSpiller").currentTime = 0;
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = "none";
            document.getElementById("videoSpiller").pause();
            document.getElementById("videoSpiller").currentTime = 0;
        }
    });

    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');

    if (option1) {
        option1.addEventListener('click', function() {
            switchContent('sky', skyHtml);
        });
    }
    if (option2) {
        option2.addEventListener('click', function() {
            switchContent('fremtiden', fremtidenHtml);
        });
    }
    if (option3) {
        option3.addEventListener('click', function() {
            switchContent('internet', internetHtml);
        });
    }
});
