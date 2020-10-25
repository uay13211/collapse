import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components/macro'
import CollapseDemo from './collapseDemo'

function App() {
  return (
    <div className="App">
      <CollapseDemo>
        <CollapseDemo>
          <CollapseDemo />
        </CollapseDemo>
        <CollapseDemo />
      </CollapseDemo>
    </div>
  );
}

export default App;
