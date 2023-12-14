import { useState } from "react"

const Summary = ({ title, description, isVisible, setIsVisible }) => {

    const toggleVisibility = () => {
        setIsVisible((pre) => !pre)
    }

    return (
        <>
            <div className="title">{title}</div>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <div className="description">{description}</div>}
        </>
    )
}

const InstaMart = () => {

    const [sectionVisible, setSectionVisible] = useState("about")

    return (
        <>
        <Summary title="About InstaMart" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eius sit quisquam est quas obcaecati possimus maiores, repudiandae pariatur beatae. Unde laborum dolores provident commodi placeat ipsam repellat sapiente cumque! " isVisible={sectionVisible == "about"}  setIsVisible={() => setSectionVisible("about")}/>
        <Summary title="Team InstaMart" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eius sit quisquam est quas obcaecati possimus maiores, repudiandae pariatur beatae. Unde laborum dolores provident commodi placeat ipsam repellat sapiente cumque!" isVisible={sectionVisible == "team"} setIsVisible={() => setSectionVisible("team")}/>
        <Summary title="Carrer InstaMart" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eius sit quisquam est quas obcaecati possimus maiores, repudiandae pariatur beatae. Unde laborum dolores provident commodi placeat ipsam repellat sapiente cumque!" isVisible={sectionVisible == "carrer"} setIsVisible={() => setSectionVisible("carrer")}/>
        </>
    )
}

export default InstaMart
