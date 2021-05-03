const NumKey = props => {
  return /*#__PURE__*/(
    React.createElement("button", { id: props.id, onClick: props.handleClick, className: "num-key", value: props.value }, props.value));

};
const OpKey = props => {
  return /*#__PURE__*/(
    React.createElement("button", { id: props.id, onClick: props.handleClick, className: "op-key", value: props.value }, props.value));

};

const Display = props => {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "formula" },
    props.formula), /*#__PURE__*/

    React.createElement("div", { id: "display" },
    props.out)));



};

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
      out: '0',
      formula: '' };

    this.handleClear = this.handleClear.bind(this);
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }
  handleClear() {
    this.setState(
    {
      out: '0',
      formula: '' });


  }
  handleNumClick(event) {
    const inp = event.target.value;
    const newValue = this.state.out === '0' ? "" + inp : this.state.out + "" + inp;
    if (inp === '.' && this.state.out.includes('.')) {
      return;
    }
    this.setState(
    {
      formula: this.state.formula + "" + event.target.value,
      out: newValue });


  }
  removeOps() {
    var formula = this.state.formula;
    while ("/-*+".includes(formula.slice(-1))) {
      formula = formula.slice(0, -1);
    }
    return formula;
  }
  handleOpClick(event) {
    var newFormula;
    if (event.target.value === '-') {
      newFormula = this.state.formula + "" + event.target.value;
    } else
    {
      newFormula = this.removeOps() + "" + event.target.value;
    }
    this.setState(
    {
      formula: newFormula,
      out: event.target.value });


  }
  handleEquals() {
    const result = math.evaluate(this.state.formula);
    this.setState(
    {
      out: result,
      formula: "" + result });


  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calc" }, /*#__PURE__*/
      React.createElement(Display, { out: this.state.out, formula: this.state.formula }), /*#__PURE__*/
      React.createElement("div", { id: "button-pad" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.handleClear }, "AC"), /*#__PURE__*/
      React.createElement(OpKey, { id: "divide", handleClick: this.handleOpClick, value: "/" }), /*#__PURE__*/
      React.createElement(OpKey, { id: "multiply", handleClick: this.handleOpClick, value: "*" }), /*#__PURE__*/
      React.createElement(NumKey, { id: "seven", handleClick: this.handleNumClick, value: 7 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "eight", handleClick: this.handleNumClick, value: 8 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "nine", handleClick: this.handleNumClick, value: 9 }), /*#__PURE__*/
      React.createElement(OpKey, { id: "subtract", handleClick: this.handleOpClick, value: "-" }), /*#__PURE__*/
      React.createElement(NumKey, { id: "four", handleClick: this.handleNumClick, value: 4 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "five", handleClick: this.handleNumClick, value: 5 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "six", handleClick: this.handleNumClick, value: 6 }), /*#__PURE__*/
      React.createElement(OpKey, { id: "add", handleClick: this.handleOpClick, value: "+" }), /*#__PURE__*/
      React.createElement(NumKey, { id: "one", handleClick: this.handleNumClick, value: 1 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "two", handleClick: this.handleNumClick, value: 2 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "three", handleClick: this.handleNumClick, value: 3 }), /*#__PURE__*/
      React.createElement("button", {
        id: "equals",
        onClick: this.handleEquals,
        className: "op-key" }, "="), /*#__PURE__*/


      React.createElement(NumKey, { id: "zero", handleClick: this.handleNumClick, value: 0 }), /*#__PURE__*/
      React.createElement(NumKey, { id: "decimal", handleClick: this.handleNumClick, value: "." }))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("app"));