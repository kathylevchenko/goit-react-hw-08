import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div>
            <p>
                Sorry, page is not found! Please go to <Link to="/">home page</Link>!
            </p>
        </div>
    )
}