import beerOpenner from "./../assets/SwissArmyKnife/beerOpenner.svg";
import canOpenner from "./../assets/SwissArmyKnife/canOpenner.svg";
import closed from "./../assets/SwissArmyKnife/closed.svg";
import shortKnife from "./../assets/SwissArmyKnife/shortKnife.svg";
import longKnife from "./../assets/SwissArmyKnife/longKnife.svg";
import unicorn from "./../assets/SwissArmyKnife/unicorn.svg";

const SwissArmyKnife = () => {
  return (
    <div className="SwissArmyKnife closed">
        <img className="item beerOpenner" src={beerOpenner} alt="" />
        <img className="item canOpenner" src={canOpenner} alt="" />
        <img className="item shortKnife" src={shortKnife} alt="" />
        <img className="item longKnife" src={longKnife} alt="" />
        <img className="unicorn" src={unicorn} alt="" />
        <img className="main closed" src={closed} alt="" />
    </div>
  );
};

export default SwissArmyKnife;
