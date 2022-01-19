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
        <Button
        
          onClick={() => window.open('https://projects-next-js.vercel.app/count')}
        >
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
          />
        </Button>


        <div className="ml-3">
          <Button
          onClick={() => window.open('https://projects-next-js.vercel.app/chess')}
          >
            <Card
              image={
                <Image
                  src={ImageChess}
                  alt="Chess"
                  width={300}
                  height={300}
                />
              }
              description="Chess board"
            />
          </Button>
        </div>


      </div>
    </>
  )
}

export default Home;