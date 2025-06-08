import pagenf from "../assets/images/page-not-found.jpg"
import { useTitle } from "../Hooks/useTitle";
export const PageNotFound = () => {
  useTitle("404-PNF")
  return (
    <section className="pageNotFound">
    <p>404 / Page not found</p>
    <img src={pagenf} alt="page not found" />
    <link to ="/">
      <button className="">back to home</button>
    </link>
    </section>
  )
}
 