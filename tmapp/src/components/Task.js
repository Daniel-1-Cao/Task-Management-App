import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Draggable from "react-draggable";

const Task = (props) => {
  const { id, title, description, date, handleDelete } = props;

  return (
    <Draggable
      position={{ x: 0, y: 0 }}
      onStop={(e, data) => {
        if (Math.abs(data.x) > 5) {
          handleDelete(id, e.clientX);
        }
      }}
    >
      <div className="border border-2 rounded-3 m-2">
        <Accordion sx={{ bgcolor: "text.disabled" }}>
          <AccordionSummary
            className="text-white"
            expandIcon={<ExpandMoreIcon />}
          >
            {title}
          </AccordionSummary>
          <AccordionDetails className="d-flex flex-column">
            <hr style={{ color: "white", margin: "0" }} />
            <div className="text-white">Description: {description}</div>
            <div className="text-white">Due Date: {date}</div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Draggable>
  );
};

export default Task;
