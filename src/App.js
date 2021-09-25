import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./header/header.js";
import GalleryPage from "./gallery/gallery.js";
import StoryPage from "./story/story.js";
import InspirationPage from "./inspiration/inspiration.js";
import ContactPage from "./contact/contact.js";
import FooterComponent from "./footer/footer.js";

function App() {
    return (
        <Router>
            <div>
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
                    <Route path="/contact">
                        <Contact />
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
const Inspiration = () => InspirationPage();
const Contact = ContactPage;
const Footer = () => FooterComponent();
