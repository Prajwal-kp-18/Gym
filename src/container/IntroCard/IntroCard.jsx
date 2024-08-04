import './IntroCard.css';
import { cardList } from './CardList';

function AboutCarts() {
  return (
    <div className="app__header-main">
      {cardList.map((card, id) => (
        <div key={id} className="app__cardList">
          <img src={card.img} alt="box_img" className=" w-[75px] mb-4" />
          <p className=" text-[24px] font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutCarts;
