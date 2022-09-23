import React, { Component } from 'react';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        {/* Display screen */}
        <div className="display">
          <span>(0)</span>
          0
        </div>
        <div className="keypad">
          {/* Non-operator keys : keys beside the arithmetic operation keys */}
          <div className="non-operators">
            <div className="screen-status">
              <button type="button" className="btn btn-secondary btn-xlg">
                AC
              </button>
              <button type="button" className="btn btn-secondary btn-xlg">
                +/-
              </button>
              <button type="button" className="btn btn-secondary btn-xlg">
                %
              </button>
            </div>
            <div className="digits">
              <button type="button" className="one btn btn-secondary btn-xlg">
                1
              </button>
              <button type="button" className="two btn btn-secondary btn-xlg">
                2
              </button>
              <button type="button" className="three btn btn-secondary btn-xlg">
                3
              </button>
              <button type="button" className="four btn btn-secondary btn-xlg">
                4
              </button>
              <button type="button" className="five btn btn-secondary btn-xlg">
                5
              </button>
              <button type="button" className="six btn btn-secondary btn-xlg">
                6
              </button>
              <button type="button" className="seven btn btn-secondary btn-xlg">
                7
              </button>
              <button type="button" className="eight btn btn-secondary btn-xlg">
                8
              </button>
              <button type="button" className="nine btn btn-secondary btn-xlg">
                9
              </button>
              <button type="button" className="zero btn btn-secondary btn-xlg">
                0
              </button>
              <button type="button" className="dot btn btn-secondary btn-xlg">
                .
              </button>
            </div>
          </div>
          {/* Arithmetic operation keys */}
          <div className="operators">
            <button type="button" className="btn btn-dark btn-xlg">
              ÷
            </button>
            <button type="button" className="btn btn-dark btn-xlg">
              x
            </button>
            <button type="button" className="btn btn-dark btn-xlg">
              -
            </button>
            <button type="button" className="btn btn-dark btn-xlg">
              +
            </button>
            <button type="button" className="btn btn-dark btn-xlg">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
