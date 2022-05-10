import React from 'react';
import Itemcard from './itemcard';
import Data from './Data';

const Home = () => {
  return (
    <>
      <h1 className='text-center mt-3'>All items</h1>
      <section className='py-4 container'>
        <div className='row justify-contain-center'>
          {Data.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
