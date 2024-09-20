import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props){
    const {title, description, deploy,repo} = props
    return(
        <div className="bg-slate-200 p-6 rounded-2xl mx-4 flex flex-col items-center justify-between min-h-52">
            <div>
                <p className="font-bold text-lg">{title}</p>
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
            <div className="flex justify-center w-full gap-x-6 ">
            <a href={deploy} target="_blank"><GrDeploy /></a>
            <a href={repo} target="_blank"><FaGithub /></a>
            </div>
        </div>
    )
}