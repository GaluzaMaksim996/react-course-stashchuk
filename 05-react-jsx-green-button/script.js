
const App = (props) => {
    const { initialBtnText, initialClassList } = props

    const [btnText, setBtnText] = React.useState(initialBtnText)
    const [classList, setClassList] = React.useState(initialClassList)

    const onBtnClick = () => {
        setBtnText('Change text')
        setClassList('green-btn')
    }

    return  (
        <div className="app">
            <button className={classList} onClick={onBtnClick}>
                {btnText}
            </button>
        </div>)
}



const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialBtnText="Click me!" initialClassList="" />);
