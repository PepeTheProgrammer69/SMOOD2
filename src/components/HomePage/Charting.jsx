import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import "../../../public/HomePage.css"

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("option5");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Container className="charting-comp">
        <h2 className="spy-ts">S&P TimeSeries</h2>
        <ButtonGroup className="btn-group-ts">
          <Button
            variant={selectedOption === "option1" ? "primary" : "light"}
            onClick={() => handleSelectOption("option1")}
            className={selectedOption === "option1" ? "active" : ""}
          >
            1 Week
          </Button>
          <Button
            variant={selectedOption === "option2" ? "primary" : "light"}
            onClick={() => handleSelectOption("option2")}
            className={selectedOption === "option2" ? "active" : ""}
          >
            1 Month
          </Button>
          <Button
            variant={selectedOption === "option3" ? "primary" : "light"}
            onClick={() => handleSelectOption("option3")}
            className={selectedOption === "option3" ? "active" : ""}
          >
            1 Year
          </Button>
          <Button
            variant={selectedOption === "option4" ? "primary" : "light"}
            onClick={() => handleSelectOption("option4")}
            className={selectedOption === "option4" ? "active" : ""}
          >
            5 Years
          </Button>
          <Button
            variant={selectedOption === "option5" ? "primary" : "light"}
            onClick={() => handleSelectOption("option5")}
            className={selectedOption === "option5" ? "active" : ""}
          >
            All Time
          </Button>
        </ButtonGroup>

        <div>
          {selectedOption && (
            <div>
              {selectedOption === 'option1' && <img className="ts-image"  src="../../../images/1W.png" alt="Option 1" />}
              {selectedOption === 'option2' && <img className="ts-image" src="../../../images/1M.png" alt="Option 2" />}
              {selectedOption === 'option3' && <img className="ts-image" src="../../../images/1Y.png" alt="Option 3" />}
              {selectedOption === 'option4' && <img className="ts-image" src="../../../images/5%20Year.png" alt="Option 4" />}
              {selectedOption === 'option5' && <img className="ts-image" src="../../../images/AllTime.png" alt="Option 5" />}
            </div>
          )}
          {!selectedOption && (
            <div>
              <img className="ts-image" src="../../../images/AllTime.png" alt="Option 5" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default DropdownMenu;
