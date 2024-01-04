import React from "react";
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./ContentBox.sass";

function ContentBox(props) {
  return (
    <UncontrolledAccordion className="content-box" defaultOpen={["1"]} stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1">{props.title}</AccordionHeader>
        <AccordionBody accordionId="1">{props.child}</AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  );
}

export default ContentBox;
