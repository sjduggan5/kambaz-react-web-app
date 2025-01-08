import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/react.png" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1235/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/css.png" width={200} />
                        <div>
                            <h5> CS1235 CSS </h5>
                            <p className="wd-dashboard-course-title">
                                Frontend software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1236/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/nodejs.png" width={200} />
                        <div>
                            <h5> CS1236 Node JS </h5>
                            <p className="wd-dashboard-course-title">
                                Backend software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1237/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/mongodb.png" width={200} />
                        <div>
                            <h5> CS1237 MongoDB </h5>
                            <p className="wd-dashboard-course-title">
                                Database architect  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1238/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/netlify.png" width={200} />
                        <div>
                            <h5> CS1238 Netlify </h5>
                            <p className="wd-dashboard-course-title">
                                Site reliability engineer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1239/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/redux.png" width={200} />
                        <div>
                            <h5> CS1239 Redux </h5>
                            <p className="wd-dashboard-course-title">
                                State management  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1240/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/nextjs.png" width={200} />
                        <div>
                            <h5> CS1240 Next.js </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack all-in-one developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
