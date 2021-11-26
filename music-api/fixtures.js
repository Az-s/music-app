const mongoose = require('mongoose');
const config = require('./config');
const Album = require('./models/Album');
const Artist = require('./models/Artist');
const Track = require('./models/Track');
const User = require('./models/User');

const run = async () => {
    await mongoose.connect(config.db.url);

    const connection = mongoose.connection;

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [ImDr, AWal] = await Artist.create(
        { name: 'Imagine Dragons', description: 'Imagine Dragons is an American pop rock band from Las Vegas, Nevada, consisting of lead singer Dan Reynolds, guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman.', image: 'imagine-dragons-trianon_1.jpg' },
        { name: 'Alan Walker', description: 'Alan Olav Walker (born 24 August 1997) is a British-Norwegian DJ, YouTuber and record producer, primarily known for the critically acclaimed single "Faded" (2015), which was certified platinum in 14 countries.', image: 'aw.jpg' },
    );

    const [night_vision, evolve, origins, faded, different_world, live_fast] = await Album.create(
        {
            title: 'Night Visions',
            artist: ImDr._id,
            year: '2012',
            image: 'Night_Visions.jpeg'
        },
        {
            title: 'Evolve',
            artist: ImDr._id,
            year: '2017',
            image: 'evolve.jpg'
        },
        {
            title: 'Origins',
            artist: ImDr._id,
            year: '2018',
            image: 'Origins.jpg'
        },
        {
            title: 'Faded (Remixes)',
            artist: AWal._id,
            year: '2014',
            image: 'faded.webp'
        },
        {
            title: 'Different World',
            artist: AWal._id,
            year: '2018',
            image: 'Different_World.jpg'
        },
        {
            title: 'Live Fast',
            artist: AWal._id,
            year: '2019',
            image: 'Live_Fast.jpg'
        }
    );

    await Track.create(
        {
            title: 'Radioactive',
            album: night_vision._id,
            duration: '3,10',
            number: 1,
            youtube: 'https://youtu.be/ktvTqknDobU'
        },
        {
            title: 'Demons',
            album: night_vision._id,
            duration: '3,04',
            number: 2,
            youtube: 'https://youtu.be/LqI78S14Wgg'
        },
        {
            title: 'Tiptoe',
            album: night_vision._id,
            duration: '3,14',
            number: 3,
            youtube: 'https://youtu.be/ajjj4pLnjz8'
        },
        {
            title: 'Believer',
            album: evolve._id,
            duration: '3,36',
            number: 1,
            youtube: 'https://youtu.be/7wtfhZwyrcc'
        },
        {
            title: 'Thunder',
            album: evolve._id,
            duration: '3,24',
            number: 2,
            youtube: 'https://youtu.be/fKopy74weus'
        },
        {
            title: 'Whatever it takes',
            album: evolve._id,
            duration: '3,39',
            number: 3,
            youtube: 'https://youtu.be/gOsM-DYAEhY'
        },
        {
            title: 'Natural',
            album: origins._id,
            duration: '3,09',
            number: 1,
            youtube: 'https://youtu.be/0I647GU3Jsc'
        },
        {
            title: 'Boomerang',
            album: origins._id,
            duration: '3,07',
            number: 2,
            youtube: 'https://youtu.be/BDjfMI6QvxQ'
        },
        {
            title: 'Bad Liar',
            album: origins._id,
            duration: '4,43',
            number: 3,
            youtube: 'https://youtu.be/I-QfPUz1es8'
        },
        {
            title: 'Faded (Tiestos Deep House Remix)',
            album: faded._id,
            duration: '4.29',
            number: 1,
            youtube: 'https://youtu.be/ZIY8PxMK5YA'
        },
        {
            title: 'Faded (Y&V Remix)',
            album: faded._id,
            duration: '4.33',
            number: 2,
            youtube: 'https://youtu.be/cXubCdpVX_c'
        },
        {
            title: 'Faded (Slushii Remix)',
            album: faded._id,
            duration: '3.32',
            number: 3,
            youtube: 'https://youtu.be/_JypXXT5_ME'
        },
        {
            title: 'Sing Me To Sleep',
            album: different_world._id,
            duration: '3.11',
            number: 1,
            youtube: 'https://youtu.be/2i2khp_npdE'
        },
        {
            title: 'Alone',
            album: different_world._id,
            duration: '2.43',
            number: 2,
            youtube: 'https://youtu.be/1-xGerv5FOk'
        },
        {
            title: 'Lonely',
            album: different_world._id,
            duration: '3.01',
            number: 3,
            youtube: 'https://youtu.be/Wrgp3Rp1kPY'
        },
        {
            title: 'The Spectre',
            album: live_fast._id,
            duration: '3.26',
            number: 1,
            youtube: 'https://youtu.be/wJnBTPUQS5A'
        },
        {
            title: 'On My Way',
            album: live_fast._id,
            duration: '3.36',
            number: 2,
            youtube: 'https://youtu.be/dhYOPzcsbGM'
        },
        {
            title: 'Different World',
            album: live_fast._id,
            duration: '3.42',
            number: 3,
            youtube: 'https://youtu.be/m-PJmmvyP10'
        },
    );

    await User.create({
        username: 'admin',
        password: '123',
        token: nanoid(),
        role: 'admin'
    }, {
        username: 'user',
        password: '321',
        token: nanoid(),
        role: 'user'
    });

    await mongoose.connection.close();
};

run().catch(error => {
    console.error('Something went wrong!', error);
});