import React from "react";
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./ContentBox.sass";

function ContentBox({ title, child }) {
  return (
    <UncontrolledAccordion className="content-box" defaultOpen={["1"]} stayOpen>
      <AccordionItem>
        <AccordionHeader className="content-box-header" targetId="1">
          {title}
        </AccordionHeader>
        <AccordionBody accordionId="1">{child}</AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}

export default ContentBox;
