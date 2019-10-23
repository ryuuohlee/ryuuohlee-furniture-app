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
    <div>
      <img className="bunny" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/task+rabbit.svg" alt="assembly" />
      <img className="info" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/info.png" alt="info" />
      <a href="test">
        Assembly
      </a>
    </div>
    <div className="accordion">
      <Accordion allowZeroExpanded="true">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <img className="delivery" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/delivery.png" alt="truck" />
              <img className="available" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/available.png" alt="available" />
              Available for delivery
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <span>Add to cart for delivery details.</span>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
    <div className="checkStore">
      <img className="store" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/store.png" alt="store" />
      <img className="info" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/info.png" alt="info" />
      Check at your local store
    </div>
  </div>
);

export default StockCheck;
