import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasketballPlayerCard from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

const players = [
  {
    name: "LeBron James",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/250px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  },
  {
    name: "Stephen Curry",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Steph_Curry_P20230117AS-1347_%28cropped%29.jpg/220px-Steph_Curry_P20230117AS-1347_%28cropped%29.jpg",
    position: "Guard",
    stats: {
      pointsPerGame: 30.1,
      assistsPerGame: 6.2,
      reboundsPerGame: 5.5
    }
  },
  {
    name: "Kevin Durant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg/220px-Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 28.2,
      assistsPerGame: 5.8,
      reboundsPerGame: 7.1
    }
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Happ to help</title>
        <meta name="description" content="Display player details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <h1 className={styles.header}>NBA players</h1>
        <div className={styles.main}>
          {players.map(player => (
            <BasketballPlayerCard
              key={player.name}
              name={player.name}
              image={player.image}
              position={player.position}
              stats={player.stats}
            />
          ))}
        </div>
      </main>
    </>
  );
}
