import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./header/header.js";
import GalleryPage from "./gallery/gallery.js";
import StoryPage from "./story/story.js";
import InspirationPage from "./inspiration/inspiration.js";
import ReservationsPage from "./reservations/reservations.js";
import FooterComponent from "./footer/footer.js";
import ScrollToTop from "./common/scrollToTop.js";

function App() {
    return (
        <Router>
            <div>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Gallery />
                    </Route>
                    <Route path="/story">
                        <Story />
                    </Route>
                    <Route path="/inspiration">
                        <Inspiration />
                    </Route>
                    <Route path="/reservations">
                        <Reservations />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

const Header = HeaderComponent;
const Gallery = GalleryPage;
const Story = StoryPage;
const Inspiration = InspirationPage;
const Reservations = ReservationsPage;
const Footer = () => FooterComponent();
