import Card from "../components/globals/Card";
import Title from "../components/globals/Title";
import Image from 'next/image';
import ImageCount from '../public/count.png';
import ImageChess from '../public/chess.png';
import Button from "../components/globals/Button";

const Home = () => {
  return (
    <>
      <Title title="Projects in Next.JS" />

      <div className="mt-10 flex ml-5">
        <Card
          image={
            <Image
              src={ImageCount}
              alt="Count"
              width={300}
              height={300}
            />
          }
          description="Application to value count"
          link={
            <Button
              className="text-black"
              onClick={() => window.open('https://projects-next-js.vercel.app/count')}
            >
              Acessar Link
            </Button>
          }
        />

        <div className="ml-3">
          <Card
            image={
              <Image
                src={ImageChess}
                alt="Chess"
                width={300}
                height={300}
              />
            }
            description="Application chess board"
            link={
              <Button
                className="text-black"
                onClick={() => window.open('https://projects-next-js.vercel.app/chess')}
              >
                Acessar Link
              </Button>
            }
          />
        </div>


      </div>
    </>
  )
}

export default Home;