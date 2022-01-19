import Card from "../components/globals/Card";
import Title from "../components/globals/Title";
import Image from 'next/image';
import ImageCount from '../public/count.png';
import Button from "../components/globals/Button";

const Home = () => {
  return(
    <>
      <Title title="Projects in Next.JS"/>

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
            className="text-sky-600"
            onClick={() => window.open('https://projects-next-js-7x9lj9mqq-leogrocha.vercel.app/count')}
            >
              Acessar Link
            </Button>
          }
          />
              
          
      </div>
    </>
  )
}

export default Home;