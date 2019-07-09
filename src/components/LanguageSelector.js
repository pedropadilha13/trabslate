import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="ui flag us"
          onClick={() => this.context.onLanguageChange("English")}
        />
        <i
          className="ui flag br"
          onClick={() => this.context.onLanguageChange("Portuguese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
