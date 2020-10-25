import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components/macro'
import Collapse from './collapse'

const RectA = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
`

const RectB = styled.div`
  height: 150px;
  width: 150px;
  background-color: blue;
`

const RectC = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
`

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  background-color: grey;
  color: black;
  padding: 10px 20px;
  border-radius: 15px;
`


function CollapseDemo({
    children
}) {
    const [expand, setExpand] = useState(true)

    const toggle = useCallback(() => {
        setExpand(!expand)
    }, [expand])

    return (
        <div>
            <Button onClick={toggle}>{expand ? 'Collapse' : 'Expand'}</Button>
            <Collapse isExpanded={expand} defaultHeight={'50px'}>
                <RectA />
                <RectB />
                <RectC />
                {children}
            </Collapse>
        </div>
    );
}

export default CollapseDemo;