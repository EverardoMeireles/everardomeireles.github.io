
import { useState, useEffect } from "react";
import { TranslationTable } from "../TranslationTable";
import { HudMenuStyles } from "../Styles";
import { getKeyByValue } from "../Helper";
import config from '../config.json';

// has jsx HudMenuStyles
// A menu that is supposed to go on top of the canvas, use with PathNavigation.jsx
export function HudMenu(props) {
    const useStore = props.useStore;
    const currentLanguage = useStore((state) => state.currentLanguage);
    const setLanguage = useStore((state) => state.setLanguage);
    const setGraphicalMode = useStore((state) => state.setGraphicalMode);
    const currentGraphicalMode = useStore((state) => state.currentGraphicalMode);
    const finishedBenchmark = useStore((state) => state.finishedBenchmark);

    const [profExpClicked, setProfExpClicked] = useState(false);

    const marginDisplay = {marginBottom: "10px", marginLeft:"40px", "display": "inline-block"}

    // increase or decrease the graphics settings
    function changeGraphicalMode(higherOrLower)
    {
        // replace it by store's value later
        const graphics ={
            0:"potato",
            1:"potatoPremium",
            2:"normal",
            3:"high"
        }

        let newGraphicalModeKey;
        let newGraphicalMode;

        newGraphicalModeKey = parseInt(getKeyByValue(graphics, currentGraphicalMode)) + higherOrLower
        newGraphicalMode = graphics[newGraphicalModeKey]

        if(!(newGraphicalModeKey < 0) && !(newGraphicalModeKey >= Object.keys(graphics).length)){
            setGraphicalMode(newGraphicalMode)
        }
    }

    return(
    <>
        {/* hide the toggle unless the graphics toggle is enabled in the settings
        and in case the graphics check is also enabled, wait for the benchmark to 
        finish before showing the toggle */}
        {(config.show_html_menu_graphics_toggle == true && (config.check_graphics == false || (config.check_graphics == true && finishedBenchmark == true))) &&
            <div style={HudMenuStyles.arrowContainerStyle}>
                <b onClick={()=>{changeGraphicalMode(-1)}} style={HudMenuStyles.arrowStyle}>&#x2190;</b>
                <b onClick={()=>{changeGraphicalMode(1)}} style={HudMenuStyles.arrowStyle}>&#x2192;</b>
            </div>
        }
        {props.responsive.width <= 500 &&
        <>
            <ul style = {HudMenuStyles.ListStyle(0, -7)}>
                <li style={marginDisplay}>
                    <a onClick={() => (setLanguage("English"))}> <img style = {HudMenuStyles.FlagImgStyle(32,24)} src = {process.env.PUBLIC_URL + "CountryFlags/gbr.svg"}></img></a>
                </li>
                <li style={marginDisplay}>
                    <a onClick={() => (setLanguage("French"))}> <img style = {HudMenuStyles.FlagImgStyle(32,24)} src = {process.env.PUBLIC_URL + "CountryFlags/fra.svg"}></img></a>
                </li>
            </ul>
            <a href = "#MainMenu" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(1, 30, 20, 0, 17)} children = {TranslationTable[currentLanguage]["Menu_MainMenu"]} />
            <a href = "#Education" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(1, 30, 20, 1, 17)} children = {TranslationTable[currentLanguage]["Menu_Education"]} />
            <a href = "#Skills" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(6, 30, 20, 0, 17)} children = {TranslationTable[currentLanguage]["Menu_Skills"]} />
            {/* This menu element is supposed to have sub elements */}
            <a href = "#ProfessionalExpProjects0" onClick = {() => (setProfExpClicked(true))} style = {HudMenuStyles.simple_items_top(6, 30, 20, 1, 17)} children = {TranslationTable[currentLanguage]["Menu_ProfessionalExperience"]} />
            
            { (profExpClicked == true) &&
            // the sub elements
            <div>
                <a href = "#ProfessionalExpProjects0" style = {HudMenuStyles.simple_items_bottom(1, 8, 35, 0, 13)} children = {TranslationTable[currentLanguage]["Menu_ProspereITB"]} />
                <a href = "#ProfessionalExpProjects1" style = {HudMenuStyles.simple_items_bottom(1, 8, 35, 1, 13)} children = {TranslationTable[currentLanguage]["Menu_DRIM"]} />
                <a href = "#ProfessionalExpProjects2" style = {HudMenuStyles.simple_items_bottom(1, 8, 35, 2, 13)} children = {TranslationTable[currentLanguage]["Menu_Everial"]} />
                <a href = "#ProfessionalExpProjects3" style = {HudMenuStyles.simple_items_bottom(7, 8, 35, 0, 13)} children = {TranslationTable[currentLanguage]["Menu_BresilEcoBuggy"]} />
                <a href = "#ProfessionalExpProjects4" style = {HudMenuStyles.simple_items_bottom(7, 8, 35, 1, 13)} children = {TranslationTable[currentLanguage]["Menu_EFN1"]} />
                <a href = "#ProfessionalExpProjects5" style = {HudMenuStyles.simple_items_bottom(7, 8, 35, 2, 13)} children = {TranslationTable[currentLanguage]["Menu_EFN2"]} />
            </div>    
            }
        </>
        }

        {(props.responsive.width >= 500 && props.responsive.width <= 1800) &&
        <>
            <ul style = {HudMenuStyles.ListStyle(0, 0)}>
                <li style={marginDisplay}>
                    <a onClick={() => (setLanguage("English"))}> <img style = {HudMenuStyles.FlagImgStyle(32,24)} src = {process.env.PUBLIC_URL + "CountryFlags/gbr.svg"}></img></a>
                </li>
                <li style={marginDisplay}>
                    <a onClick={() => (setLanguage("French"))}> <img style = {HudMenuStyles.FlagImgStyle(32,24)} src = {process.env.PUBLIC_URL + "CountryFlags/fra.svg"}></img></a>
                </li>
            </ul>
            <a href = "#MainMenu" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(5, 10, 20, 0, 20)} children = {TranslationTable[currentLanguage]["Menu_MainMenu"]} />
            <a href = "#Education" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(5, 10, 20, 1, 20)} children = {TranslationTable[currentLanguage]["Menu_Education"]} />
            <a href = "#Skills" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(5, 15, 20, 2, 20)} children = {TranslationTable[currentLanguage]["Menu_Skills"]} />
            {/* This menu element is supposed to have sub elements */}
            <a href = "#ProfessionalExpProjects0" onClick = {() => (setProfExpClicked(true))} style = {HudMenuStyles.simple_items_top(5, 10, 20, 3, 20)} children = {TranslationTable[currentLanguage]["Menu_ProfessionalExperience"]} />
                    
            { (profExpClicked == true) &&
            // the sub elements
            <div>
                <a href = "#ProfessionalExpProjects0" style = {HudMenuStyles.simple_items_bottom(1, 8, 35, 0, 20)} children = {TranslationTable[currentLanguage]["Menu_ProspereITB"]} />
                <a href = "#ProfessionalExpProjects1" style = {HudMenuStyles.simple_items_bottom(1, 8, 35, 1, 20)} children = {TranslationTable[currentLanguage]["Menu_DRIM"]} />
                <a href = "#ProfessionalExpProjects2" style = {HudMenuStyles.simple_items_bottom(1, 8, 35, 2, 20)} children = {TranslationTable[currentLanguage]["Menu_Everial"]} />
                <a href = "#ProfessionalExpProjects3" style = {HudMenuStyles.simple_items_bottom(5, 8, 35, 0, 20)} children = {TranslationTable[currentLanguage]["Menu_BresilEcoBuggy"]} />
                <a href = "#ProfessionalExpProjects4" style = {HudMenuStyles.simple_items_bottom(5, 8, 35, 1, 20)} children = {TranslationTable[currentLanguage]["Menu_EFN1"]} />
                <a href = "#ProfessionalExpProjects5" style = {HudMenuStyles.simple_items_bottom(5, 8, 35, 2, 20)} children = {TranslationTable[currentLanguage]["Menu_EFN2"]} />
            </div>    
            }
        </>
        }

        {props.responsive.width > 1800 &&
        <>
            <ul style = {HudMenuStyles.ListStyle(0, 0)}>
                <li style={marginDisplay}>
                    <a onClick={() => (setLanguage("English"))}> <img style = {HudMenuStyles.FlagImgStyle(32,24)} src = {process.env.PUBLIC_URL + "CountryFlags/gbr.svg"}></img></a>
                </li>
                <li style={marginDisplay}>
                    <a onClick={() => (setLanguage("French"))}> <img style = {HudMenuStyles.FlagImgStyle(32,24)} src = {process.env.PUBLIC_URL + "CountryFlags/fra.svg"}></img></a>
                </li>
            </ul>
            <a href = "#MainMenu" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(5, 10, 20, 0, 30)} children = {TranslationTable[currentLanguage]["Menu_MainMenu"]} />
            <a href = "#Education" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(5, 10, 20, 1, 30)} children = {TranslationTable[currentLanguage]["Menu_Education"]} />
            <a href = "#Skills" onClick={() => setProfExpClicked(false)} style = {HudMenuStyles.simple_items_top(5, 15, 20, 2, 30)} children = {TranslationTable[currentLanguage]["Menu_Skills"]} />
            {/* This menu element is supposed to have sub elements */}
            <a href = "#ProfessionalExpProjects0" onClick = {() => (setProfExpClicked(true))} style = {HudMenuStyles.simple_items_top(5, 10, 20, 3, 30)} children = {TranslationTable[currentLanguage]["Menu_ProfessionalExperience"]} />
                    
            { (profExpClicked == true) &&
            // the sub elements
            <div>
                <a href = "#ProfessionalExpProjects0" style = {HudMenuStyles.simple_items_bottom(5, 8, 15, 0, 30)} children = {TranslationTable[currentLanguage]["Menu_ProspereITB"]} />
                <a href = "#ProfessionalExpProjects1" style = {HudMenuStyles.simple_items_bottom(5, 8, 15, 1, 30)} children = {TranslationTable[currentLanguage]["Menu_DRIM"]} />
                <a href = "#ProfessionalExpProjects2" style = {HudMenuStyles.simple_items_bottom(5, 8, 15, 2, 30)} children = {TranslationTable[currentLanguage]["Menu_Everial"]} />
                <a href = "#ProfessionalExpProjects3" style = {HudMenuStyles.simple_items_bottom(5, 8, 15, 3, 30)} children = {TranslationTable[currentLanguage]["Menu_BresilEcoBuggy"]} />
                <a href = "#ProfessionalExpProjects4" style = {HudMenuStyles.simple_items_bottom(5, 8, 15, 4, 30)} children = {TranslationTable[currentLanguage]["Menu_EFN1"]} />
                <a href = "#ProfessionalExpProjects5" style = {HudMenuStyles.simple_items_bottom(5, 8, 15, 5, 30)} children = {TranslationTable[currentLanguage]["Menu_EFN2"]} />
            </div>    
            }
        </>
        }
    </>
    );
}
