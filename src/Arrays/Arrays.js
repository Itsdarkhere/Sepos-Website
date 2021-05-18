

function ProjectArray() {

   const projects = [
        {
           name: 'Garden Helsinki',
           pictures: ['/38.png', '/40.png', '/35.png', '/39.png', '/37.png', '/33.png'],
           hqPictures: ['/garden4.jpg', '/garden2.jpg', '/garden11.jpg', '/garden1.jpg', '/garden5.jpeg', '/garden14.jpg'],
           finishedIn: '2022',
           website: 'https://www.gardenhelsinki.fi/',
           description: 'Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön. Garden Helsinki on 2020-luvun kiinteistökonsepti, joka tarjoaa huippulaatuisen teknologian ja palveludesignin kautta päivittäisille käyttäjilleen arkea elävöittäviä palvelukokemuksia ja puitteet maailmanluokan tapahtumille.',
           websiteLinkName: 'www.gardenhelsinki.fi',
           facts: ['200 asuntoa', '2 areenaa, 16 000 paikkaa ja 5 000 paikkaa', 'Toimistotiloja, 2 hotellia, liikuntatiloja', 'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
           status: 'Suunnitteluvaiheessa, rakentaminen tavoitteena käynnistää 2022 ja kohde valmis 2025',
           projectPage: '/garden',
            previousProject: ["/lantinen-laituri", "Hangon Läntinen Laituri"],
           nextProject: ["/ratapiha", "Turun Ratapiha"]
        },

        {
            name: 'Turun Ratapiha',
            pictures: ['/turku0.png', '/turku2.png', '/3.png', '/4.png', '/5.png','/6.png'],
            hqPictures: ['/turku3.jpg', '/turku9.jpg', '/turku5.jpg', '/turku4.jpg', '/turku2.jpg', '/turku1.jpg'],
            finishedIn: '2025',
            website: 'https://www.turkuratapiha.fi/',
            description: 'Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa. Elävä kaupunkikeskus tarvitsee ajanmukaiset puitteet elämää rikastuttavien kulttuuri-, viihde- ja liikuntapalvelujen tuottamiseen, työpaikkoja, keskusta-asumista sekä kaupunkilaisten ympärivuotisen olohuoneen.',
            websiteLinkName: 'www.turkuratapiha.fi',
            facts: ['Areena, 10 000 paikkaa', '800 asuntoa', 'Toimistotiloja, hotelli, liikuntatiloja', 'Elämyskeskus Genesis', 'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
            status: 'Suunnitteluvaiheessa, rakentaminen tavoitteena käynnistää 2023 ja kohde valmis 2026',
            projectPage: '/ratapiha',
            previousProject: ["/garden", "Garden Arena"],
            nextProject: ["/hippos", "Hippos Jyväskylä"]
        },

        {
            name: 'Hippos Jyväskylä',
            pictures: ['/19.png', '/20.png', '/21.png'],
            hqPictures: ['/hippos3.jpg', '/hippos2.jpg', '/hippos1.jpg'],
            finishedIn: '2025',
            website: 'https://www.businessjyvaskyla.fi/kehitys/hippos',
            description: 'Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.',
            websiteLinkName: 'www.businessjyvaskyla.fi/hippos',
            facts: ['Liikuntakeskus: mm. 2 000 hengen katsomolla varustettu sisäpeliareena, monitoimiurheilukentät, tilat yleisurheilulle, telinevoimistelu-, kamppailu-, ryhmäliikuntatilat, liikuntapäiväkoti',
            'Osaamiskeskus: tutkimus-, opetus-, toimisto-, liike-, ravintola-, kahvila- ja kokoustilat sekä osa liikuntatiloista',
            'Jääareena toteutetaan jäähallin peruskorjauksena ja laajennuksena, jolloin saadaan lähes 6 000 hengen urheilu- ja konserttikatsomo sekä 3 harjoitusjääkenttää',
            'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
            status: 'Suunnitteluvaiheessa, rakentaminen tavoitteena käynnistää 2022 ja kohde valmis 2024',
            projectPage: '/hippos',
            previousProject: ["/ratapiha", "Oulun Ratapiha"],
            nextProject: ["/hameensaari", "Hämeensaari Hämeenlinna"]
        },

        {
            name: 'Hämeensaari Hämeenlinna',
            pictures: ['/32.png', '/29.png','/30.png', '/28.png', '/31.png'],
            hqPictures: ['/hämeensaari1.png', '/hämeensaari4.png', '/hameensaari3.png', '/hameensaari5.png', '/hämeensaari2.png'],
            finishedIn: '2028',
            website: 'https://www.hameenlinna.fi/asuminen-ja-ymparisto/kaavoitus/suunnitteluvaraukset/',
            description: 'Hämeenlinnan keskustakehityshanke on monipuolinen ja vetovoimainen matkailun ja vapaa-ajan palveluiden keskittymä, jonka kokonaisuuden muodostavat monitoimiareena, liikunnan ja vapaa-ajan tilat, Vanajaveden rannan tuntumassa keskusta-asuminen sekä korkeatasoinen arkkitehtuuri.',
            websiteLinkName: 'www.hameenlinna.fi/suunnitteluvaraukset',
            facts: ['Areena, 6 000 paikkaa', '120 asuntoa', 'Toimistotiloja, liikuntatiloja', 'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
            status: 'Kehitysvaiheessa, Hämeensaaren Kehitys Oy:n tavoitteena saada päätös kaupungin roolista hankkeessa 2021 aikana jonka jälkeen suunnitteluvaihe voi käynnistyä',
            projectPage: '/hameensaari',
            previousProject: ["/hippos", "Hippos Jyväskylä"],
            nextProject: ["/oulu", "Oulun Ratapiha"]
        },

        {
            name: 'Oulun Ratapiha',
            pictures: ['/11.png', '/8.png', '/9.png', '/7.png', '/10.png','/12.png'],
            hqPictures: ['/oulu1.jpg', '/oulu5.jpg', '/oulu4.jpg', '/oulu6.jpg', '/oulu3.jpg', '/oulu2.jpg'],
            finishedIn: '2021',
            website: '',
            description: 'Hankkeen päämääränä on mahdollistaa merkittävältä osaltaan Oulun kaupungin strategiaa - tavoitetta olla ”Capital Of Northern Skandinavian” Monitoimiareenan sijoittaminen asemakeskuksen yhteyteen tuo alueelle riittävästi tapahtumia, asiakkaita ja ihmisvirtoja, jotta kaupunkilaisten elämää parantavat, radan ylittämiseen ja alittamiseen liittyvät ratkaisut voidaan saada aikaan.',
            websiteLinkName: '',
            facts: ['Areena 10 000 paikkaa', 'Asuntoja, hotelli, Toimistotiloja, liikuntatiloja'],
            status: 'Kehitysvaiheessa, Oulun Ratapiha Kehitys Oy:n tavoitteena saada suunnitteluvaraus maa-alueelle 2021 aikana jonka jälkeen suunnitteluvaihe voi käynnistyä',
            projectPage: '/oulu',
            previousProject: ["/hameensaari", "Hämeensaari Hämeenlinna"],
            nextProject: ["/inkoonranta", "Inkoonranta"]
        },

        /*{
            Waiting for public release

            name: 'Hernesaaren Kärki',
            pictures: ['/41.png', '/42.png','/43.png', '/44.png', '/45.png', '/46.png',],
            hqPictures: ['/hernesaari4.jpg', '/hernesaari2.jpg', '/hernesaari3.jpg', '/hernesaari1.jpg', '/hernesaari6.jpg', '/hernesaari5.jpg'],
            finishedIn: '2026',
            website: '',
            description: '',
            websiteLinkName: '',
            facts: [],
            status: '',
            projectPage: '/hernesaaren-karki',
            previousProject: ["/oulu", "Oulun Ratapiha"],
            nextProject: ["/inkoonranta", "Inkoonranta"]
        }, */

        {
            name: 'Inkoonranta',
            pictures: ['/15.png', '/14.png', '/16.png', '/18.png', '/17.png', '/13.png'],
            hqPictures: ['/inkoo4.jpg', '/inkoo6.jpg', '/inkoo2.jpg', '/inkoo1.png', '/inkoo3.jpg', '/inkoo7.jpg'],
            finishedIn: '2022',
            website: 'https://www.inkoonranta.com/inkoonranta',
            description: 'Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa sovussa. Iloinen Inkoonranta on valinta, ilman luopumista. ',
            websiteLinkName: 'www.inkoonranta.com',
            facts: ['Pienkerrostaloja', 'Erillisasuntoja', 'Sataman palvelut', 'Inkoon keskustassa, meren rannalla'],
            status: '',
            projectPage: '/inkoonranta',
            previousProject: ["/oulu", "Oulun Ratapiha"],
            nextProject: ["/lantinen-laituri", "Hangon Läntinen Laituri"]
        },
        

        {
            name : 'Hangon Läntinen Laituri',
            pictures: ['/25.png', '/23.png', '/24.png', '/22.png','/26.png', '/27.png'],
            hqPictures: ['/hanko3.jpg', '/hanko4.jpg', '/hanko5.jpg', '/hanko7.jpg', '/hanko2.jpg', '/hanko1.jpeg'],
            finishedIn: '2025',
            website: 'https://www.inkoonranta.com/inkoonranta',
            description: 'Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.',
            websiteLinkName: '',
            facts: ['Pienkerrostaloja', 'Erillisasuntoja', 'Sataman palvelut', 'Hangon keskustassa, meren rannalla'],
            status: '',
            projectPage: '/lantinen-laituri',
            previousProject: ["/inkoonranta", "Inkoonranta"],
            nextProject: ["/garden", "Garden Arena"]
        },

    ]

    return projects
}

function CompanyArray() {

    
    const companies = [
        {
            'name': 'Modum Oy',
            'image': '/square1.png',
            'website': 'https://modumdigital.com/en/',
            'displayWebsite': 'modumdigital.fi',
            'description': 'Modum offers a new kind of high-quality professional video and photography production service for product descriptions, presentation and distribution on the web.',
        },

        {
            'name': 'CINEMATIC',
            'image': '/square2.png',
            'website': 'https://www.cinematic.fi/',
            'displayWebsite': 'cinematic.fi',
            'description': 'Cinematic is a production company founded in 2018 by Antti J. Jokinen it`s sole purpose is to create movies, TV-series, digital content, music & consumer products.',
        },

        {
            'name': 'Hög light and sound',
            'image': '/square3.png',
            'website': 'https://www.facebook.com/hoglightandsound/',
            'displayWebsite': 'hoglightandsound.fi',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum.',
        },

        {
            'name': 'Luv Kodit Oy',
            'image': '/square4.png',
            'website': 'http://www.luvkoti.fi/',
            'displayWebsite': 'luvkoti.fi',
            'description': 'LUV on uusi, raikas, yrittäjävetoinen asuntomyyntiyhtiö. Erikoisosaamistamme on paneutuminen kokonaisiin, uusiin kiinteistöhankkeisiin. Ja asiakkaidemme kokonaisvaltaiseen, yksilölliseen palveluun.',
        }
    
    ]    
    return companies
}

export {ProjectArray, CompanyArray}