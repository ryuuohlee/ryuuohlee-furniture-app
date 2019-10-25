// requirements
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

const StockCheck = () => (
  <div className="stockCheck">
    <span className="jeff-assembly">
      <img className="bunny" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/task+rabbit.svg" alt="assembly" />
      <img className="info" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/info.png" alt="info" />
      <a className="jeff-assemblyLink" href="test">
        Assembly
      </a>
    </span>
    <div className="accordion">
      <Accordion allowZeroExpanded="true">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <span className="jeff-deliveryInfo">
                <img className="delivery" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/delivery.png" alt="truck" />
                <img className="available" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/available.png" alt="available" />
                <span className="jeff-deliveryText">Available for delivery</span>
              </span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <span className="jeff-deliveryDetail">Add to cart for delivery details.</span>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
    <div className="jeff-checkStore">
      <img className="store" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/store.png" alt="store" />
      <img className="info" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/info.png" alt="info" />
      <span className="jeff-csText">Check at your local store</span>
    </div>
  </div>
);

export default StockCheck;
