import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components/macro'
import ResizeObserver from 'rc-resize-observer';

const OuterContainer = styled.div`
  height: ${props => props.height};
  overflow: hidden;
  transition-duration: ${props => props.transitionDuration}s;
`

const InnerContainer = styled.div`
  height: auto;
  overflow: auto;
`

const Collapse = ({
    isExpanded,
    defaultHeight,
    transitionDuration = '0.3',
    children
}) => {
    const [displayHeight, setDisplayHeight] = useState(defaultHeight || '0px')
    const innerContainerRef = useRef()

    const onResize = useCallback(({ height }) => {
        if (isExpanded) {
            setDisplayHeight(`${height}px`)
        }
    }, [isExpanded])

    const onCollapse = () => {
        setDisplayHeight(defaultHeight)
    }

    useEffect(() => {
        if (isExpanded) {
            if (innerContainerRef.current) {
                onResize({
                    height: innerContainerRef.current.clientHeight
                })
            }
        } else {
            onCollapse()
        }
    }, [isExpanded, innerContainerRef])

    return (
        <OuterContainer height={displayHeight} transitionDuration={transitionDuration}>
            <ResizeObserver onResize={onResize}>
                <InnerContainer ref={innerContainerRef}>
                    {children}
                </InnerContainer>
            </ResizeObserver>
        </OuterContainer>
    )
}

export default Collapse;
