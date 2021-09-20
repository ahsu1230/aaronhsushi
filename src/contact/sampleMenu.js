import "./sampleMenu.sass";

export default function SampleMenu() {
    return (
        <div id="sample-menu">
            <a>Click here to view a sample omakase menu.</a>
            <Popup />
        </div>
    );
}

function Popup(props) {
    return <div className="modal">{/* Todo */}</div>;
}
