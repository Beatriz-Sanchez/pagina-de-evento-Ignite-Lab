import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Lesson from "../components/Lesson";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event() {

    const { slug } = useParams<{slug: string}>();

    console.log(slug)

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
            <Video lessonSlug={slug != undefined? slug : "abertura-do-evento-ignite-lab"}/>
        <Sidebar />
        </main>
        </div>
    );
  }