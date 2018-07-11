import React from 'react';
import EditableLabel from "react-inline-editing";
 
class App extends React.Component {
    constructor(props){
      super(props);
 
      this._handleFocus = this._handleFocus.bind(this);
      this._handleFocusOut = this._handleFocusOut.bind(this);
    }
 
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }
 
    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }
 
    render() {
        return <div>
            <EditableLabel text='Hello!'/>
        </div>
    }
}
export default App