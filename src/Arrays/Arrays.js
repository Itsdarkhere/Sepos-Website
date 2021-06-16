function ProjectArray() {

    // Contains company and project info packages, everything that is needed
    // Just so that it is as clear and easy to edit as possible

   const projects = [
        {
           name: 'Garden Helsinki',
           index: 0,
           pictures: ['/garden-1.png', '/garden-2.png', '/garden-3.png', '/garden-4.png', '/garden-5.png', '/garden-6.png'],
           hqPictures: ['/garden-1.png', '/garden-2.jpg', '/garden-3.jpg', '/garden-4.jpg', '/garden-5.jpeg', '/garden-6.jpg'],
           finishedIn: '2022',
           website: 'https://www.gardenhelsinki.fi/',
           description: `Garden Helsinki on Töölöön, Nordenskiöldinkadun varrelle suunnitteilla oleva kiinteistökehityshanke. 
           Gardeniin suunnitellaan modernia kansainvälisen tason tapahtuma-areenaa ja sen ympärille kehitettäviä kattavia oheispalveluja 
           sekä jokapäiväisiä palveluita kaupunkilaisten käyttöön. Garden Helsinki on 2020-luvun kiinteistökonsepti, joka tarjoaa huippulaatuisen 
           teknologian ja palveludesignin kautta päivittäisille käyttäjilleen arkea elävöittäviä palvelukokemuksia ja puitteet maailmanluokan tapahtumille.`,
           websiteLinkName: 'www.gardenhelsinki.fi',
           facts: ['200 asuntoa', '2 areenaa, paikkoja 16 000 ja 5 000', 'Toimistotiloja, 2 hotellia, liikuntatiloja', 'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
           status: 'Suunnitteluvaiheessa, rakentaminen tavoitteena käynnistää 2022 ja kohde valmis 2025',
           projectPage: '/garden',
            previousProject: ["/lantinen-laituri", "Hangon Läntinen Laituri"],
           nextProject: ["/ratapiha", "Turun Ratapiha"]
        },

        {
            name: 'Turun Ratapiha',
            index: 1,
            pictures: ['/turku-1.png', '/turku-2.png', '/turku-3.png', '/turku-4.png', '/turku-5.png','/turku-6.png'],
            hqPictures: ['/turku-1.jpg', '/turku-2.jpg', '/turku-3.jpg', '/turku-4.jpg', '/turku-5.jpg','/turku-6.jpg'],
            finishedIn: '2025',
            website: 'https://www.turkuratapiha.fi/',
            description: `Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, 
            kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia 
            toisiinsa. Elävä kaupunkikeskus tarvitsee ajanmukaiset puitteet elämää rikastuttavien kulttuuri-, viihde- ja liikuntapalvelujen 
            tuottamiseen, työpaikkoja, keskusta-asumista sekä kaupunkilaisten ympärivuotisen olohuoneen.`,
            websiteLinkName: 'www.turkuratapiha.fi',
            facts: ['Areena, 10 000 paikkaa', '800 asuntoa', 'Toimistotiloja, hotelli, liikuntatiloja', 'Elämyskeskus Genesis', 'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
            status: 'Suunnitteluvaiheessa, rakentaminen tavoitteena käynnistää 2023 ja kohde valmis 2026',
            projectPage: '/ratapiha',
            previousProject: ["/garden", "Garden Arena"],
            nextProject: ["/hippos", "Hippos Jyväskylä"]
        },

        {
            name: 'Hippos Jyväskylä',
            index: 2,
            pictures: ['/hippos-1.png', '/hippos-2.png', '/hippos-3.png'],
            hqPictures: ['/hippos-1.jpg', '/hippos-2.jpg', '/hippos-3.jpg'],
            finishedIn: '2025',
            website: 'https://www.businessjyvaskyla.fi/kehitys/hippos',
            description: `Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin 
            liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan 
            tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.`,
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
            index: 3,
            pictures: ['/hameensaari-1.png', '/hameensaari-2.png','/hameensaari-3.png', '/hameensaari-4.png', '/hameensaari-5.png'],
            hqPictures: ['/hameensaari-1.png', '/hameensaari-2.png','/hameensaari-3.png', '/hameensaari-4.png', '/hameensaari-5.png'],
            finishedIn: '2028',
            website: 'https://www.hameenlinna.fi/asuminen-ja-ymparisto/kaavoitus/suunnitteluvaraukset/',
            description: `Hämeenlinnan keskustakehityshanke on monipuolinen ja vetovoimainen matkailun 
            ja vapaa-ajan palveluiden keskittymä, jonka kokonaisuuden muodostavat monitoimiareena, liikunnan ja vapaa-ajan tilat, 
            Vanajaveden rannan tuntumassa keskusta-asuminen sekä korkeatasoinen arkkitehtuuri.`,
            websiteLinkName: 'www.hameenlinna.fi/suunnittelu',
            facts: ['Areena, 6 000 paikkaa', '120 asuntoa', 'Toimistotiloja, liikuntatiloja', 'Arjen peruspalvelut kuten ruokakauppa ja lääkäriasema'],
            status: 'Kehitysvaiheessa, Hämeensaaren Kehitys Oy:n tavoitteena saada päätös kaupungin roolista hankkeessa 2021 aikana jonka jälkeen suunnitteluvaihe voi käynnistyä',
            projectPage: '/hameensaari',
            previousProject: ["/hippos", "Hippos Jyväskylä"],
            nextProject: ["/oulu", "Oulun Ratapiha"]
        },

        {
            name: 'Oulun Ratapiha',
            index: 4,
            pictures: ['/oulu-1.png', '/oulu-2.png', '/oulu-3.png', '/oulu-4.png', '/oulu-5.png','/oulu-6.png'],
            hqPictures: ['/oulu-1.jpg', '/oulu-2.jpg', '/oulu-3.jpg', '/oulu-4.jpg', '/oulu-5.jpg','/oulu-6.jpg'],
            finishedIn: '2021',
            website: '',
            description: `Hankkeen päämääränä on mahdollistaa merkittävältä osaltaan Oulun kaupungin strategiaa - 
            tavoitetta olla ”Capital Of Northern Skandinavian” Monitoimiareenan sijoittaminen asemakeskuksen yhteyteen tuo alueelle riittävästi 
            tapahtumia, asiakkaita ja ihmisvirtoja, jotta kaupunkilaisten elämää parantavat, radan ylittämiseen ja alittamiseen liittyvät ratkaisut 
            voidaan saada aikaan.`,
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
            index: 0,
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
            index: 5,
            pictures: ['/inkoo-1.png', '/inkoo-2.png', '/inkoo-3.png', '/inkoo-4.png', '/inkoo-5.png', '/inkoo-6.png'],
            hqPictures: ['/inkoo-1.jpg', '/inkoo-2.jpg', '/inkoo-3.jpg', '/inkoo-4.png', '/inkoo-5.jpg', '/inkoo-6.jpg'],
            finishedIn: '2022',
            website: 'https://www.inkoonranta.com/inkoonranta',
            description: `Inkoonranta on elämänlaatua meren äärellä. Se on omaa rauhaa ja naapurihenkeä, sulassa 
            sovussa. Iloinen Inkoonranta on valinta, ilman luopumista.`,
            websiteLinkName: 'www.inkoonranta.com',
            facts: ['Pienkerrostaloja', 'Erillisasuntoja', 'Sataman palvelut', 'Inkoon keskustassa, meren rannalla'],
            status: '',
            projectPage: '/inkoonranta',
            previousProject: ["/oulu", "Oulun Ratapiha"],
            nextProject: ["/lantinen-laituri", "Hangon Läntinen Laituri"]
        },
        

        {
            name : 'Hangon Läntinen Laituri',
            index: 6,
            pictures: ['/hanko-1.png', '/hanko-2.png', '/hanko-3.png', '/hanko-4.png','/hanko-5.png', '/hanko-6.png'],
            hqPictures: ['/hanko-1.jpeg', '/hanko-2.jpg', '/hanko-3.jpg', '/hanko-4.jpg','/hanko-5.jpg', '/hanko-6.jpg'],
            finishedIn: '2025',
            website: 'https://www.inkoonranta.com/inkoonranta',
            description: `Kuningatarvuorelle, Itäsatamaan, merenrantaan ja Hangon palvelujen ääreen rakennetaan noin 
                80 – 100 asuntoa, vapaa-ajan ja ympärivuotiseen asumiseen.`,
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
            'image': '/company-1.png',
            'website': 'https://modumdigital.com/en/',
            'displayWebsite': 'modumdigital.fi',
            'description': 'Modum offers a new kind of high-quality professional video and photography production service for product descriptions, presentation and distribution on the web.',
        },

        {
            'name': 'CINEMATIC',
            'image': '/company-2.png',
            'website': 'https://www.cinematic.fi/',
            'displayWebsite': 'cinematic.fi',
            'description': 'Cinematic is a production company founded in 2018 by Antti J. Jokinen it`s sole purpose is to create movies, TV-series, digital content, music & consumer products.',
        },

        {
            'name': 'Hög light and sound',
            'image': '/company-3.png',
            'website': 'https://www.facebook.com/hoglightandsound/',
            'displayWebsite': 'hoglightandsound.fi',
            'description': 'Professional solutions for touring and events.',
        },

        {
            'name': 'Luv Kodit Oy',
            'image': '/company-4.png',
            'website': 'http://www.luvkoti.fi/',
            'displayWebsite': 'luvkoti.fi',
            'description': 'LUV on uusi, raikas, yrittäjävetoinen asuntomyyntiyhtiö. Erikoisosaamistamme on paneutuminen kokonaisiin, uusiin kiinteistöhankkeisiin. Ja asiakkaidemme kokonaisvaltaiseen, yksilölliseen palveluun.',
        }
    
    ]    
    return companies
}

export {ProjectArray, CompanyArray}