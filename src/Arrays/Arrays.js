

function ProjectArray() {

   const projects = [
        {
           name: 'Garden Helsinki',
           pictures: ['/38.png', '/40.png', '/35.png', '/39.png', '/37.png', '/33.png'],
           hqPictures: ['/garden4.jpg', '/garden2.jpg', '/garden11.jpg', '/garden1.jpg', '/garden5.jpeg', '/garden14.jpg'],
           finishedIn: '2022',
           website: 'https://www.gardenhelsinki.fi/',
           description: 'Garden on Helsingin Töölööseen yksityisellä rahoituksella toteutettavaksi suunniteltu kiinteistökehityshanke. Gardeniin on suunniteltu monenlaisia ympärivuotisesti paikallisia asukkaita palvelevia toimintoja, joista keskeisinon maan alle rakennettava huippumoderni tapahtuma-areena. Kokonaisuutta suunnitellaan rakennettavaksi tapahtuma-areenan yhteyteen ja palveluihin kuuluvat mm. hotelli,ravintoloita, kuntoilukeskus, majoitustilaa ja ruokakauppa.',
           websiteLinkName: 'www.gardenhelsinki.fi',
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
            description: 'Pääosin yksityisellä investointirahalla rahoitettu Turun Ratapiha -hanke monipuolistaa osaltaan Turun kaupunkikeskustan tapahtuma-, kulttuuri- ja elämystarjontaa ja lisää sen vetovoimaisuutta ja yhdistää ratapiha-alueen erottamia kaupunginosia toisiinsa.',
            websiteLinkName: 'www.turkuratapiha.fi',
            projectPage: '/ratapiha',
            previousProject: ["/garden", "Garden Arena"],
            nextProject: ["/hippos", "Hippos Jyväskylä"]
        },

        {
            name: 'Hippos Jyväskylä',
            pictures: ['/19.png', '/20.png', '/21.png'],
            hqPictures: ['/hippos3.jpg', '/hippos2.jpg', '/hippos1.jpg'],
            finishedIn: '2025',
            website: 'https://www.turkuratapiha.fi/',
            description: 'Hippos on valmistuessaan paitsi kaupunkilaisten kohtaamispaikka, myös Pohjoismaiden merkittävin liikunnan, urheilun ja huippu-urheilun, terveyden edistämisen sekä hyvinvoinnin ja tapahtumien keskus. Lisäksi se yhdistää liikunnan tutkimuksen ja teknologisen tuotekehityksen kansainvälisesti merkittäväksi kokonaisuudeksi.Ympärivuotisten – ja liki ympärivuorokautisten – toimintojensa Hippoksesta tulee Jyväskylän valtakunnallinen ja kansainvälinen vetovoimatekijä.',
            websiteLinkName: '',
            projectPage: '/hippos',
            previousProject: ["/ratapiha", "Oulun Ratapiha"],
            nextProject: ["/hameensaari", "Hämeensaari Hämeenlinna"]
        },

        {
            name: 'Hämeensaari Hämeenlinna',
            pictures: ['/32.png', '/29.png','/30.png', '/28.png', '/31.png'],
            hqPictures: ['/hämeensaari1.png', '/hämeensaari4.png', '/hameensaari3.png', '/hameensaari5.png', '/hämeensaari2.png'],
            finishedIn: '2028',
            website: '',
            description: 'Hämeensaari hankkeeseen kuuluu monitoimiareenan, asumista, liiketilaa, toimistoja, liikunta- sekä ravintolatiloja. Yhteensä noin 50 000 kerrosneliötä. Monitoimiareenan osuus koko Hämeensaaren suunnittelualueesta on noin kolmasosa. Hämeensaaressa ajatuksena on yhdistää julkista ja yksityistä tilaa',
            websiteLinkName: '',
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
            description: '',
            websiteLinkName: '',
            projectPage: '/oulu',
            previousProject: ["/hameensaari", "Hämeensaari Hämeenlinna"],
            nextProject: ["/hernesaaren-karki", "Hernesaaren Kärki"]
        },

        {
            name: 'Hernesaaren Kärki',
            pictures: ['/41.png', '/42.png','/43.png', '/44.png', '/45.png', '/46.png',],
            hqPictures: ['/hernesaari4.jpg', '/hernesaari2.jpg', '/hernesaari3.jpg', '/hernesaari1.jpg', '/hernesaari6.jpg', '/hernesaari5.jpg'],
            finishedIn: '2026',
            website: '',
            description: '',
            websiteLinkName: '',
            projectPage: '/hernesaaren-karki',
            previousProject: ["/oulu", "Oulun Ratapiha"],
            nextProject: ["/inkoonranta", "Inkoonranta"]
        },

        {
            name: 'Inkoonranta',
            pictures: ['/15.png', '/14.png', '/16.png', '/18.png', '/17.png', '/13.png'],
            hqPictures: ['/inkoo4.jpg', '/inkoo6.jpg', '/inkoo2.jpg', '/inkoo1.png', '/inkoo3.jpg', '/inkoo7.jpg'],
            finishedIn: '2022',
            website: 'https://www.inkoonranta.com/inkoonranta',
            description: '',
            websiteLinkName: 'www.inkoonranta.com',
            projectPage: '/inkoonranta',
            previousProject: ["/hernesaaren-karki", "Hernesaaren Kärki"],
            nextProject: ["/lantinen-laituri", "Hangon Läntinen Laituri"]
        },
        

        {
            name : 'Hangon Läntinen Laituri',
            pictures: ['/25.png', '/23.png', '/24.png', '/22.png','/26.png', '/27.png'],
            hqPictures: ['/hanko3.jpg', '/hanko4.jpg', '/hanko5.jpg', '/hanko7.jpg', '/hanko2.jpg', '/hanko1.jpeg'],
            finishedIn: '2025',
            website: 'https://www.inkoonranta.com/inkoonranta',
            description: '',
            websiteLinkName: '',
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