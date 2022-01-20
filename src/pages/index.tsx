import Card from "../components/globals/Card";
import Title from "../components/globals/Title";
import Image from 'next/image';
import ImageCount from '../public/count.png';
import ImageChess from '../public/chess.png';
import ImageRandom from '../public/random.png';
import ImageSumTwoNumbers from '../public/sumTwoNumbers.png';
import ImageCountValueSpecif from '../public/countValueSpecif.png';
import ImageIMC from '../public/imc.png';
import Button from "../components/globals/Button";

const Home = () => {
  return (
    <>
      <Title title="Projects in Next.JS" />

      <div className="mt-10 flex ml-5 flex-wrap">
        <div className="ml-3">
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

        </div>

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

        <div className="ml-3">
          <Button
            onClick={() => window.open('https://projects-next-js.vercel.app/random')}
          >
            <Card
              image={
                <Image
                  src={ImageRandom}
                  alt="Random"
                  width={300}
                  height={300}
                />
              }
              description="Number random between value minimum and maximum"
            />
          </Button>
        </div>

        <div className="ml-3">
          <Button
            onClick={() => window.open('https://projects-next-js.vercel.app/sumTwoNumbers')}
          >
            <Card
              image={
                <Image
                  src={ImageSumTwoNumbers}
                  alt="Sum Two Numbers"
                  width={300}
                  height={300}
                />
              }
              description="Sum Two Numbers"
            />
          </Button>
        </div>

        <div className="ml-3">
          <Button
            onClick={() => window.open('https://projects-next-js.vercel.app/countValueSpecif')}
          >
            <Card
              image={
                <Image
                  src={ImageCountValueSpecif}
                  alt="Count Value Specif"
                  width={300}
                  height={300}
                />
              }
              description="Count value specif"
            />
          </Button>
        </div>

        <div className="ml-3">
          <Button
            onClick={() => window.open('https://projects-next-js.vercel.app/imc')}
          >
            <Card
              image={
                <Image
                  src={ImageIMC}
                  alt="IMC"
                  width={300}
                  height={300}
                />
              }
              description="Calculate IMC (body mass index)"
            />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Home;