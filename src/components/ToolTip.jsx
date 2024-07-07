import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';


// A component that displays a message on screen for a time.
// How to use:
// To activate the alert, set the zustand state: tooltipProperties with setTooltipProperties()
// At the minimum, use setTooltipProperties({active:true});
// You can set any of the alert's properties like this for example:
// setTooltipProperties({active:false, type:'Success', text:"the button was pressed successfully!"});
export const ToolTip = (props) => {  
    const useStore = props.useStore;
    const {imagePercentHeight  = 40} = props;
    const {textPercentHeight  = 60} = props;
    const {fontSize = 18} = props;
    const {image = ""} = props;

    const tooltipImage = useStore((state) => state.tooltipImage);
    const tooltipProperties = useStore((state) => state.tooltipProperties);
    const setTooltipProperties = useStore((state) => state.setTooltipProperties);
    const isCircleOnLeft = useStore((state) => state.isCircleOnLeft);
    const isCircleOnTop = useStore((state) => state.isCircleOnTop);
    
    const tooltipCurrentObjectSelected = useStore((state) => state.tooltipCurrentObjectSelected);
    
    const [isVisible, setIsVisible] = useState(false);
    const [isDivDisabled, setIsDivDisabled] = useState(true);
    const [objectRotationAnimation, setObjectRotationAnimation] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (tooltipProperties.active) {
            console.log(image)
            setIsVisible(true); // Start to show the alert with fade-in
            setIsDivDisabled(false)
            timeoutId = setTimeout(() => {
                setIsVisible(false); // Start to hide the alert with fade-out
                setTooltipProperties({active:false});
            }, tooltipProperties.duration * 30000);
        }else{
            setIsVisible(false)
        }

    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };
    }, [tooltipProperties.active, tooltipProperties.duration, setTooltipProperties]);

  // Inline styles for the alert box
    const toolTipBoxStyle = {
        position: 'fixed',
        width: isDivDisabled ? '0vw':'40vw',
        height: isDivDisabled ? '0vh' : '90vh',
        margin: '5vh',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',
        justifyContent: 'center',
        transition: `opacity ${tooltipProperties.transitionDuration}s ease-in-out`,
        zIndex: isVisible ? 1000 : 1,
        opacity: isVisible ? 1 : 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
        color: '#FFFFFF',
        top: 'auto',
        bottom: 'auto',
        right: isCircleOnLeft ? 0 : 'auto',
        left: isCircleOnLeft ? 'auto' : 0,
        display: 'flex',
        flexDirection: 'column',
        height: '90vh', // Adjust as necessary
    };

    const textStyle = {
        padding: '10px',
        color: '#FFFFFF',
        textAlign: 'center', // Centers the text horizontally
        //flex: '6 1 0%', // Takes up 60% of the space
        flex: `${textPercentHeight} 1 0`,
        fontSize: fontSize + 'px', // Apply the fontSize prop
    };

    const imageContainerStyle = {
        width: '100%', // Use the full width of the parent container
        position: 'relative', // Allows absolute positioning of the child image
        flex: `${imagePercentHeight} 1 0`, // Use the `imagePercentHeight` for the flex-grow value
        display: 'flex', // To allow the image to be centered if needed
        justifyContent: 'center', // Centers the image horizontally
        alignItems: 'center', // Centers the image vertically
        marginBottom:'2vh',
        overflow: 'hidden', // Ensures that the rounded corners are visible
        borderRadius: '20px', // Adjust this value to increase or decrease the roundness of the borders
    };

    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', // Use the full width of the parent container
        height: '100%', // Use the full height of the parent container
        maxWidth: '100%', // Ensures the image is not wider than its container
        maxHeight: '100%', // Ensures the image is not taller than its container
        objectFit: 'contain',
    };

    // Only render the alert if it's set to be visible
    //if (!isVisible && !tooltipProperties.active) return null;

    return (
    <>
        <div style={toolTipBoxStyle} onTransitionEnd={() => {
            if (!isVisible) {
                setIsDivDisabled(true);
            }
        }} /*onMouseOver={console.log("sqdqsdqsdqsdqsdqsdqsd")}*/>
            <div style={textStyle}>
                {tooltipProperties.text}
            </div>
            <div style={imageContainerStyle}>
                {/* <img style={imageStyle} src={process.env.PUBLIC_URL + "textures/4x3.png"} alt="Tooltip Image" /> */}
                <img style={imageStyle} src={process.env.PUBLIC_URL + "textures/" + tooltipImage} alt="Tooltip" />
            </div>
        </div>
    </>
    );
};