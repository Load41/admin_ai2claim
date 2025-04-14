import clsx from "clsx";
// import styles from "./../../BeforeSelection/BeforeSelection.module.css";
import { manWorkerFive, companyOne, companyTwo, manWorkerSix, manWorkerThree, USFlag } from "../../../../constants/imageData";
export const ImageTakenData = () => {
    const imageTakenData = [
        {
            img: companyTwo,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: companyTwo,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: companyTwo,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: USFlag,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: manWorkerThree,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: companyOne,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: manWorkerFive,
            name: "Toms_Overview_of_Front side"
        },
        {
            img: manWorkerSix,
            name: "Toms_Overview_of_Front side"
        },
    ]
    return(
        <>
            <div className={clsx("imageTakenRow d-grid gap-4")}>
                {imageTakenData.map((item, index) => {
                    return(
                        <div className="d-flex flex-column gap-3 pt-4 pb-5 pt-xl-3 px-3 pb-xl-4 rounded-2" key={index}>
                            <div className="ratio ratio-16x9 mx-auto">
                                <img src={item.img} className="img-fluid object-fit-contain" alt=""/>
                            </div>
                            <h5 className="text-black mb-0 text-center fw-medium word-break-word">{item.name}</h5>
                        </div>
                    )
                })}
            </div>
        </>
    )
}